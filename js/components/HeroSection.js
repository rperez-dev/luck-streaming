import { FeaturesSection } from './FeaturesSection.js';

export const HeroSection = () => {
  return `
    <section class="hero" id="inicio" aria-label="Portada de LUCK Streaming">
      <img class="hero-artwork" src="assets/imagen-fondo-hallowen.png" alt="Portada de LUCK Streaming con logo, slogan, plataformas y ambiente de Halloween; espacio inferior reservado para tarjetas interactivas." fetchpriority="high">
      <div class="hero-features-overlay">
        ${FeaturesSection()}
      </div>
    </section>
  `;
};
