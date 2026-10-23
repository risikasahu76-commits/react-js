import { useState } from 'react'

import './App.css'


function App() {

  const [counter,setCounter] = useState(5)

  

  const addValue = ()=>{
    if(counter<20){

      setCounter(counter+1)
    }else{
     alert("Counter cannot go above 20!") 
    }
    
    
  }

  const decreaseValue = () => {
    if(counter>0){
  
      setCounter(counter-1)
    }else{
      alert("Counter cannot go below 0!")
    }
    

  }
 
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={decreaseValue}>decrease value</button>
     
    </>
  )
}

export default App
