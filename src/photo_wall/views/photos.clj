(ns photo-wall.views.photos
  (:use [hiccup core])
  (:require [photo-wall.views.layout :as layout]))

(defn display-photos [photos]
  [:ul
    (map (fn [photo]
      [:li
        [:img {:src (:avatar photo) :width "150px"}]
        [:div {:class 'person} (h (:name photo))]])
      photos)])

(defn index [photos]
  (layout/common "PHOTO-WALL"
                 (display-photos photos)))
