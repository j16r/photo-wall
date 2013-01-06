(defproject photo-wall "1.0.0-SNAPSHOT"
  :main photo-wall.core
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [ring/ring-jetty-adapter "1.1.0"]
                 [hiccup "1.0.1"]
                 [enlive "1.0.1"]
                 [compojure "1.1.3"]
                 [jayq "2.0.0"]]
  :plugins [[lein-ring "0.7.1"]
            [lein-cljsbuild "0.2.10"]]
  :ring {:handler photo-wall.core/application}
  :hooks [leiningen.cljsbuild]
  :cljsbuild {
    :builds [{
        :source-path "src/cljs"
        :compiler {
          :output-to "resources/public/application.js"
          :optimizations :whitespace
          :pretty-print true}}]})
