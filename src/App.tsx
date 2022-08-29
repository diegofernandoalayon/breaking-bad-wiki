
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Layout from './components/Layout'
import Home from './pages/Home'
import Characters from './pages/Characters'
import { CharactersContextProvider } from './context/CharactersContext'
import CharacterDetail from './pages/CharacterDetail'
import Footer from './components/Footer'
import SearchPage from './pages/SearchPage'
import Search from './components/Search'
function App () {
  return (
    <div className=' bg-green-500 bg-opacity-10 min-h-screen'>
    <Layout >

    <Header />
    <Search />
    <CharactersContextProvider>
      <Routes >
        <Route
          path = '/'
          element={<Home />}
        />
        <Route
          path = '/characters'
          element={<Characters />}
        />
        <Route
          path = '/characters/:id'
          element={<CharacterDetail/>}
        />
        <Route
          path = '/episodes'
          element={<h1>episodios</h1>}
        />
        <Route
          path = '/search/:name'
          element={<SearchPage />}
        />
        <Route
          path='*'
          element='oho'
        />
      </Routes>
      <Footer />
    </CharactersContextProvider>
    </Layout>
    </div>

  )
}

export default App
