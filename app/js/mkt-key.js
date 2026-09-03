const STORAGE_KEY = 'te_mkt_key';

export function getMktKey() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) || '';
  } catch {
    return '';
  }
}

export function setMktKey(key) {
  try {
    sessionStorage.setItem(STORAGE_KEY, key);
  } catch {
    /* sessionStorage no disponible */
  }
}

export function clearMktKey() {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    /* sessionStorage no disponible */
  }
}

// true si el error de Supabase corresponde al rechazo de clave del RPC (ver funcion crear_cupon/listar_cupones)
export function esErrorDeAutorizacion(error) {
  return !!error && /no autorizado/i.test(error.message || '');
}
