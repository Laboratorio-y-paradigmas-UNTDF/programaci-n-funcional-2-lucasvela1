(ns tp04.ej04
  "Ejercicio 4 — Pipeline con ->> (5 pts). Trazabilidad: F-08")

;; Filtra activas, extrae :total, suma.
(defn total-activas [ordenes]
  ;; TODO: implementar con ->>
  (->> ordenes ;;->>Toma los resultados de cada paso y los pasa como último argumento a la siguiente función
  (filter :activa?) ;;Se filtran por activas
       (map :total) ;;Se extrae el total de cada orden activa
       (reduce + 0))) ;;Se suman los totales, comenzando con 0 como valor inicial

;; Filtra activas, devuelve vector de :cliente.
(defn nombres-activas [ordenes]
  ;; TODO: implementar con ->>
  (->> ordenes
  (filter :activa?) ;;Se filtran por activas
       (map :cliente) ;;Se extrae el nombre del cliente de cada orden activa
       (into []))) ;;Se convierte el resultado en un vector

;; Filtra pares, eleva al cuadrado, suma.
(defn cuadrados-pares [nums]
  ;; TODO: implementar con ->>
  (->> nums
       (filter even?)
       (map #(* % %))
       (reduce + 0)))
