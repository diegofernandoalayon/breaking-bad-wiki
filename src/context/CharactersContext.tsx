
import React, { useReducer, createContext } from 'react'
import { charactersReducer, initialState } from '../reducers/charactersReducer'

import { ICharacterDetail } from '../types'

interface CharacterContextProps {
  characters: Array<ICharacterDetail>
  // setCharacters: React.Dispatch<React.SetStateAction<ICharacterDetail[]>>
  addCharacters: (res:ICharacterDetail[])=> void
  updateCharacters: (res:ICharacterDetail[]) => void
}

export const CharactersContext = createContext<CharacterContextProps>({} as CharacterContextProps)

interface Props {
  children: JSX.Element[] | JSX.Element
}

export const CharactersContextProvider = ({ children }:Props) => {
  // const [characters, setCharacters] = useState<ICharacterDetail[]>([])
  const [characters, dispatch] = useReducer(charactersReducer, initialState)
  const addCharacters = (res:ICharacterDetail[]) => dispatch({ type: 'add_characters', payload: res })
  const updateCharacters = (res:ICharacterDetail[]) => dispatch({ type: 'update_characters', payload: res })
  // const [page, setPage] = useState<number>(0)
  return (
    <CharactersContext.Provider value={{ characters, addCharacters, updateCharacters }} >

    {children}
    </CharactersContext.Provider>

  )
}
CharactersContext.displayName = 'charactersContext'
export default CharactersContext
