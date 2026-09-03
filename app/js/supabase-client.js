import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Claves publicas (anon key). Estan protegidas por RLS: las tablas coupons,
// redemptions y app_secrets no son accesibles directamente, solo a traves
// de las funciones RPC (crear_cupon, listar_cupones, validar_cupon, confirmar_canje).
const SUPABASE_URL = 'https://abogjrcqwdjjolssagmt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFib2dqcmNxd2Rqam9sc3NhZ210Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg0NTE2ODIsImV4cCI6MjEwNDAyNzY4Mn0.tN78SOZzsv9pgNX4dAxkTarZUepOs82k8C1l8-iRuww';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const PUNTOS_DE_VENTA = ['Unicenter', 'Portal Palermo', 'Alcorta'];
export const CATEGORIAS = ['Bolsos', 'Paletas', 'Indumentaria', 'Accesorios', 'Todas las categorías'];

export function formatFecha(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${d}/${m}`;
}

export function formatFechaCompleta(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}

export function formatFechaHora(timestamptz) {
  if (!timestamptz) return '';
  const fecha = new Date(timestamptz);
  const dd = String(fecha.getDate()).padStart(2, '0');
  const mm = String(fecha.getMonth() + 1).padStart(2, '0');
  const hh = String(fecha.getHours()).padStart(2, '0');
  const min = String(fecha.getMinutes()).padStart(2, '0');
  return `${dd}/${mm} ${hh}:${min}`;
}
