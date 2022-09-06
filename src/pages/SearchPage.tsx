import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'
import ListCharacters from '../components/ListCharacters'
import { getCharactersByName } from '../services/getCharacters'
import { Character } from '../types'

const Search = () => {
  const params = useParams()
  const { name } = params
  const [characters, setCharacters] = useState<Character[]>([])
  useEffect(() => {
    // const { name } = params
    if (name) {
      getCharactersByName({ name })
        .then((res) => {
          console.log(res)
          setCharacters(res)
        })
        .catch((err) => console.error(err))
    }
  }, [params])

  return (
    <section className='min-h-screen'>
      <Helmet>
        <title>{`breakig bad wiki | results for ${decodeURI(name!)}`}</title>
        <meta name="description" content={`Search results for ${decodeURI(name!)}`}/>
      </Helmet>
      {
        characters.length > 0
          ? <h2 className='text-2xl'>
            {`Results for ${decodeURI(name!)}`}
          </h2>
          : <h2 className='text-2xl text-center text-red-400'>
            {'Not found results'}
          </h2>
      }

      {
        characters.length > 0 && <ListCharacters
                                    characters={characters}
                                  />
      }

    </section>
  )
}

export default Search
