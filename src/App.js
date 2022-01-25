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
  
  console.log(scrollHeight);
  
  useEffect(() => {
    setScrollHeight(document.body.scrollHeight);
    // setDimensions({
    //   height: window.innerHeight,
    //   width: document.body.clientWidth
    // })
    // root.style.setProperty('--real-vh', window.innerHeight + "px");
    
    // //mobile issues fix
    // setTimeout(() => {
    //   setDimensions({
    //     height: window.innerHeight,
    //     width: document.body.clientWidth
    //   })
    //   root.style.setProperty('--real-vh', window.innerHeight + "px");
    // }, 1000);
    
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
    console.log("RERENDER ON SCROLL");
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
    <div className="App">
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
              <div className="menu-header right-item-layout">
                <div className="logo item-row">
                  <img src={logoIcon} />
                  <img src={logoText} />
                </div>
                <button className="icon" onClick={() => setMenuOpen(false)}>
                  <img src={closeIcon} />
                </button>
              </div>
              <div className="menu-links" onClick={() => setMenuOpen(false)}>
                <Link to="/" className="nav"><h4>Home</h4></Link>
                <Link to="/introduction" className="nav"><h4>An Introduction</h4></Link>
                <Link to="/explore" className="nav"><h4>Connect the Dots</h4></Link>
                <Link to="/future" className="nav"><h4>Climate-ready Communities</h4></Link>
                <Link to="/connect" className="nav"><h4>Help Our Research</h4></Link>
              </div>
            </div>
          </div>
        }
        <Routes>
          <Route path="/" element={<MainStack pos={1} vS={dimensions} showOverlay={showOverlay} setShowOverlay={setShowOverlay} setImgLoaded={setImgLoaded} imgLoaded={imgLoaded}/>}/>
          <Route path="/introduction" element={<MainStack pos={2} vS={dimensions} setImgLoaded={setImgLoaded} imgLoaded={imgLoaded}/>}/>
          <Route path="/explore" element={<MainStack pos={3} vS={dimensions} setImgLoaded={setImgLoaded} imgLoaded={imgLoaded}/>}/>
          <Route path="/future" element={<MainStack pos={4} vS={dimensions} setImgLoaded={setImgLoaded} imgLoaded={imgLoaded}/>}/>
          <Route path="/connect" element={<MainStack pos={5} vS={dimensions} setImgLoaded={setImgLoaded} imgLoaded={imgLoaded}/>}/>
          <Route path="*" element={<MainStack pos={0} vS={dimensions} setImgLoaded={setImgLoaded} imgLoaded={imgLoaded}/>}/>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
