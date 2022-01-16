import React from "react";
import { useNavigate } from "react-router-dom";

const Introduction = props => {

  let navigate = useNavigate();
  
  return (
    <section className="introduction" ref={props.refC}>
      <div className="item-list">
        <h1>Introduction</h1>
        <h3>Migration is not monolithic. Humans relocate due to a complex set of factors that are constantly evolving making it difficult to track and cause fixed solutions to become obsolete. Moreover, how does an individual, such as you, make a positive impact when chasing a moving target?</h3>
        <p>This map is designed to help you navigate complexities surrounding migration due to climate change. By grounding information on a community and human level, a systemic picture is revealed. Awareness could inspire empty, which could inspire action. Step one is getting a grasp of what is going on.</p>
        <button onClick={() => navigate("/explore")}>Explore</button>
      </div>
    </section>
  )
}

export default Introduction;