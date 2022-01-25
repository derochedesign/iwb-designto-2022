import arrowIcon from "img/arrow.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Countdown from "components/Countdown";

const Landing = props => {
  
  useEffect(() => {
    props.showOverlay ? document.body.classList.add("modal-active") : document.body.classList.remove("modal-active");
  });

  return (
    <section className="landing" ref={props.refC}>
      
      <div className="landing-overlay" data-active={props.showOverlay}>
        <Countdown />
        <div className="center-align">
          <h6 className="quote">Climate Migration hotspots will emerge as early as 2030</h6>
          <p className="small">Groundswell Report on Climate Migration</p>
        </div>
        <button onClick={() => props.setShowOverlay(false)}>Connect the Dots</button>
      </div>
      <div className="item-list">
        <h1 className="alt">Escalating pressure on these hotspots will displace 216 million people in the ensuing decades.</h1>
        <div>
          <h1 className="alt">When our homes are no longer habitable,</h1>
          <h1 className="alt">where will we go?</h1>
        </div>
        <Link to="/introduction" className="arrow-down"><button className="icon"><img src={arrowIcon} /></button></Link>
      </div>
    </section>
  )
}

export default Landing;