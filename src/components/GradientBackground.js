import React, { useEffect, useRef, useState } from "react";

const GradientBackground = props => {
  
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const SCALE = window.devicePixelRatio;
    contextRef.current = context;
    canvas.height = Math.floor(props.height * SCALE);
    canvas.width = Math.floor(props.width * SCALE);
    canvas.style.height = `${props.height}px`;
    context.scale(SCALE,SCALE);
    draw(context);
  },[props.width, props.height]);
  
  const draw = c => {
    const h = props.height;
    const w = props.width;
    const respVal = (w/(w+100));
    const respVal2 = w*(1.5/respVal);

    const grad1 = c.createLinearGradient(w/2, 0, w/2, h);
    grad1.addColorStop(0, '#431c6c');
    grad1.addColorStop(0.1, '#804fe0');
    grad1.addColorStop(0.35, '#804fe0');
    grad1.addColorStop(0.5, '#482675');
    grad1.addColorStop(0.7, '#d81a3f');
    grad1.addColorStop(1, '#f65e31');
    
    const grad2 = c.createRadialGradient(w*2, 0, 1, w*2, 100, respVal2);
    grad2.addColorStop(0, '#ffffff');
    grad2.addColorStop(0.5, '#ffffff');
    grad2.addColorStop(0.8, 'rgba(217,146,233,0.5)');
    grad2.addColorStop(1, 'rgba(217,146,233,0)');
    
    const grad3 = c.createRadialGradient(-400,-50,1, -500,150,700*respVal);
    grad3.addColorStop(0, '#ffffff');
    grad3.addColorStop(0.7, 'rgba(255,255,255,0.3)');
    grad3.addColorStop(1, 'rgba(217,146,233,0)');
    
    const grad4 = c.createRadialGradient(-1000,h/2.4,1, -1000,h/2.4,2000*respVal);
    grad4.addColorStop(0, '#ffffff');
    grad4.addColorStop(0.1, 'rgba(255,255,255,0.5');
    grad4.addColorStop(0.8, 'rgba(217,146,233,0.2)');
    grad4.addColorStop(1, 'rgba(217,146,233,0)');
    
    const grad5 = c.createRadialGradient(-2100,h/1.1,1, -1200,h/1.6,2000*respVal);
    grad5.addColorStop(0, '#ffffff');
    grad5.addColorStop(0.1, '#ffffff');
    grad5.addColorStop(0.92, 'rgba(217,146,233,0.4)');
    grad5.addColorStop(1, 'rgba(217,146,233,0)');
    
    const grad6 = c.createRadialGradient(w*2.2, h, 1, w*2.2, h-100, respVal2);
    grad6.addColorStop(0, '#ffffff');
    grad6.addColorStop(0.55, '#ffffff');
    grad6.addColorStop(0.7, 'rgba(249,200,230,0.4)');
    grad6.addColorStop(1, 'rgba(255,255,255,0)');
    
    
    c.fillStyle = grad1;
    c.fillRect(0,0,w,h);
    
    c.fillStyle = grad2;
    c.fillRect(0,0,w,h);
    
    c.fillStyle = grad3;
    c.fillRect(0,0,w,h);
    
    c.fillStyle = grad5;
    c.fillRect(0,0,w,h);
    
    c.fillStyle = grad4;
    c.fillRect(0,0,w,h);
    
    c.fillStyle = grad6;
    c.fillRect(0,0,w,h);
    
    
  }
  
  return(
    <canvas 
      ref={canvasRef}
      className="grad-bg"
    />
  )
}
export default GradientBackground;  