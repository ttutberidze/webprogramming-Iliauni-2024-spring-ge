import './App.css';
import React, { useState } from 'react';
import User from './User'

function App() {

  // const [name, setName] = useState('Irakli');
  const [users, setUsers] = useState([{name: 'Irakli'}, {name: 'Lasha'}]);

  // const buttonClick = () => {
  //   setName('Lasha')
  // }
  
  const onInputChange = (event, index) => {
    const newUsers = [...users];
    const user = {...newUsers[index]};
    user.name = event.target.value
    newUsers[index] = user;
    setUsers(newUsers);
  }

  const addUser = () => {
    setUsers([...users, {name: ''}])
  }

  return (
    <div className="App">
      <p>Hello World</p>
      {users.map((user, index) => {
        return <User 
                  key={index}
                  name={user.name} 
                  onInputChange={(event) => onInputChange(event, index)} />
      })}      
      {/* <button onClick={buttonClick}>Click Me</button> */}
      <button onClick={addUser}>Add New User</button>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, 
  //     React.createElement('p', {}, 'Hello World'))
}


export default App;
