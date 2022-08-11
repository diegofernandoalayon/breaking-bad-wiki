import React from 'react'

interface Props {
  count: number,
  children: React.ReactNode
}

const Cart:React.FC<Props> = ({ count }) => {
  return (
    <>
      <h1>Titulo</h1>
      <h2>{count}</h2>
    </>
  )
}

export default Cart
