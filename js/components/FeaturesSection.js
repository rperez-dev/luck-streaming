import { features } from '../config/siteContent.js';
import { FeatureCard } from './FeatureCard.js';

export const FeaturesSection = () => {
  return `
    <section class="features-section" aria-label="Beneficios de LUCK Streaming">
      ${features.map(FeatureCard).join('')}
    </section>
  `;
};
