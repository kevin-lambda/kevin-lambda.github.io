import React from "react"
import IMAGES from "../assets/index.js"

function Footer() {
  return (
    <footer className="comp-footer">
      <div className="footer-content">
        <div>
          <h2>Get in touch!</h2>
        </div>
        <div>
          <p>social icons</p>
        </div>
        <div className="footer-copyright">Built by me ©2023</div>
        <div>
          Made with React
          <span> </span>
          <span>
            <img
              className="logo-react"
              src={IMAGES.logo_react}
              alt="react logo"
            />
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
