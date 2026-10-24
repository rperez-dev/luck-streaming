import { platforms } from '../config/siteContent.js';
import { CatalogTile } from './CatalogTile.js';

export const CatalogSection = () => {
  return `
    <section class="catalog-section" id="catalogo">
      <div class="catalog-heading">
        <p class="eyebrow">— CATÁLOGO</p>
        <h2>TUS FAVORITOS,<br><em>EN UN SOLO LUGAR.</em></h2>
        <p>Consulta la disponibilidad de las plataformas que más te gustan.</p>
      </div>
      <div class="catalog-grid" aria-label="Plataformas disponibles">
        ${platforms.map(CatalogTile).join('')}
      </div>
    </section>
  `;
};
