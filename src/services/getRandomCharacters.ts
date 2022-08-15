import axios from 'axios'

const BASE_URL = 'https://www.breakingbadapi.com/api'
const getRandomCharacters = async () => {
  const res = await axios.get(`${BASE_URL}/character/random?limit=10`)
  return res.data
}
export default getRandomCharacters
