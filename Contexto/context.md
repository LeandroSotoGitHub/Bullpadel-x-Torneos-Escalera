# Context — Torneos Escalera x Bullpadel (Cupones y Kits)

> Master context de todo lo trabajado en este chat. Pensado para retomar el proyecto en una sesión nueva sin perder el hilo.

## 1. Qué es esto

Torneos Escalera es una plataforma para organizar torneos de pádel (formato escalera: los jugadores compiten en cada fecha agrupados por nivel, con ascenso/descenso por cancha y ranking acumulado). Bullpadel Argentina / Onyx Sport es "aliado - sponsor" de la plataforma.

Hay una propuesta de acuerdo formal (PDF subido al chat, sujeta a confirmación de ambas partes): **"Acuerdo Bullpadel x Torneos Escalera"**, septiembre a diciembre 2026. A partir de esa propuesta surgió todo el trabajo de este chat: diseñar cómo resolver, en la práctica, dos de sus componentes comerciales (cupones para jugadoras y kits para organizadores).

## 2. Los tres actores

- **María Firpo** — creadora de la plataforma y organizadora directa de 3 torneos propios: KDT (martes, individual, anual), Distrito Padel (jueves, parejas, anual) y Bancalari (individual, anual). El acuerdo directo de Bullpadel es con ella.
- **Organizadores independientes** — gestionan el resto de los torneos de la plataforma, distribuidos por toda Argentina. Sin acuerdo directo con Bullpadel hoy — son el foco de la propuesta de kits.
- **Jugadoras** — comunidad de pádel amateur femenino, categoría A. Foco de la propuesta de cupones. Este segmento está muy alineado con el pilar "Mujer" del plan de marketing de Bullpadel 2026-2027.

## 3. El acuerdo vigente con Firpo (resumen del PDF original)

- Vigencia: septiembre a diciembre 2026. Tramo final y premiación de cierre de los 4 torneos: noviembre. Diciembre es solo cierre administrativo, sin fechas de juego.
- Bullpadel es pelota oficial exclusiva de los 4 torneos: aporta 150 pelotas/mes de septiembre a noviembre (450 en total). Por encima de ese volumen, Torneos Escalera accede a compra directa con condiciones preferenciales.
- Bullpadel participa de la premiación de cierre de noviembre — composición de los premios a convenir entre las partes.
- Condición excluyente: todo el staff de organización debe usar al menos una prenda Bullpadel en las fechas de juego y en la premiación. Para eso, Torneos Escalera accede a la lista Proshop con 20% de descuento en indumentaria de personal.
- Acciones comerciales previstas en el PDF original: código de descuento exclusivo para la comunidad de jugadoras, e-mail de bienvenida automático con beneficio Bullpadel al inscribirse por primera vez, y venta de producto Bullpadel a la comunidad vía lista Proshop respetando el precio sugerido.

## 4. El problema real que se está resolviendo

Los cupones web de Torneos Escalera **no convierten**. Causa raíz: las jugadoras de este segmento compran mayormente en los locales físicos, no online — y ahí aparece una limitación de sistema, no de comunicación:

> **El ERP de los locales físicos no soporta cupones ni códigos.** Solo permite cargar un % de descuento manual sobre el ticket, en un campo de observaciones (donde sí se puede anotar el código del cupón como referencia), autorizado por un único encargado habilitado para los tres puntos de venta — Unicenter, Portal Palermo y Alcorta (diseñado así a propósito, para que no cualquier vendedor genere descuentos).

Todo el diseño de la solución gira en torno a esa restricción: no se puede depender de que el ERP reconozca cupones, hay que resolverlo con una herramienta propia y un proceso que respete el control existente (un solo encargado autoriza).

El e-commerce (Tiendanube) sí soporta cupones código con normalidad — la limitación es específica de los locales físicos.

## 5. Propuesta 1 — Cupones para jugadoras

**Mecánica:** un cupón digital con diseño (tarjeta), identificado por un serial único.
- Web: cupón código normal en Tiendanube.
- Local: la jugadora muestra el cupón digital en el celular. El vendedor del local (no hace falta que sea el supervisor) lo valida en un sistema propio — no en el ERP — que indica si está activo, vencido o usado, y deja registro del canje. Con eso confirmado, se le pide al encargado habilitado que cargue el % y el serial en el campo de observaciones del ERP.

**Variables que MKT/comercial necesita poder combinar libremente al crear cada cupón:**
- % de descuento
- Vigencia (fecha desde/hasta)
- Canal: web y/o local
- Punto de venta: todos o uno específico
- Categoría de producto (en el MVP, categoría amplia tipo "bolsos" — no SKU a SKU)
- Modalidad de uso: único uso o reutilizable — **esta decisión requiere validación comercial**, la herramienta debe soportar ambas opciones

Ejemplos de campañas que se quieren poder armar: 20% off en bolsos en todos los canales durante septiembre; 10% off solo en Alcorta un fin de semana puntual (genera urgencia); o alternativamente un único cupón fijo para todo el acuerdo. La herramienta tiene que permitir las dos lógicas, no una sola.

**Roles y control:**
- MKT/comercial: crea cupones, ve el listado completo.
- Vendedor de local: solo valida (no puede crear cupones ni ver el listado — pensado para evitar mal uso).
- Encargado habilitado: autoriza el % final en el ERP.

**Distribución:** en el MVP, Bullpadel le entrega a Firpo un lote de cupones digitales para que ella los reparta a su criterio en la comunidad (se pierde algo de trazabilidad individual, pero es aceptable para esta etapa).

**Roadmap:**
| MVP | V2 |
|---|---|
| Cupones anónimos por serial, lote entregado a Firpo | Login/perfil de jugadora, cupones por e-mail automático |
| Categoría amplia (ej. "bolsos") | SKU específico, visible para el vendedor al validar |
| Trazabilidad por cupón y punto de venta | Trazabilidad por jugadora/usuaria |

Nota de proceso: la web (Tiendanube) y el sistema interno no están integrados — un cupón multicanal implica cargarlo dos veces (una en cada sistema) hasta que se automatice.

## 6. Propuesta 2 — Kits para organizadores

**Mecánica:** combos fijos de premios a distintos valores (no armables a medida), pensados para las 4 ternas típicas de un torneo escalera:
- **Ganador** — el que más puntos juntó
- **Revelación** — el que más posiciones escaló
- **Mejor Jugador** — el que más tiempo se mantuvo en la Cancha 1
- **Premio Roca** — el que nunca cambió de cancha (Leandro marcó que hoy nadie usa esta categoría — oportunidad para incluirla en el kit con algo simbólico)

El organizador compra el kit por adelantado vía lista Proshop (a confirmar con comercial si esa lista aplica tal cual o hace falta un esquema de descuento alternativo). En el MVP, la comunicación depende de Firpo: Bullpadel le pasa los kits disponibles y ella los comparte con un **grupo piloto reservado** de organizadores (no toda la plataforma). Recién después se evalúa escalarlo.

**Roadmap:** V2 agrega un rol "organizador" al sistema, para que vean los kits activos sin depender de Firpo como intermediaria.

## 7. Entregables ya generados en este chat

1. **`Propuesta_Torneos_Escalera_Cupones_y_Kits.docx`** — documento comercial de trabajo: contexto, los 3 actores, ambas propuestas con su roadmap, proceso operativo unificado, pendientes de validación comercial y riesgos. Pensado para llevar a la reunión con comercial.

2. **Prototipo visual "Prototipo Cupones Torneos Escalera"** — mockup interactivo (no funcional) hecho con Claude Design, publicado como Artifact: `https://claude.ai/code/artifact/ac3a3ece-b479-4d37-82de-2db05279eaed`. Tiene 4 pantallas: Crear cupón (MKT), Listado de cupones (MKT), Validar cupón (vendedor, versión mobile, con los 3 estados activo/vencido/usado), y la Tarjeta digital que recibe la jugadora. Usa la paleta oficial de marca Bullpadel (ver punto 8) y tiene un placeholder con borde punteado para el logo de Torneos Escalera, que todavía no fue provisto.

3. **`Plan_Implementacion_Tecnica_Cupones.docx`** — plan técnico de cómo construir el sistema real (no el mockup): arquitectura, modelo de datos, roles/seguridad, costos y fases. Ver punto 9.

Ambos .docx están guardados en la carpeta del usuario **`Proyectos Code/Torneos Escalera`** en su computadora (carpeta que conectó específicamente para este proyecto).

## 8. Marca — insumos usados

Manual de marca real de Bullpadel, sacado de la carpeta `Files Center/Logos` (`Bullpadel-branding-manual.pdf`):
- **Rojo** PMS 186C — `#C8102E`
- **Negro** — `#0f0f01`
- **Blanco** — `#ffffff`
- Regla del manual: el logotipo (texto "Bullpadel") pasa a blanco sobre fondos oscuros; el isotipo (la "3"/B) se mantiene siempre en rojo.

El prototipo usa esos tres colores como paleta dominante, con el logo real incrustado (versión negra sobre fondos claros, blanca sobre fondos oscuros). Los colores de Torneos Escalera (navy `#1C5078` / celeste `#18A0C8`, sacados de una pieza de premiación propia que compartió el usuario) se usan solo como detalle menor (línea divisoria, labels), nunca como color dominante — así lo pidió el usuario explícitamente.

## 9. Plan de implementación técnica (resumen)

**Stack:** HTML + CSS + JavaScript, con Alpine.js para manejar estados/interacciones sin sumar un framework pesado — decisión tomada porque lo mantiene un equipo de marketing, no un equipo de desarrollo dedicado.

**Infraestructura (costo total: u$s0/mes):**
- **Supabase** (Postgres) para los datos — plan gratuito (500 MB, 50.000 usuarios activos/mes).
- **Cloudflare Pages** para el hosting — plan gratuito, con ancho de banda no limitado y **uso comercial permitido explícitamente** (a diferencia de Vercel, cuyo plan gratuito Hobby prohíbe uso comercial en su propia política — por eso se descartó).
- **Brevo** (ya conectado a la cuenta) para el envío automático de cupones por e-mail en la V2.

**Modelo de datos:** dos tablas para el MVP —
- `coupons`: id, serial, discount_pct, category, channel, points_of_sale, valid_from/valid_to, usage_mode, created_at. El estado (activo/vencido/usado) **no se guarda**, se calcula al consultar (comparando fechas y canjes registrados).
- `redemptions`: id, coupon_id, point_of_sale, redeemed_at — el registro de trazabilidad que hoy no existe.

**Control de acceso:** no se construye un sistema de cuentas individuales en el MVP (hoy ya depende de un único encargado, no de muchos usuarios). Se resuelve con 4 funciones de base de datos: `crear_cupon` y `listar_cupones` (piden una clave de MKT), `validar_cupon` y `confirmar_canje` (sin clave, pero nunca devuelven el listado completo — solo el resultado de un serial puntual). Esto bloquea el acceso a nivel de base de datos, no solo ocultando botones en la pantalla.

**Fases:** Fase 0 (setup de cuentas y esquema) → Fase 1 / MVP (conectar las 4 pantallas ya diseñadas a la base real, probar con un solo local antes de habilitar los tres) → Fase 2 / V2 (login de jugadora + Brevo, SKU específico, kits en tiempo real para organizadores, rol organizador).

## 10. Pendientes de validación comercial (no son decisión de Leandro solo)

- Modalidad de uso del cupón: único uso vs. reutilizable (o ambas según campaña).
- Si la lista Proshop se acepta tal cual para la compra de kits de organizadores, o si hace falta un esquema alternativo.
- Presupuesto y precios de los combos de kits.
- Selección del grupo piloto de organizadores.
- Composición de los premios de la premiación de cierre de noviembre (ya prevista como "a convenir" en el acuerdo con Firpo).

## 11. Próximos pasos

1. Llevar la propuesta comercial y el prototipo visual a la reunión con comercial, resolver los pendientes del punto 10.
2. Conseguir el logo de Torneos Escalera para reemplazar el placeholder en la tarjeta digital.
3. Si se aprueba, arrancar la Fase 0 del plan técnico: dar de alta Supabase y Cloudflare a nombre de Bullpadel Argentina (no cuentas personales).
4. Construir el MVP real conectando las 4 pantallas del prototipo a la base de datos.
5. Probar con el encargado de un solo local antes de habilitarlo en los tres puntos de venta.
