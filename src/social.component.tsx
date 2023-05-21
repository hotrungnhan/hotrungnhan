import {
  faYoutube,
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
const social = [
  {
    icon: (
      <FontAwesomeIcon
        icon={faFacebook}
        className="text-blue-600 dark:text-blue-400"
        size="2x"
      />
    ),
    text: 'Facebook',
    link: 'https://fb.com/kudou.d.sterain',
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faLinkedin}
        className="text-blue-400 dark:text-blue-200"
        size="2x"
      />
    ),
    text: 'Linkedin',
    link: 'https://www.linkedin.com/in/hotrungnhan',
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faGithub}
        className="text-black dark:text-white "
        size="2x"
      />
    ),
    text: 'Github',
    link: 'https://github.com/hotrungnhan',
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faInstagram}
        className="text-red-500 dark:text-red-400"
        size="2x"
      />
    ),
    text: 'Instagram',
    link: 'https://instagram.com/kudou.sterain',
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faYoutube}
        className="text-red-500 dark:text-red-400"
        size="2x"
      />
    ),
    text: 'Youtube',
    link: 'https://yt.com/@mr.nh_n',
  },
]
function SocialComponent() {
  return (
    <div className="flex flex-col gap-1 px-4">
      {social.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{
            opacity: 0,
            x: '-50%',
            animationDuration: `2s`,
          }}
          whileInView={{
            opacity: 1,
            x: '0',
            animationDuration: `2s`,
          }}
        >
          <div className=" flex w-full shrink-0 flex-row gap-4">
            <a className="basis-10 text-center">{item.icon}</a>
            <a
              href={item.link}
              className="self-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.text}
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
export default SocialComponent
