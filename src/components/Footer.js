import React from "react"
import IMAGES from "../assets/index.js"

function Footer() {
  return (
    <footer className="comp-footer">
      <div className="footer-content">
        <div>
          <h2 className="footer-heading">Get in touch</h2>
        </div>
        <div>
          <p className="footer-icons">
            <a
              className="icon-a"
              href="https://www.linkedin.com/in/kevin-q-lam/"
            >
              <span className="icon-span">
                <img
                  className="icon-img"
                  src={IMAGES.linkedin}
                  width="45px"
                  alt="icons"
                />
              </span>
            </a>
            <a className="icon-a" href="https://github.com/kevin-lambda">
              <span className="icon-span">
                <img
                  className="icon-img"
                  src={IMAGES.github}
                  width="46px"
                  alt="icons"
                />
              </span>
            </a>
            <a
              className="icon-a"
              href="mailto:kevin.quoct.lam+portfolio2@gmail.com"
            >
              <span className="icon-span">
                <img
                  className="icon-img"
                  src={IMAGES.email}
                  width="45px"
                  alt="icons"
                />
              </span>
            </a>
          </p>
        </div>
        <div className="footer-copyright">Built by me ©2023</div>
        <div className="footer-made-with">
          Made with React, based on Matt Farley's site
        </div>
      </div>
    </footer>
  )
}

export default Footer
