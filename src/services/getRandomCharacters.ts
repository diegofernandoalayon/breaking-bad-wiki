import axios from 'axios'
import { Character, CharactersFromApi } from '../types'

const BASE_URL = 'https://www.breakingbadapi.com/api'
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
const getRandomCharacters = async () => {
  const res = await axios.get(`${BASE_URL}/character/random?limit=10`)
  return mapApiToApp(res.data)
}
export default getRandomCharacters
