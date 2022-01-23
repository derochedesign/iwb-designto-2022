import arrowIcon from "img/arrow.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Countdown from "components/Countdown";

const Landing = props => {
  
  const [showOverlay, setShowOverlay] = useState(true);
  
  useEffect(() => {
    showOverlay ? document.body.classList.add("modal-active") : document.body.classList.remove("modal-active");
  });

  return (
    <section className="landing" ref={props.refC}>
      
      <div className="landing-overlay" data-active={showOverlay}>
        <Countdown />
        <h6>Feeling lost?</h6>
        <button onClick={() => setShowOverlay(false)}>Connect the Dots</button>
      </div>
      <div className="item-list">
        <h1 className="alt">The climate-induced migration will intensify to unprecedented levels as early as 2030. In our lifetime we could see as many as 216 million people displaced by extreme weather and natural disasters.</h1>
        <div>
          <h1 className="alt">When our homeland is no longer a haven,</h1>
          <h1 className="alt">where will we go?</h1>
        </div>
        <Link to="/introduction" className="arrow-down"><button className="icon"><img src={arrowIcon} /></button></Link>
      </div>
    </section>
  )
}

export default Landing;