import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    if(counter==20){
      setCounter(20)    //to make maximum value of counter 20 that can be achieved.
    }
    else
    setCounter(counter + 1)
    
  }

  const removeValue = () => {
    //to make minimum value counter can be decreased to is 0.
    if(counter==0){
      setCounter(0)
    }
    else{
      setCounter(counter - 1)
    }
  }
  
  return (
    <>
      <h1>Learning React Hooks</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
