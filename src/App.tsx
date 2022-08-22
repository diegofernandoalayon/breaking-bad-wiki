
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Layout from './components/Layout'
import Home from './pages/Home'
import Characters from './pages/Characters'
import { CharactersContextProvider } from './context/CharactersContext'
import CharacterDetail from './pages/CharacterDetail'
function App () {
  return (
    <div className=' bg-green-500 bg-opacity-10 min-h-screen'>
    <Layout >

    <Header />
    <CharactersContextProvider>
      <Routes >
        <Route path = '/' element={<Home />}/>
        <Route path = '/characters' element={<Characters />} />
        <Route path = '/characters/:id' element={<CharacterDetail/>} />
        <Route path = '/episodes' element={<h1>episodios</h1>} />
      </Routes>
    </CharactersContextProvider>
    </Layout>
    </div>

  )
}

export default App
