export const loadPromotionConfig = async () => {
  const response = await fetch(new URL('./promotion.json', import.meta.url), { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`No se pudo cargar la configuración de la promoción: HTTP ${response.status}.`);
  }

  const config = await response.json();
  if (
    !config ||
    typeof config !== 'object' ||
    Array.isArray(config) ||
    typeof config.promotionCode !== 'string' ||
    !config.promotionCode.trim() ||
    !Number.isFinite(config.promotionDiscount) ||
    config.promotionDiscount <= 0 ||
    config.promotionDiscount > 100 ||
    typeof config.promotionEndsAt !== 'string' ||
    Number.isNaN(Date.parse(config.promotionEndsAt))
  ) {
    throw new Error('La configuración de la promoción contiene valores inválidos.');
  }

  return config;
};

export const formatPromotionDeadline = promotionEndsAt => {
  const parts = new Intl.DateTimeFormat('es-PE', {
    timeZone: 'America/Lima',
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23'
  }).formatToParts(new Date(promotionEndsAt));
  const get = type => parts.find(part => part.type === type)?.value ?? '';
  const month = get('month').replace(/\.$/, '');

  return `${get('day')} ${month} · ${get('hour')}:${get('minute')} (Perú)`;
};
