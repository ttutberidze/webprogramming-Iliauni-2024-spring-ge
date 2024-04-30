// import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react'
import User from './user'

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET'
        })
        .then((res) => res.json())
        .then((res) => {
            setUsers(res)
        })
    }, [])
    
    console.log(users)
    return (
        <div>
            {users.map((user) => {
                return (
                    <User key={user.id} user={user} />
                )
            })}
            
        </div>
    )
}

// /product/:id
// /product?id=5&name=Lasha
// body

// GET
// POST
// PUT
// PATCH
// DELETE

export default Users;