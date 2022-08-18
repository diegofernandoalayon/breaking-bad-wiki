
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Layout from './components/Layout'
import Home from './pages/Home'
import Characters from './pages/Characters'
function App () {
  return (
    <div className=' bg-green-500 bg-opacity-10 min-h-screen'>
    <Layout >

    <Header />

      <Routes >
        <Route path ='/' element={<Home />}/>
      <Route path='/characters' element={<Characters />} />
      <Route path='/episodes' element={<h1>episodios</h1>} />
      </Routes>
    </Layout>
    </div>

  )
}

export default App
