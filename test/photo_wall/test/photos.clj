(ns photo-wall.test.photos
  (:use [photo-wall.controllers.photos])
  (:use [midje.sweet]))

(fact "format-data makes maps of names and avatars"
  (format-data [{:attrs {:title "Gilgamesh" :src "Uruk"}}
                {:attrs {:title "Ubara-tutu" :src "Shuruppak"}}])
      => [{:name "Gilgamesh"  :avatar "Uruk"}
          {:name "Ubara-tutu" :avatar "Shuruppak"}])

(fact "remove-blanks removes photos with 'default_profile_photo' in their avatar"
      (remove-blanks [{:avatar "Shuruppak/default_photo_profile"}
                      {:avatar "eridu/default_profile_photo"}])
      => [{:avatar "Shuruppak/default_photo_profile"}])

(fact "embiggen swaps 'popup_thumb' for 'directory' in avatar strings"
      (embiggen [{:avatar "Larsa/popup_thumb/1"}
                      {:avatar "eridu/popup_thumb/25"}])
      => [{:avatar "Larsa/directory/1"}
          {:avatar "eridu/directory/25"}])
