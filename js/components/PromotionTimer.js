import { formatPromotionDeadline } from '../config/promotion.js';

export const PromotionTimer = promotion => {
  const deadlineLabel = formatPromotionDeadline(promotion.promotionEndsAt);

  return `
    <button class="promotion-timer" id="promotion-timer" type="button" aria-label="Abrir promoción. Vence el ${deadlineLabel}.">
      <span class="promotion-timer-heading"><span class="promotion-timer-indicator" aria-hidden="true"></span> Promoción termina en</span>
      <span class="promotion-countdown" aria-hidden="true">
        <span class="countdown-unit"><strong id="countdown-days">00</strong><small>días</small></span>
        <span class="countdown-separator">:</span>
        <span class="countdown-unit"><strong id="countdown-hours">00</strong><small>hrs</small></span>
        <span class="countdown-separator">:</span>
        <span class="countdown-unit"><strong id="countdown-minutes">00</strong><small>min</small></span>
        <span class="countdown-separator">:</span>
        <span class="countdown-unit"><strong id="countdown-seconds">00</strong><small>seg</small></span>
      </span>
      <span class="promotion-timer-deadline">Hasta el ${deadlineLabel}</span>
    </button>
  `;
};
