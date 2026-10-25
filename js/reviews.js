import { SiteHeader } from './components/SiteHeader.js?v=3';
import { SiteFooter } from './components/SiteFooter.js?v=8';
import { TestimonialsSection } from './components/TestimonialsSection.js?v=4';
import { initializeSiteNavigation } from './features/siteNavigation.js?v=2';

const app = document.getElementById('app');
if (!(app instanceof HTMLElement)) {
  throw new Error('No se encontró el contenedor principal #app.');
}

app.innerHTML = `
  ${SiteHeader({ reviewsPage: true })}
  <main class="reviews-page">
    ${TestimonialsSection({ showAll: true })}
  </main>
  ${SiteFooter()}
`;

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

initializeSiteNavigation();
