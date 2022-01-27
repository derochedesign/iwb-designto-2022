import ButtonGrid from "components/ButtonGrid";
import SectionWrapper from "components/SectionWrapper";

const Info = props => {
  
  const sources = [
    {title:"Google", url:"https://google.com"},
    {title:"Instagram", url:"https://instagram.com"}
  ]
  
  return(
    <>
    <SectionWrapper 
      className={"info-climate"}
      title="Climate-ready Communities"
      refC={props.refC}
      split={true}>
      <div className="item-list-med">
        <p>Climate-ready communities understand that communities are systems that must be resilient, circular, co-operative, and integrated with the natural environment. Climate ready communities recognize that resiliency is embedded in the diversity of peoples, cultures, and ecosystems. The diversity of these systems creates stability; should one system fail, others can continue to perform in the face of adversity. A climate ready community acts in the present to produce future benefit for all, it reflects real world conditions rather than abstract utopias. So what is a climate-ready community? Well, we haven’t defined it just yet. But you can help us identify the opportunities.</p>
        <h2>How can you help prepare communities for this transition? </h2>
      </div>
      
    </SectionWrapper>
    </>
  )
}
export default Info;