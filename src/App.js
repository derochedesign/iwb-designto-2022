import { Routes, Route, Link, BrowserRouter as Router, BrowserRouter} from "react-router-dom";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import MainStack from "MainStack";
import "main.css";

import logoIcon from "img/logo-icon.svg";
import logoText from "img/logo-text.svg";
import menuIcon from "img/menu.svg";
import closeIcon from "img/close.svg";

function App() {

  const root = document.documentElement;
  
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: document.body.clientWidth
  });
  
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    setDimensions({
      height: window.innerHeight,
      width: document.body.clientWidth
    })
    root.style.setProperty('--real-vh', window.innerHeight + "px");
    
    //mobile issues fix
    setTimeout(() => {
      setDimensions({
        height: window.innerHeight,
        width: document.body.clientWidth
      })
      root.style.setProperty('--real-vh', window.innerHeight + "px");
    }, 1000);
    
  },[]);
  
  useEffect(() => {
    let timeoutId = null;
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
    
  });
  
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="topbar">
          <Link to="/">
            <div className="logo item-row">
              <img src={logoIcon} />
              <img src={logoText} />
            </div>
          </Link>
          <button className="icon" onClick={() => setMenuOpen(true)}><img src={menuIcon} /></button>
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
                <Link to="/"><h4>Home</h4></Link>
                <Link to="/introduction"><h4>An Introduction</h4></Link>
                <Link to="/explore"><h4>The Larger Picture</h4></Link>
                <Link to="/summary"><h4>Climate-ready Communities</h4></Link>
                <Link to="/connect"><h4>Connect</h4></Link>
              </div>
            </div>
          </div>
        }
        <Routes>
          <Route path="/" element={<MainStack pos={1} vS={dimensions}/>}/>
          <Route path="/introduction" element={<MainStack pos={2} vS={dimensions}/>}/>
          <Route path="/explore" element={<MainStack pos={3} vS={dimensions}/>}/>
          <Route path="/summary" element={<MainStack pos={4} vS={dimensions}/>}/>
          <Route path="/connect" element={<MainStack pos={5} vS={dimensions}/>}/>
          <Route path="*" element={<MainStack pos={0} vS={dimensions}/>}/>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
