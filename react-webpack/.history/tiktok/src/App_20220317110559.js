import {useState} from "react"
import Content from "./content"

function App(){
  const [theme ,setTheme] = useState("dark")
  return (
    <div style={{padding:20}}>
      <button>Toggle theme</button>
      <Content/>
    </div>
  )
}
export default App
