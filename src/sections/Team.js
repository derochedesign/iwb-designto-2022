import SectionWrapper from "components/SectionWrapper";
import { useRef } from "react";

import daksh from "img/team/daksh.jpg";
import jenna from "img/team/jenna.jpg";
import migs from "img/team/migs.jpg";
import jp from "img/team/jp.jpg";
import katie from "img/team/katie.jpg";
import rebecca from "img/team/rebecca.jpg";
import shashank from "img/team/shashank.jpg";
import zan from "img/team/zan.jpg";

const Team = props => {
  
  const allTeam = [
    {img:daksh, name:"daksh gandhi", title:"Bachelor of Architecture"},
    {img:jenna, name:"jenna rose storey", title:"Bachelor of Fine Arts, Integrated Media, & Furniture Designer"},
    {img:migs, name:"joaquin (migs) topacio", title:"Bachelor of Science in Industrial Design"},
    {img:jp, name:"josé pablo (jp) carrillo", title:"Bachelor of Visual Communication, Brand Strategist, & Packaging Designer"},
    {img:katie, name:"katie doyle", title:"Advanced Diploma in Graphic Design & Certificate in Digital Media Skills"},
    {img:rebecca, name:"rebecca arshawsky", title:"Honours Bachelor of Arts, Architecture, & Human Geography"},
    {img:shashank, name:"shashank banawalikar", title:"Bachelor of Architecture"},
    {img:zan, name:"zan ding", title:"Bachelor of Science in Agricultural & Environmental Sciences"},
  ];
  
  return(
    <SectionWrapper 
      className={"team"}
      title="Meet the IDS22 Team"
      refC={props.refC}
      split={false}>
        
      <div className="team-set">
        {allTeam.map((t,i) => 
          <TeamCard key={i} img={t.img} name={t.name} title={t.title} setImgLoaded={props.setImgLoaded} imgsCount={allTeam.length}/>
        )}
      </div>
    </SectionWrapper>
  )
}

const TeamCard = props => {
  
  const imgsLoaded = useRef(0);
  
  const handleLoad = () => {
    const imgs = props.imgsCount;
    imgsLoaded.current = imgsLoaded.current + 1;
    if (imgsLoaded.current === imgs) props.setImgLoaded("team");
  }
  
  return (
    <div className="team-card">
      <img src={props.img} alt={`${props.name} headshot`} onLoad={handleLoad} />
      <h4 className="name">{props.name}</h4>
      <p className="title small">{props.title}</p>
    </div>
  )
}
export default Team;