import React from "react"
// to use local images with react, you need to import them is one way to do it
// react... should have all the stuff it uses in src?
import logo from "../assets/logo.jpg"

function Navbar() {
  return (
    <nav className="comp-navbar">
      <img className="nav-img" src={logo} alt="portoflio site logo" />
      <button className="nav-button"> say hi! </button>
    </nav>
  )
}

export default Navbar
