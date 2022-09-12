import React, { PropsWithChildren, useEffect, useState } from 'react'
const DarkModeContext = React.createContext({
  isDarkMode: false,
  setDarkMode: (bool: boolean) => {},
})

export const useDarkMode = (): [boolean, (bool: boolean) => void] => {
  const { isDarkMode, setDarkMode } = React.useContext(DarkModeContext)
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('isDarkMode', String(isDarkMode))
  }, [isDarkMode])
  return [isDarkMode, setDarkMode]
}
export const DarkModeProvider = (props: PropsWithChildren) => {
  const [isDarkMode, setDarkMode] = useState(
    localStorage.getItem('isDarkMode') == 'true'
  )

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setDarkMode }}>
      {props.children}
    </DarkModeContext.Provider>
  )
}
