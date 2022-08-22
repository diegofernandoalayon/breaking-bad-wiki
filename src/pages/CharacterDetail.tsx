import { useContext } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import CharacterDetailCard from '../components/CharacterDetailCard'
import CharactersContext from '../context/CharactersContext'

function CharacterDetail () {
  const params = useParams()
  console.log(params)
  const { characters } = useContext(CharactersContext)

  const character = characters.find(c => c.id === +params.id!)
  console.log(character)
  if (character === undefined) {
    console.log('tttoto')
    return <Navigate to='/characters' />
  }
  return (
    <div>

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
  )
}

export default CharacterDetail
