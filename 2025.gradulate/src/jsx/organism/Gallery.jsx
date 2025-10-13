import React from 'react';
import styled from 'styled-components';
import OutlineButton from '../atom/OutlineButton';
import GradientEdge from '../atom/GradientEdge';
import { G } from '../atom/gradients';

const Section = styled.section`
  position: relative;
  padding-top: 120px;
  padding-bottom: 120px;
  background: #121212;
  z-index: 1;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1840px;
  margin: 0 auto;
`;

const Hero = styled.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: #171717;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Play = styled.div`
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: 70px; height: 70px;
  border-radius: 35px;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(5px);
`;

const PlayTri = styled.div`
  position: absolute; left: 27px; top: 23px;
  width: 0; height: 0;
  border-left: 16px solid #000;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 640px) {
    gap: 10px;
    margin-top: 12px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  @media (max-width: 640px) {
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const Card = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  background: #151515;
  width: ${(p)=>p.$w}px;
  height: ${(p)=>p.$h}px;
  @media (max-width: 640px) {
    width: 46vw;
    height: 46vw;
    min-width: 140px;
    min-height: 140px;
    max-width: 100vw;
    max-height: 100vw;
  }
`;

const Cap = styled.div`
  position: absolute; left: 0; right: 0; bottom: 0;
  padding: 12px 16px;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.55) 100%);
  color: #fff;
  font-family: Pretendard, system-ui;
  font-size: 14px;
  line-height: 22.4px;
  text-align: center;
  opacity: 0;
  transition: opacity .2s;
`;

export default function Gallery() {
  // 모바일 카드 데이터 (임시, 실제 데이터 구조에 맞게 조정)
  const mobileCards = [
    { src: 'https://placehold.co/910x512', cap: '' },
    { src: 'https://placehold.co/727x445', cap: '뭐' },
    { src: 'https://placehold.co/727x445', cap: '뭐' },
    { src: 'https://placehold.co/727x445', cap: '뭐' },
    { src: 'https://placehold.co/727x445', cap: '뭐' },
    { src: 'https://placehold.co/910x517', cap: '' },
    { src: 'https://placehold.co/987x555', cap: '' },
    { src: 'https://placehold.co/727x445', cap: '뭐' },
    { src: 'https://placehold.co/727x445', cap: '뭐' },
  ];
  return (
    <Section aria-label="Gallery">
      <GradientEdge
        position="top"
        from={G.blackToBlackSoft.from}
        to={G.blackToBlackSoft.to}
        height={G.blackToBlackSoft.h}
        z={0}
      />
      <Container>
        <Hero>
          <Img src="https://placehold.co/1840x1000" alt="featured" />
          <Play aria-hidden><PlayTri /></Play>
        </Hero>

        {/* 데스크탑: 기존 그리드 */}
        <Grid className="gallery-desktop">
          {/* ...기존 데스크탑 Row/Card 구조... */}
        </Grid>

        {/* 모바일: 2열 정사각형 카드 그리드 */}
        <div className="gallery-mobile" style={{ display: 'none' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
            {mobileCards.map((c, i) => (
              <div key={i} style={{
                width: '46vw', height: '46vw', minWidth: 140, minHeight: 140, maxWidth: '100vw', maxHeight: '100vw',
                borderRadius: 4, overflow: 'hidden', background: '#151515', position: 'relative', marginBottom: 8
              }}>
                <img src={c.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                {c.cap && <Cap>{c.cap}</Cap>}
              </div>
            ))}
          </div>
        </div>

        <div style={{ paddingTop: 40, display: 'flex', justifyContent: 'center' }}>
          <OutlineButton label="View More" />
        </div>
      </Container>
    </Section>
  );
}
