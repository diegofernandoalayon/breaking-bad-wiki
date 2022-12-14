import React from 'react'
import { Character } from '../types'
import { useNavigate } from 'react-router-dom'
const alive = 'bg-green-200 text-green-900'
const deceased = 'bg-red-200 text-red-900 '
const other = 'bg-orange-200 text-orange-900'
const CharacterCard:React.FC<Character> = ({ id, name, nickname, image, status }) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/characters/${id}`)} className='w-[320px] h-2/6 relative mb-1'>
      <img src={image} alt={`profile ${name}`} className='w-full p-2 h-[400px] rounded-t-3xl object-cover'/>

      <div className='bg-white bg-opacity-75 ml-2 mr-2 absolute bottom-2 hover:-translate-y-1 w-[95%]'>
        <div className='flex flex-col ml-2 '>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Status:</strong>
            {' '}
            <span className={`${status === 'Alive' ? alive : status === 'Deceased' ? deceased : other} rounded-full px-2 pb-0.5`}>{status}</span>
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
