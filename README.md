# LUCK Streaming

Landing pública estática de LUCK Streaming. Presenta los beneficios del servicio, plataformas disponibles, información de contacto y una promoción de Halloween. Dirige consultas a WhatsApp e Instagram y usa EmailJS para enviar solicitudes del formulario; no procesa pagos ni crea cuentas.

## Requisitos

- Navegador moderno con soporte para módulos JavaScript ES.
- Servidor HTTP local o servicio de alojamiento estático.
- Conexión a internet para cargar las fuentes de Google Fonts.
- Cuenta de EmailJS configurada para activar el envío de solicitudes del formulario.

No requiere Node.js, React, instalación de paquetes ni proceso de compilación.

## Ejecutar localmente

Desde el directorio de la landing, inicia un servidor estático:

```powershell
python -m http.server 8000
```

Abre `http://localhost:8000` en el navegador. Los módulos JavaScript ES no funcionan al abrir `index.html` directamente con `file://`.

## Contenido de la landing

- Navegación a Inicio, Catálogo, Opiniones, Preguntas y Contacto, con menú adaptable para móviles.
- Portada de Halloween con tarjetas de beneficios interactivas.
- Portada móvil con texto HTML legible y acceso directo a WhatsApp.
- Catálogo de nueve plataformas.
- Resumen de opiniones en la portada, con promedio y enlace a una página dedicada que muestra todas las reseñas.
- Preguntas frecuentes sobre catálogo, precios, disponibilidad y dispositivos.
- Enlaces de consulta que abren WhatsApp.
- Resumen de contacto en la portada con accesos a WhatsApp y la promoción; formulario completo en una página dedicada.
- Enlace a Instagram y formulario para pedir plataformas y número de WhatsApp de contacto.
- Formulario preparado para enviar solicitudes a `luck.streaming02@gmail.com` mediante EmailJS.
- Cuenta regresiva de la promoción, ubicada junto al encabezado y enlazada al modal.
- Modal promocional que aparece una vez por sesión y puede volver a abrirse desde el contador o el botón «Ver promoción».
- Código promocional copiable, botón para reclamar por WhatsApp y cierre del modal.
- Acceso flotante a WhatsApp en móvil, visible al desplazarse; se oculta cuando el modal está abierto o se llega al pie.
- Botón para volver al inicio, visible después de desplazarse por la página.

## Actualizar información

Edita `js/config/siteContent.js` para cambiar:

- `whatsappNumber`: número internacional sin el signo `+`.
- `features` y `platforms`: beneficios y catálogo.

Edita `js/config/testimonials.js` para gestionar las reseñas; cada elemento contiene `name`, `comment` y `stars` (1 a 5). Publica opiniones y nombres solo con autorización del cliente.

La promoción se configura en `js/config/promotion.json`. Cambia allí `promotionCode`, `promotionDiscount` y `promotionEndsAt`, y recarga la página. La fecha visible se genera automáticamente en hora de Perú a partir de `promotionEndsAt`; no hay una etiqueta de fecha duplicada ni es necesario cambiar versiones para actualizar la promoción.

## Configurar el envío del formulario

El formulario usa la API de EmailJS para enviar los datos desde el sitio estático. Para activarlo:

1. Crea un servicio de correo y una plantilla en EmailJS.
2. Configura el destinatario de la plantilla como `luck.streaming02@gmail.com`.
3. En la plantilla, usa las variables `{{name}}`, `{{platforms}}` y `{{whatsapp_number}}`.
4. Copia el Service ID, Template ID y Public Key en `js/config/email.js` (`serviceId`, `templateId` y `publicKey`).

La Public Key está pensada para uso en el navegador; no coloques contraseñas ni claves privadas en ese archivo. El formulario valida el nombre, limita el teléfono y solo acepta plataformas del catálogo. Los datos se envían como JSON y los mensajes de estado se insertan como texto, nunca como HTML.

En la plantilla de EmailJS, inserta los datos solo con variables escapadas de doble llave (`{{name}}`, `{{platforms}}` y `{{whatsapp_number}}`). No uses triple llave ni insertes los valores como HTML sin escapar. La validación del navegador mejora la entrada, pero no sustituye límites antispam del proveedor.

## Organización

- `index.html`: metadatos, hoja de estilos y contenedor de la página.
- `opiniones.html`: ruta dedicada para consultar todas las opiniones de clientes.
- `contactanos.html`: ruta dedicada para el formulario de contacto.
- `js/app.js`: composición de componentes y arranque de funciones.
- `js/components/`: encabezado, portada, tarjetas, secciones, pie, contador y modal.
- `js/config/siteContent.js`: datos de contacto, beneficios y catálogo.
- `js/config/promotion.json`: código, descuento y vencimiento de la promoción.
- `js/config/email.js`: identificadores públicos de EmailJS para el formulario.
- `js/features/`: interacciones de navegación, formulario de contacto, cuenta regresiva, modal y botones flotantes.
- `css/styles.css`: hoja de entrada que importa los estilos específicos.
- `css/foundation.css`: fuentes, variables, encabezado y portada.
- `css/sections.css`: catálogo, contacto y adaptación general.
- `css/features.css`: tarjetas de beneficios.
- `css/promotion.css`: WhatsApp, contador y modal promocional.
- `css/utilities.css`: botones flotantes de WhatsApp y volver al inicio.
- `assets/`: imágenes utilizadas por la portada, la promoción y el logo del footer.

## Publicar

Publica el contenido de este directorio en un alojamiento de sitios estáticos. Conserva las rutas relativas y sube `index.html`, `css/`, `js/` y `assets/`.
