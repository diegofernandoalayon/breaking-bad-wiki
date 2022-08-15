import React from 'react'
import { Character } from '../types'

const CharacterCard:React.FC<Character> = ({ id, name, nickname, image, status }) => {
  return (
    <div onClick={() => console.log(id)}>
      <img src={image} alt={`profile ${name}`} />
      <p>name: {name}</p>
      <p>status: {status}</p>
      <p>nickname: {nickname}</p>
      <h1 className='text-3xl font-bold text-red-200'>Titulo</h1>
    </div>
  )
}

export default CharacterCard
