export const siteConfig = {
  whatsappNumber: "51939010623",
};

export const whatsappUrl = (message) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const features = [
  {
    title: "LAS MEJORES<br>PLATAFORMAS",
    description: "Todo tu contenido favorito en un solo lugar.",
    index: "01",
    icon: '<path d="M8 22 18 42h28L56 22 43 31 32 12 21 31 8 22Z"/><path d="M18 42v8h28v-8M8 22l-3-8M56 22l3-8M32 12V5"/>',
  },
  {
    title: "PRECIOS<br>ACCESIBLES",
    description: "Entretenimiento de calidad a tu alcance.",
    index: "02",
    icon: '<path d="M36 5 13 35h17l-3 24 24-34H34l2-20Z"/>',
  },
  {
    title: "EN TODOS<br>TUS DISPOSITIVOS",
    description: "Disfruta donde y cuando quieras.",
    index: "03",
    icon: '<rect x="5" y="8" width="38" height="29" rx="2"/><path d="M17 47h14M24 37v10"/><rect x="39" y="29" width="18" height="29" rx="3"/><path d="M45 34h6M46 52h4"/>',
  },
  {
    title: "PAGO<br>SEGURO",
    description: "Tus datos siempre protegidos.",
    index: "04",
    icon: '<path d="M32 5 52 13v17c0 13-8 22-20 29C20 52 12 43 12 30V13L32 5Z"/><path d="m22 31 7 7 14-15"/>',
  },
];

export const platforms = [
  { name: "NETFLIX", style: "netflix" },
  { name: "Disney<span>+</span>", style: "disney" },
  { name: "prime video", style: "prime" },
  { name: "max", style: "max" },
  { name: "Paramount+", style: "paramount" },
  { name: "crunchyroll", style: "crunchy" },
  { name: '<span class="movistar-mark">M</span> Movistar', style: "movistar" },
  { name: "Canva", style: "canva" },
  { name: '<span class="gemini-star">✦</span> Gemini', style: "gemini" },
];
