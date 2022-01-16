import React from "react";
import { useNavigate } from "react-router-dom";

const Explore = props => {
  
  let navigate = useNavigate();
  
  return (
    <section className="explore" ref={props.refC}>
      <h1>Explore</h1>
    </section>
  )
}

export default Explore;