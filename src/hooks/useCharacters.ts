// react
import { useState, useEffect, useContext } from 'react'
// services
import getCharacters from '../services/getCharacters'
// context
import CharactersContext from '../context/CharactersContext'

const useCharacters = () => {
  // const [characters, setCharacters] = useState<Character[]>([])
  const { characters, addCharacters, updateCharacters } = useContext(CharactersContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(0)
  useEffect(() => {
    setLoading(true)

    getCharacters({ page })
      .then((res) => {
        if (page === 0) {
          // setCharacters(res)
          addCharacters(res)
          setLoading(false)
        } else {
          // setCharacters(c => [...c, ...res])
          updateCharacters(res)
          setLoading(false)
        }
      })
  }, [page])

  return { characters, loading, setPage }
}
export default useCharacters
