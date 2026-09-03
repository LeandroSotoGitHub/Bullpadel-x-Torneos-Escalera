# Torneos Escalera x Bullpadel — Cupones

MVP funcional del sistema de cupones digitales del acuerdo Bullpadel x Torneos
Escalera. Contexto completo del proyecto en [`Contexto/context.md`](Contexto/context.md).

## Estructura

- **`app/`** — la aplicación real (HTML + Alpine.js + Supabase). Esto es lo que se despliega.
- **`Mock Up/`** — mockups estáticos de referencia visual (no funcionales), usados como base de diseño.
- **`Contexto/`** — documentación del proyecto (contexto comercial, plan técnico).

## Stack

- **Front-end:** HTML + Alpine.js, sin build step.
- **Backend:** Supabase (Postgres), proyecto `torneos-escalera-cupones` (org `LeandroSotoGitHub's Org`, región `sa-east-1`).
- **Control de acceso:** sin sistema de cuentas. Las tablas `coupons`, `redemptions` y
  `app_secrets` tienen RLS habilitado sin políticas (bloqueadas a nivel de base de datos).
  Todo el acceso pasa por 8 funciones RPC `security definer`:
  - `crear_cupon` / `crear_cupones_lote` / `listar_cupones` / `editar_cupon` / `eliminar_cupon` / `listar_canjes` — requieren la clave de acceso MKT.
  - `validar_cupon` / `confirmar_canje` — sin clave, pero solo devuelven el resultado de un serial puntual (nunca el listado completo). `confirmar_canje` exige numero de factura, sin eso rechaza el canje.

## CSS

Cada página HTML es solo markup + bindings de Alpine — nada de `<style>` ni `style=""`
inline. Los estilos viven en `app/css/`:

- **`base.css`** — reset, tipografía, variables de color (`--color-*`), estilos base de link/input. Se carga en las 5 páginas.
- **`mkt-panel.css`** — componentes compartidos entre `crear-cupon.html` y `listado-cupones.html` (topbar, porton de clave MKT, card, pill, botón, toggle).
- **`crear-cupon.css` / `listado-cupones.css` / `validar-cupon.css` / `tarjeta-digital.css` / `index.css`** — layout y componentes propios de cada página.

## Páginas

| Archivo | Quién la usa | Acceso |
|---|---|---|
| `index.html` | Punto de entrada | Sin clave |
| `crear-cupon.html` | MKT / comercial | Clave MKT |
| `listado-cupones.html` | MKT / comercial | Clave MKT |
| `validar-cupon.html` | Vendedor de local (mobile) | Sin clave |
| `tarjeta-digital.html?serial=XXX` | Jugadora (vía link) | Sin clave |

La clave MKT se pide una vez y se guarda en `sessionStorage` del navegador — nunca
está en el código. **No se versiona en git.**

`crear-cupon.html` soporta generar varios cupones de una sola vez (mismas
condiciones, serial propio cada uno) y descargarlos todos juntos como un
`.zip` de tarjetas PNG. El ZIP se arma en el navegador con JSZip, reusando
`tarjeta-digital.html` — se carga un serial por vez en un iframe oculto y se
reaprovecha su mismo render de tarjeta + QR (evita duplicar esa lógica).

`validar-cupon.html` exige elegir el local (modal obligatorio, no se puede
cerrar sin elegir uno) y cargar el número de factura antes de poder confirmar
un canje. Esos dos datos quedan grabados en `redemptions` junto con la fecha.
Desde `listado-cupones.html`, el número de canjes de cada cupón es un link
que abre el detalle (local + factura + fecha/hora de cada canje individual).

El QR de `tarjeta-digital.html` codifica **solo el serial en texto plano**
(pensado para un lector/pistola en caja) — nunca un link a ninguna pantalla
interna, para que no sea posible abrir el portal de validación escaneándolo
con la cámara de un celular.

## Correr local

Necesita un servidor estático (no funciona con `file://` porque usa ES modules):

```bash
python -m http.server 5173 --directory app
```

Después abrir `http://localhost:5173`. También hay un `.claude/launch.json` configurado
para levantarlo automáticamente desde el Browser pane de Claude Code.

## Deploy

Vercel, proyecto `bullpadel-torneos-escalera`, conectado al repo de GitHub
(rama `main`, root directory `app/`). Cada `git push` a `main` despliega
solo — no hace falta subir archivos a mano.

Sitio en vivo: https://bullpadel-torneos-escalera.vercel.app

## Pendiente

Ver punto 10 y 11 de [`Contexto/context.md`](Contexto/context.md) — validaciones comerciales
pendientes (modalidad de uso, lista Proshop, presupuesto de kits) y roadmap V2
(login de jugadora + Brevo, SKU específico, rol organizador).
