(ns hello-world.hello)
(def photo 
  (.jQuery "li:first" ))
(.log js/console photo)
