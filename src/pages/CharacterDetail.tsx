import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CharacterDetailCard from '../components/CharacterDetailCard'
import CharactersContext from '../context/CharactersContext'
import { ICharacterDetail } from '../types'
import { getOneCharaterById } from '../services/getCharacters'
import { Helmet } from 'react-helmet'

function CharacterDetail () {
  const params = useParams()
  const navigate = useNavigate()
  const [oneCharacter, setOneCharacter] = useState<ICharacterDetail>()
  const { characters } = useContext(CharactersContext)

  const character = characters.find(c => c.id === +params.id!)

  useEffect(() => {
    if (character === undefined) {
      const { id } = params
      if (id) {
        getOneCharaterById({ id })
          .then((res) => {
            if (res.length === 0) {
              throw new Error('not found character')
            }
            setOneCharacter(res[0])
          })
          .catch(() => {
            navigate('/characters')
          })
      }
    }
  }, [])
  return (
    <div>

      {
        character &&
        <div>
          <Helmet>
            <title>breaking bad wiki | Detail for {character.name}</title>
            <meta name="description" content={`Detail page for ${character.name}`}/>
          </Helmet>
          <CharacterDetailCard
            id={character.id}
            name={character.name}
            nickname={character.birthday}
            actor={character.actor}
            birthday={character.birthday!}
            image={character.image!}
            occupation={character.occupation}
            status={character.status}
            />
        </div>

      }
      {
        oneCharacter &&
        <div>
          <Helmet>
            <title>breaking bad wiki | Detail for {oneCharacter.name}</title>
            <meta name="description" content={`Detail page for ${oneCharacter.name}`}/>
          </Helmet>
          <CharacterDetailCard
            id={oneCharacter.id}
            name={oneCharacter.name}
            nickname={oneCharacter.birthday}
            actor={oneCharacter.actor}
            birthday={oneCharacter.birthday!}
            image={oneCharacter.image!}
            occupation={oneCharacter.occupation}
            status={oneCharacter.status}
          />
        </div>
      }

    </div>
  )
}

export default CharacterDetail
