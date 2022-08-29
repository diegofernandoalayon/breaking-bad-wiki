import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Search = () => {
  const [keyword, setKeyword] = useState<string>('')
  const navigate = useNavigate()
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setKeyword(value)
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (keyword) navigate(`/search/${keyword}`)
  }
  return (
    <form onSubmit={handleSubmit} className='flex gap-1 justify-center m-2'>
      <input type="text" placeholder='toto' autoFocus onChange={handleChange} value={keyword} className='w-full md:w-auto rounded px-2 py-2 text-lg'/>
      <button className='bg-green-500 text-white px-2 hover:bg-green-400 rounded text-lg'>Buscar</button>
    </form>
  )
}

export default Search
