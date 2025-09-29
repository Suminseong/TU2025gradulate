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
const s = {
  grid: { display: 'flex', gap: 94, alignItems: 'center', justifyContent: 'center' },
  col: { display: 'flex', flexDirection: 'column', gap: 72, alignItems: 'center' },
  h2: { fontFamily: 'Pretendard, system-ui', fontSize: 40, lineHeight: '64px', color: '#000', fontWeight: 700, margin: 0 },
  body: { width: 1220, color: '#202020', fontFamily: 'Pretendard, system-ui', fontSize: 24, fontWeight: 300, lineHeight: '38.4px' },
  dotWrap: { width: 285, height: 285, position: 'relative', overflow: 'hidden', borderRadius: 9999, background: '#FFFFFF' },
  dot: { position: 'absolute', left: 66, top: 171, width: 19.28, height: 19.28, borderRadius: 9999, background: 'linear-gradient(237deg, #000 0%, #666 100%)' },
  formula: { width: 1220, height: 234, margin: '120px auto 0', background: '#F9F9F9', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  row: { display: 'flex', alignItems: 'center', gap: 93.33, color: '#666' },
  arr: { fontSize: 34.84 }, plus: { fontSize: 34.84 }, eq: { fontSize: 34.84 },
  c1: { width: 30.74, height: 30.74, borderRadius: 9999, background: 'linear-gradient(180deg, #121212 0%, #787878 100%)' },
  c2: { width: 24.59, height: 24.59, borderRadius: 9999, background: 'linear-gradient(242deg, #121212 0%, #787878 100%)' },
};

export default function BrandConcept() {
  return (
    <Wrap aria-labelledby="brand-title">
      <Container>
        <div style={s.grid}>
          <div style={s.col}>
            <h2 id="brand-title" style={s.h2}>Brand Concept</h2>
            <div style={s.body}>
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
            </div>
          </div>
          <div style={s.dotWrap} aria-hidden><div style={s.dot} /></div>
        </div>

        <div style={s.formula} aria-hidden>
          <div style={s.row}>
            <span style={s.arr}>→</span>
            <span style={s.plus}>+</span>
            <span style={s.c1} />
            <span style={s.eq}>=&gt;</span>
            <span style={s.c2} />
          </div>
        </div>
      </Container>

      {/* Brand(white) → Gallery(black) 연결 게이트 */}
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
