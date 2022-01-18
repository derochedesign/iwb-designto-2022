import { Stage, Layer, Line, Circle, Arc } from 'react-konva';
import { useState } from 'react';


const Konva = props => {
  
  const nodeRadius = 30;
  const [nodeArr, setNodeArr] = useState([
    {x:250, y:142, r:nodeRadius, isHover:false},
    {x:1050, y:242, r:nodeRadius, isHover:false},
    {x:450, y:62, r:nodeRadius, isHover:false}
  ]);
  
  const handleHover = (e, isHover, i) => {
    let _nodeArr = nodeArr;
    if (isHover && !nodeArr[i].isHover) {
      _nodeArr[i].isHover = true;
      setNodeArr([..._nodeArr]);
    }
    else if (!isHover && nodeArr[i].isHover){
      _nodeArr[i].isHover = false;
      setNodeArr([..._nodeArr]);
    }
  }
  
  return (
    <Stage width={props.vW} height={1000}>
      <Layer>
        {
          nodeArr.map((node, i) => 
            <Circle 
              onMouseEnter={(e) => handleHover(e, true, i)} 
              onMouseLeave={(e) => handleHover(e, false, i)} 
              key={i} 
              x={node.x} 
              y={node.y} 
              fill="black" 
              radius={(node.isHover) ? node.r * 1.2 : node.r} 
            />
          )
        }
        <Line
          points={[250,142,250,102]}
          stroke="black"
          strokeWidth={2}
        />
        <Line
          points={[290,62,450,62]}
          stroke="black"
          strokeWidth={2}
        />
        <Arc
          x={290}
          y={102}
          angle={90}
          stroke="black"
          strokeWidth={2}
          innerRadius={40}
          outerRadius={40}
          rotation={180}
        />
        
      </Layer>
    </Stage>
  )
}
export default Konva;