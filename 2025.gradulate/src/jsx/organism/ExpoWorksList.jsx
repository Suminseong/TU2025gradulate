import React from 'react';
import styled from 'styled-components';
import PinSection from './PinSection';
import { EXPO_WORKS } from '../../data/expoWorks';
const base = import.meta.env.BASE_URL || '/';

const Wrap = styled.div`
  position: relative;
  background: #121212;
  @media (max-width: 640px) {
    background: #121212;
    padding: 0 0 24px 0;
  }
`;

const MobileGrid = styled.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100vw;
    padding: 0 0 24px 0;
    box-sizing: border-box;
  }
`;

const MobileCard = styled.div`
  background: #222;
  border-radius: 10px;
  overflow: hidden;
  width: 92vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MobileImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const MobileInfo = styled.div`
  padding: 12px 14px 16px 14px;
  color: #fff;
  font-family: Pretendard, system-ui;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const Stage = styled.div`
  position: relative;
  height: 979px;
  background: #121212;
  @media (max-width: 640px) {
    height: auto;
    min-height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 24px 0;
  }
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
  @media (max-width: 640px) {
    position: static;
    font-size: 20px;
    line-height: 1.3;
    margin: 16px 0 8px 0;
  }
`;
const Frame = styled.div`
  /* position: absolute; */
  margin-top: 140px;
  margin: 0 auto;
  border-radius: 3.55px;
  overflow: hidden;
  @media (max-width: 640px) {
    position: static;
    width: 90vw;
    height: auto;
    min-height: 160px;
    margin: 0 auto 12px auto;
    border-radius: 10px;
    transform: none;
  }
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
  /* transform and opacity are applied inline for performance */
  ${SlotMask}
  @media (max-width: 640px) {
    position: static;
    font-size: 28px;
    margin: 8px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`;
const LeftMeta = styled.div`
  position: absolute; left: 195px; top: 374px;
  color: #D9D9D9;
  font-family: Pretendard, system-ui;
  font-size: 24px; font-weight: 400;
  /* transform and opacity are applied inline for performance */
  ${SlotMask}
  @media (max-width: 640px) {
    position: static;
    font-size: 13px;
    margin: 2px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`;
const RightMeta1 = styled.div`
  position: absolute; right: 195px; top: 509px;
  width: 690.67px; color: #D9D9D9;
  font-family: Pretendard, system-ui; font-size: 24px; font-weight: 300;
  text-align: right;
  /* transform and opacity are applied inline for performance */
  ${SlotMask}
  @media (max-width: 640px) {
    position: static;
    width: 100%;
    font-size: 12px;
    text-align: left;
    margin: 2px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`;
const RightMeta2 = styled.div`
  position: absolute; right: 195px; top: 547px;
  width: 690.67px; color: #FAFAFA;
  font-family: Pretendard, system-ui; font-weight: 500; font-size: 32px;
  text-align: right;
  /* transform and opacity are applied inline for performance */
  ${SlotMask}
  @media (max-width: 640px) {
    position: static;
    width: 100%;
    font-size: 15px;
    text-align: left;
    margin: 2px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`;
const WorkBlock = styled.div`
  position: absolute; left: 195px; top: 679px; width: 690.67px;
  /* transform and opacity are applied inline for performance */
  ${SlotMask}
  @media (max-width: 640px) {
    position: static;
    width: 100%;
    margin: 4px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`;
const WorkSmall = styled.small`
  display: block; color: #D9D9D9;
  font-family: Pretendard, system-ui; font-size: 24px; font-weight: 400;
  @media (max-width: 640px) {
    font-size: 12px;
  }
`;
const WorkStrong = styled.strong`
  display: block; color: #FAFAFA;
  font-family: Pretendard, system-ui; font-size: 42px; font-weight: 700;
  @media (max-width: 640px) {
    font-size: 18px;
  }
`;

const ExpoVideo = styled.iframe`
  width: 1280px;
  height: 720px;
  border: none;
  display: block;
  margin: 0 auto;
  opacity: 0.75;
`;

const MobileVideo = styled.iframe`
  width: 100%;
  height: auto;
  min-height: 200px;
  border: none;
  display: block;
`;

const clamp = (n, a = 0, b = 1) => Math.max(a, Math.min(b, n));
const lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

function ExpoItem({ work, progress, videoId }) {
  const id = String(videoId || '').trim();
  const vidsrc = `https://player.vimeo.com/video/${work.image}?muted=1&autoplay=1&loop=1&badge=0&controls=0&autopause=0&title=0&byline=0&portrait=0&app_id=58479`;

  const p = ease(clamp(progress, 0, 1));
  const imgY = lerp(0, -120, p);
  const leftNameY = lerp(0, -360, p);
  const leftMetaY = lerp(0, -280, p);
  const right1Y = lerp(0, -220, p);
  const right2Y = lerp(0, -260, p);
  const workBlockY = lerp(0, -180, p);
  const fadeStart = 0.55, fadeEnd = 0.9;
  const fade = p < fadeStart ? 1 : 1 - Math.max(0, Math.min(1, (p - fadeStart) / (fadeEnd - fadeStart)));

  const frameStyle = { transform: `translate3d(0, ${imgY}px, 0)`, willChange: 'transform' };
  const textStyle = (y) => ({ transform: `translate3d(0, ${y}px, 0)`, opacity: fade, willChange: 'transform, opacity' });
  const workBlockStyle = { transform: `translate3d(0, ${workBlockY}px, 0)`, opacity: fade, willChange: 'transform, opacity' };

  return (

    <Wrap>
      <Title>TU-EXPO Works</Title>
      <Stage>
        <Frame style={frameStyle}>
          {/* <Img src={`${base}projects/${work.image}/thumb.jpg`} alt="작품 이미지" /> */}
          <ExpoVideo
            src={vidsrc}
            frameBorder="0">
          </ExpoVideo>
        </Frame>
        <LeftName style={textStyle(leftNameY)}>{work.artistKr}</LeftName>
        <LeftMeta style={textStyle(leftMetaY)}>{work.dept}</LeftMeta>
        <RightMeta1 style={textStyle(right1Y)}>{work.rightMeta1}</RightMeta1>
        <RightMeta2 style={textStyle(right2Y)}>{work.rightMeta2}</RightMeta2>
        <WorkBlock style={workBlockStyle}>
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
      <style>{`
        @media (max-width: 640px) {
          .expo-works-desktop { display: none !important; }
        }
        @media (min-width: 641px) {
          .expo-works-mobile { display: none !important; }
        }
      `}</style>

      {/* 데스크탑: 각 작품을 PinSection으로 감싸 스크롤 기반 progress를 전달합니다 */}
      <div className="expo-works-desktop">
        {EXPO_WORKS.slice(0, 3).map((work) => (
          <PinSection
            key={work.id}
            durationVh={320}
            center
            centerOffsetPx={-40}
          >
            {(pRaw) => <ExpoItem work={work} progress={pRaw} />}
          </PinSection>
        ))}
      </div>

      {/* 모바일: 정적 카드 그리드 */}
      <MobileGrid className="expo-works-mobile">
        {EXPO_WORKS.map((work) => (
          <MobileCard key={work.id}>
            <MobileVideo src={`https://player.vimeo.com/video/${work.image}?badge=0&controls=0&autopause=0&title=0&byline=0&portrait=0&app_id=58479`}>
              
            </MobileVideo>
            <MobileInfo>
              <div style={{ fontWeight: 700, fontSize: 16 }}>{work.titleStrong}</div>
              <div style={{ fontSize: 13, color: '#D9D9D9' }}>{work.artistKr} | {work.dept}</div>
              <div style={{ fontSize: 12, color: '#A1A1A1', marginTop: 2 }}>{work.rightMeta1}</div>
              <div style={{ fontSize: 12, color: '#A1A1A1' }}>{work.rightMeta2}</div>
            </MobileInfo>
          </MobileCard>
        ))}
      </MobileGrid>
    </>
  );
}

// ---메모---
// 오프라인 전시 3작품만 넣는 걸로 일단 생각합시다.
// 카드 사이 간격 24px로 조정