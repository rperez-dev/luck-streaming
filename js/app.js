import { BackToTopButton } from './components/BackToTopButton.js';
import { CatalogSection } from './components/CatalogSection.js?v=5';
import { ContactSection } from './components/ContactSection.js?v=9';
import { FaqSection } from './components/FaqSection.js';
import { FloatingWhatsappButton } from './components/FloatingWhatsappButton.js';
import { HeroSection } from './components/HeroSection.js?v=5';
import { PromotionModal } from './components/PromotionModal.js?v=5';
import { PromotionTimer } from './components/PromotionTimer.js?v=5';
import { SiteFooter } from './components/SiteFooter.js?v=8';
import { SiteHeader } from './components/SiteHeader.js?v=3';
import { TestimonialsSection } from './components/TestimonialsSection.js?v=4';
import { initializeBackToTop } from './features/backToTop.js?v=2';
import { initializeContactForm } from './features/contactForm.js?v=3';
import { initializeFloatingWhatsapp } from './features/floatingWhatsapp.js?v=2';
import { initializePromotionCountdown } from './features/promotionCountdown.js?v=5';
import { initializePromotionModal } from './features/promotionModal.js';
import { initializeSiteNavigation } from './features/siteNavigation.js?v=2';
import { loadPromotionConfig } from './config/promotion.js';

const app = document.getElementById('app');
if (!(app instanceof HTMLElement)) {
  throw new Error('No se encontró el contenedor principal #app.');
}

const promotion = await loadPromotionConfig();

app.innerHTML = `
  ${SiteHeader()}
  ${PromotionTimer(promotion)}
  <main>
    ${HeroSection()}
    ${CatalogSection()}
    ${TestimonialsSection()}
    ${FaqSection()}
    ${ContactSection()}
  </main>
  ${SiteFooter()}
  ${BackToTopButton()}
  ${PromotionModal(promotion)}
  ${FloatingWhatsappButton()}
`;

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

initializeSiteNavigation();
initializeBackToTop();
if (document.getElementById('contact-form')) initializeContactForm();
initializePromotionCountdown(promotion);
initializePromotionModal();
initializeFloatingWhatsapp();
