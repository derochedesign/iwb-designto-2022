import PerfectScrollbar from "react-perfect-scrollbar";
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRef, useEffect } from "react";
import { isMobile } from "react-device-detect";

const ScrollContainer = ({ children, position, contRef }) => {
    //should have a native scroll fallback if PerfectScrollbar fails
    
    useEffect(() => {
        if (position === "end" && contRef) contRef.current.scrollTop = contRef.current.scrollTopMax;
    });
    
    return (
        <>
        { (isMobile) ?
            <div className="vanilla-scroll">
                {children}
            </div>
        :
            <PerfectScrollbar containerRef={(contRef) && (el => (contRef.current = el))} className={"scroll-container"} options={{maxScrollbarLength:500, suppressScrollX:true}}>
                {children}
            </PerfectScrollbar>
        }
        </>
    );
};

export default ScrollContainer;
