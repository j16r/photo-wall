(defproject photo-wall "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [ring/ring-jetty-adapter "1.1.0"]
                 [hiccup "1.0.1"]
                 [enlive "1.0.1"]
                 [compojure "1.1.3"]]
  :plugins [[lein-ring "0.7.1"]]
  :ring {:handler photo-wall.core/application})
