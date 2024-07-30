import React from 'react'
import { useEffect } from 'react';
import Contenner from './Contenner';


function App() {

  const [ show, setShow ] = React.useState(false)
  return (
    <>
    <button onClick={()=>setShow(!show)}>click</button>
      {show && <Contenner/>}
    </>
  )
}

export default App