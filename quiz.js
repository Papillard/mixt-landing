(function() {
  // ── CSS ──
  var style = document.createElement('style');
  style.textContent = `
    .quiz-overlay{position:fixed;inset:0;z-index:1000;background:var(--base);display:flex;flex-direction:column;opacity:0;transition:opacity .3s ease;font-family:'Geist Sans','Geist',-apple-system,sans-serif;color:var(--text)}
    .quiz-overlay.visible{opacity:1}
    /* Header */
    .quiz-header{display:flex;align-items:center;justify-content:space-between;height:56px;padding:0 40px;border-bottom:1px solid var(--border);flex-shrink:0;background:var(--base);z-index:10}
    .quiz-logo{font-family:'Fraunces',serif;font-size:28px;font-weight:500;font-variation-settings:'opsz' 144,'WONK' 0,'SOFT' 0;color:var(--deep);text-decoration:none}
    .quiz-progress-wrap{flex:1;max-width:280px;margin:0 24px;display:flex;flex-direction:column;align-items:center;gap:4px}
    .quiz-progress-bar{width:100%;height:3px;background:var(--cream);border-radius:2px;overflow:hidden}
    .quiz-progress-fill{height:100%;background:var(--deep);border-radius:2px;transition:width .3s ease;width:0%}
    .quiz-progress-text{font-size:13px;color:var(--text-3);white-space:nowrap}
    .quiz-close{background:none;border:none;font-size:24px;cursor:pointer;color:var(--text-2);padding:0 4px;line-height:1;transition:color .2s}
    .quiz-close:hover{color:var(--deep)}
    /* Body */
    .quiz-body{flex:1;overflow-y:auto;display:flex;justify-content:center;padding:0 24px 60px}
    .quiz-content{width:100%;max-width:580px;padding-top:24px}
    /* Back */
    .quiz-back{display:inline-flex;align-items:center;gap:4px;background:none;border:none;font-family:inherit;font-size:14px;color:var(--text-3);cursor:pointer;padding:8px 0;margin-bottom:8px;transition:color .2s}
    .quiz-back:hover{color:var(--text)}
    .quiz-back.hidden{display:none}
    /* Screens */
    .quiz-screen{opacity:0;transform:translateY(12px);transition:opacity .3s ease-out,transform .3s ease-out}
    .quiz-screen.active{opacity:1;transform:translateY(0)}
    .quiz-screen.fade-out{opacity:0;transform:translateY(-10px);transition:opacity .2s ease-in,transform .2s ease-in}
    /* Question */
    .quiz-question{font-size:24px;font-weight:600;line-height:1.3;letter-spacing:-.02em;margin-bottom:28px;padding-top:8px}
    .quiz-helper{font-size:14px;color:var(--text-3);margin-top:-20px;margin-bottom:24px}
    /* Pills */
    .quiz-options{display:flex;flex-direction:column}
    .quiz-options>.quiz-pill{margin-top:10px}
    .quiz-options>.quiz-pill:first-child{margin-top:0}
    .quiz-pill{font-family:inherit;font-size:15px;font-weight:500;padding:14px 20px;border-radius:12px;border:1px solid rgba(0,0,0,.08);background:#fff;color:var(--text);cursor:pointer;transition:all .15s ease;text-align:left;line-height:1.4;display:flex;align-items:center;gap:10px}
    .quiz-pill:hover{background:var(--cream)}
    .quiz-pill .pill-check{display:none;font-weight:700;font-size:14px;color:var(--deep);flex-shrink:0}
    /* Single selected */
    .quiz-pill.selected{background:var(--deep);color:#fff;border-color:var(--deep);font-weight:600;animation:pill-pop .15s ease}
    /* Multiple selected */
    .quiz-pill.selected-multi{background:var(--cream);border-color:var(--deep);color:var(--deep);font-weight:600}
    .quiz-pill.selected-multi .pill-check{display:inline}
    @keyframes pill-pop{0%{transform:scale(.97)}100%{transform:scale(1)}}
    /* Freetext */
    .quiz-freetext-wrap{overflow:hidden;max-height:0;transition:max-height .25s ease,opacity .25s ease;opacity:0;margin-left:16px}
    .quiz-freetext-wrap.open{max-height:80px;opacity:1}
    .quiz-freetext{margin-top:4px;margin-bottom:8px;width:100%;padding:14px 16px;font-family:inherit;font-size:15px;border:1px solid #E5DDD5;border-radius:8px;background:#fff;color:var(--text);outline:none;transition:border-color .2s}
    .quiz-freetext:focus{border-color:var(--deep)}
    .quiz-freetext::placeholder{color:var(--text-3)}
    /* Continue */
    .quiz-continue{margin-top:24px;display:flex;align-items:center;justify-content:center;font-family:inherit;font-size:15px;font-weight:600;padding:14px 30px;border-radius:var(--r);background:var(--deep);color:#fff;border:none;cursor:pointer;transition:opacity .3s,transform .3s,background .2s;opacity:0;transform:translateY(8px);pointer-events:none;max-width:300px}
    .quiz-continue.visible{opacity:1;transform:translateY(0);pointer-events:auto}
    .quiz-continue:hover{background:#2B1018}
    /* Analysis screen */
    .quiz-analysis{text-align:center;padding:80px 32px;background:var(--cream);border-radius:16px;margin-top:16px}
    .quiz-analysis-msg{font-size:17px;font-weight:500;color:var(--text);transition:opacity .3s ease;min-height:1.4em}
    .quiz-analysis-spinner{width:28px;height:28px;border:3px solid rgba(0,0,0,.1);border-top-color:var(--deep);border-radius:50%;margin:24px auto 0;animation:quiz-spin .8s linear infinite}
    @keyframes quiz-spin{to{transform:rotate(360deg)}}
    /* Bilan */
    .quiz-bilan-card{background:var(--cream);border-radius:16px;padding:32px;margin-bottom:20px;text-align:center}
    .quiz-bilan-card-emoji{font-size:48px;margin-bottom:12px}
    .quiz-bilan-card-label{font-family:'Fraunces',serif;font-size:28px;font-weight:500;font-variation-settings:'opsz' 144;color:var(--deep);line-height:1.2;margin-bottom:12px}
    .quiz-bilan-card-summary{font-size:16px;line-height:1.6;color:var(--text-2);font-style:italic;margin-bottom:12px}
    .quiz-bilan-card-education{font-size:15px;line-height:1.6;color:var(--text-2)}
    .quiz-bilan-secondary{font-size:14px;line-height:1.6;color:var(--text-3);margin-bottom:16px}
    .quiz-bilan-disclaimer{font-size:14px;line-height:1.5;color:var(--text-3);font-style:italic;margin-bottom:24px}
    /* Contact */
    .quiz-contact-value-prop{font-size:15px;line-height:1.6;color:var(--text-2);margin-bottom:12px}
    .quiz-contact-pricing{font-size:14px;color:var(--text-2);margin-bottom:24px}
    .quiz-contact-pricing strong{font-weight:600}
    .quiz-diag-badge{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;background:var(--cream);border-radius:100px;font-size:14px;font-weight:600;color:var(--deep);margin-bottom:24px;flex-wrap:wrap}
    .quiz-form-group{margin-bottom:16px}
    .quiz-form-label{display:block;font-size:14px;font-weight:600;margin-bottom:6px;color:var(--text)}
    .quiz-form-helper{font-size:13px;color:var(--text-3);margin-bottom:6px}
    .quiz-form-input{width:100%;padding:14px 16px;font-family:inherit;font-size:16px;border:1px solid #E5DDD5;border-radius:8px;background:#fff;color:var(--text);outline:none;transition:border-color .2s}
    .quiz-form-input:focus{border-color:var(--deep)}
    .quiz-form-input::placeholder{color:var(--text-3)}
    .quiz-submit{width:100%;margin-top:8px;padding:14px 30px;font-family:inherit;font-size:15px;font-weight:600;border-radius:var(--r);background:var(--deep);color:#fff;border:none;cursor:pointer;transition:background .2s}
    .quiz-submit:hover{background:#2B1018}
    .quiz-submit:disabled{opacity:.5;cursor:not-allowed}
    .quiz-rgpd{font-size:13px;color:var(--text-3);text-align:center;margin-top:12px;line-height:1.5}
    .quiz-rgpd a{color:var(--accent);text-decoration:none;transition:text-decoration .2s}
    .quiz-rgpd a:hover{text-decoration:underline}
    .quiz-field-error{font-size:13px;color:var(--accent);margin-top:4px;display:none}
    /* Thank you */
    .quiz-thankyou{text-align:center;padding-top:48px}
    .quiz-thankyou-logo{font-family:'Fraunces',serif;font-size:48px;font-weight:500;font-variation-settings:'opsz' 144,'WONK' 0,'SOFT' 0;color:var(--deep);margin-bottom:20px}
    .quiz-thankyou-title{font-size:28px;font-weight:600;line-height:1.25;letter-spacing:-.02em;margin-bottom:12px}
    .quiz-thankyou-desc{font-size:16px;line-height:1.65;color:var(--text-2);margin-bottom:28px}
    .quiz-btn{display:inline-flex;align-items:center;justify-content:center;font-family:inherit;font-size:15px;font-weight:600;padding:14px 30px;border-radius:var(--r);background:var(--deep);color:#fff;border:none;cursor:pointer;transition:background .2s}
    .quiz-btn:hover{background:#2B1018}
    /* Intro */
    .quiz-intro{padding-top:32px}
    .quiz-intro-title{font-size:28px;font-weight:600;line-height:1.25;letter-spacing:-.02em;margin-bottom:12px}
    .quiz-intro-desc{font-size:16px;line-height:1.65;color:var(--text-2);margin-bottom:28px}
    .quiz-intro-trust{font-size:13px;color:var(--text-3);margin-top:12px}
    /* Responsive */
    @media(max-width:768px){
      .quiz-header{padding:0 16px}
      .quiz-progress-wrap{max-width:140px;margin:0 12px}
      .quiz-body{padding:0 20px 100px}
      .quiz-content{padding-top:20px}
      .quiz-question{font-size:20px;margin-bottom:20px}
      .quiz-helper{margin-top:-12px;margin-bottom:20px}
      .quiz-pill{font-size:14px;padding:12px 16px}
      .quiz-continue{max-width:none;position:fixed;bottom:0;left:0;right:0;margin:0;border-radius:0;padding:16px 20px;box-shadow:0 -4px 12px rgba(0,0,0,.08);z-index:10}
      .quiz-bilan-card{padding:24px}
      .quiz-bilan-card-label{font-size:24px}
      .quiz-analysis{padding:60px 20px}
      .quiz-intro-title,.quiz-thankyou-title{font-size:24px}
    }
  `;
  document.head.appendChild(style);

  // ── Data ──
  var QUIZ_DATA = {"intro":{"title":"Parlons de votre peau.","description":"Quelques questions pour que notre équipe médicale comprenne votre situation et prépare votre accompagnement personnalisé.","trust_line":"Vos réponses sont confidentielles et soumises au secret médical.","cta":"Commencer →"},"questions":{"q1":{"text":"Qu'est-ce qui vous préoccupe le plus aujourd'hui ?","type":"single","options":[{"label":"Rougeurs","next":"q1b"},{"label":"Boutons / imperfections","next":"q1b"},{"label":"Sécheresse, tiraillements ou inconfort","next":"q1b"},{"label":"Taches brunes","next":"q1b"},{"label":"Autre","next":"q1b","freeText":true}]},"q1b":{"text":"Avez-vous déjà consulté pour ce problème ?","type":"single","options":[{"label":"Oui, j'ai un diagnostic","next":"q1c"},{"label":"Oui, mais pas de diagnostic clair","next":"diag_router"},{"label":"Non, jamais","next":"diag_router"}]},"q1c":{"text":"Quel diagnostic vous a-t-on donné ?","type":"multiple","options":[{"label":"Acné"},{"label":"Rosacée"},{"label":"Eczéma"},{"label":"Mélasma"},{"label":"Hyperpigmentation post-inflammatoire"},{"label":"Autre","freeText":true}],"next":"diag_router"},"diag_router":{"type":"router","routes":{"Rougeurs":"q2Aa","Boutons / imperfections":"q2Ba","Sécheresse, tiraillements ou inconfort":"q2Ca","Taches brunes":"q2Da","Autre":"q4"}},"q2Aa":{"text":"Vos rougeurs sont-elles surtout situées au centre du visage (joues, nez, menton, front) ?","type":"single","options":[{"label":"Oui","next":"q2Ab"},{"label":"Non","next":"q4","diagnosis":"none"}]},"q2Ab":{"text":"Vos rougeurs s'aggravent-elles avec la chaleur, l'alcool, le stress, les émotions ou les plats épicés ?","type":"single","options":[{"label":"Oui","next":"q2Ad","diagnosis":"rosacee"},{"label":"Non","next":"q2Ac"}]},"q2Ac":{"text":"Vos rougeurs s'accompagnent-elles de sensations de brûlure ou de picotements ?","type":"single","options":[{"label":"Oui","next":"q2Ad","diagnosis":"rosacee"},{"label":"Non","next":"q4","diagnosis":"none"}]},"q2Ad":{"text":"Avez-vous également des petits boutons ou pustules sur les zones rouges ?","type":"single","options":[{"label":"Oui","next":"q4","diagnosis":"rosacee_papulopustuleuse"},{"label":"Non","next":"q4","diagnosis":"rosacee"}]},"q2Ba":{"text":"Vos boutons s'accompagnent-ils de points noirs ou de points blancs ?","type":"single","options":[{"label":"Oui","next":"q2Bd","diagnosis":"acne"},{"label":"Non","next":"q2Bb"}]},"q2Bb":{"text":"Les boutons apparaissent-ils sur un fond de rougeur persistante ?","type":"single","options":[{"label":"Oui","next":"q2Ab"},{"label":"Non","next":"q2Bc"}]},"q2Bc":{"text":"Les démangeaisons ou la sécheresse sont-elles dominantes ?","type":"single","options":[{"label":"Oui","next":"q4","diagnosis":"eczema"},{"label":"Non","next":"q4","diagnosis":"acne_ou_rosacee"}]},"q2Bd":{"text":"Où se situent principalement vos boutons ?","type":"multiple","options":[{"label":"Mâchoire / menton"},{"label":"Joues"},{"label":"Front"},{"label":"Dos / épaules"},{"label":"Tout le visage"}],"next":"q4"},"q2Ca":{"text":"Votre peau vous démange-t-elle ?","type":"single","options":[{"label":"Oui, souvent","next":"q2Cc","diagnosis":"eczema"},{"label":"Parfois","next":"q2Cb"},{"label":"Non","next":"q2Cb"}]},"q2Cb":{"text":"Ressentez-vous des sensations de brûlure ou de picotements, notamment avec la chaleur, le stress ou les plats épicés ?","type":"single","options":[{"label":"Oui","next":"q4","diagnosis":"rosacee"},{"label":"Non","next":"q2Cc"}]},"q2Cc":{"text":"Votre peau pèle-t-elle ou présente-t-elle des plaques sèches mal délimitées ?","type":"single","options":[{"label":"Oui","next":"q2Cd","diagnosis":"eczema"},{"label":"Non","next":"q4","diagnosis":"inconfort_cutane"}]},"q2Cd":{"text":"Où se situent principalement les zones sèches ou irritées ?","type":"multiple","options":[{"label":"Visage"},{"label":"Plis des coudes / genoux"},{"label":"Mains"},{"label":"Cuir chevelu"},{"label":"Autre"}],"next":"q4"},"q2Da":{"text":"Quand vos taches sont-elles apparues ?","type":"multiple","helper":"Plusieurs réponses possibles.","options":[{"label":"Après une exposition au soleil","diagnosis":"melasma"},{"label":"Après des boutons ou irritations","diagnosis":"hyperpigmentation_post_inflammatoire"},{"label":"Après une grossesse ou changements hormonaux","diagnosis":"melasma"},{"label":"Je ne sais pas","diagnosis":"hyperpigmentation"}],"next":"q2Db"},"q2Db":{"text":"Vos taches sont-elles réparties de façon symétrique sur le visage (mêmes zones des deux côtés) ?","type":"single","options":[{"label":"Oui","next":"q4","diagnosis":"melasma"},{"label":"Non","next":"q4"},{"label":"Je ne sais pas","next":"q4"}]},"q4":{"text":"Au quotidien, quel impact cela a-t-il sur vous ?","type":"single","options":[{"label":"Ça va, je gère"},{"label":"C'est gênant par moments"},{"label":"J'y pense souvent"},{"label":"Ça affecte mon quotidien"},{"label":"C'est vraiment difficile à vivre"}],"next":"q5"},"q5":{"text":"Depuis combien de temps cela vous préoccupe-t-il ?","type":"single","options":[{"label":"Moins de 6 mois"},{"label":"6 mois – 2 ans"},{"label":"2 – 5 ans"},{"label":"Plus de 5 ans"}],"next":"q6"},"q6":{"text":"Qu'avez-vous déjà essayé pour votre peau ?","type":"multiple","options":[{"label":"Consultation dermato"},{"label":"Consultation médecin (généraliste)"},{"label":"Pharmacie"},{"label":"Soins esthétiques"},{"label":"Produits cosmétiques"},{"label":"Rien de spécifique"}],"next":"q3"},"q3":{"text":"Avez-vous d'autres préoccupations ?","helper":"Ces informations aident votre médecin à avoir une vision globale.","type":"multiple","options":[{"label":"Rougeurs"},{"label":"Boutons / imperfections"},{"label":"Sécheresse, tiraillements ou inconfort"},{"label":"Taches brunes"},{"label":"Rides, texture et signes de l'âge"},{"label":"Corps, cheveux ou cuir chevelu","freeText":true,"freeTextPlaceholder":"Vergetures, chute de cheveux, cuir chevelu irrité…"},{"label":"Autre","freeText":true,"freeTextPlaceholder":"Précisez…"},{"label":"Aucune","exclusive":true}],"next":"q7"},"q7":{"text":"Approximativement, combien dépensez-vous par mois pour votre peau ?","type":"single","options":[{"label":"Moins de 20€"},{"label":"20–50€"},{"label":"50–100€"},{"label":"100–200€"},{"label":"Plus de 200€"}],"next":"q8"},"q8":{"text":"Quel âge avez-vous ?","type":"single","options":[{"label":"Moins de 25 ans"},{"label":"25–34 ans"},{"label":"35–44 ans"},{"label":"45–54 ans"},{"label":"55–64 ans"},{"label":"65–74 ans"},{"label":"75 ans et plus"}],"next":"q9"},"q9":{"text":"Ces situations vous concernent-elles ?","type":"multiple","options":[{"label":"Contraception hormonale"},{"label":"Grossesse / post-partum"},{"label":"Ménopause / périménopause"},{"label":"Traitement médical régulier"},{"label":"Aucune","exclusive":true}],"next":"analysis"}},"analysis_screen":{"photo":"images/laetitia-after.png","photo_label":"Laetitia, fondatrice de Mixt","stat_number":"15 millions","stat_text":"de Français vivent avec un problème de peau chronique. Vous n'êtes pas seule — et des solutions adaptées existent.","loader_text":"Préparation de votre bilan…","duration_ms":4000,"next":"bilan"},"bilan":{"title":"Votre bilan de peau","absorption_rules":{"rosacee_papulopustuleuse":["rosacee"],"eczema":["inconfort_cutane"],"melasma":["hyperpigmentation"],"acne":["acne_ou_rosacee"]},"conditions":{"rosacee":{"emoji":"🌹","label":"Rosacée","summary":"Vous décrivez des rougeurs persistantes au centre du visage, sensibles à la chaleur et au stress.","education":"C'est ce que les dermatologues appellent la rosacée — une condition inflammatoire chronique qui touche environ 4 millions de personnes en France. Elle ne disparaît pas, mais avec un protocole adapté, elle se contrôle très bien."},"rosacee_papulopustuleuse":{"emoji":"🔴","label":"Rosacée papulo-pustuleuse","summary":"Vous décrivez des rougeurs persistantes accompagnées de petits boutons inflammatoires.","education":"C'est une forme de rosacée qui associe rougeurs et poussées de boutons. Un traitement ciblé permet de contrôler efficacement les poussées et de retrouver du confort."},"acne":{"emoji":"🫧","label":"Acné","summary":"Vous décrivez des imperfections avec points noirs ou points blancs.","education":"L'acné adulte est plus fréquente qu'on ne le pense — et souvent sous-traitée. Hormonale, inflammatoire ou tardive, elle répond bien à un protocole médical adapté."},"eczema":{"emoji":"🏜️","label":"Eczéma","summary":"Vous décrivez une peau sèche, qui démange et qui pèle par endroits.","education":"L'eczéma est un trouble de la barrière cutanée qui touche des millions de personnes. Les crises reviennent par cycles, mais un suivi continu permet de les espacer et de les atténuer."},"melasma":{"emoji":"🌗","label":"Mélasma","summary":"Vous décrivez des taches pigmentaires apparues dans un contexte hormonal ou d'exposition solaire.","education":"Le mélasma est lié à l'interaction entre hormones et soleil. C'est frustrant parce que les taches résistent aux cosmétiques, mais un protocole médical adapté peut significativement atténuer leur apparence."},"hyperpigmentation_post_inflammatoire":{"emoji":"✨","label":"Hyperpigmentation post-inflammatoire","summary":"Vous décrivez des marques foncées apparues après des boutons ou irritations.","education":"La bonne nouvelle : en traitant la cause de l'inflammation, on prévient aussi les marques futures. Un protocole adapté accélère l'atténuation des taches existantes."},"hyperpigmentation":{"emoji":"✨","label":"Hyperpigmentation","summary":"Vous décrivez l'apparition de taches plus foncées sur la peau.","education":"L'hyperpigmentation a plusieurs causes possibles. Un médecin peut identifier la vôtre et proposer un protocole qui s'attaque à l'origine, pas seulement aux symptômes."},"inconfort_cutane":{"emoji":"🤲","label":"Inconfort cutané","summary":"Vous décrivez une peau inconfortable au quotidien, sans signes inflammatoires marqués.","education":"Ce type de ressenti peut refléter une barrière cutanée fragilisée. Parfois la solution est plus simple qu'on ne le pense — un médecin peut identifier la cause et adapter le protocole."},"acne_ou_rosacee":{"emoji":"🔎","label":"Acné ou rosacée","summary":"Vous décrivez des boutons et de l'inflammation, sans tableau clairement orienté.","education":"L'acné et la rosacée se ressemblent parfois mais se traitent très différemment. C'est justement là qu'un avis médical fait toute la différence."},"none":{"emoji":"🔎","label":"À explorer avec votre médecin","summary":"Vos réponses ne permettent pas d'orienter vers un tableau spécifique à ce stade.","education":"Ce n'est pas un problème — votre médecin Mixt analysera votre situation en détail lors de votre échange, avec photos et historique complet."}},"secondary_concerns_intro":"Vous avez aussi mentionné :","secondary_concerns_outro":"Votre médecin Mixt pourra en discuter lors de votre consultation.","disclaimer":"Ce bilan reflète vos réponses. Votre médecin Mixt analysera votre situation en détail — photos, échange, historique — pour construire votre protocole personnalisé.","cta":"Continuer →"},"contact":{"title":"Rejoignez la liste d'attente","value_prop":"","pricing":"75\u20ac 49\u20ac/mois \u00b7 Offre de lancement, places limit\u00e9es \u00b7 Sans engagement","description":"","fields":[{"name":"prenom","label":"Votre prénom","type":"text","required":true},{"name":"nom","label":"Votre nom","type":"text","required":true},{"name":"email","label":"Votre email","type":"email","required":true},{"name":"telephone","label":"Votre téléphone","type":"tel","required":false,"helper":"Pour être contacté(e) en priorité"}],"submit":"Envoyer mes réponses →","rgpd_html":"En envoyant ce formulaire, vous acceptez nos <a href=\"conditions-generales.html\" target=\"_blank\">conditions générales</a> et notre <a href=\"politique-de-confidentialite.html\" target=\"_blank\">politique de confidentialité</a>. Vos données sont soumises au secret médical."},"thankyou":{"title":"Vous êtes sur la liste ! 🎉","description":"Nous vous contacterons très vite pour accéder à votre parcours personnalisé.","cta_label":"Revenir au site"}};

  var SCRIPT_URL='https://script.google.com/macros/s/AKfycbyIscXZn-cynB-UwABxoq4Kk_Ccc9QOcV23Mp_Oj-4mUKhuF7KFDSsOvNHaLYh3T9l6pg/exec';
  var TOTAL_ESTIMATE = 12;

  // ── State ──
  var data = QUIZ_DATA;
  var overlay = null;
  var answers = {};
  var diagnoses = [];
  var history = [];
  var currentScreen = null;
  var quizStarted = false;
  var originTree = null;

  // ── Helpers ──
  function esc(s){var d=document.createElement('div');d.appendChild(document.createTextNode(s));return d.innerHTML}

  function applyAbsorption(diags){
    var rules=data.bilan.absorption_rules||{};
    var toRemove={};
    for(var keeper in rules){
      if(!rules.hasOwnProperty(keeper))continue;
      if(diags.indexOf(keeper)>-1){
        var absorbs=rules[keeper];
        for(var i=0;i<absorbs.length;i++)toRemove[absorbs[i]]=true;
      }
    }
    var result=[];
    for(var i=0;i<diags.length;i++){
      if(!toRemove[diags[i]])result.push(diags[i]);
    }
    return result;
  }

  function getUniqueDiagnoses(){
    var seen={};var result=[];
    for(var i=0;i<diagnoses.length;i++){
      if(diagnoses[i]!=='none'&&!seen[diagnoses[i]]){seen[diagnoses[i]]=true;result.push(diagnoses[i])}
    }
    return applyAbsorption(result);
  }

  function getPrimaryDiag(){
    var unique=getUniqueDiagnoses();
    if(unique.length===0)return 'none';
    return unique[0];
  }

  function getSecondaryConcerns(){
    var q3ans=answers.q3;
    if(!q3ans||!q3ans.labels)return [];
    var result=[];
    for(var i=0;i<q3ans.labels.length;i++){
      if(q3ans.labels[i]!=='Aucune')result.push(q3ans.labels[i]);
    }
    return result;
  }

  function questionCount(){var c=0;for(var i=0;i<history.length;i++){var id=history[i];if(id!=='intro'&&id!=='analysis'&&id!=='bilan'&&id!=='contact'&&id!=='thankyou'){var q=data.questions[id];if(q&&q.type!=='router')c++}}return c}

  function updateProgress(){
    if(!overlay)return;
    var fill=overlay.querySelector('.quiz-progress-fill');
    var txt=overlay.querySelector('.quiz-progress-text');
    var n=questionCount();
    var pct=Math.min(100,Math.round(n/TOTAL_ESTIMATE*100));
    if(fill)fill.style.width=pct+'%';
    if(txt){
      if(currentScreen==='intro'||currentScreen==='thankyou')txt.textContent='';
      else if(currentScreen==='analysis')txt.textContent='Analyse\u2026';
      else if(currentScreen==='bilan')txt.textContent='Votre bilan';
      else if(currentScreen==='contact')txt.textContent='Derni\u00e8re \u00e9tape';
      else txt.textContent='Question '+n+' sur ~'+TOTAL_ESTIMATE;
    }
  }

  // ── Overlay ──
  function buildOverlay(){
    overlay=document.createElement('div');
    overlay.className='quiz-overlay';
    overlay.innerHTML=
      '<div class="quiz-header">'+
        '<div class="quiz-logo">mixt</div>'+
        '<div class="quiz-progress-wrap"><div class="quiz-progress-bar"><div class="quiz-progress-fill"></div></div><div class="quiz-progress-text"></div></div>'+
        '<button class="quiz-close" aria-label="Fermer">\u00D7</button>'+
      '</div>'+
      '<div class="quiz-body"><div class="quiz-content"></div></div>';
    overlay.querySelector('.quiz-close').addEventListener('click',function(){
      if(quizStarted&&currentScreen!=='thankyou'){if(!confirm('Voulez-vous vraiment quitter le questionnaire ?'))return}
      closeQuiz();
    });
    document.body.appendChild(overlay);
  }

  function cnt(){return overlay.querySelector('.quiz-content')}

  // ── Browser back button ──
  var popstateHandler=null;
  function bindBrowserBack(){
    if(popstateHandler)return;
    popstateHandler=function(){
      if(!overlay)return;
      if(history.length<2){closeQuiz();return}
      goBack();
    };
    window.addEventListener('popstate',popstateHandler);
  }
  function unbindBrowserBack(){
    if(popstateHandler){window.removeEventListener('popstate',popstateHandler);popstateHandler=null}
  }

  // ── Page unload (tab/browser close, mobile app switch) ──
  var abandonBound=false;
  var abandonSent=false;
  function sendAbandon(){
    if(abandonSent||!overlay||!answers.q1||currentScreen==='thankyou'||!SCRIPT_URL)return;
    abandonSent=true;
    var payload={status:'abandon',lastScreen:currentScreen,answers:answers,diagnoses:getUniqueDiagnoses(),secondaryConcerns:getSecondaryConcerns(),contact:{prenom:'',nom:'',email:'',telephone:''}};
    var blob=new Blob([JSON.stringify(payload)],{type:'text/plain'});
    navigator.sendBeacon(SCRIPT_URL,blob);
  }
  function onPageHide(){sendAbandon()}
  function onVisChange(){if(document.visibilityState==='hidden')sendAbandon()}
  function bindPageUnload(){
    if(abandonBound)return;
    abandonBound=true;abandonSent=false;
    window.addEventListener('beforeunload',onPageHide);
    window.addEventListener('pagehide',onPageHide);
    document.addEventListener('visibilitychange',onVisChange);
  }
  function unbindPageUnload(){
    if(!abandonBound)return;
    abandonBound=false;
    window.removeEventListener('beforeunload',onPageHide);
    window.removeEventListener('pagehide',onPageHide);
    document.removeEventListener('visibilitychange',onVisChange);
  }

  // ── Screen transitions ──
  function showScreen(html,screenId){
    var content=cnt();
    currentScreen=screenId;
    var noBack=['intro','thankyou','q1','analysis'];
    var showBack=noBack.indexOf(screenId)===-1;
    var backHtml='<button class="quiz-back'+(showBack?'':' hidden')+'" onclick=""><span>\u2190</span> Retour</button>';

    window.history.pushState({quiz:true,screen:screenId},'');

    var cur=content.querySelector('.quiz-screen');
    if(cur){
      cur.classList.add('fade-out');
      cur.classList.remove('active');
    }
    var delay=cur?220:0;
    setTimeout(function(){
      content.innerHTML=backHtml+'<div class="quiz-screen">'+html+'</div>';
      var screen=content.querySelector('.quiz-screen');
      screen.offsetHeight;
      requestAnimationFrame(function(){screen.classList.add('active')});
      overlay.querySelector('.quiz-body').scrollTop=0;
      var backBtn=content.querySelector('.quiz-back');
      if(backBtn&&showBack)backBtn.addEventListener('click',function(){window.history.back()});
      updateProgress();
    },delay);
  }

  // ── Back ──
  function goBack(){
    if(history.length<2)return;
    history.pop();
    var targetId=history.pop();
    delete answers[targetId];
    if(targetId==='bilan')showBilan();
    else if(targetId==='contact')showContact();
    else if(targetId==='intro')showIntro();
    else showQuestion(targetId);
  }

  // ── Intro ──
  function showIntro(){
    history.push('intro');
    var html='<div class="quiz-intro">'+
      '<div class="quiz-intro-title">'+esc(data.intro.title)+'</div>'+
      '<div class="quiz-intro-desc">'+esc(data.intro.description)+'</div>'+
      '<button class="quiz-btn">'+esc(data.intro.cta)+'</button>'+
      '<div class="quiz-intro-trust">'+esc(data.intro.trust_line)+'</div></div>';
    showScreen(html,'intro');
    setTimeout(function(){
      var btn=cnt().querySelector('.quiz-btn');
      if(btn)btn.addEventListener('click',function(){quizStarted=true;showQuestion('q1')});
    },250);
  }

  // ── Question ──
  function showQuestion(qId){
    var q=data.questions[qId];
    if(!q)return;
    history.push(qId);

    // Build filtered options for Q3 (remove Q1 choice)
    var options=q.options;
    var filteredMap=null;
    if(qId==='q3'&&answers.q1&&answers.q1.labels[0]){
      var q1label=answers.q1.labels[0];
      filteredMap=[];options=[];
      for(var i=0;i<q.options.length;i++){
        if(q.options[i].label!==q1label){filteredMap.push(i);options.push(q.options[i])}
      }
    }

    var isMulti=q.type==='multiple';
    var html='<div class="quiz-question">'+esc(q.text)+'</div>';
    if(q.helper)html+='<div class="quiz-helper">'+esc(q.helper)+'</div>';
    html+='<div class="quiz-options" data-type="'+(isMulti?'multi':'single')+'">';
    for(var i=0;i<options.length;i++){
      var opt=options[i];
      html+='<button class="quiz-pill" data-idx="'+i+'"'+(opt.exclusive?' data-exclusive="true"':'')+'><span class="pill-check">\u2713</span><span>'+esc(opt.label)+'</span></button>';
      if(opt.freeText){
        var placeholder=opt.freeTextPlaceholder||'Pr\u00e9cisez\u2026';
        html+='<div class="quiz-freetext-wrap" data-ft-idx="'+i+'"><input class="quiz-freetext" data-ft-idx="'+i+'" type="text" placeholder="'+esc(placeholder)+'"></div>';
      }
    }
    html+='</div>';
    if(isMulti)html+='<button class="quiz-continue">Continuer \u2192</button>';
    showScreen(html,qId);
    setTimeout(function(){bindQuestion(qId,q,options,filteredMap)},250);
  }

  function bindQuestion(qId,q,options,filteredMap){
    var container=cnt();
    var pills=container.querySelectorAll('.quiz-pill');
    var continueBtn=container.querySelector('.quiz-continue');
    var selected=[];

    if(q.type==='single'){
      for(var i=0;i<pills.length;i++){(function(pill,idx){
        pill.addEventListener('click',function(){
          for(var j=0;j<pills.length;j++)pills[j].classList.remove('selected');
          pill.classList.add('selected');
          handleFreeText(container,options,idx);
          if(options[idx].freeText){showSingleContinue(container,qId,q,options,idx,filteredMap)}
          else{setTimeout(function(){recordAnswer(qId,q,options,[idx],filteredMap);navigate(qId,q,options,[idx])},400)}
        });
      })(pills[i],i)}
    } else {
      for(var i=0;i<pills.length;i++){(function(pill,idx){
        pill.addEventListener('click',function(){
          var opt=options[idx];
          if(opt.exclusive){
            for(var j=0;j<pills.length;j++){
              if(j!==idx){pills[j].classList.remove('selected-multi');var p=selected.indexOf(j);if(p>-1)selected.splice(p,1)}
            }
            var pos=selected.indexOf(idx);
            if(pos>-1){selected.splice(pos,1);pill.classList.remove('selected-multi')}
            else{selected.push(idx);pill.classList.add('selected-multi')}
          } else {
            for(var j=0;j<options.length;j++){
              if(options[j].exclusive){
                pills[j].classList.remove('selected-multi');
                var ep=selected.indexOf(j);if(ep>-1)selected.splice(ep,1);
              }
            }
            var pos=selected.indexOf(idx);
            if(pos>-1){selected.splice(pos,1);pill.classList.remove('selected-multi')}
            else{selected.push(idx);pill.classList.add('selected-multi')}
          }
          handleFreeText(container,options,selected);
          if(continueBtn){continueBtn.classList.toggle('visible',selected.length>0)}
        });
      })(pills[i],i)}
      if(continueBtn)continueBtn.addEventListener('click',function(){
        if(!selected.length)return;
        recordAnswer(qId,q,options,selected,filteredMap);navigate(qId,q,options,selected);
      });
    }
  }

  function showSingleContinue(container,qId,q,options,idx,filteredMap){
    var existing=container.querySelector('.quiz-continue');
    if(!existing){var btn=document.createElement('button');btn.className='quiz-continue';btn.innerHTML='Continuer \u2192';container.querySelector('.quiz-screen').appendChild(btn);existing=btn}
    requestAnimationFrame(function(){existing.classList.add('visible')});
    existing.onclick=function(){recordAnswer(qId,q,options,[idx],filteredMap);navigate(qId,q,options,[idx])};
  }

  function handleFreeText(container,options,sel){
    var wraps=container.querySelectorAll('.quiz-freetext-wrap');
    var arr=Array.isArray(sel)?sel:[sel];
    for(var i=0;i<wraps.length;i++){
      var fi=parseInt(wraps[i].getAttribute('data-ft-idx'));
      var input=wraps[i].querySelector('.quiz-freetext');
      if(arr.indexOf(fi)>-1&&options[fi].freeText){wraps[i].classList.add('open');if(input)input.focus()}
      else{wraps[i].classList.remove('open');if(input)input.value=''}
    }
  }

  function recordAnswer(qId,q,options,indices,filteredMap){
    var container=cnt();var labels=[];var freeTexts={};
    for(var i=0;i<indices.length;i++){
      var idx=indices[i];var opt=options[idx];labels.push(opt.label);
      if(opt.diagnosis&&diagnoses.indexOf(opt.diagnosis)===-1)diagnoses.push(opt.diagnosis);
      if(opt.freeText){var fi=container.querySelector('.quiz-freetext[data-ft-idx="'+idx+'"]');if(fi&&fi.value.trim())freeTexts[opt.label]=fi.value.trim()}
    }
    answers[qId]={labels:labels,freeTexts:freeTexts};
  }

  // ── Navigate ──
  function navigate(qId,q,options,indices){
    var nextId;
    if(q.type==='single'){var opt=options[indices[0]];nextId=opt.next||q.next}
    else{nextId=q.next}

    // Handle router
    if(nextId&&data.questions[nextId]&&data.questions[nextId].type==='router'){
      var router=data.questions[nextId];
      var q1a=answers.q1&&answers.q1.labels[0];
      var route=(q1a&&router.routes[q1a])?router.routes[q1a]:router.routes[Object.keys(router.routes)[0]];
      var treeMap={'Rougeurs':'A','Boutons / imperfections':'B','Sécheresse, tiraillements ou inconfort':'C','Taches brunes':'D'};
      originTree=q1a&&treeMap[q1a]?treeMap[q1a]:null;
      showQuestion(route);
      return;
    }

    if(nextId==='analysis')showAnalysis();
    else if(nextId==='bilan')showBilan();
    else if(nextId==='contact')showContact();
    else if(nextId==='q2Ad'&&originTree==='B'){
      if(diagnoses.indexOf('rosacee_papulopustuleuse')===-1)diagnoses.push('rosacee_papulopustuleuse');
      showQuestion('q4');
    }
    else if(nextId&&data.questions[nextId])showQuestion(nextId);
  }

  // ── Analysis screen ──
  function showAnalysis(){
    history.push('analysis');
    var messages=[
      'Analyse de vos r\u00e9ponses\u2026',
      'Identification des actifs adapt\u00e9s \u00e0 votre peau\u2026',
      'Pr\u00e9paration de votre bilan personnalis\u00e9\u2026'
    ];

    var html='<div class="quiz-analysis">'+
      '<div class="quiz-analysis-msg">'+esc(messages[0])+'</div>'+
      '<div class="quiz-analysis-spinner"></div>'+
    '</div>';

    showScreen(html,'analysis');

    setTimeout(function(){
      var msg=cnt().querySelector('.quiz-analysis-msg');
      if(!msg)return;
      setTimeout(function(){msg.style.opacity='0';setTimeout(function(){msg.textContent=messages[1];msg.style.opacity='1'},300)},1500);
      setTimeout(function(){msg.style.opacity='0';setTimeout(function(){msg.textContent=messages[2];msg.style.opacity='1'},300)},3000);
      setTimeout(function(){showBilan()},5000);
    },250);
  }

  // ── Bilan ──
  function showBilan(){
    history.push('bilan');
    var unique=getUniqueDiagnoses();
    var primary=unique.length>0?unique[0]:'none';
    var cond=data.bilan.conditions[primary]||data.bilan.conditions['none'];

    var html='<div class="quiz-question">'+esc(data.bilan.title)+'</div>';

    // Single condition card
    html+='<div class="quiz-bilan-card">';
    html+='<div class="quiz-bilan-card-emoji">'+cond.emoji+'</div>';
    html+='<div class="quiz-bilan-card-label">'+esc(cond.label)+'</div>';
    html+='<div class="quiz-bilan-card-summary">'+esc(cond.summary)+'</div>';
    html+='<div class="quiz-bilan-card-education">'+esc(cond.education)+'</div>';
    html+='</div>';

    // Secondary concerns
    var sc=getSecondaryConcerns();
    if(sc.length>0){
      html+='<div class="quiz-bilan-secondary">'+esc(data.bilan.secondary_concerns_intro)+' '+esc(sc.join(', '))+'. '+esc(data.bilan.secondary_concerns_outro)+'</div>';
    }

    // Disclaimer
    html+='<div class="quiz-bilan-disclaimer">'+esc(data.bilan.disclaimer)+'</div>';

    // CTA → contact directly
    html+='<div style="text-align:center"><button class="quiz-btn">'+esc(data.bilan.cta)+'</button></div>';

    showScreen(html,'bilan');
    setTimeout(function(){
      var btn=cnt().querySelector('.quiz-btn');
      if(btn)btn.addEventListener('click',function(){showContact()});
    },250);
  }

  // ── Contact ──
  function showContact(){
    history.push('contact');
    var primary=getPrimaryDiag();
    var cond=data.bilan.conditions[primary]||data.bilan.conditions['none'];

    var priceHtml='<s style="opacity:.5">75\u20ac</s> <strong>49\u20ac/mois</strong> \u00b7 Offre de lancement, places limit\u00e9es \u00b7 Sans engagement';

    var html='<div class="quiz-diag-badge">'+cond.emoji+' '+esc(cond.label)+'</div>'+
      '<div class="quiz-question">'+esc(data.contact.title)+'</div>'+
      '<div class="quiz-contact-value-prop">'+esc(data.contact.value_prop)+'</div>'+
      '<div class="quiz-contact-pricing">'+priceHtml+'</div>'+
      '<div style="font-size:15px;line-height:1.6;color:var(--text-2);margin-bottom:24px">'+esc(data.contact.description)+'</div>';
    var fields=data.contact.fields;
    for(var i=0;i<fields.length;i++){
      var f=fields[i];
      html+='<div class="quiz-form-group"><label class="quiz-form-label">'+esc(f.label)+(f.required?' *':'')+'</label>';
      if(f.helper)html+='<div class="quiz-form-helper">'+esc(f.helper)+'</div>';
      html+='<input class="quiz-form-input" type="'+f.type+'" name="'+f.name+'"'+(f.required?' required':'')+' placeholder="'+esc(f.label)+'">';
      if(f.type==='email')html+='<div class="quiz-field-error" data-error="email">V\u00e9rifiez votre adresse email</div>';
      html+='</div>';
    }
    html+='<button class="quiz-submit">'+esc(data.contact.submit)+'</button>'+
      '<div class="quiz-rgpd">'+data.contact.rgpd_html+'</div>';
    showScreen(html,'contact');
    setTimeout(function(){
      var btn=cnt().querySelector('.quiz-submit');
      if(btn)btn.addEventListener('click',function(){submitForm(btn)});
    },250);
  }

  function submitForm(btn){
    var container=cnt();var inputs=container.querySelectorAll('.quiz-form-input');
    var emailRe=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var contact={};var valid=true;
    for(var i=0;i<inputs.length;i++){
      var inp=inputs[i];var errEl=inp.parentNode.querySelector('.quiz-field-error');
      contact[inp.name]=inp.value.trim();
      if(inp.required&&!inp.value.trim()){inp.style.borderColor='var(--accent)';valid=false;if(errEl)errEl.style.display='none'}
      else if(inp.type==='email'&&inp.value.trim()&&!emailRe.test(inp.value.trim())){inp.style.borderColor='var(--accent)';valid=false;if(errEl)errEl.style.display='block'}
      else{inp.style.borderColor='';if(errEl)errEl.style.display='none'}
    }
    if(!valid)return;
    btn.disabled=true;btn.textContent='Envoi\u2026';

    var payload={status:'complete',lastScreen:'thankyou',answers:answers,diagnoses:getUniqueDiagnoses(),secondaryConcerns:getSecondaryConcerns(),contact:{prenom:contact.prenom||'',nom:contact.nom||'',email:contact.email||'',telephone:contact.telephone||''}};
    console.log('Quiz submission:',payload);
    if(SCRIPT_URL){
      fetch(SCRIPT_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}).then(function(){showThankYou()}).catch(function(){showThankYou()});
    } else {setTimeout(showThankYou,500)}
  }

  // ── Thank you ──
  function showThankYou(){
    history.push('thankyou');
    quizStarted=false;
    var fill=overlay.querySelector('.quiz-progress-fill');if(fill)fill.style.width='100%';
    var html='<div class="quiz-thankyou">'+
      '<div class="quiz-thankyou-logo">mixt</div>'+
      '<div class="quiz-thankyou-title">'+esc(data.thankyou.title)+'</div>'+
      '<div class="quiz-thankyou-desc">'+esc(data.thankyou.description)+'</div>'+
      '<button class="quiz-btn">'+esc(data.thankyou.cta_label)+'</button></div>';
    showScreen(html,'thankyou');
    setTimeout(function(){
      var btn=cnt().querySelector('.quiz-btn');
      if(btn)btn.addEventListener('click',closeQuiz);
    },250);
  }

  // ── Close / Open ──
  function closeQuiz(){
    if(!overlay)return;
    sendAbandon();
    unbindPageUnload();
    unbindBrowserBack();
    overlay.classList.remove('visible');
    setTimeout(function(){if(overlay&&overlay.parentNode)overlay.parentNode.removeChild(overlay);overlay=null},300);
    document.body.style.overflow='';
  }

  window.openQuiz=function(){
    answers={};diagnoses=[];history=[];currentScreen=null;quizStarted=false;originTree=null;
    if(overlay&&overlay.parentNode){overlay.parentNode.removeChild(overlay);overlay=null}
    buildOverlay();
    document.body.style.overflow='hidden';
    bindBrowserBack();
    bindPageUnload();
    requestAnimationFrame(function(){requestAnimationFrame(function(){overlay.classList.add('visible')})});
    showIntro();
  };
})();
