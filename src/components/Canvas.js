import React, { useEffect, useRef, useState } from "react";

const Canvas = props => {
  
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const canvasHeight = 1000;
  const nodeRadius = 30;
  const nodeRadiusLarge = 60;
  const [nodeArr, setNodeArr] = useState([
    {x:250, y:142, r:nodeRadius, isHover:false},
    {x:1050, y:242, r:nodeRadius, isHover:false},
    {x:450, y:62, r:nodeRadius, isHover:false}
  ]);

  console.log(nodeArr);
  useEffect(() => {
    console.log("heloofjawiof");
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    
    canvas.width = props.vW * 2;
    // canvas.height = window.innerHeight * 1;
    canvas.height = canvasHeight;
    canvas.style.width = `${props.vW}px`;
    canvas.style.height = `${canvasHeight/2}px`;
    
    context.scale(2,2);
    contextRef.current = context;
    
    //draw map
    draw(context);
    
  }, [props.vW, nodeArr]);
  
  const draw = c => {
    // c.fillStyle = 'black';
    // c.fillRect((props.vW / 2) - 50,100,100,100);
    nodeArr.forEach(node => {
      createNode(c, node);
    });
    
  }
  
  const createNode = (c, node) => {
    c.fillStyle = "black";
    if (!node.isHover) {
      c.beginPath();
      c.arc(node.x, node.y, node.r, 0, 2 * Math.PI, false);
      c.fill();
    }
    else {
      c.fillRect(node.x - node.r, node.y - node.r/2, node.r*2, node.r);
    }
    
  }
  
  const handleClick = e => {
    
  }
  
  const handleHover = e => {
    // console.log(e.pageX);
    // console.log(e.pageY);
    let mX = e.clientX - canvasRef.current.getBoundingClientRect().left;
    let mY = e.clientY - canvasRef.current.getBoundingClientRect().top;
    
    nodeArr.forEach((node, i) => {
      if ((mX > (node.x - node.r) && mX < (node.x + node.r)) && (mY > (node.y - node.r) && mY < (node.y + node.r))) {
        console.log("inside node");
        if (!nodeArr[i].isHover) {
          let _nodeArr = nodeArr;
          _nodeArr[i].isHover = true;
          _nodeArr[i].r = nodeRadiusLarge;
          setNodeArr([..._nodeArr]);
        }
      }
      else {
        if (nodeArr[i].isHover) {
          let _nodeArr = nodeArr;
          _nodeArr[i].isHover = false;
          _nodeArr[i].r = nodeRadius;
          setNodeArr([..._nodeArr]);
        }
      }
      
    });
  }
  
  return (
    <canvas
      ref={canvasRef}
      onClick={handleClick}
      onMouseMove={handleHover}
    />
  )
}
export default Canvas;