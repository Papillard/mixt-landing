// Le 01 Mixt (Twilio) : appels transférés à l'équipe, WhatsApp reçu dans la messagerie
// de l'app. Un inconnu qui écrit ou appelle y devient une lead : plus de contact perdu
// sur un téléphone perso.
export const phoneDisplay = '01 62 04 45 93';
export const phoneHref = 'tel:+33162044593';
export const whatsappHref = (text: string) =>
  'https://wa.me/33162044593?text=' + encodeURIComponent(text);
