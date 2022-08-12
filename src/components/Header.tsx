import { Link } from 'react-router-dom'

function Header () {
  return (
    <header className='flex justify-between'>
      <h1>breaking-bad-wiki</h1>
      <nav>
        <ul className=' flex gap-3'>
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
    </header>
  )
}

export default Header
