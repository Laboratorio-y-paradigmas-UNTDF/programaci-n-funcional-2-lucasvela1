// Ejercicio 11 — Middleware como HOF (6 pts)
// Trazabilidad: F-22, F-23

export type Request = { headers: Record<string, string>; body: unknown; meta: { logs: string[] } };
export type Response = { status: number; body: unknown };
export type Handler = (req: Request) => Response;
export type Middleware = (handler: Handler) => Handler;

// Si authorization header es "Bearer <secret>", continúa. Si no, 401.
export function withAuth(secret: string): Middleware {
  return (handler: Handler): Handler =>  {
    return (req: Request): Response => {
      const authHeader = req.headers["authorization"];

      if (authHeader === `Bearer ${secret}`) {
        return handler(req); // Si el header de autorización es correcto, llamamos al handler con la request original
      } else {
        return { status: 401, body: { error: "unauthorized" } }; // Si el header de autorización es incorrecto, retornamos una respuesta con status 401 y un mensaje de error
      };
    };
  };
}


// Agrega "[prefix] request" a req.meta.logs antes de llamar al handler.
export function withLogging(prefix: string): Middleware {
  return (handler: Handler): Handler => {
    return (req: Request): Response => {
      const logEntry = `[${prefix}] request`; // Creamos la entrada de log con el prefijo y la palabra "request"
      req.meta.logs.push(logEntry); // Agregamos la entrada de log a req.meta.logs
      return handler(req); // Llamamos al handler con la request modificada
    };
  };
}
