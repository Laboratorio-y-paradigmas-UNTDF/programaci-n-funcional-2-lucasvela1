// Ejercicio 6 — Partial application (6 pts)
// Trazabilidad: F-13, F-14

export type Result<T, E> = { status: "ok"; value: T } | { status: "error"; error: E };

// Partial: recibe fn de 2 args y primer arg, devuelve fn de 1 arg.
export function partial<A, B, C>(fn: (a: A, b: B) => C, a: A): (b: B) => C {
  return (b:B) => fn(a, b); // Devuelve una función que recibe el segundo argumento y llama a la función original con ambos argumentos
}

// Fábrica de saludadores.
export function makeGreeter(saludo: string): (nombre: string) => string {
  return (nombre: string) => `${saludo}, ${nombre}`; // Devuelve una función que recibe un nombre y devuelve el saludo personalizado
} //El $ es para interpolar la variable saludo y nombre dentro de la cadena de texto
//Retorna una función como lambda


// Fábrica de validadores: ok si no vacío tras trim, error si vacío.
export function makeRequiredValidator(fieldName: string): (value: string) => Result<string, string> {
  return (value: string) => {
    const trimmedValue =value.trim();
    if (trimmedValue){
      return { status: "ok", value: trimmedValue }; // Si el valor no está vacío después de hacer trim, retornamos un resultado exitoso con el valor
    } else {
      return { status: "error", error: `${fieldName} es obligatorio` }; // Si el valor está vacío, retornamos un resultado de error con un mensaje indicando que el campo es requerido
    };
  };
}   
