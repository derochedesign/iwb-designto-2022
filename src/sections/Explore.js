import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Canvas from "components/Canvas";
import Konva from "components/Konva";
import Modal from "components/Modal";
import SectionWrapper from "components/SectionWrapper";

const Explore = props => {
  
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [currentModal, setCurrentModal] = useState(0);
  
  const handleModal = (i) => {
    (!isNaN(i)) && setCurrentModal(i);
    setShowModal(!showModal);
  }
  
  return (
    <>
      <SectionWrapper 
        className={"team"}
        title="The Larger Picture"
        refC={props.refC}
        split={false}>
        { (showModal) &&
          <Modal i={currentModal} handleModal={handleModal} />
        }
      </SectionWrapper>
      <Konva vW={props.vW} handleModal={handleModal}/>
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