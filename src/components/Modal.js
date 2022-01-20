import { useRef, useEffect } from "react";
import closeIcon from "img/close.svg";
import ScrollContainer from "./ScrollContainer";

const Modal = props => {
  
  return (
    <>  
      <div className="modal-behind">
        <div className="modal">
          <div className="modal-topbar right-item-layout">
            <h3 className="highlight">Environmental Risks ({props.i})</h3>
            <button className="icon icon-round" onClick={() => props.handleModal(null)}><img src={closeIcon} /></button>
          </div>
          <div className="inner-modal">
            <ScrollContainer>
              <p className="small">The key to understanding climate migration is to understand the environmental risks that compel people to leave their homes. While Canada experiences some of the least frequent natural disasters worldwide, climate change will force the global community to face <a href="https://google.ca" target="_blank" rel="noopener" className="text">increasing environmental risk</a> indiscriminately. The effects of these risks can be felt right here in Toronto. Extreme heat in dense urban centers causes increasing health risks and even fatalities. Greater flooding along Lake Ontario causes home damage and loss. Without necessary interventions to mitigate or adapt to these risks, residents of Canada will face similar situations to climate migrants. Designing climate ready communities for the general public today means designing for what climate migrants will require years down the line. Climate action must be implemented at multiple scales so that communities are best equipped to handle environmental risk that threatens peoples’ homes, livelihoods, and lives.</p>
            </ScrollContainer>
          </div>
          <div className="button-grid">
            <button className="highlight">CBC</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
