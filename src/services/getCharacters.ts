import { BASE_URL } from './settings'
import axios from 'axios'
import { ICharacterDetail, CharactersFromApi } from '../types'
interface Props{
  page: number
}
// interface PropsOne

const mapApiToApp = (apiResponse: CharactersFromApi[]):ICharacterDetail[] => {
  return apiResponse.map(characterFromApi => {
    const {
      nickname,
      name,
      char_id: id,
      status,
      img: image,
      birthday,
      portrayed: actor,
      occupation
    } = characterFromApi
    return {
      name,
      nickname,
      id,
      status,
      image,
      birthday,
      actor,
      occupation
    }
  })
}
const getCharacters = async ({ page }:Props) => {
  const res = await axios.get(`${BASE_URL}/characters?limit=10&offset=${10 * page}`)
  return mapApiToApp(res.data)
}
export default getCharacters

export const getOneCharaterById = async ({ id }:{id:string}) => {
  const res = await axios.get(`${BASE_URL}/characters/${id}`)
  return mapApiToApp(res.data)
}
