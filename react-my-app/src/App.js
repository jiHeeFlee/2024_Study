// import logo from './logo.svg';
// import './App.css';

import * as React from 'react';
import styled from 'styled-components';
import { useTrail,useChain,useSprings, animated, useSpringRef } from '@react-spring/web';


const COORDS = [
  [50, 30],
  [90, 30],
  [50, 50],
  [60, 60],
  [70, 60],
  [80, 60],
  [90, 50],
]

const STROKE_WIDTH = 1.0

const OFFSET = STROKE_WIDTH / 2

const MAX_WIDTH = 150 + OFFSET * 2
const MAX_HEIGHT = 100 + OFFSET * 2

const BackgroundContainer=styled.div`
  width: 100%;
  height: 100%;
  background-color: #FE5826;
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container=styled.div`
  max-width: 800px;
  width: 50vw;
  margin: 0 auto;
`;

function App() {
  // useSpringRef를 사용하여 애니메이션에 대한 참조를 생성
  const gridApi = useSpringRef()

  // useTrail을 사용하여 그리드 라인들의 애니메이션을 구현함.
  // 그리드 라인들이 점차 커지는 것을 보여주기 위해 x2, y2 속성을 애니메이션 화 한다.

  const gridSprings = useTrail(16,{
    ref:gridApi,
    from:{
      x2:0,
      y2:0,
    },
    to:{
      x2: MAX_WIDTH,
      y2: MAX_HEIGHT,
    }
  })

  const boxApi=useSpringRef()

  // useSprings을 사용하여 상자들의 애니메이션을 구현
  // 각 상자의 크기 변화를 보여주기 위해 scale 속성을 애니메이션화 한다.
  const [boxSprings]=useSprings(7,i=>({
    ref:boxApi,
    from:{
      scale:0,
    },
    to:{
      sclae:1
    },
    delay:i*200,
    config:{
      mass:2,
      tension:220,
    },
  }))

  // uesChain을 사용하여 애니메이션을 순차적으로 실행
  useChain([gridApi,boxApi],[0,1],1500)

  return (
    <BackgroundContainer>
      <Container>
        <svg viewBox={`0 0 ${MAX_WIDTH} ${MAX_HEIGHT}`}>
          <g>
            {gridSprings.map(({ x2 }, index) => (
              <animated.line
                x1={0}
                y1={index * 10 + OFFSET}
                x2={x2}
                y2={index * 10 + OFFSET}
                key={index}
                strokeWidth={STROKE_WIDTH}
                stroke="currentColor"
              />
            ))}
            {gridSprings.map(({ y2 }, index) => (
              <animated.line
                x1={index * 10 + OFFSET}
                y1={0}
                x2={index * 10 + OFFSET}
                y2={y2}
                key={index}
                strokeWidth={STROKE_WIDTH}
                stroke="currentColor"
              />
            ))}
          </g>
          {/* 배열을 매핑하여 각각의 상자를 렌더링함.
          상자의 위치와 크기를 COORDS 배열에서 가져와 애니메이션화 한다. */}
          {boxSprings.map(({ scale }, index) => (
            <animated.rect
              key={index}
              width={10}
              height={10}
              fill="currentColor"
              style={{
                transformOrigin: `${5 + OFFSET * 2}px ${5 + OFFSET * 2}px`,
                transform: `translate(${COORDS[index][0] + OFFSET}px, ${COORDS[index][1] + OFFSET}px)`,
                scale,
              }}
            />
          ))}
        </svg>
      </Container>
    </BackgroundContainer>
  );
}

export default App;
