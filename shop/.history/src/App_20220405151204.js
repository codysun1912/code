import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home 
      />
       <Login/>

    </div>
  )
}
export default App
