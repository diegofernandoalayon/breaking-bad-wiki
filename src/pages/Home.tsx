import { useEffect, useState } from 'react'
import getRandomCharacters from '../services/getRandomCharacters'
import { Character } from '../types'
import ListCharacters from '../components/ListCharacters'
import { Helmet } from 'react-helmet'

function Home () {
  const [randomCharacters, setRandomCharacters] = useState<Character[]>([])
  const [newRequest, setNewRequest] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    setLoading(false)
    getRandomCharacters()
      .then(res => {
        setRandomCharacters(res)
        setLoading(true)
      })
      .catch(err => console.error(err))
  }, [newRequest])
  return (
    <section className='my-2 min-h-screen' >
      <Helmet>
        <meta charSet='utf-8'/>
        <title>breaking bad wiki | Home</title>
        <meta name='description' content='website to search characters  of breaking bad and see their characteristics'/>
      </Helmet>
      <div className='flex justify-around'>
        <h2 className='text-5xl text-center'>Home</h2>
        <button className='bg-green-500 text-white px-2 hover:bg-green-400 rounded text-lg' onClick={() => setNewRequest(r => r + 1)}>Random</button>
      </div>
      {
        loading
          ? <ListCharacters characters={randomCharacters}/>
          : <h2 className='text-center text-4xl'>Cargando ...</h2>
      }

    </section>
  )
}

export default Home
