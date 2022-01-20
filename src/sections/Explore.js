import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Canvas from "components/Canvas";
import Konva from "components/Konva";
import Modal from "components/Modal";

const Explore = props => {
  
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [currentModal, setCurrentModal] = useState(0);
  
  const handleModal = (i) => {
    (!isNaN(i)) && setCurrentModal(i);
    setShowModal(!showModal);
  }
  
  return (
    <section className="explore" ref={props.refC}>
      <div className="title">
        <h2>The Journey</h2>
      </div>
      { (showModal) &&
        <Modal i={currentModal} handleModal={handleModal} />
      }
      <Konva vW={props.vW} handleModal={handleModal}/>
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