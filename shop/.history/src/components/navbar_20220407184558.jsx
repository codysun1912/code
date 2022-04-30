import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import About from './About'
export default function Navbar() {
    return (
        <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Home" className="nav-link" href="#">Link</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Login" className="nav-link ">Disabled</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
            <Routes>
                <Route path='/' element={<About />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/Login' element={<Login />} />
            </Routes>
        </div>
    )
}
