import {ThemeProvider} from "./ThemeContext"
import Content from "./content"
import "./App.css"
function App(){
 
  return (
    <ThemeContext>
    <div style={{padding:20}}>
      <button >Toggle theme</button>
      <Content />
    </div>
    </ThemeContext>
    
  )
}
export default App
