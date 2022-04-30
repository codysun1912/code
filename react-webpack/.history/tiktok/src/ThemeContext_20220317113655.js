import {useContext,useState} from "react"


const ThemeContext = createContext()

function ThemeProvider({children}){
    const [theme ,setTheme] = useState("dark")
    const handleToggle = () =>{
      setTheme(theme === "dark" ? "light" : "dark")
    }
    return(
        <ThemeContext.Provider value ={theme}>
        {children}
        </ThemeContext.Provider>

    )
}
export {ThemeProvider , ThemeContext} 
