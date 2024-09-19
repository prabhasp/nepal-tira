(ns app.tsvreader
  (:require
   [uix.core :as uix :refer [defui $]]
   [clojure.string :as str]))

(defn parsetsv [tsv-content]
  (let [lines (str/split-lines tsv-content)
        headers ["राज्य (State)" "मतदाता नामावली दर्ता गर्ने अन्तीम समय सीमा" "निर्वाचन दिन दर्ता"]
        rows (map #(let [columns (str/split % #"\t")]
                     [(nth columns 1)  ; URL
                      (nth columns 3)  ; State name
                      (nth columns 4)  ; Registration deadline
                      (nth columns 5)]) ; Election day registration
                  (rest lines))]
    {:headers headers
     :rows rows}))

(defn search-state [search-term state-info]
  (let [search-lower (str/lower-case search-term)
        state-lower (str/lower-case state-info)]
    (str/includes? state-lower search-lower)))

(defui search-input [{:keys [search-term set-search-term!]}]
  ($ :div.search-container
     ($ :label.search-label {:for "state-search"} "राज्य खोज्नुहोस् (Search State):")
     ($ :div.search-input-wrapper
        ($ :input#state-search.search-input
           {:type "text"
            :placeholder "उदाहरण / Example: क्यालिफोर्निया वा California"
            :value search-term
            :on-change #(set-search-term! (.. % -target -value))}))))

(defui tsvtable [{:keys [tsv-content search-term]}]
  (let [{:keys [headers rows]} (parsetsv tsv-content)
        filtered-rows (if (empty? search-term)
                        rows
                        (filter #(search-state search-term (second %)) rows))]
    ($ :div.table-container
       ($ :table.tsv-table
          ($ :thead
             ($ :tr
                (for [header headers]
                  ($ :th {:key header} header))))
          ($ :tbody
             (for [[row-idx [url state-name deadline election-day]] (map-indexed vector filtered-rows)]
               ($ :tr {:key (str "row-" row-idx)
                       :class (if (even? row-idx) "even-row" "odd-row")}
                  ($ :td {:key (str "cell-" row-idx "-state")}
                     (let [[nepali english] (str/split state-name #"\\n")]
                       ($ :a {:href url :target "_blank"}
                          ($ :div nepali)
                          ($ :div {:style {:font-size "0.8em" :color "#666"}}
                             english))))
                  ($ :td {:key (str "cell-" row-idx "-deadline")}
                     ($ :ul
                        (for [[item-idx item] (map-indexed vector (str/split deadline #"\\n"))]
                          ($ :li {:key (str "item-" row-idx "-" item-idx)}
                             item))))
                  ($ :td {:key (str "cell-" row-idx "-election-day")}
                     election-day))))))))

(defui tsvreader []
  (let [[tsv-content set-tsv-content!] (uix/use-state "")
        [error set-error!] (uix/use-state nil)
        [search-term set-search-term!] (uix/use-state "")]
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
       ($ :h2.sticky-header-2 
          "निर्वाचन मिति: नोभेम्बर ५, २०२४ / २०८१ कार्तिक २०")
       ($ search-input {:search-term search-term
                        :set-search-term! set-search-term!})
       ($ :div.table-scroll-container
          (cond
            error ($ :div "Error: " error)
            (empty? tsv-content) ($ :div "Loading TSV...")
            :else ($ tsvtable {:tsv-content tsv-content
                               :search-term search-term}))))))