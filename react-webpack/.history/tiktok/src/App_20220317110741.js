import {useState} from "react"
import Content from "./content"

function App(){
  const [theme ,setTheme] = useState("dark")
  const handleToggle = () =>{
    
  }
  return (
    <div style={{padding:20}}>
      <button onClick={handleToggle}>Toggle theme</button>
      <Content theme ={theme}/>
    </div>
  )
}
export default App
