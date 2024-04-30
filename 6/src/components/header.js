import { useTheme } from "../context/theme";

const Header = () => {
    const {theme} = useTheme()
    return (
        <div style={theme}>Header</div>
    )
}

export default Header;