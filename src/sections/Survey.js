import SectionWrapper from "components/SectionWrapper";

const Survey = props => {
  return(
    <SectionWrapper 
      className={"team"}
      title="We would like to hear from you"
      refC={props.refC}
      split={false}>
      <p>Typeform</p>
    </SectionWrapper>
  )
}
export default Survey;