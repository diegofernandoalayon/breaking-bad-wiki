
import React, { useState, createContext } from 'react'

import { ICharacterDetail } from '../types'

interface CharacterContextProps {
  characters: Array<ICharacterDetail>
  setCharacters: React.Dispatch<React.SetStateAction<ICharacterDetail[]>>
}

export const CharactersContext = createContext<CharacterContextProps>({} as CharacterContextProps)

interface Props {
  children: JSX.Element[] | JSX.Element
}

export const CharactersContextProvider = ({ children }:Props) => {
  const [characters, setCharacters] = useState<ICharacterDetail[]>([])
  return (
    <CharactersContext.Provider value={{ characters, setCharacters }} >

    {children}
    </CharactersContext.Provider>

  )
}
CharactersContext.displayName = 'charactersContext'
export default CharactersContext
