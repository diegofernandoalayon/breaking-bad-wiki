import React from 'react'
interface Props {
  children: React.ReactNode
}
const Layout = ({ children }:Props) => {
  return (
  <div className='max-w-2xl mx-auto lg:w-5xl'>
    {children}
  </div>
  )
}

export default Layout