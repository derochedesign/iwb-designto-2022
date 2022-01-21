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
        <p>Climate-ready communities understand that communities are systems that must be resilient, circular, co-operative, and integrated with the natural environment. Climate ready communities recognize that resiliency is embedded in the diversity of peoples, cultures, and ecosystems. The diversity of these systems creates stability; should one system fail, others can continue to perform in the face of adversity. A climate ready community acts in the present to produce future benefit for all, it reflects real world conditions rather than abstract utopias.</p>
        <p>Toronto is in a position to be a world leader in proactive reception of climate migrants and working towards a sustainable and resilient future. Plentiful resources, diversified employment opportunities, trustworthy settlement support, inclusive communities, and rising climate awareness place Toronto as one of the most livable cities in the world and a paradigm multicultural centre. Toronto as the world’s most resilient city and  a top contender for sustainable future readiness. The city’s ambitious resilience strategy targets key opportunities for individual, community, infrastructural, and climate resilience. These resiliency strategies can be expanded to support incoming climate migration so that Toronto is an exemplar climate-ready community for urban centres around the world. But it will take significant intervention and collaboration to enact this climate-ready future.</p>
        <h2>How can you take part in this transition?</h2>
      </div>
      
    </SectionWrapper>
    </>
  )
}
export default Info;