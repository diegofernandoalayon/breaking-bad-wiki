import React, { useEffect, useState, useCallback } from 'react'
import ListCharacters from '../components/ListCharacters'
import useNearScreen from '../hooks/useNearScreen'
import getCharacters from '../services/getCharacters'
import { Character } from '../types'
import debounce from 'just-debounce-it'

function Characters () {
  const [characters, setCharacters] = useState<Character[]>([])
  const [page, setPage] = useState<number>(0)
  // const elementRef = useRef<HTMLDivElement>(null)
  const { isNearScreen, fromRef } = useNearScreen({ distance: '200px', once: false })
  useEffect(() => {
    getCharacters({ page })
      .then((res) => {
        setCharacters(c => [...c, ...res])
      })
  }, [page])
  const debounceHandleNextPage = useCallback(debounce(() => setPage(p => p + 1), 500), [setPage])
  // console.log(referencia.current)
  useEffect(() => {
    console.log(isNearScreen)
    if (isNearScreen) debounceHandleNextPage()
  }, [isNearScreen])
  return (
    <div>
      <div className='min-h-screen'>
      <h2 className='text-4xl text-red-400'>Characters</h2>
      <ListCharacters characters={characters}/>
      {
        isNearScreen && <h2 className='text-4xl'>Hola  mundo</h2>
      }
      </div>
      <div ref={fromRef}>casasas</div>
    </div>
  )
}

export default Characters
