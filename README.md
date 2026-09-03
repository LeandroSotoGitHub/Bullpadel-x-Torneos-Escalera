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
  Todo el acceso pasa por 4 funciones RPC `security definer`:
  - `crear_cupon` / `listar_cupones` — requieren la clave de acceso MKT.
  - `validar_cupon` / `confirmar_canje` — sin clave, pero solo devuelven el resultado de un serial puntual (nunca el listado completo).

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

## Correr local

Necesita un servidor estático (no funciona con `file://` porque usa ES modules):

```bash
python -m http.server 5173 --directory app
```

Después abrir `http://localhost:5173`. También hay un `.claude/launch.json` configurado
para levantarlo automáticamente desde el Browser pane de Claude Code.

## Deploy

Cloudflare Pages, apuntando el build directory a `app/` (sin build command, framework preset "None").
El plan gratuito de Cloudflare Pages permite uso comercial explícitamente.

## Pendiente

Ver punto 10 y 11 de [`Contexto/context.md`](Contexto/context.md) — validaciones comerciales
pendientes (modalidad de uso, lista Proshop, presupuesto de kits) y roadmap V2
(login de jugadora + Brevo, SKU específico, rol organizador).
