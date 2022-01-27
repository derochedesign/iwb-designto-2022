import MailingList from "components/MailingList";
import React from "react";
import { useState, useRef } from "react";
import report from "download/IDS22-report.pdf";
import SectionWrapper from "components/SectionWrapper";
import designtoImg from "img/partners/designto.svg";
import gbcImg from "img/partners/gbc.svg";

const Footer = props => {
  
  const [isSubmit, setIsSubmit] = useState(false);
  const [startMail, setStartMail] = useState(false);
  const imgsLoaded = useRef(0);
  const sources = [
    "https://institutewithoutboundaries.ca/",
    "https://www.instagram.com/institutewithoutboundaries"
  ]
  
  const handleLoad = () => {
    const imgs = 2;
    imgsLoaded.current = imgsLoaded.current + 1;
    if (imgsLoaded.current === imgs) props.setImgLoaded("footer");
  }
  
  return (
    <SectionWrapper 
      className={"footer"}
      title="Join our community"
      split={false}>
      {(startMail) && <MailingList isSubmit={isSubmit} setIsSubmit={setIsSubmit} setStartMail={setStartMail} />}
      <div className="item-list-large">
        <div className="footer-buttons">
          <a href={report} download><button className="round">Download Report <span>10.7MB</span></button></a>
          <button className="round" onClick={() => setStartMail(true)}>{(isSubmit) ? "Thank You" : "Mailing List"}</button>
          <a href={sources[0]} rel="noopener" target={"_blank"}><button className="round">Institute without Boundaries</button></a>
          <a href={sources[1]} rel="noopener" target={"_blank"}><button className="round">Follow us on IG</button></a>
        </div>
        <div className="item-list center">
          <h6>The IDS cohort of 21/22 would like to thank faculty members for their endless support and expertise.</h6>
          <p className="small">Special mention to Graeme Kondruss, John Jung, Matthew Hexemer, Nazanin Homayounfar, and Robert Giusti.</p>
        </div>
        <div className="item-row partner-logos">
          <img src={gbcImg} alt="George Brown College logo" onLoad={handleLoad}/>
          <img src={designtoImg} alt="DesignTO logo" onLoad={handleLoad}/>
        </div>
        <div className="item-row site-info">
          <h5>&#169; IDS 2022</h5>
          <a href="https://deroche.design" rel="noopener" target={"_blank"} className="nav"><h5>deroche.design</h5></a>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Footer;