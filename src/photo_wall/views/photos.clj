(ns photo-wall.views.photos
  (:use [hiccup core])
  (:require [photo-wall.views.layout :as layout]))

(defn display-photos [photos]
  [:ul
    (map (fn [photo]
      [:li {:style "display: none;"}
        [:img {:src (:avatar photo)}]
        [:div {:class 'person} (h (:name photo))]])
      photos)])

(defn index [photos]
  (layout/common "PHOTO-WALL"
                 (display-photos photos)))
