import React from 'react'
import {Routes , Route , Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
export default function Navbar() {
    return (
        <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href='Navbar.jsx'>Home</a>
                        </li>
                        <li class="nav-item">
                            <Link to = "/Home" class="nav-link" href="#">Link</Link>
                        </li>
                        <li class="nav-item">
                            <Link to = "/Login" class="nav-link disabled">Disabled</Link>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Login' element={<Login/>}/>
        </Routes>
        </div>
    )
}
