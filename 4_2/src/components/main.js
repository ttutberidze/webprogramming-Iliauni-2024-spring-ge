import Users from './users'
import {useTheme} from '../context/theme'

const Main = () => {
    const {theme} = useTheme()
    return (
        <div style={{...theme}}>
            <div>Main</div>
            <Users />
        </div>
    )
}

export default Main;