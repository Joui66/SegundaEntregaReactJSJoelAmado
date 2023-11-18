import React, { useState } from 'react'

const ItemCount = () => {

  const [counter, setCounter] = useState(0)

  const increment = () => {
    if (counter < 10) {
      setCounter(counter + 1)
    }
  }

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  const reset = () => {
    setCounter(0)
  }

  return (
<></>
  )
}

export default ItemCount