(ns tp04.ej12
  "Ejercicio 12 — Recursión de cola (6 pts). Trazabilidad: F-24, F-25, F-26")

;; Suma todos los elementos con acumulador. DEBE usar recur.
(defn sum-list [nums acc]
  (if (empty? nums)
    acc ;;acc es el acumulador que guarda la suma parcial
    (recur (rest nums) (+ acc (first nums))))) ;;rest nums es la lista sin el primer elemento, y se suma el primer elemento al acumulador

;; Factorial con acumulador. DEBE usar recur.
(defn factorial [n acc]
  (if (zero? n)
    acc
    (recur (dec n) (* acc n)))) ;;dec n es n-1, y se multiplica el acumulador por n

;; Revierte lista con acumulador. DEBE usar recur.
(defn my-reverse [xs acc]
  (if (empty? xs)
    acc ;;acc es el acumulador que guarda la lista invertida
    (recur (rest xs) (cons (first xs) acc))))

;; Cuenta elementos con acumulador. DEBE usar recur.
(defn my-count [xs acc]
  (if (empty? xs)
    acc
    (recur (rest xs) (inc acc))))
;;En la recursion por cola en clojure, se utiliza la función recur para llamar a la función actual con nuevos argumentos. 
;;El acumulador se va actualizando en cada llamada recursiva, 
;;y cuando la lista de entrada está vacía, se devuelve el valor del acumulador.