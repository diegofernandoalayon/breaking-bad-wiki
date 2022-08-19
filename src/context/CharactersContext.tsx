
import React, { useState, createContext } from 'react'

import { Character } from '../types'

interface CharacterContextProps {
  characters: Array<Character>
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>
}

export const CharactersContext = createContext<CharacterContextProps>({} as CharacterContextProps)

interface Props {
  children: JSX.Element[] | JSX.Element
}

export const CharactersContextProvider = ({ children }:Props) => {
  const [characters, setCharacters] = useState<Character[]>([])
  return (
    <CharactersContext.Provider value={{ characters, setCharacters }} >

    {children}
    </CharactersContext.Provider>

  )
}
CharactersContext.displayName = 'charactersContext'
export default CharactersContext
