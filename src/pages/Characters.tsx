import React, { useEffect, useCallback } from 'react'
import ListCharacters from '../components/ListCharacters'
import useNearScreen from '../hooks/useNearScreen'
import debounce from 'just-debounce-it'
import useCharacters from '../hooks/useCharacters'

function Characters () {
  const { characters, setPage } = useCharacters()
  const { isNearScreen, fromRef } = useNearScreen({ distance: '100px', once: false })
  const debounceHandleNextPage = useCallback(debounce(() => setPage(p => p + 1), 500), [setPage])
  useEffect(() => {
    console.log(isNearScreen)
    if (isNearScreen) debounceHandleNextPage()
  }, [isNearScreen])
  return (
    <div>
      <div className='min-h-screen'>
        <h2 className='text-4xl text-red-400'>Characters</h2>
        <ListCharacters characters={characters}/>
      </div>
      <div ref={fromRef}>
      </div>
    </div>
  )
}

export default Characters
