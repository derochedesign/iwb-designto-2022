import { useEffect, useState, useRef } from "react";
import Landing from "sections/Landing";
import Introduction from "sections/Introduction";
import Explore from "sections/Explore";
import Footer from "sections/Footer";
import { useLocation } from "react-router-dom";
import ScrollContainer from "components/ScrollContainer";
import Team from "sections/Team";
import Info from "sections/Info";
import Survey from "sections/Survey";

const MainStack = props => {
  
  const landingRef = useRef(null);
  const introRef = useRef(null);
  const exploreRef = useRef(null);
  const infoRef = useRef(null);
  const surveyRef = useRef(null);
  const teamRef = useRef(null);
  const footerRef = useRef(null);
  
  let local = useLocation();
  
  useEffect(() => {
    
    let _ref;
    let _offset = (props.vS.width > 1100) ? 0 : -80;
    
    if (props.pos === 1) {
      //landing
      _ref = landingRef.current;
    }
    else if (props.pos === 2) {
      //intro
      _ref = introRef.current;
    }
    else if (props.pos === 3) {
      //explore
      _ref = exploreRef.current;
    }
    else if (props.pos === 4) {
      //footer
      _ref = infoRef.current;
    }
    else if (props.pos === 5) {
      //footer
      _ref = surveyRef.current;
    }
    else {
      //err
      _ref = landingRef.current;
    }
    
    // if(curr) curr.scrollTop = (_ref.getBoundingClientRect().top + _offset);

    window.scrollTo({
      top:_ref.getBoundingClientRect().top + window.pageYOffset + _offset,
      behavior:"smooth"
    })
    //smooth scroll issue w perfect scrollbar
    
  }, [props.pos, local, props.imgLoaded]);
    
  return (
    <>
      {/* <ScrollContainer contRef={psRef}> */}
        <main className="main">
          <Landing refC={landingRef} showOverlay={props.showOverlay} setShowOverlay={props.setShowOverlay} />
          <Introduction refC={introRef}/>
          <Explore refC={exploreRef} vW={props.vS.width}/>
          <Info refC={infoRef} />
          <Survey refC={surveyRef} vH={props.vS.height} />
          <Team refC={teamRef} setImgLoaded={props.setImgLoaded}/>
          <Footer refC={footerRef} setImgLoaded={props.setImgLoaded}/>
        </main>
      {/* </ScrollContainer> */}
    </>
  )
}

export default MainStack;