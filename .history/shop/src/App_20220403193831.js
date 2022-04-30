import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Navbar from './components/Navbar.tsx'
import Home from './components/Home'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  )
}
export default App
