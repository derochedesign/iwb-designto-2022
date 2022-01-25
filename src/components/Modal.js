import { useRef, useEffect, useState } from "react";
import closeIcon from "img/close.svg";
import ScrollContainer from "./ScrollContainer";
import { data } from "data/Data";

const Modal = props => {
  
  const BodyText = data[props.i].info;
  const [isAnim, setIsAnim] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsAnim(true);
    },100)
    
  },[]);
  
  return (
    <>  
      <div className="modal-behind" data-anim={isAnim}>
        <div className="modal">
          <div className="modal-topbar right-item-layout">
            <h3 className="highlight">{data[props.i].title}</h3>
            <button className="icon icon-round" onClick={() => props.handleModal(null)}><img src={closeIcon} /></button>
          </div>
          <div className="inner-modal">
            <ScrollContainer>
              <BodyText />
            </ScrollContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
