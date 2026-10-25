import { ContactSection } from './components/ContactSection.js?v=9';
import { PromotionModal } from './components/PromotionModal.js?v=5';
import { SiteFooter } from './components/SiteFooter.js?v=8';
import { SiteHeader } from './components/SiteHeader.js?v=3';
import { initializeContactForm } from './features/contactForm.js?v=3';
import { initializePromotionModal } from './features/promotionModal.js';
import { initializeSiteNavigation } from './features/siteNavigation.js?v=2';
import { loadPromotionConfig } from './config/promotion.js';

const app = document.getElementById('app');
if (!(app instanceof HTMLElement)) {
  throw new Error('No se encontró el contenedor principal #app.');
}

const promotion = await loadPromotionConfig();

app.innerHTML = `
  ${SiteHeader({ contactPage: true })}
  <main class="contact-page">
    ${ContactSection({ showForm: true })}
  </main>
  ${SiteFooter()}
  ${PromotionModal(promotion)}
`;

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

initializeSiteNavigation();
initializeContactForm();
initializePromotionModal();
