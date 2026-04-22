(ns tp04.ej16
  "Ejercicio 16 — DSL data-driven (5 pts). Trazabilidad: F-31"
  (:require [clojure.string :as str]))

;; Vector de reglas: {:field :name, :pred fn, :msg "..."}
(def user-rules
  ;; TODO: definir al menos 3 reglas (nombre no vacío, email con @, edad >= 18)
  [{:field :name
    :pred #(not (str/blank? %)) ;;Predicado que verifica que el nombre no esté vacío
    :msg "nombre obligatorio"}
   {:field :email
    :pred #(and (string? %) (str/includes? % "@"))
    :msg "email invalido"}
   {:field :age
    :pred #(>= % 18)
    :msg "debe ser mayor o igual a 18"}])

;; Aplica todas las reglas a data. Retorna vector de {:field :error} (vacío si ok).
(defn validate [rules data]
  (vec (for [{:keys [field pred msg]} rules
             :let [value (get data field)]
             :when (not (pred value))]
         {:field field :error msg})))

;; true si no hay errores.
(defn valid? [rules data]
  (empty? (validate rules data)))
