(ns app.tsvreader
  (:require
   [uix.core :as uix :refer [defui $]]
   [clojure.string :as str]))

(defn parsetsv [tsv-content]
  (let [lines (str/split-lines tsv-content)
        headers (rest (str/split (first lines) #"\t"))  ; Skip the first empty header
        rows (map #(str/split % #"\t") (rest lines))]
    {:headers headers
     :rows rows}))

(defui tsvtable [{:keys [tsv-content]}]
  (let [{:keys [headers rows]} (parsetsv tsv-content)]
    ($ :div.table-container
       ($ :table.tsv-table
          ($ :thead
             ($ :tr
                (for [[header-idx header] (map-indexed vector headers)]
                  ($ :th {:key (str "header-" header-idx)
                          :class (when (= header-idx 0) "first-column")}
                     header))))
          ($ :tbody
             (for [[row-idx row] (map-indexed vector rows)]
               (let [url (first row)
                     display-row (rest row)]
                 ($ :tr {:key (str "row-" row-idx)
                         :class (if (even? row-idx) "even-row" "odd-row")}
                    (for [[col-idx cell] (map-indexed vector display-row)]
                      (if (= col-idx 0)  ; First visible column (originally second)
                        ($ :td {:key (str "cell-" row-idx "-" col-idx)
                                :class "first-column"}
                           ($ :a {:key (str "link-" row-idx)
                                  :href url
                                  :target "_blank"}
                              cell))
                        (if (= col-idx 1)  ; Second visible column (originally third)
                          ($ :td {:key (str "cell-" row-idx "-" col-idx)}
                             ($ :ul
                                (for [[item-idx item] (map-indexed vector (str/split cell #"\\n"))]
                                  ($ :li {:key (str "item-" row-idx "-" item-idx)}
                                     item))))
                          ($ :td {:key (str "cell-" row-idx "-" col-idx)}
                             cell))))))))))))

(defui tsvreader []
  (let [[tsv-content set-tsv-content!] (uix/use-state "")
        [error set-error!] (uix/use-state nil)]
    (uix/use-effect
     (fn []
       (-> (js/fetch "voterinfo.tsv")
           (.then (fn [response]
                    (if (.-ok response)
                      (.text response)
                      (throw (js/Error. (str "error! status: " (.-status response)))))))
           (.then #(set-tsv-content! %))
           (.catch #(set-error! (str "Failed to load TSV: " (.-message %))))))
     [])
    ($ :div.sticky-container
       ($ :h1.sticky-header
          "२०२४ अमेरिकी चुनावको लागि महत्त्वपूर्ण जानकारी")
       ($ :div.table-scroll-container
          (cond
            error ($ :div "Error: " error)
            (empty? tsv-content) ($ :div "Loading TSV...")
            :else ($ tsvtable {:tsv-content tsv-content}))))))