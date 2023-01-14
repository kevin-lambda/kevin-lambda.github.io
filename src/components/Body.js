import React from "react"
import IMAGES from "../assets/index.js"

function Body() {
  return (
    <main className="comp-main">
      <section className="body-hero">
        <h1>Fullstack Developer, Engineer & Technical Creative</h1>
        <h2>I build technical things, creatively. </h2>
        <img className="hero-img" src={IMAGES.profile_pic} alt="avatar" />
      </section>
      <section className="body-subhero">
        <img className="subhero-img" src={IMAGES.subhero} alt="sub hero" />
      </section>
      <section className="body-about">
        <h1 className="about1">Hi i'm kevin nice to meet you</h1>
        <h2 className="about2">
          3 sentence about me. this is more sentence. sentence here hello. 3
          sentence about me. this is more sentence. sentence here hello. 3
          sentence about me. this is more sentence. sentence here hello.
        </h2>
      </section>
      <section className="body-skills">
        <div className="skills-flex-container">
          <div className="skills-items-container">
            <img
              className="skill-item-icon"
              src={IMAGES.logo}
              alt="skill icon"
            />
            <h1 className="skill-item-h1">developer</h1>
            <p>
              developer text stuff and details weaf easf aesf ew we ew awecvesvc
              wr vrewa gv rew avwe we vwea vsd fewf
            </p>

            <p className="skill-item-p-heading">things developing like</p>
            <p>list of things</p>

            <p className="skill-item-p-heading">tools for developeing</p>
            <ul>
              <li>word</li>
              <li>4ewrf</li>
              <li>3faer</li>
              <li>4gfrr</li>
              <li>555ygt</li>
            </ul>
          </div>
          <div className="skills-items-container">
            <img
              className="skill-item-icon"
              src={IMAGES.logo}
              alt="skill icon"
            />
            <h1 className="skill-item-h1">developer</h1>
            <p>developer text stuff and details</p>
            <p className="skill-item-p-heading">things developing like</p>
            <p>list of things</p>
            <p className="skill-item-p-heading">tools for developeing</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
          <div className="skills-items-container">
            <img
              className="skill-item-icon"
              src={IMAGES.logo}
              alt="skill icon"
            />
            <h1 className="skill-item-h1">developer</h1>
            <p>developer text stuff and details</p>
            <p className="skill-item-p-heading">things developing like</p>
            <p>list of things</p>
            <p className="skill-item-p-heading">tools for developeing</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="body-projects-heading">
        <h1 className="about1">Projects</h1>
        <h2 className="about2">
          {" "}
          faer fwe fwe fw esf eswajbfawuefh938w fhawoeusyfgbwaeouyfbawesof asdf
          dshf bskdf skadl fdsak fnsadof hsadof jsdahn f9pdsubi
        </h2>
      </section>
      <section className="body-projects">
        <div className="projects-items-container">
          <img
            className="single-item-image"
            src={IMAGES.logo}
            alt="project 1"
          />
          <img
            className="single-item-image"
            src={IMAGES.logo}
            alt="project 1"
          />
          <img
            className="single-item-image"
            src={IMAGES.logo}
            alt="project 1"
          />
        </div>
      </section>
    </main>
  )
}

export default Body
