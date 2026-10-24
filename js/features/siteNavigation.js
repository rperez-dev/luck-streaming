export const initializeSiteNavigation = () => {
  const links = [...document.querySelectorAll('.nav-link')];
  const navigation = document.getElementById('main-nav');
  const menuToggle = document.getElementById('menu-toggle');

  const closeMenu = () => {
    navigation?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Abrir menú');
  };

  menuToggle?.addEventListener('click', () => {
    const isOpen = navigation?.classList.toggle('open') ?? false;
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(item => {
        const selected = item === link;
        item.classList.toggle('active', selected);
        if (selected) item.setAttribute('aria-current', 'page');
        else item.removeAttribute('aria-current');
      });
      closeMenu();
    });
  });

  const sections = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(section => section instanceof HTMLElement);

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;

      links.forEach(link => {
        const selected = link.getAttribute('href') === `#${visible.target.id}`;
        link.classList.toggle('active', selected);
        if (selected) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-20% 0px -60% 0px', threshold: [0, .1, .25, .5] });

    sections.forEach(section => observer.observe(section));
  }
};
