// import Users from './users'
// import UserPage from './userPage'
import { Outlet } from 'react-router-dom';
import {useTheme} from '../context/theme'
// import Home from './home'
// import {Route, Routes} from 'react-router-dom'

const Main = () => {
    const {toggle, theme} = useTheme()
    return (
        <div style={{...theme}} className='main'>
            <button onClick={toggle}>toggle</button>
            {/* <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Users />} path="/users" />
                <Route element={<UserPage />} path="/users/:userId/edit/:page/:limit" />
            </Routes> */}
            <Outlet />
        </div>
    )
}

export default Main;