export const initializeBackToTop = () => {
  const button = document.getElementById('back-to-top');
  if (!(button instanceof HTMLButtonElement)) return;

  const updateVisibility = () => {
    const contactForm = document.querySelector('.contact-form');
    const contactFormVisible = contactForm instanceof HTMLElement &&
      contactForm.getBoundingClientRect().top < window.innerHeight &&
      contactForm.getBoundingClientRect().bottom > 0;
    button.classList.toggle('visible', window.scrollY > 360 && !contactFormVisible);
  };
  window.addEventListener('scroll', updateVisibility, { passive: true });
  window.addEventListener('resize', updateVisibility);
  updateVisibility();

  button.addEventListener('click', () => {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    window.scrollTo({ top: 0, behavior });
  });
};
