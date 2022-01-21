import { Stage, Layer, Line, Circle, Group, Text, Rect } from 'react-konva';
import { useState, useEffect } from 'react';

const Konva = props => {
  
  const isDesktop = (props.vW > 1200);
  const padding = isDesktop ? 128 : 48;
  const w = props.vW;
  const HEIGHT = 3750;
  const HOVERMULT = 1.05;
  const purple = "#5514ac";
  const transWhite = "rgba(255,255,255,0.2)";
  const titleBoxSize = isDesktop ? 480 : 200;
  const nodeRadius = isDesktop ? 100 : 60;
  const nodeRadiusLarge = isDesktop ? 180 : 120;
  const fontSize = {
    sm: isDesktop ? 22 : 18,
    lg: isDesktop ? 32 : 24,
    alt: isDesktop ? 22 : 18
  }
  const fontFamily = "Roboto";
  
  //check for too close to edge: check if calculate xpos minus half the circle results in negative number. if so, add that val to xpos?
  
  const nodeGroupCoords = [
    {x:0.27, y:588, r:380},
    {x:0.3, y:1746, r:380},
    {x:0.5, y:3132, r:530},
  ]
  
  const nodeCoords = [
    {x:0.67, y:206, main:true, r:nodeRadiusLarge},//0
    {x:0.34, y:385, main:false, r:nodeRadius},
    {x:0.12, y:600, main:false, r:nodeRadius},
    {x:0.36, y:762, main:false, r:nodeRadius},
    {x:0.79, y:726, main:false, r:nodeRadius},//4
    
    {x:0.86, y:1316, main:true, r:nodeRadiusLarge},//5
    {x:0.25, y:1522, main:false, r:nodeRadius},
    {x:0.19, y:1860, main:false, r:nodeRadius},
    {x:0.44, y:1860, main:false, r:nodeRadius},//8
    
    {x:0.78, y:2313, main:true, r:nodeRadiusLarge},//9
    {x:0.24, y:3014, main:false, r:nodeRadius},
    {x:0.32, y:3382, main:false, r:nodeRadius},
    {x:0.56, y:3432, main:false, r:nodeRadius},
    {x:0.78, y:3014, main:false, r:nodeRadius},//13
    
    {x:0.92, y:1897, main:false, r:nodeRadius},//14
  ]
  const [nodeArr, setNodeArr] = useState([
    {connects:null, isHover:false, isClick:false},
    {connects:0, isHover:false, isClick:false},
    {connects:1, isHover:false, isClick:false},
    {connects:1, isHover:false, isClick:false},
    {connects:0, isHover:false, isClick:false},
    
    {connects:4, isHover:false, isClick:false},
    {connects:5, isHover:false, isClick:false},
    {connects:5, isHover:false, isClick:false},
    {connects:5, isHover:false, isClick:false},
    
    {connects:5, isHover:false, isClick:false},
    {connects:9, isHover:false, isClick:false},
    {connects:9, isHover:false, isClick:false},
    {connects:9, isHover:false, isClick:false},
    {connects:9, isHover:false, isClick:false},
    
    {connects:null, isHover:false, isClick:false},
  ]);
  const titleBlocks = [
    {x:padding, y:0, h:120, text:"HOW DOES INEQUALITY FACTOR INTO CLIMATE CHANGE?"},
    {x:padding, y:1125, h:140, text:"HOW CAN CLIMATE CHANGE BE ADDRESSED IN DIFFERENT SOCIAL, POLITICAL, AND ECONOMIC SPHERES?"},
    {x:padding, y:2413, h:170, text:"HOW DOES CLIMATE CHANGE IMPACT NON-CLIMATE RELATED FACTORS AT THE HUMAN SCALE? WHAT ARE THE OPPORTUNITIES HERE?"}
  ]
  
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
  const handleClick = (e, i) => {
    let _nodeArr = nodeArr;
    _nodeArr[i].isClick = true;
    setNodeArr([..._nodeArr]);
    props.handleModal(i);
  }
  
  const computeX = x => {
    let _x = (w - padding * 2) * x + padding;
    return _x;
  }
  //style={{marginLeft:`${padding}px`}}
  return (
    <Stage width={w} height={HEIGHT} > 
      <Layer>
        { titleBlocks.map((t, i) => 
          <Group key={i} x={t.x} y={t.y}>
            <Rect 
              width={titleBoxSize}
              height={t.h}
              cornerRadius={60}
              fill={transWhite}
            />
            <Text 
              text={t.text} 
              fontSize={fontSize.alt}
              fontStyle='700'
              fontFamily={fontFamily}
              y={0}
              align='center'
              width={titleBoxSize}
              height={t.h}
              verticalAlign='middle'
              padding={30}
              fill='white'
              lineHeight={1.2}
            />
          </Group>
        )}
        
        <Group>
          {nodeGroupCoords.map((g,i) => 
            <Circle
              x={computeX(g.x)}
              y={g.y}
              radius={g.r}
              fill={transWhite}
              preventDefault={false}
            />
          )}
        </Group>
        
        <Group>
        { nodeArr.map((node, i) => 
          (node.connects !== null) && 
            <Line
              points={[computeX(nodeCoords[i].x),nodeCoords[i].y, computeX(nodeCoords[node.connects].x),nodeCoords[node.connects].y]}
              stroke="white"
              strokeWidth={2}
              dash={[7,12]}
              dashEnabled={!node.isClick}
              zIndex={-1}
              preventDefault={false}
            />
          
        )}
        { nodeArr.map((node, i) => 
          <Group
            x={computeX(nodeCoords[i].x)}
            y={nodeCoords[i].y}
            key={i}
            onMouseEnter={(e) => {
              handleHover(e, true, i);
              const container = e.target.getStage().container();
              container.style.cursor = "pointer";
            }} 
            onMouseLeave={(e) => {
              handleHover(e, false, i);
              const container = e.target.getStage().container();
              container.style.cursor = "default";
            }} 
            onClick={(e) => handleClick(e,i)}
            onTap={(e) => handleClick(e,i)}>
            <Circle 
              fill={(node.isClick) ? purple : "white"}
              radius={(isDesktop && node.isHover) ? nodeCoords[i].r * HOVERMULT : nodeCoords[i].r}
              preventDefault={false}
            />
            <Text 
              text={props.data[i].title} 
              fontSize={(nodeCoords[i].main) ? fontSize.lg : fontSize.sm}
              fontFamily={fontFamily}
              x={nodeCoords[i].r * -1}
              y={-10}
              align='center'
              width={nodeCoords[i].r * 2}
              verticalAlign='middle'
              padding={6}
              fill={(node.isClick) ? "white" : purple}
              preventDefault={false}
            />
          </Group>
        )}  
        </Group>
      </Layer>
    </Stage>
  )
}
export default Konva;