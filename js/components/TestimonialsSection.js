import { testimonials } from '../config/testimonials.js?v=2';
import { whatsappUrl } from '../config/siteContent.js?v=4';

const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
})[character]);

const getRatingSummary = () => {
  const ratings = testimonials
    .map(({ stars }) => stars)
    .filter((stars) => Number.isInteger(stars) && stars >= 1 && stars <= 5);
  const average = ratings.length
    ? ratings.reduce((total, stars) => total + stars, 0) / ratings.length
    : 0;

  return { average: average.toFixed(1), count: ratings.length };
};

export const TestimonialsSection = ({ showAll = false } = {}) => {
  const content = testimonials.length
    ? testimonials.map(({ comment, name, stars }) => {
      const rating = Number.isInteger(stars) && stars >= 1 && stars <= 5 ? stars : 0;
      const safeName = escapeHtml(name);
      const safeComment = escapeHtml(comment);
      return `
        <figure class="testimonial-card">
          <div class="testimonial-rating" role="img" aria-label="${rating} de 5 estrellas">${'★'.repeat(rating)}<span class="testimonial-rating-empty">${'★'.repeat(5 - rating)}</span></div>
          <blockquote>${safeComment}</blockquote>
          <figcaption><strong>${safeName}</strong></figcaption>
        </figure>
      `;
    }).join('')
    : `
        <div class="testimonials-empty">
          <p>Aquí publicaremos opiniones reales de clientes, con su autorización.</p>
          <a class="text-link" href="${whatsappUrl('Hola, quisiera compartir mi experiencia como cliente de LUCK Streaming.')}" target="_blank" rel="noopener noreferrer">
            Comparte tu experiencia por WhatsApp <span aria-hidden="true">›</span>
          </a>
        </div>
      `;

  const { average, count } = getRatingSummary();
  const title = showAll ? 'OPINIONES DE CLIENTES' : 'OPINIONES DE<br><em>CLIENTES.</em>';
  const reviewContent = showAll
    ? `<div class="testimonials-list">${content}</div>
       <a class="reviews-back-link" href="index.html#inicio">Volver a la página principal <span aria-hidden="true">›</span></a>`
    : `<div class="testimonials-summary">
         <div class="testimonials-summary-rating">
           <strong>${average}</strong><span>/ 5</span>
           <div class="testimonials-summary-stars" role="img" aria-label="Promedio de ${average} de 5 estrellas">★★★★★</div>
           <p>${count} ${count === 1 ? 'opinión' : 'opiniones'} de clientes</p>
         </div>
         <a class="primary-button testimonials-action" href="opiniones.html">Ver opiniones <span aria-hidden="true">›</span></a>
       </div>`;

  return `
    <section class="testimonials-section${showAll ? ' testimonials-page-section' : ' testimonials-summary-section'}" id="opiniones" aria-labelledby="testimonials-title">
      <div class="testimonials-heading">
        <p class="eyebrow">— EXPERIENCIAS REALES</p>
        ${showAll ? `<h1 id="testimonials-title">${title}</h1>` : `<h2 id="testimonials-title">${title}</h2>`}
      </div>
      ${reviewContent}
    </section>
  `;
};
