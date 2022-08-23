import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CharacterDetailCard from '../components/CharacterDetailCard'
import CharactersContext from '../context/CharactersContext'
import { ICharacterDetail } from '../types'
import { getOneCharaterById } from '../services/getCharacters'

function CharacterDetail () {
  const params = useParams()
  const navigate = useNavigate()
  const [oneCharacter, setOneCharacter] = useState<ICharacterDetail[]>()
  console.log(params)
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
            setOneCharacter(res)
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

      }
      {
        oneCharacter &&
        <CharacterDetailCard
          id={oneCharacter[0].id}
          name={oneCharacter[0].name}
          nickname={oneCharacter[0].birthday}
          actor={oneCharacter[0].actor}
          birthday={oneCharacter[0].birthday!}
          image={oneCharacter[0].image!}
          occupation={oneCharacter[0].occupation}
          status={oneCharacter[0].status}
        />
      }

    </div>
  )
}

export default CharacterDetail
