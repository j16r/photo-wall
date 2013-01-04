(ns application
  (:use [jayq.core :only [$ document-ready add-class remove-class fade-in fade-out]]))

(defn swap-photos []
  (if (empty? ($ "li.visible"))
    (-> ($ "li:first") (add-class "visible"))
    (-> ($ "li.visible:first")
      (fade-out
        1000
        (fn []
          (-> ($ "li.visible + li")
            (add-class "visible")
            (fade-in 1000
                    #(-> ($ "li.visible:first")
                        (remove-class "visible")))))))))

(document-ready
  (do
    (js/setInterval swap-photos 3000)))
