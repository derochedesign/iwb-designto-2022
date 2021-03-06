import SectionWrapper from "components/SectionWrapper";
import { useNavigate } from "react-router-dom";

const Introduction = props => {

  let navigate = useNavigate();
  
  return (
    <SectionWrapper 
      className={"introduction"}
      title=""
      refC={props.refC}
      split={false}>
      <div className="intro-inner">
        <div className="intro-hero-text">
          <h1>It is a matter</h1>
          <h1>of <span className="i">humanity,</span></h1>
          <h1>not a matter</h1>
          <h1>of a <span className="i">passport.</span></h1>
        </div>
        <div className="item-list">
          <p>Designing for a climate ready community means more than just envisioning a sustainable future. Designing for climate ready communities requires the recognition and integration of the most underrepresented stakeholders in climate discourse: those displaced by environmental risk.</p>
          <p>This learning tool represents how human mobility is implicated in the crossroads of climate change. Uncover nodes and discover sites of intervention for designers and non-designers alike to set the stage for a climate-ready future. This tool will make visible the implicit connections that drive one of the most concerning environmental impacts: the loss of home and community.</p>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Introduction;