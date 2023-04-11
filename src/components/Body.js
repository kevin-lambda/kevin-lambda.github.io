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
          I was a mechanical engineer for eight years. Now I use those technical
          skills I honed in engineering along with my creative nature to build
          software. I love to explore new challenges, seek other perspectives
          and strive to create enjoyable experiences.
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
            <p>Detail oriented, Collaborative, Curiosity</p>

            <p className="skill-item-p-heading">Technologies:</p>
            <ul>
              <li>React</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>Javascript</li>
              <li>HMTL</li>
              <li>CSS</li>
              <li>NextJS</li>
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
              I dig into the details to troubleshoot and ensure the project has
              a robust foundation.
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
        <h2 className="about2">
          Here are live demos of my recent works you can visit.
          <h2 class="about2">
            To follow my learning progress, check out my{" "}
            <a
              className="about2-link"
              href="https://github.com/kevin-lambda/kevin-lambda/blob/main/dev_log.md"
            >
              devlog
            </a>
            .
          </h2>
        </h2>
      </section>
      <section className="body-projects">
        <div className="projects-items-container">
          <a
            href="https://kevin-lambda.github.io/dakine-ipsum/"
            className="single-item-image"
          >
            <div className="project-card-container">
              <img src={IMAGES.p4} alt="project 4: dakine ipsum" />

              <div className="overlay">
                <div className="overlay-text-title">Dakine Ipsum</div>
                <div className="overlay-text">
                  Ipsum Lorem filler text generated using a Context Free Grammar
                  with Hawaii Creole English (Hawaiian Pidgin).
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://wormseye-d1c52.web.app/"
            className="single-item-image"
          >
            <div className="project-card-container">
              <img src={IMAGES.p1} alt="project 1: worms eye view" />

              <div className="overlay">
                <div className="overlay-text-title">Worm's Eye View</div>
                <div className="overlay-text">
                  Fully featured plant suggestion application based on current
                  location and date. Includes user authentication, stored user
                  journal, garden planning visualizer, browseable plant
                  database.
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://this-belongs-to.onrender.com/"
            className="single-item-image"
          >
            <div className="project-card-container">
              <img src={IMAGES.p6} alt="project 5" />

              <div className="overlay">
                <div className="overlay-text-title">This Page Belongs To</div>
                <div className="overlay-text">
                  Novelty site allowing a user to own a webpage with a
                  persistent leaderboard built with PERN (Postgresql, Express,
                  React, Node).
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://kevin-lam.netlify.app/"
            className="single-item-image"
          >
            <div className="project-card-container">
              <img
                src={IMAGES.p3}
                alt="project 3: creative project portfolio"
              />

              <div className="overlay">
                <div className="overlay-text-title">
                  Creative projects portfolio
                </div>
                <div className="overlay-text">
                  Made with Gatsbyjs, another portfolio containing creative
                  projects in other mediums.
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
      {/* <section className="pre-footer">
        <div className="pre-footer-text">
          Want to visit my developer's journal?
        </div>
        <a className="nav-button" href="/">
          Let's go
        </a>
      </section> */}
    </main>
  )
}

// easter egg
console.log(
  "==================================================",
  "\n",
  "Hello there developer.",
  "\n",
  "Are you inspecting to see how I built this?",
  "\n",
  "==================================================",
  "\n",
  "- I started with >>npx create-react-app",
  "\n",
  "- I used vanilla react, css, javascript, html",
  "\n",
  "- I made the logo myself",
  "\n",
  "- I used dall-e 2 to generate the bottom of the fold banner",
  "\n",
  "- I controlled for screen sizes with just one @media query ",
  "\n"
)

export default Body
