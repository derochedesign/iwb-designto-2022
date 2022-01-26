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
          <p>Due to the escalating effects of climate change, human migration will surge as early as 2030.</p>
          {/* <h6 className="quote">&#x201C; Climate Migration hotspots will emerge as early as 2030 &#x201D;</h6>
          <p className="small">Groundswell Report on Climate Migration</p> */}
        </div>
        <button onClick={() => props.setShowOverlay(false)}>Connect the Dots</button>
      </div>
      <div className="item-list">
        <h1 className="alt">Immediate disasters, such as floods, wildfires, and extreme temperatures, in addition to steady environmental deterioration such as air pollution and desertification, will displace 216 million people in the ensuing decades.</h1>
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