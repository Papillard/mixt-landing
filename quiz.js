(function() {
  // ── CSS ──
  var style = document.createElement('style');
  style.textContent = `
    .quiz-overlay{position:fixed;inset:0;z-index:1000;background:#fff;display:flex;flex-direction:column;opacity:0;transition:opacity .3s ease;font-family:'Geist Sans','Geist',-apple-system,sans-serif;color:var(--text)}
    .quiz-overlay.visible{opacity:1}
    /* Header */
    .quiz-header{display:flex;align-items:center;justify-content:space-between;padding:14px 24px;border-bottom:1px solid rgba(0,0,0,.06);flex-shrink:0;background:#fff;z-index:10}
    .quiz-logo{font-family:'Fraunces',serif;font-size:28px;font-weight:500;font-variation-settings:'opsz' 144,'WONK' 0,'SOFT' 0;color:var(--deep);text-decoration:none}
    .quiz-progress-wrap{flex:1;max-width:280px;margin:0 24px;display:flex;flex-direction:column;align-items:center;gap:4px}
    .quiz-progress-bar{width:100%;height:3px;background:var(--cream);border-radius:2px;overflow:hidden}
    .quiz-progress-fill{height:100%;background:var(--deep);border-radius:2px;transition:width .3s ease;width:0%}
    .quiz-progress-text{font-size:13px;color:var(--text-3);white-space:nowrap}
    .quiz-close{background:none;border:none;font-size:24px;cursor:pointer;color:var(--text-2);padding:0 4px;line-height:1;transition:color .2s}
    .quiz-close:hover{color:var(--deep)}
    /* Body */
    .quiz-body{flex:1;overflow-y:auto;display:flex;justify-content:center;padding:0 24px 60px}
    .quiz-content{width:100%;max-width:580px;padding-top:12px}
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
    /* Pills */
    .quiz-options{display:flex;flex-direction:column;gap:10px}
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
    /* Pre-diag */
    .quiz-prediag-card{background:var(--cream);border-radius:16px;padding:32px;text-align:center}
    .quiz-prediag-emoji{font-size:48px;margin-bottom:16px}
    .quiz-prediag-label{font-size:14px;font-weight:500;color:var(--text-2);margin-bottom:8px}
    .quiz-prediag-title{font-family:'Fraunces',serif;font-size:32px;font-weight:500;font-variation-settings:'opsz' 144;color:var(--deep);line-height:1.2;margin-bottom:12px}
    .quiz-prediag-desc{font-size:18px;line-height:1.6;color:var(--text-2);margin-bottom:20px}
    .quiz-prediag-disclaimer{font-size:14px;line-height:1.5;color:var(--text-3);font-style:italic;opacity:.6}
    /* Contact */
    .quiz-diag-badge{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;background:var(--cream);border-radius:100px;font-size:14px;font-weight:600;color:var(--deep);margin-bottom:24px}
    .quiz-form-group{margin-bottom:16px}
    .quiz-form-label{display:block;font-size:14px;font-weight:600;margin-bottom:6px;color:var(--text)}
    .quiz-form-input{width:100%;padding:14px 16px;font-family:inherit;font-size:16px;border:1px solid #E5DDD5;border-radius:8px;background:#fff;color:var(--text);outline:none;transition:border-color .2s}
    .quiz-form-input:focus{border-color:var(--deep)}
    .quiz-form-input::placeholder{color:var(--text-3)}
    .quiz-submit{width:100%;margin-top:8px;padding:14px 30px;font-family:inherit;font-size:15px;font-weight:600;border-radius:var(--r);background:var(--deep);color:#fff;border:none;cursor:pointer;transition:background .2s}
    .quiz-submit:hover{background:#2B1018}
    .quiz-submit:disabled{opacity:.5;cursor:not-allowed}
    .quiz-rgpd{font-size:13px;color:var(--text-3);text-align:center;margin-top:12px}
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
    /* Responsive */
    @media(max-width:768px){
      .quiz-header{padding:12px 16px}
      .quiz-logo{font-size:24px}
      .quiz-progress-wrap{max-width:140px;margin:0 12px}
      .quiz-body{padding:0 20px 100px}
      .quiz-content{padding-top:8px}
      .quiz-question{font-size:20px;margin-bottom:20px}
      .quiz-pill{font-size:14px;padding:12px 16px}
      .quiz-continue{max-width:none;position:fixed;bottom:0;left:0;right:0;margin:0;border-radius:0;padding:16px 20px;box-shadow:0 -4px 12px rgba(0,0,0,.08);z-index:10}
      .quiz-prediag-card{padding:24px}
      .quiz-prediag-title{font-size:26px}
      .quiz-prediag-desc{font-size:16px}
      .quiz-intro-title,.quiz-thankyou-title{font-size:24px}
    }
  `;
  document.head.appendChild(style);

  // ── Data (regenerate: node -e "process.stdout.write(JSON.stringify(require('./quiz.json')))" ) ──
  var QUIZ_DATA = {"intro":{"title":"Parlons de votre peau.","description":"5 minutes. Vos réponses nous permettent d'orienter un pré-diagnostic et de préparer votre prise en charge."},"questions":{"q1":{"text":"Qu'est-ce qui vous préoccupe le plus aujourd'hui ?","type":"single","options":[{"label":"Rougeurs","next":"q1b"},{"label":"Boutons / imperfections","next":"q1b"},{"label":"Peau sèche / irritée","next":"q1b"},{"label":"Taches brunes","next":"q1b"},{"label":"Autre","next":"q1b","freeText":true}]},"q1b":{"text":"Avez-vous déjà consulté pour ce problème ?","type":"single","options":[{"label":"Oui, j'ai un diagnostic","next":"q1c"},{"label":"Oui, mais pas de diagnostic clair","next":"diag_router"},{"label":"Non, jamais","next":"diag_router"}]},"q1c":{"text":"Quel diagnostic vous a-t-on donné ?","type":"multiple","options":[{"label":"Acné"},{"label":"Rosacée"},{"label":"Eczéma"},{"label":"Mélasma"},{"label":"Hyperpigmentation"},{"label":"Autre","freeText":true}],"next":"diag_router"},"diag_router":{"_comment":"Route vers le bon arbre selon Q1. Le JS lit la réponse de q1 pour router.","type":"router","routes":{"Rougeurs":"q2Aa","Boutons / imperfections":"q2Ba","Peau sèche / irritée":"q2Ca","Taches brunes":"q2Da","Autre":"q4"}},"q2Aa":{"text":"Vos rougeurs sont-elles surtout situées au centre du visage (joues, nez, menton, front) ?","type":"single","options":[{"label":"Oui","next":"q2Ab"},{"label":"Non","next":"q2Ca"}]},"q2Ab":{"text":"Vos rougeurs s'aggravent-elles avec la chaleur, l'alcool, le stress, les émotions ou les plats épicés ?","type":"single","options":[{"label":"Oui","next":"q2Ad","diagnosis":"rosacee"},{"label":"Non","next":"q2Ac"}]},"q2Ac":{"text":"Vos rougeurs s'accompagnent-elles de sensations de brûlure ou de picotements ?","type":"single","options":[{"label":"Oui","next":"q2Ad","diagnosis":"rosacee"},{"label":"Non","next":"q2Ca"}]},"q2Ad":{"text":"Avez-vous également des petits boutons ou pustules sur les zones rouges ?","type":"single","options":[{"label":"Oui","next":"q4","diagnosis":"rosacee_papulopustuleuse"},{"label":"Non","next":"q4","diagnosis":"rosacee"}]},"q2Ba":{"text":"Vos boutons s'accompagnent-ils de points noirs ou de points blancs ?","type":"single","options":[{"label":"Oui","next":"q2Bd","diagnosis":"acne"},{"label":"Non","next":"q2Bb"}]},"q2Bb":{"text":"Les boutons apparaissent-ils sur un fond de rougeur persistante ?","type":"single","options":[{"label":"Oui","next":"q2Ab"},{"label":"Non","next":"q2Bc"}]},"q2Bc":{"text":"Les démangeaisons ou la sécheresse sont-elles dominantes ?","type":"single","options":[{"label":"Oui","next":"q4","diagnosis":"eczema"},{"label":"Non","next":"q4","diagnosis":"acne_ou_rosacee"}]},"q2Bd":{"text":"Où se situent principalement vos boutons ?","type":"multiple","options":[{"label":"Mâchoire / menton"},{"label":"Joues"},{"label":"Front"},{"label":"Dos / épaules"},{"label":"Tout le visage"}],"next":"q4","_note":"Mâchoire/menton = signal acné hormonale, utile pour le médecin"},"q2Ca":{"text":"Votre peau vous démange-t-elle ?","type":"single","options":[{"label":"Oui, souvent","next":"q2Cc","diagnosis":"eczema"},{"label":"Parfois","next":"q2Cb"},{"label":"Non","next":"q2Cb"}]},"q2Cb":{"text":"Ressentez-vous des sensations de brûlure ou de picotements, notamment avec la chaleur, le stress ou les plats épicés ?","type":"single","options":[{"label":"Oui","next":"q4","diagnosis":"rosacee"},{"label":"Non","next":"q2Cc"}]},"q2Cc":{"text":"Votre peau pèle-t-elle ou présente-t-elle des plaques sèches mal délimitées ?","type":"single","options":[{"label":"Oui","next":"q2Cd","diagnosis":"eczema"},{"label":"Non","next":"q4","diagnosis":"none"}]},"q2Cd":{"text":"Où se situent principalement les zones sèches ou irritées ?","type":"multiple","options":[{"label":"Visage"},{"label":"Plis des coudes / genoux"},{"label":"Mains"},{"label":"Cuir chevelu"},{"label":"Autre"}],"next":"q4","_note":"Plis = eczéma atopique, cuir chevelu = dermatite séborrhéique, signal utile pour le médecin"},"q2Da":{"text":"Quand vos taches sont-elles apparues ?","type":"single","options":[{"label":"Après une exposition au soleil","next":"q2Db","diagnosis":"melasma"},{"label":"Après des boutons ou irritations","next":"q2Db","diagnosis":"hyperpigmentation_post_inflammatoire"},{"label":"Après une grossesse ou changements hormonaux","next":"q2Db","diagnosis":"melasma"},{"label":"Je ne sais pas","next":"q2Db","diagnosis":"hyperpigmentation"}]},"q2Db":{"text":"Vos taches sont-elles réparties de façon symétrique sur le visage (mêmes zones des deux côtés) ?","type":"single","options":[{"label":"Oui","next":"q4","diagnosis":"melasma"},{"label":"Non","next":"q4"},{"label":"Je ne sais pas","next":"q4"}],"_note":"Symétrie = signal fort mélasma, aide à différencier de l'hyperpigmentation post-inflammatoire"},"q4":{"text":"Au quotidien, quel impact cela a-t-il sur vous ?","type":"single","options":[{"label":"Pas vraiment gênant"},{"label":"Gênant parfois"},{"label":"Impact sur ma confiance"},{"label":"Stressant"},{"label":"Difficile à vivre au quotidien"}],"next":"q5"},"q5":{"text":"Depuis combien de temps cela vous préoccupe-t-il ?","type":"single","options":[{"label":"Moins de 6 mois"},{"label":"6 mois – 2 ans"},{"label":"2 – 5 ans"},{"label":"Plus de 5 ans"}],"next":"q6"},"q6":{"text":"Qu'avez-vous déjà essayé pour votre peau ?","type":"multiple","options":[{"label":"Dermatologue"},{"label":"Médecin généraliste"},{"label":"Pharmacie"},{"label":"Soins esthétiques"},{"label":"Produits cosmétiques"},{"label":"Rien de spécifique"}],"next":"q7"},"q7":{"text":"Approximativement, combien dépensez-vous par mois pour votre peau ?","type":"single","options":[{"label":"Moins de 20€"},{"label":"20–50€"},{"label":"50–100€"},{"label":"100–200€"},{"label":"Plus de 200€"}],"next":"q8"},"q8":{"text":"Quel âge avez-vous ?","type":"single","options":[{"label":"Moins de 25 ans"},{"label":"25–34 ans"},{"label":"35–44 ans"},{"label":"45–54 ans"},{"label":"55 ans et plus"}],"next":"q9"},"q9":{"text":"Ces situations vous concernent-elles ?","type":"multiple","options":[{"label":"Contraception hormonale"},{"label":"Grossesse / post-partum"},{"label":"Ménopause / périménopause"},{"label":"Traitement médical régulier"},{"label":"Aucune"}],"next":"prediag"}},"diagnoses":{"rosacee":{"label":"Rosacée","description":"Maladie inflammatoire chronique du visage provoquant rougeurs et sensibilité. Reconnue et accompagnée par des approches adaptées.","severity_note":"érythémateuse"},"rosacee_papulopustuleuse":{"label":"Rosacée papulo-pustuleuse","description":"Forme de rosacée associant rougeurs persistantes et petits boutons inflammatoires. Un traitement adapté permet de contrôler les poussées.","severity_note":"papulo-pustuleuse"},"acne":{"label":"Acné","description":"Affection cutanée inflammatoire liée aux pores. Fréquente à tout âge et pour laquelle il existe des solutions efficaces."},"eczema":{"label":"Eczéma","description":"Trouble inflammatoire de la peau causant sécheresse et démangeaisons, qui peut être soulagé durablement avec un suivi approprié."},"melasma":{"label":"Mélasma","description":"Taches pigmentaires liées aux hormones et au soleil, souvent symétriques. Leur évolution peut être accompagnée et améliorée avec un protocole adapté."},"hyperpigmentation_post_inflammatoire":{"label":"Hyperpigmentation post-inflammatoire","description":"Marques foncées apparues après une irritation, un bouton ou une lésion cutanée. Des solutions existent pour atténuer leur apparence."},"hyperpigmentation":{"label":"Hyperpigmentation","description":"Apparition de taches plus foncées sur la peau, pouvant être améliorée avec un accompagnement adapté."},"acne_ou_rosacee":{"label":"Acné ou rosacée","description":"Rougeurs et inflammation du visage dont l'origine sera clarifiée lors de la téléconsultation. Ces deux conditions se ressemblent parfois mais se traitent différemment."},"none":{"label":"Pré-diagnostic à confirmer","description":"Vos réponses ne permettent pas d'orienter un pré-diagnostic à ce stade. Ce n'est pas un problème — votre médecin analysera votre situation en détail lors de la téléconsultation."}},"disclaimer":"Ceci n'est pas un diagnostic médical. Il sera confirmé lors de l'analyse de vos photos et de la téléconsultation avec votre médecin.","contact":{"title":"Recevez votre pré-diagnostic complet","description":"Notre équipe médicale analysera vos réponses et vous contactera pour la suite de votre parcours.","fields":[{"name":"prenom","label":"Votre prénom","type":"text","required":true},{"name":"nom","label":"Votre nom","type":"text","required":true},{"name":"email","label":"Votre email","type":"email","required":true},{"name":"telephone","label":"Votre téléphone (optionnel)","type":"tel","required":false}]},"thankyou":{"title":"Merci ! Nous revenons vers vous très vite.","description":"Vous recevrez un email de notre équipe médicale dans les 48h pour la suite de votre parcours."}};

  var DIAG_EMOJI = {rosacee:'\uD83C\uDF21\uFE0F',rosacee_papulopustuleuse:'\uD83C\uDF21\uFE0F',acne:'\uD83D\uDCA7',eczema:'\uD83E\uDDF4',melasma:'\u2600\uFE0F',hyperpigmentation:'\u2600\uFE0F',hyperpigmentation_post_inflammatoire:'\u2600\uFE0F',acne_ou_rosacee:'\uD83D\uDD0D',none:'\uD83E\uDE7A'};
  var TOTAL_ESTIMATE = 12;

  // ── State ──
  var data = QUIZ_DATA;
  var overlay = null;
  var answers = {};
  var diagnoses = [];
  var history = [];
  var currentScreen = null;
  var quizStarted = false;

  // ── Helpers ──
  function esc(s){var d=document.createElement('div');d.appendChild(document.createTextNode(s));return d.innerHTML}
  function getDiagKey(){return diagnoses.length>0?diagnoses[diagnoses.length-1]:'none'}
  function getDiag(){var k=getDiagKey();return data.diagnoses[k]||data.diagnoses['none']}
  function getEmoji(k){return DIAG_EMOJI[k]||'\uD83E\uDE7A'}
  function questionCount(){var c=0;for(var i=0;i<history.length;i++){var id=history[i];if(id!=='intro'&&id!=='prediag'&&id!=='contact'&&id!=='thankyou'){var q=data.questions[id];if(q&&q.type!=='router')c++}}return c}

  function updateProgress(){
    if(!overlay)return;
    var fill=overlay.querySelector('.quiz-progress-fill');
    var txt=overlay.querySelector('.quiz-progress-text');
    var n=questionCount();
    var pct=Math.min(100,Math.round(n/TOTAL_ESTIMATE*100));
    if(fill)fill.style.width=pct+'%';
    if(txt){
      if(currentScreen==='intro'||currentScreen==='thankyou')txt.textContent='';
      else if(currentScreen==='prediag')txt.textContent='Pré-diagnostic';
      else if(currentScreen==='contact')txt.textContent='Dernière étape';
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

  // ── Screen transitions ──
  function showScreen(html,screenId,opts){
    var content=cnt();
    currentScreen=screenId;
    var showBack=screenId!=='intro'&&screenId!=='thankyou'&&screenId!=='q1';
    var backHtml='<button class="quiz-back'+(showBack?'':' hidden')+'" onclick=""><span>\u2190</span> Retour</button>';

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
      if(backBtn&&showBack)backBtn.addEventListener('click',goBack);
      updateProgress();
    },delay);
  }

  // ── Back ──
  function goBack(){
    if(history.length<2)return;
    history.pop();
    var targetId=history.pop();
    delete answers[targetId];
    if(targetId==='prediag')showPreDiag();
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
      '<button class="quiz-btn">Commencer \u2192</button></div>';
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

    var isMulti=q.type==='multiple';
    var html='<div class="quiz-question">'+esc(q.text)+'</div><div class="quiz-options" data-type="'+(isMulti?'multi':'single')+'">';
    for(var i=0;i<q.options.length;i++){
      var opt=q.options[i];
      html+='<button class="quiz-pill" data-idx="'+i+'"><span class="pill-check">\u2713</span><span>'+esc(opt.label)+'</span></button>';
      if(opt.freeText)html+='<div class="quiz-freetext-wrap" data-ft-idx="'+i+'"><input class="quiz-freetext" data-ft-idx="'+i+'" type="text" placeholder="Précisez\u2026"></div>';
    }
    html+='</div>';
    if(isMulti)html+='<button class="quiz-continue">Continuer \u2192</button>';
    showScreen(html,qId);
    setTimeout(function(){bindQuestion(qId,q)},250);
  }

  function bindQuestion(qId,q){
    var container=cnt();
    var pills=container.querySelectorAll('.quiz-pill');
    var continueBtn=container.querySelector('.quiz-continue');
    var selected=[];

    if(q.type==='single'){
      for(var i=0;i<pills.length;i++){(function(pill,idx){
        pill.addEventListener('click',function(){
          for(var j=0;j<pills.length;j++)pills[j].classList.remove('selected');
          pill.classList.add('selected');
          handleFreeText(container,q,idx);
          if(q.options[idx].freeText){showSingleContinue(container,qId,q,idx)}
          else{setTimeout(function(){recordAnswer(qId,q,[idx]);navigate(qId,q,[idx])},400)}
        });
      })(pills[i],i)}
    } else {
      for(var i=0;i<pills.length;i++){(function(pill,idx){
        pill.addEventListener('click',function(){
          var pos=selected.indexOf(idx);
          if(pos>-1){selected.splice(pos,1);pill.classList.remove('selected-multi')}
          else{selected.push(idx);pill.classList.add('selected-multi')}
          handleFreeText(container,q,selected);
          if(continueBtn){continueBtn.classList.toggle('visible',selected.length>0)}
        });
      })(pills[i],i)}
      if(continueBtn)continueBtn.addEventListener('click',function(){
        if(!selected.length)return;
        recordAnswer(qId,q,selected);navigate(qId,q,selected);
      });
    }
  }

  function showSingleContinue(container,qId,q,idx){
    var existing=container.querySelector('.quiz-continue');
    if(!existing){var btn=document.createElement('button');btn.className='quiz-continue';btn.innerHTML='Continuer \u2192';container.querySelector('.quiz-screen').appendChild(btn);existing=btn}
    requestAnimationFrame(function(){existing.classList.add('visible')});
    existing.onclick=function(){recordAnswer(qId,q,[idx]);navigate(qId,q,[idx])};
  }

  function handleFreeText(container,q,sel){
    var wraps=container.querySelectorAll('.quiz-freetext-wrap');
    var arr=Array.isArray(sel)?sel:[sel];
    for(var i=0;i<wraps.length;i++){
      var fi=parseInt(wraps[i].getAttribute('data-ft-idx'));
      var input=wraps[i].querySelector('.quiz-freetext');
      if(arr.indexOf(fi)>-1&&q.options[fi].freeText){wraps[i].classList.add('open');if(input)input.focus()}
      else{wraps[i].classList.remove('open');if(input)input.value=''}
    }
  }

  function recordAnswer(qId,q,indices){
    var container=cnt();var labels=[];var freeTexts={};
    for(var i=0;i<indices.length;i++){
      var idx=indices[i];var opt=q.options[idx];labels.push(opt.label);
      if(opt.diagnosis&&diagnoses.indexOf(opt.diagnosis)===-1)diagnoses.push(opt.diagnosis);
      if(opt.freeText){var fi=container.querySelector('.quiz-freetext[data-ft-idx="'+idx+'"]');if(fi&&fi.value.trim())freeTexts[opt.label]=fi.value.trim()}
    }
    answers[qId]={labels:labels,freeTexts:freeTexts};
  }

  // ── Navigate ──
  function navigate(qId,q,indices){
    var nextId;
    if(q.type==='single'){var opt=q.options[indices[0]];nextId=opt.next||q.next}
    else{nextId=q.next}
    var nextQ=data.questions[nextId];
    if(nextQ&&nextQ.type==='router'){
      var q1a=answers.q1&&answers.q1.labels[0];
      nextId=(q1a&&nextQ.routes[q1a])?nextQ.routes[q1a]:nextQ.routes[Object.keys(nextQ.routes)[0]];
    }
    if(nextId==='prediag')showPreDiag();
    else if(nextId==='contact')showContact();
    else if(nextId&&data.questions[nextId])showQuestion(nextId);
  }

  // ── Pre-diagnosis ──
  function showPreDiag(){
    history.push('prediag');
    var dk=getDiagKey();var d=getDiag();var emoji=getEmoji(dk);
    var hasResult=dk!=='none';
    var title=hasResult?'Vos réponses évoquent :':'Votre peau mérite un regard médical';
    var html='<div class="quiz-prediag-card">'+
      '<div class="quiz-prediag-emoji">'+emoji+'</div>'+
      '<div class="quiz-prediag-label">'+esc(title)+'</div>'+
      '<div class="quiz-prediag-title">'+esc(d.label)+'</div>'+
      '<div class="quiz-prediag-desc">'+esc(d.description)+'</div>'+
      '<div class="quiz-prediag-disclaimer">'+esc(data.disclaimer)+'</div>'+
    '</div>'+
    '<div style="text-align:center;margin-top:24px"><button class="quiz-btn">Continuer \u2192</button></div>';
    showScreen(html,'prediag');
    setTimeout(function(){
      var btn=cnt().querySelector('.quiz-btn');
      if(btn)btn.addEventListener('click',function(){showContact()});
    },250);
  }

  // ── Contact ──
  function showContact(){
    history.push('contact');
    var dk=getDiagKey();var d=getDiag();var emoji=getEmoji(dk);
    var fields=data.contact.fields;
    var html='<div class="quiz-diag-badge">'+emoji+' Pré-diagnostic : '+esc(d.label)+'</div>'+
      '<div class="quiz-question">'+esc(data.contact.title)+'</div>'+
      '<div style="font-size:15px;line-height:1.6;color:var(--text-2);margin-bottom:24px">'+esc(data.contact.description)+'</div>';
    for(var i=0;i<fields.length;i++){
      var f=fields[i];
      html+='<div class="quiz-form-group"><label class="quiz-form-label">'+esc(f.label)+(f.required?' *':'')+'</label>'+
        '<input class="quiz-form-input" type="'+f.type+'" name="'+f.name+'"'+(f.required?' required':'')+' placeholder="'+esc(f.label)+'">'+
        (f.type==='email'?'<div class="quiz-field-error" data-error="email">Vérifiez votre adresse email</div>':'')+'</div>';
    }
    html+='<button class="quiz-submit">Envoyer mes réponses \u2192</button>'+
      '<div class="quiz-rgpd">Vos données sont confidentielles et soumises au secret médical.</div>';
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
    var payload={answers:answers,diagnoses:diagnoses,primaryDiagnosis:getDiagKey(),contact:contact};
    console.log('Quiz submission:',payload);
    var SCRIPT_URL='https://script.google.com/macros/s/AKfycbyIscXZn-cynB-UwABxoq4Kk_Ccc9QOcV23Mp_Oj-4mUKhuF7KFDSsOvNHaLYh3T9l6pg/exec';
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
      '<button class="quiz-btn">Revenir au site</button></div>';
    showScreen(html,'thankyou');
    setTimeout(function(){
      var btn=cnt().querySelector('.quiz-btn');
      if(btn)btn.addEventListener('click',closeQuiz);
    },250);
  }

  // ── Close / Open ──
  function closeQuiz(){
    if(!overlay)return;
    overlay.classList.remove('visible');
    setTimeout(function(){if(overlay&&overlay.parentNode)overlay.parentNode.removeChild(overlay);overlay=null},300);
    document.body.style.overflow='';
  }

  window.openQuiz=function(){
    answers={};diagnoses=[];history=[];currentScreen=null;quizStarted=false;
    if(overlay&&overlay.parentNode){overlay.parentNode.removeChild(overlay);overlay=null}
    buildOverlay();
    document.body.style.overflow='hidden';
    requestAnimationFrame(function(){requestAnimationFrame(function(){overlay.classList.add('visible')})});
    showIntro();
  };
})();
