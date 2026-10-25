import { FeaturesSection } from './FeaturesSection.js?v=4';
import { whatsappUrl } from '../config/siteContent.js?v=4';

export const HeroSection = () => {
  return `
    <section class="hero" id="inicio" aria-label="Portada de LUCK Streaming">
      <picture class="hero-artwork-picture">
        <source media="(max-width: 650px)" srcset="assets/imagen-promocion-limpia.png">
        <img class="hero-artwork" src="assets/imagen-fondo-hallowen.png" alt="Personaje de LUCK Streaming disfrutando de palomitas en una escena de Halloween." fetchpriority="high">
      </picture>
      <div class="hero-copy">
        <p class="eyebrow">LUCK STREAMING</p>
        <h1>Tu entretenimiento es nuestra especialidad.</h1>
        <p>Disfruta tus series, películas y anime favoritos en un solo lugar.</p>
        <a class="primary-button whatsapp-button" href="${whatsappUrl('Hola, quisiera consultar por los planes y disponibilidad de LUCK Streaming.')}" target="_blank" rel="noopener noreferrer">
          Consultar por WhatsApp <b aria-hidden="true">›</b>
        </a>
      </div>
      <div class="hero-features-overlay">
        ${FeaturesSection()}
      </div>
    </section>
  `;
};
