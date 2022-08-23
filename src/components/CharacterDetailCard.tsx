
import { ICharacterDetail } from '../types'
const alive = 'bg-green-300 text-green-800'
const deceased = 'bg-red-300 text-red-800 '
const other = 'bg-orange-300 text-orange-800'
const CharacterDetailCard = ({ name, nickname, actor, birthday, id, image, status, occupation }:ICharacterDetail) => {
  return (
    <div className='flex flex-wrap md:flex-nowrap items-center gap-4 mt-2 justify-center'>
      <img src={image} className='w-full px-2 sm:w-[350px] md:w-[400px]' alt={`profile ${name}`} />
      <div className='bg-slate-50 p-2'>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>NickName:</strong> {nickname}
        </p>
        <p>
          <strong>Status:</strong> <span className={`${status === 'Alive' ? alive : status === 'Deceased' ? deceased : other} rounded-full px-2 pb-0.5`} >{status}</span>
        </p>
        <p>
          <strong>Birthday:</strong> {birthday}
        </p>
        <p>
          <strong>Occupation:</strong> {occupation.join(', ')}
        </p>
        <p>
          <strong>Actor:</strong> {actor}
        </p>
      </div>
    </div>
  )
}

export default CharacterDetailCard
