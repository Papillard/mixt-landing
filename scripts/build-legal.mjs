/**
 * build-legal.mjs — Convertit les 3 textes légaux patients (source de vérité :
 * mixt-brain/reference/legal/*.md, vendorés dans src/content/legal/sources/) en
 * HTML propre importé par les pages Astro.
 *
 * Le corps de texte est COPIÉ verbatim depuis la source (jamais ressaisi) : seule
 * la structure (numérotation d'articles, sommaire ancré, tableaux, liens mailto/URL)
 * est reconstruite. Le marqueur « PROJET » et les métadonnées du brain sont retirés.
 *
 * Usage : node scripts/build-legal.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC_DIR = resolve(__dirname, '../src/content/legal/sources');
const OUT_DIR = resolve(__dirname, '../src/content/legal');
const LAST_UPDATE = '09.09.2026';

/* ---------------------------------------------------------------- utilitaires */

const norm = (s) =>
  s
    .replace(/\*\*/g, '')
    .replace(/['’‘`]/g, '') // ignore les variantes d'apostrophe (droite / courbe)
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[.:]+$/, '')
    .toUpperCase()
    // normalise les accents pour matcher config sans se soucier des diacritiques
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

const slug = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 60);

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Formatage inline : gras, liens URL, liens mailto. Le texte est d'abord échappé. */
function inline(raw) {
  let s = escapeHtml(raw);
  // gras markdown
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // URLs http(s) — on isole la ponctuation finale
  s = s.replace(/(https?:\/\/[^\s<)]+)/g, (m) => {
    const tail = m.match(/[.,;)]+$/);
    const url = tail ? m.slice(0, -tail[0].length) : m;
    const rest = tail ? tail[0] : '';
    return `<a href="${url}" target="_blank" rel="noopener">${url}</a>${rest}`;
  });
  // URLs www. (sans protocole)
  s = s.replace(/(^|[\s(])(www\.[^\s<)]+)/g, (m, pre, u) => {
    const tail = u.match(/[.,;)]+$/);
    const url = tail ? u.slice(0, -tail[0].length) : u;
    const rest = tail ? tail[0] : '';
    return `${pre}<a href="https://${url}" target="_blank" rel="noopener">${url}</a>${rest}`;
  });
  // emails -> mailto (en évitant ceux déjà dans une URL)
  s = s.replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g, (m) => {
    const tail = m.match(/[.,;]+$/);
    const mail = tail ? m.slice(0, -tail[0].length) : m;
    const rest = tail ? tail[0] : '';
    return `<a href="mailto:${mail}">${mail}</a>${rest}`;
  });
  return s;
}

const uppercaseRatio = (s) => {
  const letters = s.replace(/[^A-Za-zÀ-ÿ]/g, '');
  if (!letters.length) return 0;
  const upper = letters.replace(/[^A-ZÀ-Þ]/g, '');
  return upper.length / letters.length;
};

/* ------------------------------------------------------- extraction du corps */

function extractBody(md) {
  const lines = md.split('\n');
  // début : première ligne de titre « # ... MIXT ... » (après le marqueur PROJET)
  let start = lines.findIndex((l) => /^#\s+\*?\*?MIXT/i.test(l));
  if (start === -1) start = lines.findIndex((l) => /^#\s+\S/.test(l));
  // fin : le « --- » qui précède « ## Timeline »
  const tl = lines.findIndex((l) => /^##\s+Timeline/.test(l));
  let end = lines.length;
  if (tl !== -1) {
    for (let i = tl - 1; i >= 0; i--) {
      if (/^---\s*$/.test(lines[i])) { end = i; break; }
    }
  }
  return lines.slice(start, end).join('\n');
}

/** Découpe en blocs séparés par des lignes vides. */
function toBlocks(body) {
  return body
    .split(/\n\s*\n/)
    .map((b) => b.replace(/\s+$/, ''))
    .filter((b) => b.trim().length);
}

/* ----------------------------------------------------------- rendu de blocs */

function renderTable(block) {
  const rows = block
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.startsWith('|'));
  const cells = (l) =>
    l.replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
  const isSep = (l) => /^\|[\s:|-]+\|?\s*$/.test(l) && l.includes('-');
  const sepIdx = rows.findIndex(isSep);
  const headRows = sepIdx > 0 ? rows.slice(0, sepIdx) : [];
  const bodyRows = rows.filter((l, i) => !isSep(l) && i > sepIdx);
  let html = '<div class="legal-table-wrap"><table class="legal-table">';
  if (headRows.length) {
    html += '<thead>';
    for (const r of headRows) {
      html += '<tr>' + cells(r).map((c) => `<th>${inline(c)}</th>`).join('') + '</tr>';
    }
    html += '</thead>';
  }
  html += '<tbody>';
  for (const r of bodyRows) {
    html += '<tr>' + cells(r).map((c) => `<td>${inline(c)}</td>`).join('') + '</tr>';
  }
  html += '</tbody></table></div>';
  return html;
}

/** Bloc « 1. ... 2. ... » sur une seule ligne -> liste ordonnée. */
function renderSteps(text) {
  const items = [];
  const re = /(\d+)\.\s+([\s\S]*?)(?=\s*\d+\.\s+|$)/g;
  let m;
  while ((m = re.exec(text))) items.push(m[2].trim());
  return '<ol class="legal-steps">' + items.map((i) => `<li>${inline(i)}</li>`).join('') + '</ol>';
}

/* --------------------------------------------------------------- classifieur */

// Clés normalisées par norm() : SANS apostrophe, majuscules, sans accent.
const PARTS_CGUV = new Set([
  'DISPOSITIONS GENERALES COMMUNES',
  'CONDITIONS GENERALES DUTILISATION',
  'CONDITIONS GENERALES DE VENTE DES SERVICES MIXT',
  'CONDITIONS GENERALES DE VENTE DU SERVICE MEDECIN',
]);

// Titres (normalisés) qui sont des SOUS-articles (h3) rattachés à l'article courant.
const SUBARTICLES_CGUV = new Set([
  'SOLUTION MIXT, SERVICES ET CONTENUS',
  'BASES DE DONNEES',
  'MARQUES, SIGNES DISTINCTS ET LOGOS',
  'LES DONNEES A CARACTERE PERSONNEL RELATIVES AUX UTILISATEURS MIXT',
  'LES DONNEES A CARACTERE PERSONNEL RELATIVES AUX MEDECINS',
  'A PARTIR DE LA SOLUTION MIXT',
  'VERS LA SOLUTION',
  'DROIT DE RETRACTATION',
  'DROIT DINFORMATION PRECONTRACTUELLE - ACCEPTATION DE LUTILISATEUR MIXT',
  'GARANTIES',
  'MEDIATION DE LA CONSOMMATION',
]);

const BOLD_ONLY = /^-\s+\*\*(.+?)\*\*\s*$/;              // « - **TITRE** » seul
const SUBNUM = /^\*\*(\d+(?:\.\d+)*)\s+(.+?)\*\*\s*$/;    // « **4.1 Titre** »
const PIPE_HEADING = /^#?\s*\d*\s*\|\s*(\S.*)$/;          // « # 3 | Titre » ou « | Titre »

/* ------------------------------------------------------------ génération doc */

function build(md, { kind }) {
  const body = extractBody(md);
  const blocks = toBlocks(body);

  let h1 = '';
  let subtitle = '';
  const toc = []; // { level:'part'|'item', label, id }
  const out = []; // fragments HTML dans l'ordre
  let tocPlaceholderAt = -1;

  // état de numérotation
  let partNum = 0;
  let artNum = 0;
  let subNum = 0;
  let sectionNum = 0;
  let sawFirstHeading = false;

  const pushHeadingAnchorForToc = () => {
    if (!sawFirstHeading) {
      tocPlaceholderAt = out.length;
      out.push('__TOC__');
      sawFirstHeading = true;
    }
  };

  for (let bi = 0; bi < blocks.length; bi++) {
    const block = blocks[bi];
    const firstLine = block.split('\n')[0];
    const single = !block.includes('\n');

    // --- titre du document (premier « # ») ---
    if (/^#\s+/.test(firstLine) && !h1) {
      h1 = inline(firstLine.replace(/^#\s+/, ''));
      continue;
    }

    // --- « Septembre 2026 » ou date sous le titre ---
    if (!subtitle && /^\**\s*(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)\s+\d{4}\**$/i.test(firstLine.trim())) {
      subtitle = inline(firstLine.replace(/\*\*/g, '').trim());
      continue;
    }

    // --- TOC source « en un coup d'œil » (politique) : on la remplace par la nôtre ---
    if (/^#\s+.*coup d.?œil/i.test(firstLine) || /^#\s+.*un coup d/i.test(firstLine)) {
      continue; // on saute le titre de la TOC source
    }
    if (single && /^-\s+\*\*\s*\|/.test(firstLine)) {
      continue; // on saute chaque item « - **| Xxx** » de la TOC source
    }

    // --- tableaux (≥ 2 lignes « | » : sinon c'est un titre de section « | Xxx ») ---
    if (
      firstLine.trim().startsWith('|') &&
      block.split('\n').filter((l) => l.trim().startsWith('|')).length >= 2
    ) {
      out.push(renderTable(block));
      continue;
    }

    // --- parties (CGUV : « ## ... ») ---
    if (/^##\s+/.test(firstLine)) {
      const text = firstLine.replace(/^##\s+/, '');
      const n = norm(text);
      if (PARTS_CGUV.has(n)) {
        partNum++;
        artNum = 0;
        subNum = 0;
        const id = `partie-${partNum}`;
        pushHeadingAnchorForToc();
        toc.push({ level: 'part', label: text.replace(/\*\*/g, ''), id });
        out.push(`<h2 class="legal-part" id="${id}"><span class="legal-part-num">Titre ${['I','II','III','IV','V','VI'][partNum-1]}</span>${escapeHtml(text.replace(/\*\*/g,''))}</h2>`);
        continue;
      }
      // sinon : bloc de mise en garde (tout majuscule) ou intro
      const joined = block.replace(/^##\s+/, '').replace(/\n/g, ' ');
      if (uppercaseRatio(joined) > 0.6) {
        out.push(`<div class="legal-alert"><p>${inline(joined)}</p></div>`);
      } else {
        out.push(`<p>${inline(joined)}</p>`);
      }
      continue;
    }

    // --- sections « | » (politique / notice) ---
    if (single && PIPE_HEADING.test(firstLine) && !firstLine.trim().startsWith('-')) {
      const m = firstLine.match(PIPE_HEADING);
      const title = m[1].replace(/\*\*/g, '').trim();
      sectionNum++;
      const id = `section-${sectionNum}`;
      pushHeadingAnchorForToc();
      toc.push({ level: 'item', label: `${sectionNum}. ${title}`, id });
      out.push(`<h2 class="legal-section" id="${id}"><span class="legal-num">${sectionNum}.</span> ${escapeHtml(title)}</h2>`);
      continue;
    }

    // --- articles / sous-articles CGUV « - **TITRE** » seul ---
    // Un vrai titre d'article est court et ne se termine pas par un point : cela
    // évite de confondre une puce entièrement en gras (phrase) avec un titre.
    const boldOnlyMatch = single && BOLD_ONLY.test(firstLine) ? firstLine.match(BOLD_ONLY)[1].trim() : null;
    const isHeadingCandidate =
      boldOnlyMatch && boldOnlyMatch.length <= 90 && !/[.]$/.test(boldOnlyMatch);
    if (isHeadingCandidate) {
      const title = boldOnlyMatch;
      const n = norm(title);
      if (SUBARTICLES_CGUV.has(n)) {
        subNum++;
        const id = `art-${partNum}-${artNum}-${subNum}`;
        out.push(`<h4 class="legal-subart" id="${id}"><span class="legal-num">${artNum}.${subNum}</span> ${escapeHtml(title)}</h4>`);
      } else {
        artNum++;
        subNum = 0;
        const id = `art-${partNum}-${artNum}`;
        pushHeadingAnchorForToc();
        toc.push({ level: 'item', label: `${artNum}. ${title}`, id, part: partNum });
        out.push(`<h3 class="legal-article" id="${id}"><span class="legal-num">Article ${artNum}</span>${escapeHtml(title)}</h3>`);
      }
      continue;
    }

    // --- sous-sections numérotées « **4.1 Titre** » seules ---
    if (single && SUBNUM.test(firstLine)) {
      const m = firstLine.match(SUBNUM);
      out.push(`<h4 class="legal-subart"><span class="legal-num">${m[1]}</span> ${escapeHtml(m[2].trim())}</h4>`);
      continue;
    }

    // --- listes à puces (« - ... ») ---
    if (block.split('\n').every((l) => /^-\s+/.test(l.trim()))) {
      const items = block
        .split('\n')
        .map((l) => l.trim().replace(/^-\s+/, ''))
        .filter(Boolean);
      out.push('<ul class="legal-list">' + items.map((i) => `<li>${inline(i)}</li>`).join('') + '</ul>');
      continue;
    }

    // --- listes ordonnées « 1. ...2. ... » (collées, sans espace : « ).2. ») ---
    if (single && /^1\.\s/.test(firstLine) && /[^0-9]2\.\s/.test(firstLine)) {
      out.push(renderSteps(firstLine));
      continue;
    }

    // --- paragraphe par défaut ---
    const para = block.replace(/\n/g, ' ');
    out.push(`<p>${inline(para)}</p>`);
  }

  // Construire le sommaire ancré
  let tocHtml = '<nav class="legal-toc" aria-label="Sommaire">';
  tocHtml += '<p class="legal-toc-title">Sommaire</p><ol class="legal-toc-list">';
  for (const t of toc) {
    const cls = t.level === 'part' ? ' class="legal-toc-part"' : '';
    tocHtml += `<li${cls}><a href="#${t.id}">${escapeHtml(t.label)}</a></li>`;
  }
  tocHtml += '</ol></nav>';

  // En-tête (h1 + date + sous-titre)
  const header =
    `<h1>${h1}</h1>` +
    `<p class="legal-date">Dernière mise à jour : ${LAST_UPDATE}</p>` +
    (subtitle ? `<p class="legal-subtitle">${subtitle}</p>` : '');

  const bodyHtml = out
    .map((frag) => (frag === '__TOC__' ? tocHtml : frag))
    .join('\n');

  return header + '\n' + bodyHtml + '\n';
}

/* --------------------------------------------------------------------- main */

const DOCS = [
  { src: 'cguv.src.md', out: 'cguv.html', kind: 'cguv' },
  { src: 'politique-de-confidentialite.src.md', out: 'politique-de-confidentialite.html', kind: 'politique' },
  { src: 'notice-information-consentement.src.md', out: 'notice-information-consentement.html', kind: 'notice' },
];

for (const d of DOCS) {
  const md = readFileSync(resolve(SRC_DIR, d.src), 'utf8');
  const html = build(md, { kind: d.kind });
  writeFileSync(resolve(OUT_DIR, d.out), html, 'utf8');
  console.log(`✓ ${d.out} (${html.length} octets)`);
}
