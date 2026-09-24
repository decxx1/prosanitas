/** Número local argentino → enlace de WhatsApp (código de país 54). */
export function whatsappHref(phone: string) {
  const digits = phone.replace(/\D/g, '').replace(/^0+/, '');
  const international = digits.startsWith('54') ? digits : `54${digits}`;
  return `https://wa.me/${international}`;
}
