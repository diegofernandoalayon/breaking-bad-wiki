import React, { useEffect, useRef, useState } from 'react'
import ListCharacters from '../components/ListCharacters'
import useNearScreen from '../hooks/useNearScreen'
import getCharacters from '../services/getCharacters'
import { Character } from '../types'

function Characters () {
  const [characters, setCharacters] = useState<Character[]>([])
  const elementRef = useRef<HTMLDivElement>(null)
  const isNearScreen = useNearScreen({ elementRef })
  useEffect(() => {
    getCharacters()
      .then(setCharacters)
  }, [])

  // console.log(referencia.current)
  return (
    <div>
      <div className='min-h-screen'>
      <h2 className='text-4xl text-red-400'>Characters</h2>
      <ListCharacters characters={characters}/>
      {
        isNearScreen && <h2 className='text-4xl'>Hola  mundo</h2>
      }
      </div>
      <div ref={elementRef}>casasas</div>
    </div>
  )
}

export default Characters
