import PerfectScrollbar from "react-perfect-scrollbar";
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRef, useEffect } from "react";

const ScrollContainer = ({ children, position }) => {
    //should have a native scroll fallback if PerfectScrollbar fails
    const scroll = useRef();
    
    useEffect(() => {
        if (position === "end") scroll.current.scrollTop = scroll.current.scrollTopMax;
    });
    
    return (
        <PerfectScrollbar containerRef={el => (scroll.current = el)} className={"scroll-container"} options={{maxScrollbarLength:500}}>
            {children}
        </PerfectScrollbar>
    );
};

export default ScrollContainer;
