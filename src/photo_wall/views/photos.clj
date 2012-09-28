(ns photo-wall.views.photos
  (:use [hiccup.core :only [html h]]
        [hiccup.page-helpers :only [doctype]])
  (:require [photo-wall.views.layout :as layout]))

(defn display-photos [photos]
  [:ul
    (map (fn [photo] [:li (h photo)]) photos)])

(defn index [photos]
  (layout/common "PHOTO-WALL"
                 (display-photos photos)))
