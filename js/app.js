import { BackToTopButton } from './components/BackToTopButton.js';
import { CatalogSection } from './components/CatalogSection.js';
import { ContactSection } from './components/ContactSection.js';
import { HeroSection } from './components/HeroSection.js';
import { PromotionModal } from './components/PromotionModal.js';
import { PromotionTimer } from './components/PromotionTimer.js';
import { SiteFooter } from './components/SiteFooter.js';
import { SiteHeader } from './components/SiteHeader.js';
import { initializeBackToTop } from './features/backToTop.js';
import { initializePromotionCountdown } from './features/promotionCountdown.js';
import { initializePromotionModal } from './features/promotionModal.js';
import { initializeSiteNavigation } from './features/siteNavigation.js';

const app = document.getElementById('app');
if (!(app instanceof HTMLElement)) {
  throw new Error('No se encontró el contenedor principal #app.');
}

app.innerHTML = `
  ${SiteHeader()}
  ${PromotionTimer()}
  <main>
    ${HeroSection()}
    ${CatalogSection()}
    ${ContactSection()}
  </main>
  ${SiteFooter()}
  ${BackToTopButton()}
  ${PromotionModal()}
`;

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

initializeSiteNavigation();
initializeBackToTop();
initializePromotionCountdown();
initializePromotionModal();
