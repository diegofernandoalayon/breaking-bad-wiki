// react
import { useState, useEffect } from 'react'
// types
import { Character } from '../types'
// services
import getCharacters from '../services/getCharacters'

const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(0)
  useEffect(() => {
    setLoading(true)
    getCharacters({ page })
      .then((res) => {
        setCharacters(c => [...c, ...res])
        setLoading(false)
      })
  }, [page])

  return { characters, loading, setPage }
}
export default useCharacters
