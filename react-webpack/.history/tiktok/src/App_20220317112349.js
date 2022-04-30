import {useState,createContext} from "react"
import Content from "./content"
import "./App.css"
 export const ThemeContext = createContext()
function App(){
  const [theme ,setTheme] = useState("dark")
  const handleToggle = () =>{
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <ThemeContext.Provider value ={theme}>
    <div style={{padding:20}}>
      <button onClick={handleToggle}>Toggle theme</button>
      <Content />
    </div>
    </ThemeContext.Provider>
  )
}
export default App
