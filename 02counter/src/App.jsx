import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const [counter,setCounter]=useState(1)

// let counter=5;
const addValue =()=>{
  console.log("clicked",counter);
  setCounter(counter+1);

}

const removeValue=()=>{
 setCounter(counter-1);
 if(counter<0){
  counter=1
 }
}
  return (
    <>
      <h1>Hello Developer</h1>
      <h2>value : {counter} </h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Dec value</button>
    </>
  )
}

export default App
