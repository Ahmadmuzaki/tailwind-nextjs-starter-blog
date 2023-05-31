import { useEffect, useState } from 'react'

const useReadingProgress = () => {
  const [completion, setCompletion] = useState(0)
  useEffect(() => {
    const scrollListener = () => {
      const scrollMax = document.body.scrollHeight - window.innerHeight
      setCompletion(Math.min(window.pageYOffset / scrollMax, 100))
    }
    document.addEventListener('scroll', scrollListener)
    return () => document.removeEventListener('scroll', scrollListener)
  }, [])

  return completion
}

export default useReadingProgress
