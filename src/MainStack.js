import { useEffect, useState, useRef } from "react";
import Landing from "sections/Landing";
import Introduction from "sections/Introduction";
import Explore from "sections/Explore";
import Footer from "sections/Footer";
import { useLocation } from "react-router-dom";
import ScrollContainer from "components/ScrollContainer";
import GradientBackground from "components/GradientBackground";
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
  const psRef = useRef();
  
  const [scrollHeight, setScrollHeight] = useState(0);
  
  let local = useLocation();
  
  useEffect(() => {
    setScrollHeight(
      document.body.scrollHeight);
  },[props.vS])
  
  useEffect(() => {
    
    let _ref;
    let _offset = (props.vS.width > 1100) ? 0 : -80;
    const curr = psRef.current;
    
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
    if(curr) curr.scrollTo({
      top:_ref.getBoundingClientRect().top + curr.scrollTop + _offset,
      behavior:"smooth"
    });
    else window.scrollTo({
      top:_ref.getBoundingClientRect().top + window.pageYOffset + _offset,
      behavior:"smooth"
    })
    //smooth scroll issue w perfect scrollbar
    
  }, [props.pos, local]);
    
  return (
    <>
      {/* <ScrollContainer contRef={psRef}> */}
        {(scrollHeight) && <GradientBackground height={scrollHeight} width={props.vS.width}/>}
        <main className="main">
          <Landing refC={landingRef} />
          <Introduction refC={introRef}/>
          <Explore refC={exploreRef} vW={props.vS.width}/>
          <Info refC={infoRef} />
          <Survey refC={surveyRef} vH={props.vS.height} />
          <Team refC={teamRef} />
          <Footer refC={footerRef} />
        </main>
      {/* </ScrollContainer> */}
    </>
  )
}

export default MainStack;