import { Routes, Route, Link, BrowserRouter as Router, BrowserRouter} from "react-router-dom";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import MainStack from "MainStack";
import "main.css";

import logoIcon from "img/logo-icon.svg";
import logoText from "img/logo-text.svg";
import menuIcon from "img/menu.svg";

function App() {

  const root = document.documentElement;
  
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    root.style.setProperty('--real-vh', window.innerHeight + "px");
  },[]);
  
  useEffect(() => {
    let timeoutId = null;
    const handleResize = () => {
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
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
          <div className="logo item-row">
            <img src={logoIcon} />
            <img src={logoText} />
          </div>
          <button className="icon" onClick={() => setMenuOpen(!menuOpen)}><img src={menuIcon} /></button>
        </nav>
        {
          (menuOpen) &&
          <div className="menu">
            <div className="inner-menu">
              <Link to="/"><h2>Home</h2></Link>
              <Link to="/introduction"><h2>An Introduction</h2></Link>
              <Link to="/journey"><h2>The Journey</h2></Link>
              <Link to="/home"><h2>Climate-ready Communities</h2></Link>
              <Link to="/question"><h2>The Big Question</h2></Link>
              <Link to="/connect"><h2>Connect</h2></Link>
            </div>
          </div>
        }
        <Routes>
          <Route path="/" element={<MainStack pos={1} vS={dimensions}/>}/>
          <Route path="/introduction" element={<MainStack pos={2} vS={dimensions}/>}/>
          <Route path="/journey" element={<MainStack pos={3} vS={dimensions}/>}/>
          <Route path="/connect" element={<MainStack pos={4} vS={dimensions}/>}/>
          <Route path="*" element={<MainStack pos={0} vS={dimensions}/>}/>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
