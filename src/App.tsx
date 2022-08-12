
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
function App () {
  return (
    <>
    <Header />

      <Routes >
        <Route path ='/' element={<Home />}/>
      <Route path='/characters' element={<h1>characters</h1>} />
      <Route path='/episodes' element={<h1>episodios</h1>} />
      </Routes>
    </>

  )
}

export default App
