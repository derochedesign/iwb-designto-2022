import SectionWrapper from "components/SectionWrapper";
import { createPopup } from "@typeform/embed";
import '@typeform/embed/build/css/popup.css';
import { useEffect, useRef, useState } from "react";

const Survey = props => {
  
  const [isSubmit, setIsSubmit] = useState(false);
  const [form, setForm] = useState();
  const SANDBOX = false;
  
  useEffect(() => {
    if (form) isSubmit ? form.close() : form.open()
  }, [form, isSubmit]);
  
  const handleSurveyPop = _ => {
    setForm(createPopup('eFMnLdrV', {enableSandbox:SANDBOX, onSubmit:() => setIsSubmit(true)}));
  }
  
  return(
    <SectionWrapper 
      className={"team"}
      title="We would like to hear from you"
      refC={props.refC}
      split={false}>
        <div className="center-align">
        { (isSubmit) ?
          <>
            <h2 className="">Thank You!</h2>
          </>
        :
          <>
            <p>The IDS-22 cohort recognizes that good design solutions can only be achieved through collaboration. Help us uncover what a climate ready community looks like.</p>
            <button onClick={handleSurveyPop}>Take Survey</button>
          </>
        }
        </div>
      
      
    </SectionWrapper>
  )
}
export default Survey;