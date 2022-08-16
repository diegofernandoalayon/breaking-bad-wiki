// react
import React, { useState } from 'react'
// react-router-dom
import { Link } from 'react-router-dom'
// components
import Close from './icons/Close'
import Menu from './icons/Menu'
const ITEMS_NAV = [
  { name: 'Home', link: '/' },
  { name: 'Characters', link: '/characters' },
  { name: 'Episodes', link: '/episodes' }

]
function Header () {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const handleBurger = () => {
    setIsMobile(a => !a)
  }
  return (
    <header className='justify-between p-5 bg-white shadow md:flex md:items-center md:justify-between'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-mono font-bold cursor-pointer text-green-600 hover:text-green-500'>
          <Link to='/'>breaking-bad-wiki</Link>
        </h1>
        <span onClick={handleBurger} className='text-3xl cursor-pointer mx-2 md:hidden'>
          {
            isMobile
              ? <Close height={40} width={40} className='text-green-600 hover:text-green-500 '/>
              : <Menu height={40} width={40} className='text-green-600 hover:text-green-500 '/>
          }

        </span>
      </div>
      <nav className=' '>
        <ul className={`md:flex md:items-center z-10 md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 duration-200 transition-all ease-in ${isMobile ? 'relative' : 'opacity-0 top-[-400px]'}` }>
          {
            ITEMS_NAV.map((e) => (
              <li key={e.link} className='mx-4 my-6 md:my-0'>
                <Link onClick={handleBurger} className='text-xl text-green-600  hover:text-green-500 duration-300' to={e.link}>{e.name}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header
