export const initializeBackToTop = () => {
  const button = document.getElementById('back-to-top');
  if (!(button instanceof HTMLButtonElement)) return;

  const updateVisibility = () => button.classList.toggle('visible', window.scrollY > 360);
  window.addEventListener('scroll', updateVisibility, { passive: true });
  updateVisibility();

  button.addEventListener('click', () => {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    window.scrollTo({ top: 0, behavior });
  });
};
