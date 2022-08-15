
import { Character } from '../types'
import CharacterCard from './CharacterCard'
interface Props {
  characters: Array<Character>
}
const ListCharacters = ({ characters }:Props) => {
  return (
    <>
      <p>home</p>
      {
        characters.map((c) => (
          <CharacterCard key={c.id} id={c.id} name={c.name} nickname={c.nickname} status={c.status} image={c.image} />
        ))
      }
    </>
  )
}

export default ListCharacters
