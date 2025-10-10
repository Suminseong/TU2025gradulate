import React from 'react';
import styled from 'styled-components';
import GradientEdge from '../atom/GradientEdge';
import { G } from '../atom/gradients';

const Wrap = styled.section`
  position: relative; height: 974px; min-height: 620px; overflow: hidden; background: #121212; z-index: 1;
`;
const Bg = styled.div`
  position: absolute; inset: 0;
  background: url("https://placehold.co/3169x1783") center/cover no-repeat;
`;
const BgGrad = styled.div`
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(180deg, #121212 0%, rgba(18,18,18,0) 55%);
`;
const CopyWrap = styled.div`
  position: absolute; left: 40px; bottom: 80px; max-width: 1029px; display: flex; flex-direction: column; gap: 8px;
`;
const P = styled.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 16px; line-height: 19.2px;
`;
const Title = styled.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-weight: 600; font-size: 24px; line-height: 27.6px;
`;
const Cta = styled.button`
  position: absolute; left: 50%; transform: translateX(-50%); bottom: 72px;
  width: 240px; height: 52px; display: flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.05); border: 1px solid #FFFFFF; color: #FFFFFF;
  font-family: Pretendard, system-ui; font-weight: 700; cursor: pointer;
`;

export default function Hero() {
  return (
    <Wrap aria-label="Hero">
      <Bg>
        <BgGrad />
      </Bg>
      <CopyWrap>
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
