import {useContext,useState} from "react"

const ThemeContext = createContext()

function ThemeProvider(){
    const [theme ,setTheme] = useState("dark")
    const handleToggle = () =>{
      setTheme(theme === "dark" ? "light" : "dark")
    }
    return(
        <ThemeContext.Provider value ={theme}>

        </ThemeContext.Provider>

    )
}
export {ThemeProvider , ThemeContext} 
