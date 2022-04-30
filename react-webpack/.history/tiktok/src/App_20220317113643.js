import {ThemeProvider} from "./ThemeContext"
import Content from "./content"
import "./App.css"
function App(){
 
  return (
    <ThemeProvider>
    <div style={{padding:20}}>
      <button >Toggle theme</button>
      <Content />
    </div>
    </ThemeProvider>
    
  )
}
export default App
