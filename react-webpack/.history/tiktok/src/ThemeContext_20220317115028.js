import {createContext,useState} from "react"

const ThemeContext = createContext()

function ThemeProvider({children}){
    const [theme ,setTheme] = useState("dark")
    const handleToggle = () =>{
      setTheme(theme === "dark" ? "light" : "dark")
    }
    const value = () => {
        theme,
        handleToggle
    }

    return(
        <ThemeContext.Provider >
        {children}
        </ThemeContext.Provider>

    )
}
export {ThemeProvider , ThemeContext} 
