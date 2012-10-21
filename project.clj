(defproject photo-wall "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [ring/ring-jetty-adapter "1.1.0"]
                 [hiccup "1.0.1"]
                 [enlive "1.0.1"]
                 [compojure "1.1.3"]
                 [org.clojure/clojurescript "0.0-1424"]]
  :plugins [[lein-ring "0.7.1"]
            [lein-cljsbuild "0.2.3"]]
  :ring {:handler photo-wall.core/application}
  :cljsbuild {
    :builds [{
        :source-path "src/cljs"
        :compiler {
          :output-to "resources/public/hello.js" 
          :optimizations :advanced
          :pretty-print true}}]})
