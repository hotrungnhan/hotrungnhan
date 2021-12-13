import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret,
  faBars,
  faTimes,
  faTint,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faCodepen, faTwitter, faAmazon,
} from '@fortawesome/free-brands-svg-icons'

const font = [
  faUserSecret,
  faFacebook,
  faCodepen,
  faTwitter,
  faAmazon,
  faBars,
  faTimes,
  faTint,
]
library.add(...font)