import { whatsappUrl } from '../config/siteContent.js';

export const ContactSection = () => {
  return `
    <section class="contact-section" id="contacto">
      <div>
        <p class="eyebrow">— HABLEMOS</p>
        <h2>Tu entretenimiento es nuestra especialidad.</h2>
        <p>Escríbenos para consultar planes, precios y disponibilidad.</p>
      </div>
      <a class="primary-button whatsapp-button" href="${whatsappUrl('Hola, quisiera consultar por los planes, precios y disponibilidad de LUCK Streaming.')}" target="_blank" rel="noopener noreferrer">
        Consultar por WhatsApp <b>›</b>
      </a>
      <button class="promo-open-button" id="show-promotion" type="button">
        Ver promoción <span aria-hidden="true">›</span>
      </button>
    </section>
  `;
};
