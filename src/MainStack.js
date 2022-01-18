import { useEffect, useState, useRef } from "react";
import Landing from "sections/Landing";
import Introduction from "sections/Introduction";
import Explore from "sections/Explore";
import Footer from "sections/Footer";
import { useLocation } from "react-router-dom";
import ScrollContainer from "components/ScrollContainer";
import GradientBackground from "components/GradientBackground";

const MainStack = props => {
  
  const landingRef = useRef(null);
  const introRef = useRef(null);
  const exploreRef = useRef(null);
  const footerRef = useRef(null);
  
  const [scrollHeight, setScrollHeight] = useState(0);
  
  let local = useLocation();
  console.log(scrollHeight);
  
  useEffect(() => {
    setScrollHeight(landingRef.current.clientHeight + introRef.current.clientHeight + exploreRef.current.clientHeight + footerRef.current.clientHeight);
  },[])
  
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
    //smooth scroll issue w perfect scrollbar
    
  }, [props.pos, local]);
    
  return (
    <>
      <ScrollContainer>
        {(scrollHeight) && <GradientBackground height={scrollHeight} width={props.vW}/>}
        <main className="main">
          <Landing refC={landingRef} />
          <Introduction refC={introRef}/>
          <Explore refC={exploreRef} vW={props.vW}/>
          <Footer refC={footerRef} />
        </main>
      </ScrollContainer>
    </>
  )
}

export default MainStack;