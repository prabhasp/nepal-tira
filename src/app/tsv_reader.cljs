(ns app.tsv-reader
  (:require
   [uix.core :as uix :refer [defui $]]
   [clojure.string :as str]))

(defn parse-tsv [tsv-content]
  (let [lines (str/split-lines tsv-content)
        headers (rest (str/split (first lines) #"\t"))  ; Skip the first empty header
        rows (map #(str/split % #"\t") (rest lines))]
    {:headers headers
     :rows rows}))

(defui tsv-table [{:keys [tsv-content]}]
  (let [{:keys [headers rows]} (parse-tsv tsv-content)]
    ($ :div {:style {:margin "20px 0"
                     :fontFamily "Arial, sans-serif"}}
       ($ :table.tsv-table
          {:style {:width "100%"
                   :borderCollapse "collapse"
                   :boxShadow "0 4px 6px rgba(0, 0, 0, 0.1)"
                   :borderRadius "8px"
                   :overflow "hidden"}}
          ($ :thead
             ($ :tr
                (for [[header-idx header] (map-indexed vector headers)]
                  ($ :th {:key (str "header-" header-idx)
                          :style {:background "#f8f8f8"
                                  :color "#333"
                                  :fontWeight "bold"
                                  :padding "12px 15px"
                                  :textAlign "left"
                                  :borderBottom "2px solid #ddd"
                                  :textTransform "uppercase"}}
                     header))))
          ($ :tbody
             (for [[row-idx row] (map-indexed vector rows)]
               (let [is-even? (even? row-idx)
                     url (first row)
                     display-row (rest row)]
                 ($ :tr {:key (str "row-" row-idx)
                         :style (when is-even? {:backgroundColor "#f9f9f9"})}
                    (for [[col-idx cell] (map-indexed vector display-row)]
                      (if (= col-idx 0)  ; First visible column (originally second)
                        ($ :td {:key (str "cell-" row-idx "-" col-idx)
                                :style {:padding "10px 15px"
                                        :borderBottom "1px solid #e0e0e0"}}
                           ($ :a {:key (str "link-" row-idx)
                                  :href url
                                  :target "_blank"}
                              cell))
                        (if (= col-idx 1)  ; Second visible column (originally third)
                          ($ :td {:key (str "cell-" row-idx "-" col-idx)
                                  :style {:padding "10px 15px"
                                          :borderBottom "1px solid #e0e0e0"}}
                             ($ :ul {:key (str "list-" row-idx)}
                                (for [[item-idx item] (map-indexed vector (str/split cell #"\\n"))] ;trying to split into bullets
                                  ($ :li {:key (str "item-" row-idx "-" item-idx)}
                                     item))))
                          ($ :td {:key (str "cell-" row-idx "-" col-idx)
                                  :style {:padding "10px 15px"
                                          :borderBottom "1px solid #e0e0e0"}}
                             cell))))))))))))

(defui tsv-reader []
  (let [[tsv-content set-tsv-content!] (uix/use-state "")]
    (uix/use-effect
     (fn []
       (-> (js/fetch "voter-info.tsv")
           (.then #(.text %))
           (.then #(set-tsv-content! %))))
     [])
    (if (empty? tsv-content)
      ($ :div "Loading TSV...")
      ($ tsv-table {:tsv-content tsv-content}))))