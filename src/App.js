import { Routes, Route, Link, BrowserRouter as Router, BrowserRouter} from "react-router-dom";
import MainStack from "MainStack";
import "main.css";
import { useState, useEffect } from "react";
import menuIcon from "img/menu.svg"

function App() {
  
  const viewportH = window.innerHeight;
  const viewportW = window.innerWidth;
  const root = document.documentElement;
  
  const [dimensions, setDimensions] = useState({
    height: viewportH,
    width: viewportW
  });
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    
    root.style.setProperty('--real-vh', viewportH + "px");
    
    function handleResize() {
      
      if (window.location.pathname == "/work" || window.location.pathname == "/") {
        setDimensions({
          height: viewportH,
          width: viewportW
        });
      }
    }
    
    window.addEventListener('resize', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize);
    }
    
  });
  
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="topbar">
          <div className="logo"></div>
          <button className="icon" onClick={() => setMenuOpen(!menuOpen)}><img src={menuIcon} /></button>
        </nav>
        {
          (menuOpen) &&
          <div className="menu">
            <div className="inner-menu">
              <div className="right-item-layout">
                <div className="logo"></div>
                <button className="icon" onClick={() => setMenuOpen(!menuOpen)}><img src={menuIcon} /></button>
              </div>
              <Link to="/"><h2>Home</h2></Link>
              <Link to="/introduction"><h2>Introduction</h2></Link>
              <Link to="/explore"><h2>Explore</h2></Link>
              <Link to="/connect"><h2>Connect</h2></Link>
            </div>
          </div>
        }
        <Routes>
          <Route path="/" element={<MainStack pos={1} />}/>
          <Route path="/introduction" element={<MainStack pos={2} />}/>
          <Route path="/explore" element={<MainStack pos={3} />}/>
          <Route path="/connect" element={<MainStack pos={4} />}/>
          <Route path="*" element={<MainStack pos={0} />}/>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
