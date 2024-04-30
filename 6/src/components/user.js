import { Link } from "react-router-dom";

const User = ({user}) => {
    return (
        <div style={{border: '1px solid lightgrey'}}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <Link to={'/users/' + user.id}>~View</Link>
        </div>
    )
}

export default User;