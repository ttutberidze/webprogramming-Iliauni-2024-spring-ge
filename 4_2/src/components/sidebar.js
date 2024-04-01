import { useTheme } from "../context/theme";

const Sidebar = () => {
    const {toggle, theme} = useTheme()
    return (
        <div style={theme}>
            Sidebar
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}

export default Sidebar;