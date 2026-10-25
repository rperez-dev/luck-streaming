export const initializeFloatingWhatsapp = () => {
  const button = document.getElementById('floating-whatsapp');
  const modal = document.getElementById('promotion-modal');
  if (!(button instanceof HTMLAnchorElement)) return;

  const updateVisibility = () => {
    const footer = document.querySelector('.footer');
    const footerVisible = footer instanceof HTMLElement &&
      footer.getBoundingClientRect().top < window.innerHeight;
    const contactForm = document.querySelector('.contact-form');
    const contactFormVisible = contactForm instanceof HTMLElement &&
      contactForm.getBoundingClientRect().top < window.innerHeight &&
      contactForm.getBoundingClientRect().bottom > 0;
    const modalOpen = modal instanceof HTMLDialogElement && modal.open;
    button.classList.toggle('visible', window.scrollY > 360 && !footerVisible && !contactFormVisible && !modalOpen);
  };

  window.addEventListener('scroll', updateVisibility, { passive: true });
  window.addEventListener('resize', updateVisibility);
  modal?.addEventListener('toggle', updateVisibility);
  modal?.addEventListener('close', updateVisibility);
  updateVisibility();
};
