(ns photo-wall.controllers.photos
  (:use [compojure.core :only [defroutes GET POST]])
  (:require [clojure.string :as str]
            [ring.util.response :as ring]
            [photo-wall.views.photos :as view]))

(def photos ["photo 1" "photo 2" "photo 3"])

(defn index []
  (view/index photos))

(defroutes routes
  (GET  "/" [] (index)))
