import React from "react"
// to use local images with react, you need to import them is one way to do it
// react... should have all the stuff it uses in src?
import IMAGES from "../assets/index.js"

function Navbar() {
  return (
    <nav className="comp-navbar">
      <a href="/">
        <img
          className="nav-img"
          src={IMAGES.logov5}
          alt="portoflio site logo"
        />
      </a>

      <a href="/" className="nav-button">
        email me!
      </a>
    </nav>
  )
}

export default Navbar
