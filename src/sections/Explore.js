import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Canvas from "components/Canvas";
import Konva from "components/Konva";
import Modal from "components/Modal";
import SectionWrapper from "components/SectionWrapper";
import { data } from "data/Data";

const Explore = props => {
  
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [currentModal, setCurrentModal] = useState(0);
  
  const handleModal = (i) => {
    (!isNaN(i)) && setCurrentModal(i);
    setShowModal(!showModal);
  }
  
  useEffect(() => {
    showModal ? document.body.classList.add("modal-active") : document.body.classList.remove("modal-active");
  },[showModal]);
  
  return (
    <>
      <SectionWrapper 
        className={"explore"}
        title="Connect the Dots"
        refC={props.refC}
        split={false}>
        { (showModal) &&
          <Modal i={currentModal} handleModal={handleModal} />
        }
      </SectionWrapper>
      <Konva vW={props.vW} handleModal={handleModal} data={data}/>
    </>
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