export const initializePromotionModal = () => {
  const modal = document.getElementById('promotion-modal');
  if (!(modal instanceof HTMLDialogElement)) return;

  const openButton = document.getElementById('show-promotion');
  const timerButton = document.getElementById('promotion-timer');
  const closeButton = modal.querySelector('.promotion-close');
  const dismissButton = document.getElementById('dismiss-promotion');
  const copyButton = document.getElementById('copy-promotion-code');
  const code = document.getElementById('promotion-code');
  const copyStatus = document.getElementById('promotion-copy-status');

  const openModal = () => {
    if (!modal.open) modal.showModal();
  };
  const closeModal = () => modal.close();

  openButton?.addEventListener('click', openModal);
  timerButton?.addEventListener('click', openModal);
  closeButton?.addEventListener('click', closeModal);
  dismissButton?.addEventListener('click', closeModal);

  modal.addEventListener('click', event => {
    if (event.target === modal) closeModal();
  });

  copyButton?.addEventListener('click', async () => {
    if (!(code instanceof HTMLElement) || !(copyStatus instanceof HTMLElement)) return;
    try {
      await navigator.clipboard.writeText(code.textContent.trim());
      copyStatus.textContent = '¡Código copiado!';
    } catch (error) {
      copyStatus.textContent = 'No se pudo copiar. Selecciona el código para copiarlo manualmente.';
      console.warn('No se pudo copiar el código promocional.', error);
    }
  });

  let hasShownPromotion = false;
  try {
    hasShownPromotion = sessionStorage.getItem('luck-promotion-seen') === 'true';
    if (!hasShownPromotion) {
      openModal();
      sessionStorage.setItem('luck-promotion-seen', 'true');
    }
  } catch (error) {
    console.warn('No se pudo guardar el estado de la promoción en esta sesión.', error);
    if (!hasShownPromotion) openModal();
  }
};
