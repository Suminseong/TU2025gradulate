import React from 'react';
import styled from 'styled-components';
import PinSection from './PinSection';
import { EXPO_WORKS } from '../../data/expoWorks';

const Wrap = styled.div`
  position: relative;
  background: #121212;
`;
const Stage = styled.div`
  position: relative;
  height: 979px;
  background: #121212;
`;
const Title = styled.div`
  position: absolute;
  left: 0; right: 0; top: 4px;
  text-align: center;
  color: #fff;
  font-family: Pretendard, system-ui;
  font-weight: 700;
  font-size: 40px;
  line-height: 64px;
`;
const Frame = styled.div`
  position: absolute;
  left: 351px; top: 140px;
  width: 1219px; height: 686px;
  border-radius: 3.55px;
  background: #606060;
  overflow: hidden;
  transform: translate3d(0, ${(p)=>p.$y||0}px, 0);
`;
const Img = styled.img`
  width: 1265px; height: 712px; display: block;
`;
const SlotMask = `
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%);
`;
const LeftName = styled.div`
  position: absolute; left: 195px; top: 240px;
  color: #FAFAFA;
  font-family: Pretendard, system-ui;
  font-size: 112px; font-weight: 600;
  transform: translate3d(0, ${(p)=>p.$y||0}px, 0);
  opacity: ${(p)=>p.$opacity??1};
  ${SlotMask}
`;
const LeftMeta = styled.div`
  position: absolute; left: 195px; top: 374px;
  color: #D9D9D9;
  font-family: Pretendard, system-ui;
  font-size: 24px; font-weight: 400;
  transform: translate3d(0, ${(p)=>p.$y||0}px, 0);
  opacity: ${(p)=>p.$opacity??1};
  ${SlotMask}
`;
const RightMeta1 = styled.div`
  position: absolute; right: 195px; top: 509px;
  width: 690.67px; color: #D9D9D9;
  font-family: Pretendard, system-ui; font-size: 24px; font-weight: 300;
  text-align: right;
  transform: translate3d(0, ${(p)=>p.$y||0}px, 0);
  opacity: ${(p)=>p.$opacity??1};
  ${SlotMask}
`;
const RightMeta2 = styled.div`
  position: absolute; right: 195px; top: 547px;
  width: 690.67px; color: #FAFAFA;
  font-family: Pretendard, system-ui; font-weight: 500; font-size: 32px;
  text-align: right;
  transform: translate3d(0, ${(p)=>p.$y||0}px, 0);
  opacity: ${(p)=>p.$opacity??1};
  ${SlotMask}
`;
const WorkBlock = styled.div`
  position: absolute; left: 195px; top: 679px; width: 690.67px;
  transform: translate3d(0, ${(p)=>p.$y||0}px, 0);
  opacity: ${(p)=>p.$opacity??1};
  ${SlotMask}
`;
const WorkSmall = styled.small`
  display: block; color: #D9D9D9;
  font-family: Pretendard, system-ui; font-size: 24px; font-weight: 400;
`;
const WorkStrong = styled.strong`
  display: block; color: #FAFAFA;
  font-family: Pretendard, system-ui; font-size: 42px; font-weight: 700;
`;

const clamp = (n, a=0, b=1)=>Math.max(a, Math.min(b, n));
const lerp = (a,b,t)=>a+(b-a)*t;
const ease = (t)=> (t<0.5 ? 2*t*t : 1 - Math.pow(-2*t+2,2)/2);

function ExpoItem({ work, progress }) {
  const p = ease(clamp(progress, 0, 1));
  const imgY       = lerp(0, -120, p);
  const leftNameY  = lerp(0, -360, p);
  const leftMetaY  = lerp(0, -280, p);
  const right1Y    = lerp(0, -220, p);
  const right2Y    = lerp(0, -260, p);
  const workBlockY = lerp(0, -180, p);
  const fadeStart=0.55, fadeEnd=0.9;
  const fade = p < fadeStart ? 1 : 1 - Math.max(0, Math.min(1, (p - fadeStart)/(fadeEnd - fadeStart)));

  return (
    <Wrap>
      <Stage>
        <Title>TU-EXPO Works</Title>
        <Frame $y={imgY}>
          <Img src={work.image} alt="작품 이미지" />
        </Frame>
        <LeftName $y={leftNameY} $opacity={fade}>{work.artistKr}</LeftName>
        <LeftMeta $y={leftMetaY} $opacity={fade}>{work.dept}</LeftMeta>
        <RightMeta1 $y={right1Y} $opacity={fade}>{work.rightMeta1}</RightMeta1>
        <RightMeta2 $y={right2Y} $opacity={fade}>{work.rightMeta2}</RightMeta2>
        <WorkBlock $y={workBlockY} $opacity={fade}>
          <WorkSmall>{work.titleSmall}</WorkSmall>
          <WorkStrong>{work.titleStrong}</WorkStrong>
        </WorkBlock>
      </Stage>
    </Wrap>
  );
}

export default function ExpoWorksList() {
  return (
    <>
      {EXPO_WORKS.map((work) => (
        <PinSection key={work.id} durationVh={320} center centerOffsetPx={-40}>
          {(p)=> <ExpoItem work={work} progress={p} />}
        </PinSection>
      ))}
    </>
  );
}
