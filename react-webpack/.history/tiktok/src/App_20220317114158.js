import {useContext} from "./ThemeContext"
import {ThemeContext} from "./ThemeContext"
import Content from "./content"
import "./App.css"
function App(){
  const context = useContext(ThemeContext)
  return (
    
    <div style={{padding:20}}>
      <button onClick={context.} >Toggle theme</button>
      <Content />
    </div>
  )
}
export default App
