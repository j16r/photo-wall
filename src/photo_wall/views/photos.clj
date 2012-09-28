(ns photo-wall.views.photos
  (:use [hiccup.core :only [html h]]
        [hiccup.page-helpers :only [doctype]])
  (:require [photo-wall.views.layout :as layout]))

(defn index []
  (layout/common "PHOTO-WALL"))
