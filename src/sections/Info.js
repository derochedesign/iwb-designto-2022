import SectionWrapper from "components/SectionWrapper";

const Info = props => {
  
  return(
    <>
    <SectionWrapper 
      className={"info-climate"}
      title="Climate-ready Communities"
      refC={props.refC}
      split={true}>
      <div className="item-list">
        <p>Climate-ready communities understand that communities are systems that must be resilient, circular, co-operative, and integrated with the natural environment. Climate ready communities recognize that resiliency is embedded in the diversity of peoples, cultures, and ecosystems. The diversity of these systems creates stability; should one system fail, others can continue to perform in the face of adversity. A climate ready community acts in the present to produce future benefit for all, it reflects real world conditions rather than abstract utopias.</p>
        <h6>Additional Information</h6>
        <div className="button-grid">
          <button>Evergreen</button>
          <button>Society Centered</button>
          <button>DesignTO</button>
        </div>
      </div>
      
    </SectionWrapper>
    <SectionWrapper 
      className={"info-toronto"}
      title="Toronto as a Landing Point"
      refC={props.refC}
      split={true}>
      <div className="item-list">
        <p>Climate-ready communities understand that communities are systems that must be resilient, circular, co-operative, and integrated with the natural environment. Climate ready communities recognize that resiliency is embedded in the diversity of peoples, cultures, and ecosystems. The diversity of these systems creates stability; should one system fail, others can continue to perform in the face of adversity. A climate ready community acts in the present to produce future benefit for all, it reflects real world conditions rather than abstract utopias.</p>
        <h6>Additional Information</h6>
        <div className="button-grid">
          <button>Evergreen</button>
          <button>Society Centered</button>
          <button>DesignTO</button>
        </div>
      </div>
      
    </SectionWrapper>
    </>
  )
}
export default Info;