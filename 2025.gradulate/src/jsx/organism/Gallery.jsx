import React from 'react';
import styled from 'styled-components';
import OutlineButton from '../atom/OutlineButton';
import GradientEdge from '../atom/GradientEdge';
import { G } from '../atom/gradients';
const base = import.meta.env.BASE_URL || '/';

const Section = styled.section`
  position: relative;
  padding: 120px 40px;
  background: #121212;
  z-index: 1;
`;

const Container = styled.div`
  width: 100%;
  /* max-width: 1840px; */
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

const Vid = styled.video`
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
    display: none; /* hide desktop grid on small screens */
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
  width: ${(p)=>p.$w};
  height: ${(p)=>p.$h};
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

// Mobile-specific layout components
const MobileWrapper = styled.div`
  display: none;
  @media (max-width: 640px) {
    display: block;
    padding: 20px; /* edge-to-edge on mobile */
    box-sizing: border-box;
  }
`;
const MobileGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const MobileFull = styled.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: #151515;
  aspect-ratio: 2 / 1;
  max-height: 300px;
`;
const MobilePair = styled.div`
  display: flex;
  gap: 8px;
`;
const MobileSquare = styled.div`
  flex: 1; /* share available width evenly */
  border-radius: 4px;
  overflow: hidden;
  background: #151515;
  aspect-ratio: 1 / 1;
  max-height: 200px;
`;

export default function Gallery() {
  // 모바일 카드 데이터 (임시, 실제 데이터 구조에 맞게 조정)
  const mobileCards = [
    { src: `${base}video/sub1.mp4`, cap: '' },
    { src: `${base}sq5.png`, cap: '' },
    { src: `${base}sq2.png`, cap: '' },
    { src: `${base}video/category.mp4`, cap: '' },
    { src: `${base}sq6.png`, cap: '' },
    { src: `${base}sq4.png`, cap: '' },
    { src: `${base}video/vid22.mp4`, cap: '' },
    { src: `${base}sq3.png`, cap: '' },
    { src: `${base}sq1.png`, cap: '' },
  ];
  
  const flexGrow1 = `calc((100vw - 140px) / 4)`;
  const flexGrow2 = `calc((100vw - 100px) / 2)`;

  return (
    <Section aria-label="Gallery">
      {/* <GradientEdge
        position="top"
        from={G.blackToBlackSoft.from}
        to={G.blackToBlackSoft.to}
        height={G.blackToBlackSoft.h}
        z={0}
      /> */}
      <Container>
        <Hero>
          <Vid src={`${base}video/main.mp4`} alt="featured" muted autoPlay playsInline loop/>
        </Hero>

        {/* 데스크탑: 기존 그리드 */}
  <Grid className="gallery-desktop">
          <Row>
            <Card $w={flexGrow2} $h={flexGrow1}>
              <Vid src={`${base}video/sub1.mp4`} alt="" muted autoPlay playsInline loop/></Card>
            <Card $w={flexGrow1} $h={flexGrow1}>
              <Img src={`${base}sq5.png`} alt="" />
            </Card>
            <Card $w={flexGrow1} $h={flexGrow1}>
              <Img src={`${base}sq6.png`} alt="" />
            </Card>
          </Row>

          <Row>
            <Card $w={flexGrow1} $h={flexGrow1}><Img src={`${base}sq4.png`} alt="" /></Card>
            <Card $w={flexGrow1} $h={flexGrow1}><Img src={`${base}sq2.png`} alt="" /></Card>
            <Card $w={flexGrow2} $h={flexGrow1}><Vid src={`${base}video/category.mp4`} alt="" muted autoPlay playsInline loop/></Card>
          </Row>

          <Row>
            <Card $w={flexGrow2} $h={flexGrow1}><Vid src={`${base}video/vid22.mp4`} alt="" muted autoPlay playsInline loop/></Card>
            <Card $w={flexGrow1} $h={flexGrow1}><Img src={`${base}sq3.png`} alt="" /></Card>
            <Card $w={flexGrow1} $h={flexGrow1}><Img src={`${base}sq1.png`} alt="" /></Card>
          </Row>
        </Grid>

        <MobileWrapper>
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {/* 모바일 우선: 그룹 단위로 (1) full-width 2:1 이미지 (2) 두 개의 정사각 이미지 */}
            {Array.from({ length: 3 }).map((_, gi) => {
              const baseIdx = gi * 3;
              const a = mobileCards[baseIdx];
              const b = mobileCards[baseIdx + 1];
              const c = mobileCards[baseIdx + 2];
              return (
                <MobileGroup key={gi}>
                  {a && (
                    <MobileFull>
                      <Vid src={a.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      {a.cap && <Cap style={{ opacity: 1 }}>{a.cap}</Cap>}
                    </MobileFull>
                  )}
                  <MobilePair>
                    {b && (
                      <MobileSquare>
                        <img src={b.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        {b.cap && <Cap style={{ opacity: 1 }}>{b.cap}</Cap>}
                      </MobileSquare>
                    )}
                    {c && (
                      <MobileSquare>
                        <img src={c.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        {c.cap && <Cap style={{ opacity: 1 }}>{c.cap}</Cap>}
                      </MobileSquare>
                    )}
                  </MobilePair>
                </MobileGroup>
              );
            })}
          </div>
        </MobileWrapper>

        <div style={{ paddingTop: 40, display: 'flex', justifyContent: 'center' }}>
          <OutlineButton label="View More" />
        </div>
      </Container>
    </Section>
  );
}
