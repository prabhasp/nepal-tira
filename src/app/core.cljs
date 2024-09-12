(ns app.core
  (:require
   [uix.core :as uix :refer [defui $]]
   [uix.dom :as dom]
   [app.tsvreader :refer [tsvreader]]))

(defui time-section []
  (let [[date set-date!] (uix.core/use-state (js/Date.))
        options (clj->js {:timeZone "Asia/Kathmandu"
                          :hour "2-digit"
                          :minute "2-digit"
                          :second "2-digit"
                          :hour12 true})
        local-offset (- (.getTimezoneOffset date))
        kathmandu-offset (* 5.75 60) ;; Kathmandu is UTC+5:45
        diff (- kathmandu-offset local-offset)
        hrs (int (/ diff 60))
        mins (mod (abs diff) 60)]
    (uix.core/use-effect
     (fn []
       (js/setInterval #(set-date! (js/Date.)) 1000)))
    ($ :.app-section
       ($ :.section-title "Time")
       ($ :.time-display (.toLocaleTimeString date "en-US" options))
       ($ :.hours-ahead (str "which is " (abs hrs) " hrs and " mins " minutes " (if (pos? diff) "ahead of" "behind") " you.")))))

(defui date-section []
  ($ :.app-section
     ($ :.section-title "Date")
     ($ :.patro-display "Today's Nepali Patro date is:")
     ($ :.patro-value "MMM DD B.S")
     ($ :.patro-picker "Pick a date:")
     ($ :.patro-date "The Patro date is:")
     ($ :.patro-value "MMM DD B.S")))

(defui currency-section []
  ($ :.app-section
     ($ :.section-title "Currency")
     ($ :.currency-rates "Today's conversion rates:")
     ($ :.usd-rate "1 USD = ## NPR")
     ($ :.aud-rate "1 AUD = ## NPR")
     ($ :.currency-input "Amount:")
     ($ :.currency-value "0.00")))

(defui app []
  ($ :.app
     ($ :.app-header "Aile Nepal tira...")
     ($ :.three-body
        ($ time-section)

        ;($ date-section)
        ;($ currency-section)
        )
     ($ :.table-section
        ($ tsvreader))))
(defonce root
  (dom/create-root (js/document.getElementById "root")))

(defn render []
  (dom/render-root ($ app) root))

(defn ^:export init []
  (render))
