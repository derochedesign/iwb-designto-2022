import SectionWrapper from "components/SectionWrapper";
import { createWidget } from "@typeform/embed";
import '@typeform/embed/build/css/widget.css';
import { useEffect, useRef } from "react";

const Survey = props => {
  
  const formRef = useRef(null);
  const SANDBOX = true;
  
  useEffect(() => {
    createWidget('oQPCpsT2', {container: formRef.current, opacity:0, height: ((props.vH - 64) > 700) ? props.vH - 128 : 700, enableSandbox:SANDBOX,disabledAutoFocus:true})
  },[]);
  
  return(
    <SectionWrapper 
      className={"team"}
      title="We would like to hear from you"
      refC={props.refC}
      split={false}>
      <div ref={formRef} />
    </SectionWrapper>
  )
}
export default Survey;