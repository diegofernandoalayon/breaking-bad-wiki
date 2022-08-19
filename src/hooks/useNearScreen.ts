import { useEffect, useRef, useState } from 'react'
interface Props {
  // elementRef: React.RefObject<HTMLDivElement>
  distance: string
  once: boolean
}
const useNearScreen = ({ distance = '100px', once = true }: Props) => {
  const [isNearScreen, setIsNearScreen] = useState<boolean>(false)
  const fromRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const options = {
      rootMargin: distance
    }
    const callback = (e:IntersectionObserverEntry[], observer:IntersectionObserver) => {
      if (e[0].isIntersecting) {
        setIsNearScreen(true)
        once && observer.disconnect()
      } else {
        !once && setIsNearScreen(false)
      }
    }

    const observer = new IntersectionObserver(callback, options)

    observer.observe(fromRef.current as HTMLElement)
    return () => observer.disconnect()
  })
  return { isNearScreen, fromRef }
}
export default useNearScreen
