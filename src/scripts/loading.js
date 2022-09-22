import { useState, useEffect } from 'react'

export const loading = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  })

  return isLoading
}
