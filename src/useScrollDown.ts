import { useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

export function useScrollDown(): [boolean] {
  const { scrollY } = useScroll()
  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    scrollY.onChange((value) => {
      value > 0 ? setIsScroll(true) : setIsScroll(false)
    })
  }, [scrollY])
  return [isScroll]
}
