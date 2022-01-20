import LineDivider from "components/LineDivider";
import React from "react";

const Landing = props => {

  return (
    <section className="landing" ref={props.refC}>
      <div>
        <h1>Connecting</h1>
        <h1>The Dots</h1>
      </div>
      <LineDivider />
      <p>The Larger Picture of Climate Migration</p>
    </section>
  )
}

export default Landing;