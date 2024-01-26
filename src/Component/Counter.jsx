import React, { useContext } from 'react'
import { CounterContext } from '../Context/Counter';
// import } from 'react'

function Couter() {
  const conterContext=useContext(CounterContext);

  return (
    <div>
        <button onClick={()=>conterContext.setCount(conterContext.count+1)}>Increment</button>
        <button>Decrement</button>
    </div>
  )
}

export default Couter