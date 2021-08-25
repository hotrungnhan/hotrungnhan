import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faBars, faTimes, faCircle } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faCodepen, faTwitter, faAmazon } from '@fortawesome/free-brands-svg-icons'

let font = [
    faUserSecret,
    faFacebook,
    faCodepen,
    faTwitter,
    faAmazon,
    faBars,
    faTimes,
    faCircle,
]
    ; (function () {
        library.add(font)
    })()
