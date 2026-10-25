const navigationItems = [
  { label: 'Inicio', section: 'inicio' },
  { label: 'Catálogo', section: 'catalogo' },
  { label: 'Opiniones', section: 'opiniones', href: 'opiniones.html' },
  { label: 'Preguntas', section: 'preguntas-frecuentes' },
  { label: 'Contacto', section: 'contacto', href: 'contactanos.html' }
];

export const SiteHeader = ({ reviewsPage = false, contactPage = false } = {}) => {
  const navigation = navigationItems.map(({ label, section, href }, index) => {
    const active = reviewsPage
      ? section === 'opiniones'
      : contactPage ? section === 'contacto' : index === 0;
    const destination = href || (reviewsPage || contactPage ? `index.html#${section}` : `#${section}`);
    const isInPageSection = destination.startsWith('#');
    return `
    <a class="nav-link${active ? ' active' : ''}" href="${destination}"${isInPageSection ? ` data-section="${section}"` : ''}${active ? ' aria-current="page"' : ''}>
      ${label}
    </a>
  `;
  }).join('');

  return `
    <header class="site-header" aria-label="Menú principal">
      <div class="header-left" aria-hidden="true"></div>
      <button class="menu-toggle" id="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Abrir menú">☰</button>
      <nav class="top-nav" id="main-nav" aria-label="Navegación principal">
        ${navigation}
      </nav>
    </header>
  `;
};
