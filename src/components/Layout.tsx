import React from 'react'
interface Props {
  children: React.ReactNode
}
const Layout = ({ children }:Props) => {
  return (
  <div className='max-w-5xl mx-auto lg:w-5xl font-sans '>
    {children}
  </div>
  )
}

export default Layout
