import { Stage, Layer, Line, Circle, Group, Text, Rect } from 'react-konva';
import { useState, useRef, createRef, useEffect } from 'react';

const Konva = props => {

  const [isDragging, setIsDragging] = useState(false);
  
  const isDesktop = (props.vW > 1200);
  const isTablet = (props.vW > 800);
  const isTiny = props.vW < 376;
  const padding = isDesktop ? 128 : 48;
  const HEIGHT = isDesktop ? 3750 : (isTablet ? 2750 : 3250);
  const HOVERMULT = 1.03;
  const MAXWIDTH = 108 * 16;
  const w = (props.vW < MAXWIDTH) ? props.vW : MAXWIDTH
  const purple = "#5514ac";
  const transWhite = "rgba(255,255,255,0.3)";
  const transWhiteText = "rgba(255,255,255,0.4)";
  const titleBoxSize = isDesktop ? 480 : 240;
  const nodeRadius = (isDesktop) ? 100 : (isTablet ? 80 : (isTiny ? 56 : 64));
  const nodeRadiusLarge = (isDesktop) ? 180 : (isTablet ? 135 : (isTiny ? 86 : 110));
  const fontSize = {
    sm: isDesktop ? 22 : (isTiny ? 13 : 16),
    lg: isDesktop ? 32 : (isTiny ? 20 : 24),
    alt: isDesktop ? 22 : 18,
    mega: isDesktop ? 62 : (isTablet ? 44 : (isTiny ? 30 : 36))
  }
  const fontFamily = "Roboto";
  const fontFamilyAlt = "knockout-spec";
  const testVal = 0.8;
  const tabYShift = 100;
  const tabYShift2 = -100;
  const mobYShift = 100;
  const mobYShift2 = 100;
  const mobYShift3 = 400;
  
  //check for too close to edge: check if calculate xpos minus half the circle results in negative number. if so, add that val to xpos?
  
  const differenceRatio = (minA, maxA, minB, maxB) => {
    let difA = maxA - minA;
    let difB = maxB - minB;
    return (((w-minA)/difA)*difB)+minB;
  }
  
  const titleBlocksDesktop = [
    {x:padding, y:30, w:titleBoxSize, h:400, text:"HOW DOES INEQUALITY FACTOR INTO CLIMATE CHANGE?"},
    {x:padding, y:1020, w:700, h:600, text:"HOW CAN CLIMATE CHANGE BE ADDRESSED IN DIFFERENT SOCIAL, POLITICAL, AND ECONOMIC SPHERES?"},
    {x:padding, y:2483, w:700, h:600, text:"HOW DOES CLIMATE CHANGE IMPACT HUMAN NEEDS? WHAT ARE THE OPPORTUNITIES HERE?"},
    {x:padding, y:3543, w:titleBoxSize*1.4, h:600, text:"WHAT DOES A CLIMATE READY COMMUNITY LOOK LIKE?"}
  ]
  const titleBlocksTablet = [
    {x:padding, y:90, w:400, h:400, text:"HOW DOES INEQUALITY FACTOR INTO CLIMATE CHANGE?"},
    {x:padding, y:850, w:500, h:600, text:"HOW CAN CLIMATE CHANGE BE ADDRESSED IN DIFFERENT SOCIAL, POLITICAL, AND ECONOMIC SPHERES?"},
    {x:padding, y:1710, w:500, h:600, text:"HOW DOES CLIMATE CHANGE IMPACT HUMAN NEEDS? WHAT ARE THE OPPORTUNITIES HERE?"},
    {x:padding, y:2593, w:500, h:600, text:"WHAT DOES A CLIMATE READY COMMUNITY LOOK LIKE?"}
  ]
  const titleBlocksMobile = [
    {x:padding, y:40, w:w-padding, h:220, text:"HOW DOES INEQUALITY FACTOR INTO CLIMATE CHANGE?"},
    {x:padding, y:1020, w:w-padding, h:600, text:"HOW CAN CLIMATE CHANGE BE ADDRESSED IN DIFFERENT SOCIAL, POLITICAL, AND ECONOMIC SPHERES?"},
    {x:padding, y:2010, w:w-padding, h:600, text:"HOW DOES CLIMATE CHANGE IMPACT HUMAN NEEDS? WHAT ARE THE OPPORTUNITIES HERE?"},
    {x:padding, y:3115, w:w-padding, h:600, text:"WHAT DOES A CLIMATE READY COMMUNITY LOOK LIKE?"}
  ]
  
  const nodeGroupCoordsDesktop = [
    {x:0.27*(w/(w+200)), y:588, r:380},
    {x:0.35*(w/(w+200)), y:1720, r:380},
    {x:0.57*(w/(w+200)), y:3150, r:differenceRatio(1200,1792,417,561)},
  ]
  const nodeGroupCoordsTablet = [
    {x:0.3, y:520, r:differenceRatio(800,1200,220,260)},
    {x:0.26, y:1470+tabYShift2, r:differenceRatio(800,1200,270,300)},
    {x:0.5*(w/(w+200)), y:2310+tabYShift+tabYShift2, r:differenceRatio(800,1200,270,350)},
  ]
  const nodeGroupCoordsMobile = [
    {x:0.1*(w/300), y:520+mobYShift, r:260},
    {x:0.25, y:1490+mobYShift+mobYShift2, r:260},
    {x:0.4, y:2350+mobYShift+mobYShift3, r:differenceRatio(100,800,270,310)},
  ]
  
  const nodeCoordsDesktop = [
    {x:0.72, y:206, main:true, r:nodeRadiusLarge},//0
    {x:0.34, y:385, main:false, r:nodeRadius},
    {x:0.12, y:600, main:false, r:nodeRadius},
    {x:0.36, y:762, main:false, r:nodeRadius},
    {x:0.82, y:726, main:false, r:nodeRadius},//4
    
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
  const nodeCoordsTablet = [
    {x:0.8, y:156, main:true, r:nodeRadiusLarge},//0
    {x:0.34, y:504*testVal, main:false, r:nodeRadius},
    {x:0.15, y:690*testVal, main:false, r:nodeRadius},
    {x:0.40, y:780*testVal, main:false, r:nodeRadius},
    {x:0.84, y:900*testVal, main:false, r:nodeRadius},//4
    
    {x:0.86, y:1445*testVal+tabYShift2, main:true, r:nodeRadiusLarge},//5
    {x:0.15, y:1656*testVal+tabYShift2, main:false, r:nodeRadius},
    {x:0.19, y:1870*testVal+tabYShift2, main:false, r:nodeRadius},
    {x:0.4, y:2008*testVal+tabYShift2, main:false, r:nodeRadius},//8
    
    {x:0.8, y:2424*testVal+tabYShift+tabYShift2, main:true, r:nodeRadiusLarge},//9
    {x:0.28, y:2700*testVal+tabYShift+tabYShift2, main:false, r:nodeRadius},
    {x:0.20, y:2950*testVal+tabYShift+tabYShift2, main:false, r:nodeRadius},
    {x:0.36, y:3108*testVal+tabYShift+tabYShift2, main:false, r:nodeRadius},
    {x:0.62, y:2991*testVal+tabYShift+tabYShift2, main:false, r:nodeRadius},//13
    
    {x:0.1, y:2470*testVal+tabYShift+tabYShift2, main:false, r:nodeRadius},//14
  ]
  const nodeCoordsMobile = [
    {x:0.67, y:206+mobYShift, main:true, r:nodeRadiusLarge},//0
    {x:0.34, y:504*testVal+mobYShift, main:false, r:nodeRadius},
    {x:0.1, y:690*testVal+mobYShift, main:false, r:nodeRadius},
    {x:0.40*(w/(w-100)), y:780*testVal+mobYShift, main:false, r:nodeRadius},
    {x:0.83, y:980*testVal+mobYShift, main:false, r:nodeRadius},//4
    
    {x:0.86, y:1445*testVal+mobYShift+mobYShift2, main:true, r:nodeRadiusLarge},//5
    {x:0.15, y:1656*testVal+mobYShift+mobYShift2, main:false, r:nodeRadius},
    {x:0.19, y:1870*testVal+mobYShift+mobYShift2, main:false, r:nodeRadius},
    {x:0.44, y:2028*testVal+mobYShift+mobYShift2, main:false, r:nodeRadius},//8
    
    {x:0.78, y:2224*testVal+mobYShift+mobYShift2+mobYShift3, main:true, r:nodeRadiusLarge},//9
    {x:0.16, y:2750*testVal+mobYShift+mobYShift3, main:false, r:nodeRadius},
    {x:0.26, y:2950*testVal+mobYShift+mobYShift3, main:false, r:nodeRadius},
    {x:0.42, y:3138*testVal+mobYShift+mobYShift3, main:false, r:nodeRadius},
    {x:0.7*(w/(w-50)), y:2991*testVal+mobYShift+mobYShift3, main:false, r:nodeRadius},//13
    
    {x:0.1, y:2900*testVal, main:false, r:nodeRadius},//14
  ]
  const nodeCoords = (isDesktop) ? nodeCoordsDesktop : (isTablet ? nodeCoordsTablet : nodeCoordsMobile);
  const nodeGroupCoords = (isDesktop) ? nodeGroupCoordsDesktop : (isTablet ? nodeGroupCoordsTablet : nodeGroupCoordsMobile);
  const titleBlocks = (isDesktop) ? titleBlocksDesktop : (isTablet ? titleBlocksTablet : titleBlocksMobile);
  
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
  
  const refs = useRef(nodeCoords.map(() => createRef()));
  
  const handleHover = (e, isHover, i) => {
    let _nodeArr = nodeArr;
    if (isHover && !nodeArr[i].isHover) {
      //too laggy on some
      // refs.current[i].current.to({
      //   scaleX: 1.04,
      //   scaleY: 1.04,
      //   duration: 0.3
      // })
      _nodeArr[i].isHover = true;
      setNodeArr([..._nodeArr]);
    }
    else if (!isHover && nodeArr[i].isHover){
      // refs.current[i].current.to({
      //   scaleX: 1,
      //   scaleY: 1,
      //   duration: 0.1
      // })
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
  
  const handleTap = (e,i) => {

    if (e.type === "touchend") {
      setIsDragging(false);
      if (!isDragging) {
        handleClick(e, i);
      }
    }
    else if (e.type === "touchmove") {
      setIsDragging(true);
    }
    
  }
  
  const computeX = x => {
    let _x = (w - padding * 2) * x + padding;
    return _x;
  }
  //style={{marginLeft:`${padding}px`}}
  return (
    <Stage width={w} height={HEIGHT} style={(props.vW > MAXWIDTH) ? {marginLeft:`${(props.vW-MAXWIDTH) / 2}px`, marginTop:"32px"} : {marginLeft:"unset", marginTop:"32px"}} > 
      <Layer>
        { titleBlocks.map((t, i) => 
          <Group key={i} x={isDesktop ? 128 : (isTablet ? 48 : 32)} y={t.y} preventDefault={false}>
            {/* <Rect 
              width={titleBoxSize}
              height={t.h}
              cornerRadius={60}
              fill={transWhite}
            /> */}
            <Text 
              text={t.text} 
              fontSize={fontSize.mega}
              fontStyle='700'
              fontFamily={fontFamilyAlt}
              y={0}
              x={0}
              align="left"
              width={t.w}
              height={t.h}
              padding={0}
              fill={transWhiteText}
              lineHeight={0.85}
              preventDefault={false}
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
              key={i}
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
              preventDefault={false}
              key={i}
            />
          
        )}
        { nodeArr.map((node, i) => 
          <Group
            x={computeX(nodeCoords[i].x)}
            y={nodeCoords[i].y}
            key={i}
            ref={refs.current[i]}
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
            onTouchMove={(e) => handleTap(e,i)}
            onTouchEnd={(e) => handleTap(e,i)}
            >
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
              y={nodeCoords[i].r * -1}
              height={nodeCoords[i].r * 2}
              align='center'
              width={nodeCoords[i].r * 2}
              verticalAlign='middle'
              padding={12}
              fill={(node.isClick) ? "white" : purple}
              preventDefault={false}
              fontStyle='300'
            />
          </Group>
        )}  
        </Group>
      </Layer>
    </Stage>
  )
}
export default Konva;