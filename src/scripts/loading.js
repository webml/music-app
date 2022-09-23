import { useState, useEffect } from 'react'

export const loading = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)

      return () => clearTimeout(timer)
    }, 5000)
  })

  return isLoading
}
