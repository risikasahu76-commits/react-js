//import { useState } from 'react'

//import './App.css'


  //const [count, setCount] = useState(0)

  /*const App = () =>{
    const items = ["apple","banana","mango"];

    return (
    <ul>
      {items.map(item=>
        <li key={item}>{item}</li>
      )}
    
      </ul>
  )
      
    }

  */

    const App =()=>{

      const users =[
        {id:1,name:"john"},
        {id:2,name:"jane"},
        {id:3,name:"max"},
      ];

      return(
        <div>
          <ul>
            {
            users.map((user)=>
            <li key={user.id}>{user.id} {user.name}</li>
            )
            }
            
          </ul>
        </div>
      );


    };


export default App
