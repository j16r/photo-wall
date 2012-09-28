(ns photo-wall.controllers.photos
  (:use [compojure.core :only [defroutes GET POST]])
  (:require [clojure.string :as str]
            [ring.util.response :as ring]
            [photo-wall.views.photos :as view]))

(defn index []
  (view/index))

(defroutes routes
  (GET  "/" [] (index)))
