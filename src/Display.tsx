import React from 'react'
interface Props {
  count: number
}
function Display ({ count }: Props) {
  return (
    <>
      <h1>{count}</h1>
    </>
  )
}

export default Display
