
import { ActionTypeCharacters, ICharacterDetail } from '../types'

export const initialState:ICharacterDetail[] = []

export const charactersReducer = (state: typeof initialState, action: ActionTypeCharacters) => {
  switch (action.type) {
    case 'add_characters':
      return [...action.payload]
    case 'update_characters':
      return [...state, ...action.payload]
    default:
      return state
  }
}
