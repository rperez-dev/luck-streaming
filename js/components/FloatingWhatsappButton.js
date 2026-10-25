import { whatsappUrl } from '../config/siteContent.js?v=5';

export const FloatingWhatsappButton = () => `
  <a class="floating-whatsapp" id="floating-whatsapp" href="${whatsappUrl('Hola, quisiera consultar por los planes y disponibilidad de LUCK Streaming.')}" target="_blank" rel="noopener noreferrer" aria-label="Consultar por WhatsApp">
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16 3.5a12 12 0 0 0-10.2 18.3L4 28l6.4-1.7A12 12 0 1 0 16 3.5Z"/>
      <path d="M12.2 10.5c-.4-.9-.8-.9-1.2-.9h-1c-.4 0-.9.2-1.3.7-.4.5-1.7 1.6-1.7 4s1.7 4.7 1.9 5c.2.3 3.3 5.3 8.2 7.2 4 1.6 4.9 1.3 5.8 1.2.9-.1 2.8-1.2 3.2-2.4.4-1.2.4-2.2.3-2.4-.1-.2-.4-.3-.9-.5l-3.1-1.5c-.4-.2-.8-.3-1.1.3-.3.5-1.2 1.5-1.5 1.8-.3.3-.6.4-1.1.1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.3-2.7-2.6-3.2-.3-.5 0-.8.2-1.1.2-.2.5-.6.7-.9.2-.3.3-.5.5-.8.2-.3.1-.6 0-.9l-1.4-3.4Z"/>
    </svg>
  </a>
`;
