import './App.css'
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
          <li >
            <Link to="/About" >
              About
            </Link>
          </li>
          <li >
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
