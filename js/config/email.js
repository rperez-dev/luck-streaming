export const emailConfig = {
  serviceId: 'service_b1zb9ya',
  templateId: 'template_rcbjz0m',
  publicKey: 'ahPlWr7_QPRwhJuim',
};

export const emailJsEndpoint = 'https://api.emailjs.com/api/v1.0/email/send';

export const isEmailConfigured = () =>
  Object.values(emailConfig).every((value) => value.trim().length > 0);
