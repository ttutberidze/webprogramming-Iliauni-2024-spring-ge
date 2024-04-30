import {  NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><NavLink className={({isActive}) => {
                    return isActive ? 'chemi-activi' : ''
                }} to="/">Home</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
            </ul>
        </div>
    )
}

export default Sidebar;