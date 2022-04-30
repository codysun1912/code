import {useState,createContext} from "react"
import Content from "./content"
import "./App.css"
 const ThemeContext = createContext()
function App(){
  const [theme ,setTheme] = useState("dark")
  const handleToggle = () =>{
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <ThemeContext.Provider>
    <div style={{padding:20}}>
      <button onClick={handleToggle}>Toggle theme</button>
      <Content theme ={theme}/>
    </div>
    </ThemeContext.Provider>
  )
}
export default App
