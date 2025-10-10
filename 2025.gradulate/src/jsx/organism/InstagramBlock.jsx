import React from 'react';
import styled from 'styled-components';
import OutlineButton from '../atom/OutlineButton';

const Wrap = styled.section`
  padding: 0;
`;
const Inner = styled.div`
  position: relative; height: 555px;
`;
const Head = styled.div`
  position: absolute; left: 0; right: 0; top: 0; height: 154px; display: flex; flex-direction: column; align-items: center; gap: 28px;
`;
const Icon = styled.div`
  width: 48px; height: 48px; background: #FFFFFF;
`;
const Handle = styled.div`
  display: flex; align-items: center; height: 49px; padding-bottom: 21px; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 40px; font-weight: 700; line-height: 38.4px;
`;
const TileWrap = styled.div`
  display: flex; flex-direction: column; align-items: center; gap: 80px; margin-top: 154px;
`;
const Tile = styled.div`
  width: 272px; height: 272px; background: #121212; border-radius: 14.5px; overflow: hidden; display: flex; align-items: center; justify-content: center;
`;

export default function InstagramBlock() {
  return (
    <Wrap aria-labelledby="insta-title">
      <Inner>
        <Head>
          <Icon aria-hidden />
          <Handle id="insta-title">@tukd_grad</Handle>
          <TileWrap>
            <Tile><img src="https://placehold.co/226x226?text=QR" alt="Instagram preview" /></Tile>
            <OutlineButton as="a" href="#" label="View Instagram" size="sm" />
          </TileWrap>
        </Head>
      </Inner>
    </Wrap>
  );
}
