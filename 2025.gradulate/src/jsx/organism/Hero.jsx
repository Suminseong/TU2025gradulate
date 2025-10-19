import React from 'react';
import styled from 'styled-components';
import GradientEdge from '../atom/GradientEdge';
import { G } from '../atom/gradients';
const base = import.meta.env.BASE_URL || '/';

const Wrap = styled.section`
  position: relative; height: 100vh; min-height: 620px; overflow: hidden; background: #121212; z-index: 1;
  @media (max-width: 640px) {
    height: 100vh;
    min-height: 220px;
  }
`;
const Bg = styled.div`
  position: absolute; inset: 0;
  /* Video container sits here */
`;
const BgBlurWrap = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`;
const BgBlurVideo = styled.video`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1.2); /* slight scale so edges stay filled after blur */
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  object-fit: cover;
  filter: blur(28px) brightness(0.7) saturate(1.1);
  will-change: transform, filter;
`;
const VideoBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100vw;
  aspect-ratio: 1 / 1; /* width defines the square size now */
  transform: translate(-50%, -50%);
  overflow: hidden;
  @media (max-width: 640px) {
    width: 177vh; // 모바일에서 세로 모드 꽉 채우기
    min-height: 220px;
  }
`;
const VideoEl = styled.video`
  width: 100%;
  height: 100%;
  display: block;
`;
const BgInner = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(18, 18, 18, 0.2);
`
const CopyWrap = styled.div`
  position: absolute; left: 40px; bottom: 80px; max-width: 1029px; display: flex; flex-direction: column; gap: 8px;
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transition: opacity 400ms ease-in-out;
  pointer-events: ${(p) => (p.$visible ? 'auto' : 'none')};
  @media (max-width: 640px) {
    left: 16px;
    bottom: 241px;
    max-width: 90vw;
    gap: 4px;
  }
`;
const P = styled.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 16px; line-height: 19.2px;
  @media (max-width: 640px) {
    font-size: 13px;
    line-height: 1.4;
  }
`;
const Title = styled.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-weight: 600; font-size: 24px; line-height: 27.6px;
  @media (max-width: 640px) {
    font-size: 17px;
    line-height: 1.3;
  }
`;
const Cta = styled.button`
  position: absolute; left: 50%; transform: translateX(-50%); bottom: 72px;
  width: 240px; height: 52px; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  background: rgba(0,0,0,0.05); 
  border: 1px solid #FFFFFF; 
  color: #FFFFFF;
  font-family: Pretendard, system-ui; font-weight: 700; cursor: pointer;
  //hover시 배경 불투명도 증가
  &:hover { background: rgba(0,0,0,0.3);}
  transition: all 200ms ease-in-out;

  @media (max-width: 640px) {
    width: 140px;
    height: 36px;
    font-size: 14px;
    bottom: 165px;
    left: 16px;
    transform: none;
  }
`;

export default function Hero() {
  const [copyVisible, setCopyVisible] = React.useState(false);
  const timerRef = React.useRef(null);

  React.useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
  return (
    <Wrap aria-label="Hero">
      <Bg>
        {/* Blurred full-bleed background */}
        <BgBlurWrap aria-hidden>
          <BgBlurVideo autoPlay muted loop playsInline preload="metadata">
            <source src={`${base}video/hero11.mp4`} type="video/mp4" />
          </BgBlurVideo>
        </BgBlurWrap>
        <VideoBox aria-label="Hero background video">
          <VideoEl
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => {
              // show copy after 15s from load
              if (timerRef.current) clearTimeout(timerRef.current);
              timerRef.current = setTimeout(() => setCopyVisible(true), 15500);
            }}
          >
            <source src={`${base}video/hero11.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </VideoEl>
        </VideoBox>
        <BgInner />
      </Bg>
      <CopyWrap $visible={copyVisible}>
        <P>25. 10. 24. FRI~26. SUN<br />Hongdae Art Center B2</P>
        <P>Department of Design Engineering</P>
        <Title>Tech University of Korea<br />20th Grad Exhibition</Title>
      </CopyWrap>
      <Cta type="button" aria-label="View More">View More</Cta>
      <GradientEdge
        position="bottom"
        from={G.heroToWhite.from}
        to={G.heroToWhite.to}
        height={G.heroToWhite.h}
        z={0}
      />
    </Wrap>
  );
}


// 영상 일단 vimeo로 깔아보고 안되면 유튜브