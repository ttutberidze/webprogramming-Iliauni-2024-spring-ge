import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UserPage = () => {
    const params = useParams()
    const [user, setUser] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + params.userId, {
            method: 'GET'
        })
        .then((res) => res.json())
        .then((res) => {
            setUser(res)
        })
    }, [])
    return (
        <div>
            {user ? (
                <>
                    <p>Name: {user.name}</p>
                    <p>Company: {user.company.name}</p>
                </>
            ) : (<div>Loading...</div>)}
        </div>
    )
}
export default UserPage;