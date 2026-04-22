// Ejercicio 8 — Currying (6 pts)
// Trazabilidad: F-16, F-17
//Curryin: convertir función de varios argumentos en cadena de funciones de un argumento cada una. Ej: f(a,b) → f(a)(b)

// Convierte función de 2 args en cadena de funciones de 1 arg.
export function curry2<A, B, C>(fn: (a: A, b: B) => C): (a: A) => (b: B) => C {
  return (a: A) => (b: B) => fn(a, b); // Devuelve una función que recibe el primer argumento y retorna otra función que recibe el segundo argumento y llama a la función original con ambos argumentos
}

// Convierte función de 3 args en cadena de funciones de 1 arg.
export function curry3<A, B, C, D>(fn: (a: A, b: B, c: C) => D): (a: A) => (b: B) => (c: C) => D {
  return (a: A) => (b: B) => (c: C) => fn(a, b, c); // Devuelve una función que recibe el primer argumento y retorna otra función que recibe el segundo argumento y otra que recibe el tercer argumento y llama a la función original con los tres argumentos
}

