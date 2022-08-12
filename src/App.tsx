import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Card from './components/Card'
function App () {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/characters'>Characters</Link>
        </li>
        <li>
          <Link to='/episodes'>Episodes</Link>
        </li>
      </ul>
    </nav>

      <Routes >
        <Route path ='/' element={<div className="App">
          <Card count={count} />
          <button onClick={() => setCount(a => a + 1)}>sumar</button>
      </div>} />
      <Route path='/characters' element={<h1>characters</h1>} />
      <Route path='/episodes' element={<h1>episodios</h1>} />
      </Routes>
    </>

  )
}

export default App
