import { Routes, Route, Link, BrowserRouter} from "react-router-dom";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import MainStack from "MainStack";
import "main.css";
import GradientBackground from "components/GradientBackground";

import logoIcon from "img/logo-icon.svg";
import logoText from "img/logo-text.svg";
import menuIcon from "img/menu.svg";
import closeIcon from "img/close.svg";
import Toggle from "components/Toggle";

function App() {

  const root = document.documentElement;
  const SCROLLHEIGHT = 40;
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: document.body.clientWidth
  });
  const [isScrolled, setIsScrolled] = useState(window.scrollY > SCROLLHEIGHT);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [scrollHeight, setScrollHeight] = useState(document.body.scrollHeight);
  const [imgLoaded, setImgLoaded] = useState();
  const [grainOn, setGrainOn] = useState(true);
  
  useEffect(() => {
    menuOpen ? document.body.classList.add("modal-active") : document.body.classList.remove("modal-active");
  });
  
  useEffect(() => {
    setScrollHeight(document.body.scrollHeight);
    
    window.addEventListener('scroll', handleScroll);
    
    return _ => {
      window.removeEventListener('scroll', handleScroll);
    }

  },[]);
  
  useEffect(() => {
    
    setScrollHeight(document.body.scrollHeight);
    
  },[showOverlay, isScrolled, imgLoaded, dimensions]);
  
  useEffect(() => {
    let timeoutId = null;
    setScrollHeight(document.body.scrollHeight);
    const handleResize = () => {
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setDimensions({
          height: window.innerHeight,
          width: document.body.clientWidth
        })
        root.style.setProperty('--real-vh', window.innerHeight + "px");
      }, 150);
    }
    
    (!isMobile) && window.addEventListener('resize', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize);
    }
  },[]);
  
  useEffect(() => {
    menuOpen ? document.body.classList.add("modal-active") : document.body.classList.remove("modal-active");
  },[menuOpen]);
  
  const handleScroll = e => {
    if (window.scrollY > SCROLLHEIGHT) {
      setIsScrolled(true);
    }
    else {
      setIsScrolled(false);
    }
  }
  
  return (
    <div className="App" data-grain={grainOn}>
      <BrowserRouter>
        {/* <h1>{dimensions.width}</h1> */}
        {(scrollHeight) && <GradientBackground height={scrollHeight} width={dimensions.width}/>}
        <nav className="topbar" data-scrolled={isScrolled}>
          <div className="topbar-inner">
            <Link to="/">
              <div className="logo item-row">
                <div><img src={logoIcon} /><span>22</span></div>
                <img src={logoText} />
              </div>
            </Link>
            {!showOverlay && <button className="icon" onClick={() => setMenuOpen(true)}><img src={menuIcon} /></button>}
          </div>
        </nav>
        {
          (menuOpen) &&
          <div className="menu">
            <div className="inner-menu">
              <div className="menu-header">
                <div className="logo item-row">
                  <img src={logoIcon} />
                  <img src={logoText} />
                </div>
                <Toggle state={grainOn} setToggle={setGrainOn} />
                <button className="icon" onClick={() => setMenuOpen(false)}>
                  <img src={closeIcon} />
                </button>
              </div>
              <div className="menu-links" onClick={() => setMenuOpen(false)}>
                <Link to="/" className="nav"><h4>Home</h4></Link>
                <Link to="/introduction" className="nav"><h4>An Introduction</h4></Link>
                <Link to="/explore" className="nav"><h4>Connect The Dots</h4></Link>
                <Link to="/future" className="nav"><h4>Climate-Ready Communities</h4></Link>
                <Link to="/research" className="nav"><h4>Help Our Research</h4></Link>
              </div>
              <div>
                <h6 className="explainer">Read the full report here</h6>
                <button className="highlight">Download Report <span className="tiny">10.7 MB</span></button>
              </div>
            </div>
          </div>
        }
        <Routes>
          <Route path="/" element={<MainStack pos={1} vS={dimensions} showOverlay={showOverlay} setShowOverlay={setShowOverlay} setImgLoaded={setImgLoaded} imgLoaded={imgLoaded}/>}/>
          <Route path="/introduction" element={<MainStack pos={2} vS={dimensions} setImgLoaded={setImgLoaded} imgLoaded={imgLoaded} setShowOverlay={setShowOverlay}/>}/>
          <Route path="/explore" element={<MainStack pos={3} vS={dimensions} setImgLoaded={setImgLoaded} imgLoaded={imgLoaded} setShowOverlay={setShowOverlay}/>}/>
          <Route path="/future" element={<MainStack pos={4} vS={dimensions} setImgLoaded={setImgLoaded} imgLoaded={imgLoaded} setShowOverlay={setShowOverlay}/>}/>
          <Route path="/research" element={<MainStack pos={5} vS={dimensions} setImgLoaded={setImgLoaded} imgLoaded={imgLoaded} setShowOverlay={setShowOverlay}/>}/>
          <Route path="*" element={<MainStack pos={0} vS={dimensions} setImgLoaded={setImgLoaded} imgLoaded={imgLoaded} setShowOverlay={setShowOverlay}/>}/>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
