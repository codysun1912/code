import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <nav >
        <ul >
          <li >
            <Link to="/"  >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Login"  >
              Login
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  )
}
export default App
