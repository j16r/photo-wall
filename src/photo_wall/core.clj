(ns photo-wall.core
  (:use [compojure.core :only [defroutes]])
  (:require [compojure.route :as route]
            [compojure.handler :as handler]
            [ring.adapter.jetty :as ring]
            [photo-wall.controllers.photos]
            [photo-wall.views.layout :as layout]))

(defroutes routes
  photo-wall.controllers.photos/routes
  (route/resources "/")
  (route/not-found (layout/four-oh-four)))

(def application (handler/site routes))

(defn start [port]
  (ring/run-jetty #'application {:port (or port 8080) :join? false}))

(defn -main [& args]
  (let [port (-> (first args) (or 8080) (Integer.))]
    (start port)))
