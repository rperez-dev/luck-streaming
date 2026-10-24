# LUCK Streaming

Landing pública estática de LUCK Streaming. Presenta los beneficios del servicio, plataformas disponibles, información de contacto y una promoción de Halloween. Su función es informar y dirigir consultas a WhatsApp; no procesa pagos, crea cuentas ni se conecta a una API.

## Requisitos

- Navegador moderno con soporte para módulos JavaScript ES.
- Servidor HTTP local o servicio de alojamiento estático.
- Conexión a internet para cargar las fuentes de Google Fonts.

No requiere Node.js, React, instalación de paquetes ni proceso de compilación.

## Ejecutar localmente

Desde el directorio de la landing, inicia un servidor estático:

```powershell
python -m http.server 8000
```

Abre `http://localhost:8000` en el navegador. Los módulos JavaScript ES no funcionan al abrir `index.html` directamente con `file://`.

## Contenido de la landing

- Navegación a Inicio, Catálogo y Contacto, con menú adaptable para móviles.
- Portada de Halloween con tarjetas de beneficios interactivas.
- Catálogo de nueve plataformas.
- Enlaces de consulta que abren WhatsApp.
- Cuenta regresiva de la promoción, ubicada junto al encabezado y enlazada al modal.
- Modal promocional que aparece una vez por sesión y puede volver a abrirse desde el contador o el botón «Ver promoción».
- Código promocional copiable, botón para reclamar por WhatsApp y cierre del modal.
- Botón para volver al inicio, visible después de desplazarse por la página.

## Actualizar información

Edita `js/config/siteContent.js` para cambiar:

- `whatsappNumber`: número internacional sin el signo `+`.
- `promotionCode`: código de la promoción.
- `promotionDiscount`: porcentaje mostrado en el modal.
- `promotionEndsAt`: fecha y hora de vencimiento en formato ISO 8601, con su zona horaria u offset.
- `promotionDeadlineLabel`: fecha que se muestra al visitante.
- `features` y `platforms`: beneficios y catálogo.

El número de WhatsApp, el código y el descuento se usan en los enlaces y componentes correspondientes. Actualiza la fecha de vencimiento y su etiqueta al renovar la promoción.

## Organización

- `index.html`: metadatos, hoja de estilos y contenedor de la página.
- `js/app.js`: composición de componentes y arranque de funciones.
- `js/components/`: encabezado, portada, tarjetas, secciones, pie, contador y modal.
- `js/config/siteContent.js`: datos de contacto, promoción, beneficios y catálogo.
- `js/features/`: interacciones de navegación, cuenta regresiva, modal y botón de volver al inicio.
- `css/styles.css`: hoja de entrada que importa los estilos específicos.
- `css/foundation.css`: fuentes, variables, encabezado y portada.
- `css/sections.css`: catálogo, contacto y adaptación general.
- `css/features.css`: tarjetas de beneficios.
- `css/promotion.css`: WhatsApp, contador y modal promocional.
- `css/utilities.css`: botón de volver al inicio.
- `assets/`: imágenes utilizadas por la portada, la promoción y el logo del footer.

## Publicar

Publica el contenido de este directorio en un alojamiento de sitios estáticos. Conserva las rutas relativas y sube `index.html`, `css/`, `js/` y `assets/`.
