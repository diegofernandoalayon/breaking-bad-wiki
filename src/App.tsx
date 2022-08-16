
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Layout from './components/Layout'
import Home from './pages/Home'
function App () {
  return (
    <div className='bg-green-600 bg-opacity-20'>
    <Layout>

    <Header />

      <Routes >
        <Route path ='/' element={<Home />}/>
      <Route path='/characters' element={<h1>characters</h1>} />
      <Route path='/episodes' element={<h1>episodios</h1>} />
      </Routes>
    </Layout>
    </div>

  )
}

export default App
