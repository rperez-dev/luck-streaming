const navigationItems = [
  { label: 'Inicio', section: 'inicio' },
  { label: 'Catálogo', section: 'catalogo' },
  { label: 'Contacto', section: 'contacto' }
];

export const SiteHeader = () => {
  const navigation = navigationItems.map(({ label, section }, index) => `
    <a class="nav-link${index === 0 ? ' active' : ''}" href="#${section}" data-section="${section}"${index === 0 ? ' aria-current="page"' : ''}>
      ${label}
    </a>
  `).join('');

  return `
    <header class="site-header" aria-label="Menú principal sobre la portada">
      <div class="header-left" aria-hidden="true"></div>
      <button class="menu-toggle" id="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Abrir menú">☰</button>
      <nav class="top-nav" id="main-nav" aria-label="Navegación principal">
        ${navigation}
      </nav>
    </header>
  `;
};
