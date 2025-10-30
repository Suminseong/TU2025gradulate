import styled from 'styled-components';
import GradientEdge from '../atom/GradientEdge';
import { G } from '../atom/gradients';

const base = import.meta.env.BASE_URL || '/';

const Wrap = styled.section`
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  padding-top: 120px;
  padding-bottom: 160px;
  @media (max-width: 640px) {
    padding-top: 32px;
    padding-bottom: 48px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: calc(100vw - 80px);
  margin: 0 auto;
  @media (max-width: 640px) {
    max-width: 100%;
    padding: 0 12px;
    box-sizing: border-box;
  }
`;

const Grid = styled.div`
  display: flex;
  gap: 94px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    gap: 32px;
  }
`;

const Col = styled.div`
  width: 1220px;
  display: flex;
  flex-direction: row;
  gap: 72px;
  align-items: center;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 24px;
    padding: 0px 12px;
    width: calc(100vw - 24px);
  }
`;

const Title = styled.h2`
  font-family: Pretendard, system-ui;
  font-size: 40px;
  line-height: 64px;
  color: #000;
  font-weight: 700;
  margin: 0;
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 1.3;
  }
`;

const Body = styled.div`
  width: 1220px;
  color: #202020;
  font-family: Pretendard, system-ui;
  font-size: 24px;
  font-weight: 300;
  line-height: 38.4px;
  @media (max-width: 640px) {
    width: 100%;
    font-size: 10px;
    line-height: 1.6;
    padding: 0 2px;
    box-sizing: border-box;
    text-align: center;
  }
`;

const BrandLogo = styled.div`
  display: flex;
  width: 285px;
  height: 285px;
  position: relative;
  overflow: hidden;
  background: #FFFFFF;
  @media (max-width: 640px) {
    display: none;
  }
`;

const Formula = styled.div`
  width: 1220px;
  height: 234px;
  margin: 120px auto 0;
  background: #F9F9F9;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    width: calc(100vw - 32px);
    max-width: 100%;
    height: 80px;
    margin: 32px auto 0;
    padding: 0 8px;
    box-sizing: border-box;
    overflow-x: auto;
  }
`;

export default function BrandConcept() {
  return (
    <Wrap aria-labelledby="brand-title">
      <Container>
        <Grid>
          <Title id="brand-title">Brand Concept</Title>
          <Col>
            <Body>
              우리는 살아가며 수많은 순간들을 스쳐 지나간다.<br />
              그 순간들은 이내 사라지는 듯하지만,<br />
              마음속 깊이 은은히 스며들어 기억이 되고,<br />
              결국엔 우리 존재의 한 조각이 된다.<br /><br />
              &lt;잔향&gt; 전시는 작품이 남긴 향이 관람객에게 스며들어<br />
              시간이 지나도 떠오를 수 있는 ‘기억의 향기’를 남기고자 한다.<br />
              단순한 결과물의 나열이 아닌, 창작의 과정과 고민이 축적된 흔적들이<br />
              이 공간에 머무는 이들의 감각과 감정 속에 잔잔히 머물기를 바란다.<br /><br />
              전시를 마주한 순간이 훗날, 불현듯 떠오르는 영감으로 다시 피어나기를.<br />
              그리하여 우리의 잔향이 누군가의 기억 속에서 오래도록 머물 수 있기를.
            </Body>
            <BrandLogo>
              <img
                src={`${base}brand-logo.png`}
                alt="2025 졸업전시 브랜드 로고"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
                draggable={false}
              />
            </BrandLogo>
          </Col>
        </Grid>

        <Formula as="div" style={{ background: 'none', height: 'auto', justifyContent: 'center', alignItems: 'center', display: 'flex', boxShadow: 'none', margin: '32px auto 0', padding: 0 }}>
          <img
            src={`${base}brand-variation.png`}
            alt="브랜드 컨셉 공식 그래픽"
            style={{ width: '100%', maxWidth: 480, height: 'auto', display: 'block', margin: '0 auto' }}
            draggable={false}
          />
        </Formula>
      </Container>

      <GradientEdge
        position="bottom"
        from={G.whiteToBlack.from}
        to={G.whiteToBlack.to}
        height={G.whiteToBlack.h}
        z={0}
      />
    </Wrap>
  );
}
