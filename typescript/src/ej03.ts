// Ejercicio 3 — Inmutabilidad con spread (4 pts)
// Trazabilidad: F-09

export type Persona = {
  readonly nombre: string;
  readonly edad: number;
  readonly hobbies: readonly string[];
};

export type User = {
  readonly name: string;
  readonly email: string;
};

// Devuelve nueva persona con edad + 1.
export function cumpleanios(p: Persona): Persona {
  return {
    ...p, //Crea una nueva copia
    edad: p.edad + 1  //Y a esa copia le incrementa la edad
  };
}

// Devuelve nueva persona con hobby agregado al final.
export function agregarHobby(p: Persona, hobby: string): Persona {
  return {
    ...p,
    hobbies: [...p.hobbies, hobby]
  };
}


// Devuelve nueva persona con nombre actualizado.
export function actualizarNombre(p: Persona, nombre: string): Persona {
  return {
    ...p,
    nombre: nombre
  };
}

// Trim name, toLowerCase + trim email. Retorna nuevo objeto.
export function normalizeUser(u: User): User {
  return {
    name: u.name.trim(),
    email: u.email.trim().toLowerCase() //Primero se hace el trim y luego el lowerCase
  };
}
