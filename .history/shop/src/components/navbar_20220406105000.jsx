import React from 'react'
import {Routes, Route , Link} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            CODY
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to = "/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to ="/login" className="nav-link" href="#">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to ="/home" className="nav-link" href="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacts
                </a>
              </li>
            </ul>
            <div className="buttons">
              <button className="btn">
                <a className="btn btn-outline-dark">
                  <i className="fa fa-sign-in me-1"></i>Login
                </a>

                <a className="btn btn-outline-dark ms-2">
                  <i className="fa fa-user-plus me-1"></i>Register
                </a>

                <a className="btn btn-outline-dark ms-2">
                  <i className="fa fa-shopping-cart me-1"></i>Cart (0)
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}