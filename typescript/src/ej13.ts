// Ejercicio 13 — Recursión de cola TS (5 pts)
// Trazabilidad: F-27

export type TreeNode = { value: number; children: TreeNode[] };

// Suma con acumulador (default 0). Recursiva, sin loops.
export function sumList(nums: number[], acc: number = 0): number {
  if (nums.length === 0)  return acc;
  const [head, ...tail] = nums; // Desestructuramos el array para obtener la cabeza y la cola
  return sumList(tail, acc + head); // Llamamos recursivamente a sumList con la cola y el acumulador actualizado con la cabeza 
} //Head es primer elemento de la lista, tail es el resto

// Factorial con acumulador (default 1). Recursiva, sin loops.
export function factorial(n: number, acc: number = 1): number {
  if (n === 0) return acc; // El factorial de 0 es 1, así que devolvemos el acumulador cuando n llegue a 0
  return factorial(n - 1, acc * n); // Llamamos recursivamente a factorial con n-1 y el acumulador actualizado multiplicando por n
}

// Busca value en árbol N-ario pre-order. Retorna valor o null.
export function findInTree(nodes: TreeNode[], target: number): number | null {
  if (nodes.length === 0) return null; // Si no hay nodos, retornamos null
  const [head, ...tail] = nodes; // Desestructuramos el array de nodos para obtener la cabeza y la cola
  if (head.value === target) return head.value; // Si el valor de la cabeza es el target, lo retornamos
  const foundInChildren = findInTree(head.children, target); // Buscamos el target en los hijos de la cabeza
  if (foundInChildren !== null) return foundInChildren; // Si encontramos el target en los hijos, lo retornamos
  return findInTree(tail, target); // Si no lo encontramos en la cabeza ni en sus hijos, buscamos en la cola de nodos
}
