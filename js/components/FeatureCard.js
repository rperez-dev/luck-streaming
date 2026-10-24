export const FeatureCard = ({ title, description, index, icon }) => {
  return `
    <article class="feature-card">
      <div class="feature-icon" aria-hidden="true">
        <svg viewBox="0 0 64 64">${icon}</svg>
      </div>
      <div class="feature-copy">
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
      <span class="feature-index" aria-hidden="true">${index}</span>
    </article>
  `;
};
