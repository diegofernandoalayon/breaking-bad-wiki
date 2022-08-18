import { BASE_URL } from './settings'
import axios from 'axios'
import { Character, CharactersFromApi } from '../types'

const mapApiToApp = (apiResponse: CharactersFromApi[]):Character[] => {
  return apiResponse.map(characterFromApi => {
    const {
      nickname,
      name,
      char_id: id,
      status,
      img: image
    } = characterFromApi
    return {
      name,
      nickname,
      id,
      status,
      image
    }
  })
}
const getCharacters = async () => {
  const res = await axios.get(`${BASE_URL}/characters?limit=10&offset=0`)
  return mapApiToApp(res.data)
}
export default getCharacters
