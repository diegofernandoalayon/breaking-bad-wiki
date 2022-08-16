import { useEffect, useState } from 'react'
import getRandomCharacters from '../services/getRandomCharacters'
import Search from '../components/Search'
import { Character } from '../types'
import ListCharacters from '../components/ListCharacters'

function Home () {
  const [randomCharacters, setRandomCharacters] = useState<Character[]>([])
  const [newRequest, setNewRequest] = useState<number>(0)
  useEffect(() => {
    getRandomCharacters()
      .then(res => {
        setRandomCharacters(res)
      })
      .catch(err => console.error(err))
  }, [newRequest])
  return (
    <section className='my-2' >
      <Search />
      <div className='flex justify-around'>
        <h2 className='text-5xl text-center'>Home</h2>
        <button className='bg-green-500 text-white px-2 hover:bg-green-400 rounded text-lg' onClick={() => setNewRequest(r => r + 1)}>Random</button>
      </div>
      <ListCharacters characters={randomCharacters}/>
    </section>
  )
}

export default Home
