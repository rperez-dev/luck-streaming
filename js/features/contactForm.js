import { emailConfig, emailJsEndpoint, isEmailConfigured } from '../config/email.js?v=2';

const allowedPlatforms = new Set([
  'Netflix',
  'Disney+',
  'Prime Video',
  'Max',
  'Paramount+',
  'Crunchyroll',
  'Movistar',
  'Canva',
  'Gemini',
]);

const validateContactData = (formData) => {
  const name = String(formData.get('name') ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim();
  if (!name || name.length > 80 || !/^[\p{L}\p{M} .’'-]+$/u.test(name)) {
    return { error: 'Escribe un nombre válido usando solo letras, espacios, puntos, apóstrofes o guiones.' };
  }

  const selectedPlatforms = formData.getAll('platforms').map(String);
  if (!selectedPlatforms.length || selectedPlatforms.some((platform) => !allowedPlatforms.has(platform))) {
    return { error: 'Selecciona al menos una plataforma válida.' };
  }

  const whatsappNumber = String(formData.get('whatsapp_number') ?? '').trim();
  const digits = whatsappNumber.replace(/\D/g, '');
  if (
    whatsappNumber.length > 20 ||
    !/^\+?[0-9][0-9 ()-]*[0-9]$/.test(whatsappNumber) ||
    digits.length < 7 ||
    digits.length > 15
  ) {
    return { error: 'Escribe un número de WhatsApp válido, con entre 7 y 15 dígitos.' };
  }

  return {
    templateParams: {
      name,
      platforms: selectedPlatforms.join(', '),
      whatsapp_number: whatsappNumber,
    },
  };
};

export const initializeContactForm = () => {
  const form = document.getElementById('contact-form');
  if (!(form instanceof HTMLFormElement)) {
    throw new Error('No se encontró el formulario de contacto.');
  }

  const status = document.getElementById('contact-form-status');
  const submitButton = form.querySelector('button[type="submit"]');
  if (!(status instanceof HTMLElement) || !(submitButton instanceof HTMLButtonElement)) {
    throw new Error('El formulario de contacto no tiene los elementos de estado y envío requeridos.');
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!isEmailConfigured()) {
      status.dataset.state = 'error';
      status.textContent = 'El formulario aún no está conectado al correo. Escríbenos por WhatsApp mientras terminamos la configuración.';
      return;
    }

    const { error, templateParams } = validateContactData(new FormData(form));
    if (error || !templateParams) {
      status.dataset.state = 'error';
      status.textContent = error ?? 'Revisa los datos ingresados e inténtalo nuevamente.';
      return;
    }

    status.dataset.state = 'pending';
    status.textContent = 'Enviando tu solicitud…';
    submitButton.disabled = true;
    form.setAttribute('aria-busy', 'true');

    try {
      const response = await fetch(emailJsEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: emailConfig.serviceId,
          template_id: emailConfig.templateId,
          user_id: emailConfig.publicKey,
          template_params: templateParams,
        }),
      });

      if (!response.ok) {
        const details = await response.text();
        throw new Error(`EmailJS respondió ${response.status}: ${details}`);
      }

      form.reset();
      status.dataset.state = 'success';
      status.textContent = '¡Solicitud enviada! Nos pondremos en contacto contigo por WhatsApp.';
    } catch (error) {
      console.error('No se pudo enviar la solicitud de contacto.', error);
      status.dataset.state = 'error';
      status.textContent = 'No se pudo enviar la solicitud. Inténtalo nuevamente o contáctanos por WhatsApp.';
    } finally {
      submitButton.disabled = false;
      form.removeAttribute('aria-busy');
    }
  });
};
