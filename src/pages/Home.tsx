import { useEffect, useState } from 'react'
import getRandomCharacters from '../services/getRandomCharacters'
import Search from '../components/Search'
import { Character } from '../types'
import ListCharacters from '../components/ListCharacters'

function Home () {
  const [randomCharacters, setRandomCharacters] = useState<Character[]>([])
  useEffect(() => {
    getRandomCharacters()
      .then(res => {
        setRandomCharacters(res)
      })
      .catch(err => console.error(err))
  }, [])
  return (
    <section className='my-2' >
    <Search />
    <h2 className='text-5xl'>Home</h2>
    <ListCharacters characters={randomCharacters}/>
    </section>
  )
}

export default Home
