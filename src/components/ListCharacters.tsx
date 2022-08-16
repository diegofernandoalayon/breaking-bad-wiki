
import { Character } from '../types'
import CharacterCard from './CharacterCard'
interface Props {
  characters: Array<Character>
}
const ListCharacters = ({ characters }:Props) => {
  return (
    <article className='flex flex-wrap gap-1 justify-center lg:justify-between'>
      {
        characters.map((c) => (
          <CharacterCard key={c.id} id={c.id} name={c.name} nickname={c.nickname} status={c.status} image={c.image} />
        ))
      }
    </article>
  )
}

export default ListCharacters
