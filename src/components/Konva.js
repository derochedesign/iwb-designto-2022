import { Stage, Layer, Line, Circle, Group, Text } from 'react-konva';
import { useState, useEffect } from 'react';

const Konva = props => {
  
  const w = props.vW;
  const isDesktop = (w > 1200);
  const nodeRadius = isDesktop ? 50 : 35;
  const nodeRadiusLarge = nodeRadius * 1.8;
  const fontSize = isDesktop ? 22 : 18;
  const hUnit = isDesktop ? 150 : 150;
  const padding = isDesktop ? 96 : 48;
  const coe = isDesktop ? 1 : 2;
  
  const rightAlign = w - nodeRadiusLarge - padding;
  const leftAlign = nodeRadiusLarge + padding;
  
  const nodeCoords = [
    {x:w/2, y:nodeRadiusLarge},
    {x:rightAlign, y:hUnit*4},
    {x:leftAlign + w/(6*coe), y:hUnit*1},
    {x:w/(3*coe), y:hUnit*3},
    {x:leftAlign, y:hUnit*4},
    {x:w/(10*coe)+nodeRadiusLarge, y:hUnit*6}
  ]
  const [nodeArr, setNodeArr] = useState([
    {connects:null, isHover:false, isClick:false},
    {connects:[0], isHover:false, isClick:false},
    {connects:[0], isHover:false, isClick:false},
    {connects:[2], isHover:false, isClick:false},
    {connects:[2], isHover:false, isClick:false},
    {connects:[3], isHover:false, isClick:false}
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
  const handleClick = (e, i) => {
    let _nodeArr = nodeArr;
    _nodeArr[i].isClick = true;
    setNodeArr([..._nodeArr]);
    props.handleModal(i);
  }
  
  return (
    <Stage width={w} height={1000}>
      <Layer>
        { nodeArr.map((node, i) => 
          <Group key={i} >
            {(node.connects) && node.connects.map((ind, j) =>
                <Line
                  points={[nodeCoords[i].x,nodeCoords[i].y, nodeCoords[ind].x,nodeCoords[ind].y]}
                  stroke="white"
                  strokeWidth={1}
                  dash={[5,10]}
                  dashEnabled={!node.isClick}
                  key={j*nodeCoords[i].x}
                />
              )
            }
            <Group
              x={nodeCoords[i].x} 
              y={nodeCoords[i].y}
              onMouseEnter={(e) => handleHover(e, true, i)} 
              onMouseLeave={(e) => handleHover(e, false, i)}
              onClick={(e) => handleClick(e,i)}
              onTap={(e) => handleClick(e,i)}>
              <Circle 
                fill={(!isDesktop && node.isClick) ? "transparent" : "white"}
                stroke={"white"}
                strokeEnabled={(!isDesktop && node.isClick)}
                radius={((isDesktop && node.isHover) || (isDesktop && node.isClick)) ? nodeRadiusLarge : nodeRadius} 
              />
              <Text 
                text="Climate Migration" 
                fontSize={fontSize}
                x={nodeRadiusLarge / -1}
                y={nodeRadiusLarge / -2}
                align='center'
                width={nodeRadiusLarge * 2}
                height={nodeRadiusLarge}
                verticalAlign='middle'
                visible={((isDesktop && node.isHover) || (isDesktop && node.isClick))}
                padding={6}
              />
            </Group>
          </Group>
        )}  
      </Layer>
    </Stage>
  )
}
export default Konva;