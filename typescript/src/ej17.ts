// Ejercicio 17 — Integrador TypeScript (7 pts)
// Trazabilidad: F-33

export type Orden = {
  id: number;
  cliente: string;
  total: number;
  categoria: string;
  activa: boolean;
};

export type Result<T, E> = { status: "ok"; value: T } | { status: "error"; error: E };

// ok si activa Y total > 100. err("orden inactiva") o err("monto insuficiente").
export function clasificarOrden(o: Orden): Result<Orden, string> {
  if (!o.activa) {
    return { status: "error", error: "orden inactiva" };
  }
  if (o.total <= 100) {
    return { status: "error", error: "monto insuficiente" };
  }
  return { status: "ok", value: o };
}

// Partial: retorna fn que crea nueva orden con total reducido por porcentaje.
export function aplicarDescuento(porcentaje: number): (o: Orden) => Orden {
  return (o: Orden): Orden => ({
    ...o, //Se crea una nueva orden con el mismo id, cliente, categoria y activa, pero con el total reducido por el porcentaje de descuento
    total: o.total * (1 - porcentaje / 100),
  });
}

// Pipeline: clasificar → separar ok/err → descuento 10% a aprobadas → sumar totales.
export function procesarOrdenes(ordenes: Orden[]): {
  aprobadas: Orden[];
  rechazadas: string[];
  totalFinal: number;
} {
  const descuento10 = aplicarDescuento(10);
  const clasificaciones = ordenes.map(clasificarOrden);

  const aprobadas = clasificaciones
    .filter((r): r is { status: "ok"; value: Orden } => r.status === "ok")//Se filtra las aprobadas
    .map((r) => descuento10(r.value)); //Se aplica el descuento a las aprobadas con map

  const rechazadas = clasificaciones
    .filter((r): r is { status: "error"; error: string } => r.status === "error")//Se filtra las rechazadas
    .map((r) => r.error); //Se extrae el mensaje de error de las rechazadas con map

  const totalFinal = aprobadas.reduce((acc, o) => acc + o.total, 0); //el total final se calcula sumando los totales de las ordenes aprobadas con reduce

  return { aprobadas, rechazadas, totalFinal };
}
