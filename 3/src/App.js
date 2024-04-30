import './App.css';
import React, { useState, useRef, useCallback, useMemo } from 'react';
import User from './User'

function App() {

  // const [users, setUsers] = useState([{name: 'Irakli'}, {name: 'Lasha'}]);
  const [users, setUsers] = useState([{name: 'Irakli'}, {name: 'Lasha'}]);
  console.log(users)
  // const [isOpen, setIsOpen] = useState(true);
  // const inputRef = useRef()
  // const customRef = useRef(10)
  // let customNumber = 10
  // console.log(customNumber, customRef.current)

  // useEffect(() => {
  //   console.log('On Mount')
  // }, [])

  // useEffect(() => {
  //   console.log('On Update')
  // })

  // useEffect(() => {
  //   console.log('First or Second User is Updated', users)
  //   return () => {
  //     console.log('users clean up', users)
  //   }
  // }, [users[0], users[1]])

  const value = useMemo(() => {
    return 100 * 100;
  }, [])

  const onInputChange = useCallback((value, index) => {
    setUsers((prevUsers) => {
      const newUsers = [...prevUsers]
      const user = {...newUsers[index]};
      user.name = value
      newUsers[index] = user;
      return newUsers;
    })
  }, [])

  const addUser = () => {
    setUsers((prevUsers) => [...prevUsers, {name: ''}])
  }

  const deleteUser = useCallback((indexToRemove) => {
    setUsers(([...newUsers]) => newUsers.filter((user, index) => index !== indexToRemove))
  }, [])

  const clearUser = useCallback((indexToRemove) => {
    onInputChange('', indexToRemove)
  }, [onInputChange])

  // const toggle = () => {
  //   // if(isOpen) {
  //   //   setIsOpen(false)
  //   // } else {
  //   //   setIsOpen(true)
  //   // }
  //   // setIsOpen(isOpen ? false : true)
  //   // setIsOpen(!isOpen)
  //   setIsOpen((prevIsOpen) => !prevIsOpen)
  // }

  // const show = () => {
  //   setIsOpen(false)
  //   setIsOpen(true)
  // }

  return (
    <div className="App">
      {/* <input type='text' ref={inputRef} /> */}
      {/* <button onClick={() => console.log(inputRef.current.value)}>Submit</button>
      <button onClick={() => customRef.current = 100}>Update Custom Ref</button>
      <button onClick={() => customNumber = 100}>Update Custom Number</button> */}

      {/* <button onClick={toggle}>Toggle</button> */}
      {/* <button onClick={show}>Show</button> */}
      {/* [{name: 'Irakli'}, {name: 'Lasha'}] */}
      {users.map((user, index) => {
        return <User 
                  key={index}
                  index={index}
                  name={user.name} 
                  onInputChange={onInputChange}
                  onDelete={deleteUser}
                  clearUser={clearUser}
                />
      })}      
      <button onClick={addUser}>Add New User</button>
    </div>
  );
}


export default App;
