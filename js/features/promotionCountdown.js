import { formatPromotionDeadline } from '../config/promotion.js';

export const initializePromotionCountdown = promotion => {
  const timer = document.getElementById('promotion-timer');
  if (!(timer instanceof HTMLButtonElement)) return;

  const deadline = Date.parse(promotion.promotionEndsAt);
  if (Number.isNaN(deadline)) {
    throw new Error(`Fecha de vencimiento de promoción inválida: ${promotion.promotionEndsAt}`);
  }
  const deadlineLabel = formatPromotionDeadline(promotion.promotionEndsAt);

  const parts = {
    days: document.getElementById('countdown-days'),
    hours: document.getElementById('countdown-hours'),
    minutes: document.getElementById('countdown-minutes'),
    seconds: document.getElementById('countdown-seconds')
  };
  let intervalId = 0;

  const update = () => {
    const remaining = Math.max(0, deadline - Date.now());
    const totalSeconds = Math.floor(remaining / 1000);
    const values = {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60
    };

    Object.entries(parts).forEach(([unit, element]) => {
      if (element) element.textContent = String(values[unit]).padStart(2, '0');
    });

    if (remaining === 0) {
      timer.classList.add('is-expired');
      timer.setAttribute('aria-label', `Abrir promoción. La oferta venció el ${deadlineLabel}.`);
      window.clearInterval(intervalId);
    }
  };

  update();
  if (Date.now() < deadline) intervalId = window.setInterval(update, 1000);
};
