export const SiteFooter = () => {
  return `
    <footer class="footer">
      <a class="footer-brand" href="#inicio" aria-label="LUCK Streaming, volver al inicio">
        <span class="footer-logo-frame">
          <img class="footer-logo" src="assets/logo-luck-streaming.png" alt="Logo de LUCK Streaming">
        </span>
      </a>
      <p class="footer-tagline">Tu entretenimiento es nuestra especialidad.</p>
      <span class="footer-copyright">© <span id="year"></span> LUCK STREAMING</span>
    </footer>
  `;
};
