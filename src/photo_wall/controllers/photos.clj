(ns photo-wall.controllers.photos
  (:use [compojure.core :only [defroutes GET POST]])
  (:require [clojure.string :as str]
            [ring.util.response :as ring]
            [photo-wall.views.photos :as view]))

(def photos [{:name "Desmond" :avatar
              "https://pbs.twimg.com/media/A3u8ivyCMAATxeh.jpg:large"}
             {:name "Barker" :avatar
              "https://twimg0-a.akamaihd.net/profile_images/2031425739/a180e7c27d0a11e18bb812313804a181_7.jpg"}
              {:name "Robbie" :avatar
               "https://pbs.twimg.com/media/A1AlpX9CAAAgsPb.jpg:large"}
            {:name "Mike" :avatar
               "https://pbs.twimg.com/media/A1_qI1BCIAAAe4G.jpg:large"}
            {:name "Steve" :avatar
               "https://pbs.twimg.com/media/A2NUOgfCQAAD5LC.jpg:large"}])

(defn index []
  (view/index photos))

(defroutes routes
  (GET  "/" [] (index)))
