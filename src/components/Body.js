import React from "react"
import IMAGES from "../assets/index.js"

function Body() {
  return (
    <main className="comp-main">
      <section className="body-hero">
        <h1>Fullstack Developer, Engineer & Technical Creative</h1>
        <h2>I love to build experiences and explore ideas.</h2>
        <img className="hero-img" src={IMAGES.profile_pic} alt="avatar" />
      </section>
      <section className="body-subhero">
        <img className="subhero-img" src={IMAGES.subhero} alt="sub hero" />
      </section>
      <section className="body-about">
        <h1 className="about1">My name is Kevin</h1>
        <h2 className="about2">
          After eight years as a mechanical engineer, I now use those technical
          skills with my creative nature to build software. I love to explore
          new challenges, seek other perspectives and strive to build enjoyable
          experiences.
        </h2>
      </section>
      <section className="body-skills">
        <div className="skills-flex-container">
          <div className="skills-items-container">
            <img
              className="skill-item-icon"
              src={IMAGES.code}
              alt="skill icon"
            />
            <h1 className="skill-item-h1">Fullstack Developer</h1>
            <p>
              I've built applications front to back and value being able to
              understand the full scope of a project.
            </p>

            <p className="skill-item-p-heading">Strengths:</p>
            <p>Detail oriented, Collaborative, Curiousity</p>

            <p className="skill-item-p-heading">Technologies:</p>
            <ul>
              <li>React</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>Javascript</li>
              <li>HMTL</li>
              <li>CSS</li>
              <li>P5js</li>
              <li>CMS</li>
              <li>Firebase</li>
              <li>Gatsbyjs</li>
              <li>Github</li>
            </ul>
          </div>
          <div
            className="skills-items-container"
            id="skills-items-container-middle"
          >
            <img
              className="skill-item-icon"
              src={IMAGES.wrench}
              alt="skill icon"
            />
            <h1 className="skill-item-h1">Technical</h1>
            <p>
              I can dig into the details to troubleshoot and ensure the project
              has a robust foundation.
            </p>
            <p className="skill-item-p-heading">Other Technical Fields:</p>
            <p>Microcontrollers, Audio Production, Composite Structures</p>
            <p className="skill-item-p-heading">Experiences:</p>
            <ul>
              <li>Managed an engineering test project</li>
              <li>Wrote a 1000+ page technical document</li>
              <li>Streamlined data exchange processes</li>
              <li>Approved 20+ design proposals</li>
              <li>Analyzed test data</li>
            </ul>
          </div>
          <div className="skills-items-container">
            <img
              className="skill-item-icon"
              src={IMAGES.lightbulb}
              alt="skill icon"
            />
            <h1 className="skill-item-h1">Creative</h1>
            <p>
              I naturally seek to connect new ideas and view things in different
              perspectives.
            </p>
            <p className="skill-item-p-heading">Other interests:</p>
            <p>Storytelling, Music Production, Glass Flameworking</p>
            <p className="skill-item-p-heading">Creative Projects:</p>
            <ul>
              <li>Audio time capsule</li>
              <li>Electric longboard design and build</li>
              <li>Artisan bread baking</li>
              <li>Flower pressing</li>
              <li>Effect pedal fabrication</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="body-projects-heading">
        <h1 className="about1">Projects</h1>
        <h2 className="about2">Here are some of the projects I've built.</h2>
      </section>
      <section className="body-projects">
        <div className="projects-items-container">
          <a
            href="https://wormseye-d1c52.web.app/"
            className="single-item-image"
          >
            <img src={IMAGES.p8} alt="project 1: worms eye view" />
            {/* <div className="overlay">
              <span>
                test weaf ef ew text awf ouehf lwe fnksadfnksdj dsk ds s dds ksd
                jksd kjds awf ef we fwe f ewfe w
              </span>
            </div> */}
          </a>
          <a
            href="https://kevin-lambda.github.io/p5-async-week-project/testWithExtension/index.html"
            className="single-item-image"
          >
            <img src={IMAGES.p22} alt="project 2: p5 project" />
          </a>
          <a
            href="https://kevin-lam.netlify.app/"
            className="single-item-image"
          >
            <img src={IMAGES.p9} alt="project 3: creative project portfolio" />
          </a>
        </div>
      </section>
    </main>
  )
}

export default Body
