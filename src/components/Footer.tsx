import Github from './icons/Github'
import LinkedIn from './icons/LinkedIn'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center md:flex-row justify-between margin-bottom p-2 mt-2 bg-white shadow ' >
      <p>created with ❤️ by {' '}
        <a
          href='https://github.com/diegofernandoalayon'
          rel='noreferrer'
          target='_blank'
          className='text-green-600'
          >
          Diego Fernando Alayon
        </a>
      </p>
      <div className='flex flex-row gap-3'>
        <a
          href='https://www.linkedin.com/in/diego-fernando-alayon-rivera-620875203/'
          rel='noreferrer'
          className='hover:opacity-80'
          target='_blank'
          >
          <LinkedIn fill='#0a66c2' width={40} height={40}/>
        </a>
        <a
          href='https://github.com/diegofernandoalayon/breaking-bad-wiki'
          rel='noreferrer'
          className='hover:opacity-80'
          target='_blank'
          >
          <Github fill='black' width={36} height={36}/>
        </a>
      </div>
    </footer>
  )
}

export default Footer
