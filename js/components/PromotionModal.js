import { siteConfig, whatsappUrl } from '../config/siteContent.js';

export const PromotionModal = () => {
  const claimMessage = `Hola, quiero consultar por la promoción de Halloween con el código ${siteConfig.promotionCode}`;

  return `
    <dialog class="promotion-modal" id="promotion-modal" aria-labelledby="promotion-title" aria-describedby="promotion-description">
      <div class="promotion-layout">
        <div class="promotion-art">
          <img src="assets/imagen-promocion-limpia.png" alt="Personaje de LUCK Streaming en una escena de Halloween, sin logotipos de plataformas">
        </div>
        <section class="promotion-content">
          <button class="promotion-close" type="button" aria-label="Cerrar promoción">×</button>
          <p class="promotion-eyebrow">✦ Una promoción de miedo ✦</p>
          <div class="promotion-discount" aria-label="${siteConfig.promotionDiscount} por ciento de descuento">
            <span class="discount-spark" aria-hidden="true">✦</span>
            <strong>${siteConfig.promotionDiscount}<span>%</span></strong>
            <span class="discount-copy">DE<br>DESCUENTO</span>
            <span class="discount-spark" aria-hidden="true">✦</span>
          </div>
          <h2 id="promotion-title">¡Últimos días de <span>Halloween!</span></h2>
          <p class="promotion-lead" id="promotion-description">🎃 ¡Las ofertas más terroríficas están aquí! 🎃</p>
          <ul class="promotion-benefits">
            <li>Tu próximo maratón te espera.</li>
            <li>Aprovecha los precios promocionales mientras estén disponibles.</li>
          </ul>
          <div class="promotion-code">
            <div>
              <span class="promotion-code-label">Tu código promocional</span>
              <strong id="promotion-code">${siteConfig.promotionCode}</strong>
            </div>
            <button class="promotion-copy" id="copy-promotion-code" type="button">▢ Copiar</button>
          </div>
          <p class="promotion-copy-status" id="promotion-copy-status" aria-live="polite"></p>
          <div class="promotion-actions">
            <a class="primary-button whatsapp-button" href="${whatsappUrl(claimMessage)}" target="_blank" rel="noopener noreferrer">Reclamar por WhatsApp</a>
            <button class="promotion-dismiss" id="dismiss-promotion" type="button">Seguir navegando</button>
          </div>
          <p class="promotion-terms">Promoción sujeta a disponibilidad. Consulta las condiciones por WhatsApp.</p>
        </section>
      </div>
    </dialog>
  `;
};
