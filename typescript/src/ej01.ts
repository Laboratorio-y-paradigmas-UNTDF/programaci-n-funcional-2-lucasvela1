// Ejercicio 1 — Pipeline filter/map/reduce (5 pts)
// Trazabilidad: F-04, F-05, F-10

export type Orden = {
  id: number;
  cliente: string;
  total: number;
  categoria: string;
  activa: boolean;
};

// Filtra órdenes activas, extrae totales y los suma.
export function filtrarActivasYSumar(ordenes: Orden[]): number {
  return ordenes
    .filter(orden => orden.activa) // Filtra solo las órdenes activas
    .map(orden => orden.total) // Extrae el total de cada orden activa
    .reduce((suma, total) => suma + total, 0); // Suma todos los totales, empezando desde 0
}

// Filtra las activas y devuelve un array con sus totales.
export function obtenerTotalesActivas(ordenes: Orden[]): number[] {
  return ordenes
    .filter(orden => orden.activa) // Filtra solo las órdenes activas
    .map(orden => orden.total); // Extrae el total de cada orden activa y devuelve un nuevo array con esos totales
}

// Cuenta cuántas órdenes hay por cada categoría (usar reduce).
export function contarPorCategoria(ordenes: Orden[]): Record<string, number> {
  return ordenes.reduce((acc, orden) => {
    if (orden.categoria in acc) {
      acc[orden.categoria] += 1; // Si la categoría ya existe en el acumulador, incrementa su contador
    } else {
      acc[orden.categoria] = 1; // Si la categoría no existe, inicializa su contador en 1
    }
    return acc;
  }, {} as Record<string, number>);
}
