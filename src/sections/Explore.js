import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Canvas from "components/Canvas";
import Konva from "components/Konva";

const Explore = props => {
  
  let navigate = useNavigate();
  
  return (
    <section className="explore" ref={props.refC}>
      <h1>Explore</h1>
      <div className="node-map">
        <Node left={5} top={350} title={"Education"}/>
        <Node left={12} top={150} title={"Climate"}/>
        <Node left={49} top={300} title={"Something"}/>
        <Node left={75} top={149} title={"Else"}/>
      </div>
      {/* <Canvas vW={props.vW} /> */}
      {/* <Konva vW={props.vW}/> */}
    </section>
  )
}

const Node = props => {
  
  const [nodeHover, setNodeHover] = useState(false);
  const [showFocus, setShowFocus] = useState(false);
  
  return(
    <div
      onMouseEnter={(!showFocus) && (() => setNodeHover(true))}
      onMouseLeave={(!showFocus) && (() => setNodeHover(false))}
      onClick={() => setShowFocus(true)}
      data-expand={nodeHover}
      className="node"
      style={{left:props.left+"vw", top:props.top+"px"}}>
        
      <h3>{props.title}</h3>
    </div>
  )
}

export default Explore;