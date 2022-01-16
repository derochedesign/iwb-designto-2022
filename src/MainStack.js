import { useEffect, useState, useRef } from "react";
import Landing from "sections/Landing";
import Introduction from "sections/Introduction";
import Explore from "sections/Explore";
import Footer from "sections/Footer";
import { useLocation } from "react-router-dom";
import ScrollContainer from "components/ScrollContainer";

const MainStack = props => {
  
  const landingRef = useRef(null);
  const introRef = useRef(null);
  const exploreRef = useRef(null);
  const footerRef = useRef(null);
  
  let local = useLocation();
  
  useEffect(() => {
    
    let _ref;
    
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
      _ref = footerRef.current;
    }
    else {
      //err
      _ref = landingRef.current;
    }
    
    _ref.scrollIntoView();
    
  }, [props.pos, local]);
    
  return (
    
    <ScrollContainer>
      <main className="main">
        <Landing refC={landingRef} />
        <Introduction refC={introRef}/>
        <Explore refC={exploreRef} />
        <Footer refC={footerRef} />
      </main>
    </ScrollContainer>
  
  )
}

export default MainStack;