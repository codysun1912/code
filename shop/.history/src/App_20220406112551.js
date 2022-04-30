import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  )
}
export default App
