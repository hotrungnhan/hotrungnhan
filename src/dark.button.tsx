import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion'
import { useDarkMode } from './dark.context'
function DarkToggleButton() {
  const [isDarkMode, setDarkMode] = useDarkMode()
  const icon = isDarkMode ? (
    <FontAwesomeIcon icon={faSun} className="h-12 w-12" key="sun" />
  ) : (
    <FontAwesomeIcon icon={faMoon} className="h-12 w-12" key="moon" />
  )
  return (
    <button onClick={() => setDarkMode(!isDarkMode)}>
      <AnimatePresence>
        <motion.div
          key={icon.key}
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: '0' }}
        >
          {icon}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}
export default DarkToggleButton
