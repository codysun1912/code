
import Content from "./content"
import "./App.css"
function App(){
 
  return (
    
    <div style={{padding:20}}>
      <button onClick={handleToggle}>Toggle theme</button>
      <Content />
    </div>
    
  )
}
export default App
