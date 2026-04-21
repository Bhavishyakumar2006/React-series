import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [counter, setcounter] = useState(10);
  
  return (
    <>
     <h2>counter: {counter}</h2>
     <button onClick={() => { if(counter < 20){setcounter(counter + 1)} else{counter = 20}}}>increament : {counter}</button>
     <br />
     <button onClick={() => {if(counter > 0){setcounter(counter - 1)} else {counter = 0}}}>decreament : {counter}</button>
    </>
  )
}

export default App
