import { useState } from "react";

const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john.doe@outlook.com', age: 30 },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@gmail.com', age: 25 },
  { id: 3, name: 'Michael Johnson', email: 'michael.johnson@acheiversit.com', age: 40 },
  { id: 4, name: 'Emily Davis', email: 'emily.davis@outlook.com', age: 35 },
  { id: 5, name: 'Sarah Brown', email: 'sarah.brown@gmail.com', age: 28 },
];

function UserList(users){
  return(
    <>
    <h2>User List</h2>
    <ul>
      {users.map((user)=>
          <li key={user.id}>
            <strong>{user.name}</strong>
            <p>Email:{user.email}</p>
            <p>Age:{user.age}</p>
          </li>
        )        
      }
    </ul>

    </>
  )
}

function FilterForm({filter,setFilter}){
  return(
    <>
      <input 
       type="text"
       value={filter}
       onChange={(e)=>setFilter(e.target.value)}
       placeholder="Search by name"/>
    </>
  )
}


function App() {

  const [users, setUsers] = useState(initialUsers);
  const [filter,setFilter]=useState("");

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
     <h1>User Management System</h1>
     <FilterForm filter={filter} setFilter={setFilter}/>

     
     <UserList users={filteredUsers}/>
    </>
  )
}

export default App
