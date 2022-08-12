
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
function App () {
  return (
    <>
    <Header />

      <Routes >
        <Route path ='/' element={<h1>hoho</h1>}/>
      <Route path='/characters' element={<h1>characters</h1>} />
      <Route path='/episodes' element={<h1>episodios</h1>} />
      </Routes>
    </>

  )
}

export default App
