export const FaqSection = () => {
  const questions = [
    {
      question: '¿Qué plataformas puedo consultar?',
      answer: 'Puedes consultar las siguientes plataformas Netflix, Disney+, Prime Video, Max, Paramount+, Crunchyroll, Movistar, Canva y Gemini. Confirma por WhatsApp la disponibilidad de la opción que buscas.'
    },
    {
      question: '¿Cuáles son los precios y planes?',
      answer: 'Los precios y planes disponibles se consultan por WhatsApp. Escríbenos para conocer las opciones vigentes antes de contratar.'
    },
    {
      question: '¿Cómo verifico si una plataforma está disponible?',
      answer: 'Envíanos un mensaje por WhatsApp con el nombre de la plataforma que te interesa y te confirmaremos su disponibilidad.'
    },
    {
      question: '¿En qué dispositivos puedo usar el servicio?',
      answer: 'Puedes usar el servicio en tus dispositivos(tv, computadora, tablet, móvil). Consulta por WhatsApp las condiciones específicas de la opción que te interesa.'
    },
    {
      question: '¿Qué combos están disponibles?',
      answer: 'En Luck Streaming, ofrecemos diversos combos que incluyen acceso a múltiples plataformas. Consulta por WhatsApp las opciones disponibles.'
    }
  ];

  return `
    <section class="faq-section" id="preguntas-frecuentes" aria-labelledby="faq-title">
      <div class="faq-heading">
        <p class="eyebrow">— RESPUESTAS CLARAS</p>
        <h2 id="faq-title">PREGUNTAS<br><em>FRECUENTES.</em></h2>
        <p>¿Tienes dudas antes de elegir? Aquí encontrarás información útil para empezar.</p>
      </div>
      <div class="faq-list">
        ${questions.map(({ question, answer }) => `
          <details class="faq-item">
            <summary>${question}<span aria-hidden="true"></span></summary>
            <p>${answer}</p>
          </details>
        `).join('')}
      </div>
    </section>
  `;
};
