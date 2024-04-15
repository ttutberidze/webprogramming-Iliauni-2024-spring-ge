import {createContext, useState, useContext} from 'react'

const ThemeContext = createContext();

const themeConfig = {
    dark: {
        color: 'white',
        backgroundColor: 'darkblue'
    },
    light: {
        color: 'darkblue',
        backgroundColor: 'white'
    }
}

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(themeConfig.light)

    const toggle = () => {
        setTheme((theme) => theme === themeConfig.light ? themeConfig.dark : themeConfig.light)
    }

    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeContextProvider;