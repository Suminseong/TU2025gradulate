import React from 'react';
import styled from 'styled-components';
import GradientEdge from '../atom/GradientEdge';
import { G } from '../atom/gradients';

const Wrap = styled.section`
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  padding-top: 120px;
  padding-bottom: 160px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: flex;
  gap: 94px;
  align-items: center;
  justify-content: center;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
  align-items: center;
`;

const Title = styled.h2`
  font-family: Pretendard, system-ui;
  font-size: 40px;
  line-height: 64px;
  color: #000;
  font-weight: 700;
  margin: 0;
`;

const Body = styled.div`
  width: 1220px;
  color: #202020;
  font-family: Pretendard, system-ui;
  font-size: 24px;
  font-weight: 300;
  line-height: 38.4px;
`;

const DotWrap = styled.div`
  width: 285px;
  height: 285px;
  position: relative;
  overflow: hidden;
  border-radius: 9999px;
  background: #FFFFFF;
`;

const Dot = styled.div`
  position: absolute;
  left: 66px;
  top: 171px;
  width: 19.28px;
  height: 19.28px;
  border-radius: 9999px;
  background: linear-gradient(237deg, #000 0%, #666 100%);
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
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 93.33px;
  color: #666;
`;

const Arr = styled.span`
  font-size: 34.84px;
`;
const Plus = styled.span`
  font-size: 34.84px;
`;
const Eq = styled.span`
  font-size: 34.84px;
`;

const C1 = styled.span`
  width: 30.74px;
  height: 30.74px;
  border-radius: 9999px;
  background: linear-gradient(180deg, #121212 0%, #787878 100%);
`;
const C2 = styled.span`
  width: 24.59px;
  height: 24.59px;
  border-radius: 9999px;
  background: linear-gradient(242deg, #121212 0%, #787878 100%);
`;

export default function BrandConcept() {
  return (
    <Wrap aria-labelledby="brand-title">
      <Container>
        <Grid>
          <Col>
            <Title id="brand-title">Brand Concept</Title>
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
          </Col>
          <DotWrap aria-hidden><Dot /></DotWrap>
        </Grid>

        <Formula aria-hidden>
          <Row>
            <Arr>→</Arr>
            <Plus>+</Plus>
            <C1 />
            <Eq>=&gt;</Eq>
            <C2 />
          </Row>
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
