(ns tp04.ej07
  "Ejercicio 7 — Partial en Clojure (5 pts). Trazabilidad: F-15"
  (:require [clojure.string :as str]))

;; Retorna {:status :ok :value value} si no vacío, {:status :error :error "FIELD es obligatorio"}.
(defn required-field [field-name value]
  (if (str/blank? value) ;;str/blank? devuelve true si el string es nil, vacío o solo contiene espacios en blanco
    {:status :error :error (str field-name " es obligatorio")}
    {:status :ok :value value}))

(def doble
  (partial * 2)
  )

(def triple
  (partial * 3) ;;Partial viene incluido en clojure
  )

(def validate-name
  (partial required-field "nombre")
  )

(def validate-email
  (partial required-field "email")
  )
