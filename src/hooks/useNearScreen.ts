import { useEffect, useRef, useState } from 'react'
interface Props {
  // elementRef: React.RefObject<HTMLDivElement>
  distance: string
}
const useNearScreen = ({ distance = '100px' }: Props) => {
  const [isNearScreen, setIsNearScreen] = useState<boolean>(false)
  const fromRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const options = {
      rootMargin: distance
    }
    const callback = (e:IntersectionObserverEntry[], observer:IntersectionObserver) => {
      if (e[0].isIntersecting) {
        setIsNearScreen(true)
        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(callback, options)

    observer.observe(fromRef.current as HTMLElement)
    return () => observer.disconnect()
  })
  return { isNearScreen, fromRef }
}
export default useNearScreen
