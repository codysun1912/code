import {useContext} from "./ThemeContext"
import Content from "./content"
import "./App.css"
function App(){
 
  return (
    
    <div style={{padding:20}}>
      <button >Toggle theme</button>
      <Content />
    </div>
  )
}
export default App
