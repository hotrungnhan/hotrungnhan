import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret,
  faBars,
  faTimes,
  faTint,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faCodepen,
  faTwitter,
  faAmazon,
} from '@fortawesome/free-brands-svg-icons'

let font = [
  faUserSecret,
  faFacebook,
  faCodepen,
  faTwitter,
  faAmazon,
  faBars,
  faTimes,
  faTint,
]
;(function () {
  library.add(font)
})()
