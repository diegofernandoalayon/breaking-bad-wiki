
import React, { useState, createContext } from 'react'

import { CharacterDetail } from '../types'

interface CharacterContextProps {
  characters: Array<CharacterDetail>
  setCharacters: React.Dispatch<React.SetStateAction<CharacterDetail[]>>
}

export const CharactersContext = createContext<CharacterContextProps>({} as CharacterContextProps)

interface Props {
  children: JSX.Element[] | JSX.Element
}

export const CharactersContextProvider = ({ children }:Props) => {
  const [characters, setCharacters] = useState<CharacterDetail[]>([])
  return (
    <CharactersContext.Provider value={{ characters, setCharacters }} >

    {children}
    </CharactersContext.Provider>

  )
}
CharactersContext.displayName = 'charactersContext'
export default CharactersContext
