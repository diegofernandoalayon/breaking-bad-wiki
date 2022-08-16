import React from 'react'
import { Character } from '../types'
const alive = 'bg-green-300 text-green-800'
const deceased = 'bg-red-300 text-red-800'
const other = 'bg-orange-300 text-orange-800'
const CharacterCard:React.FC<Character> = ({ id, name, nickname, image, status }) => {
  return (
    <div onClick={() => console.log(id)} className='w-[320px] h-2/6  mb-1'>

        <img src={image} alt={`profile ${name}`} className='w-full p-2 h-[400px] object-cover'/>

      <div className='bg-white ml-2 mr-2 '>
        <div className='flex flex-col ml-2 text-pink-700'>

          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Status:</strong>
            {' '}
            <span className={`${status === 'Alive' ? alive : status === 'Deceased' ? deceased : other} rounded-full px-2`}>{status}</span>
          </p>
          <p>
            <strong>Nickname:</strong> {nickname}
          </p>
        </div>
      </div>

    </div>
  )
}

export default CharacterCard
