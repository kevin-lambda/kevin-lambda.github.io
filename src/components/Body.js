import React from "react"
import IMAGES from "../assets/index.js"

function Body() {
  return (
    <main className="comp-main">
      <section className="body-hero">
        <h1>titles 1,2,3</h1>
        <h2>sub title description with text and stuff</h2>
        <img src={IMAGES.logo} alt="avatar" />
      </section>
      <section className="body-subhero">
        <img src={IMAGES.subhero} alt="sub hero" />
      </section>
      <section className="body-about">
        <h1>Hi i'm kevin nice to meet you</h1>
        <h2>
          3 sentence about me. this is more sentence. sentence here hello. 3
          sentence about me. this is more sentence. sentence here hello. 3
          sentence about me. this is more sentence. sentence here hello.
        </h2>
      </section>
      <section className="body-skills"> section skills</section>
      <section className="body-projects"> section projects</section>
      <section className="body-contact"> section contact</section>
    </main>
  )
}

export default Body
