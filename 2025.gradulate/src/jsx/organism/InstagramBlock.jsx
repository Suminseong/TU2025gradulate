import React from 'react';
import styled from 'styled-components';
import OutlineButton from '../atom/OutlineButton';

const base = import.meta.env.BASE_URL || '/';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  padding-top: 320px;
  @media (max-width: 640px) {
    padding-top: 160px;
}
`;
const Inner = styled.div`
  position: relative; 
  height: auto;
`;
const Head = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  @media (max-width: 640px) {
    gap: 16px;
}
`;
const Icon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 640px) {
    width: 36px;
    height: 36px;
}
`;
const Handle = styled.div`
  display: flex; align-items: center; height: 49px; padding-bottom: 21px; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 40px; font-weight: 700; line-height: 38.4px;
  @media (max-width: 640px) {
    font-size: 24px; height: 29px; padding-bottom: 12px;
}
`;
const TileWrap = styled.div`
  display: flex; flex-direction: column; align-items: center; gap: 80px; margin-top: 154px;
  @media (max-width: 640px) {
    margin-top: 60px;
    gap: 40px;
}
`;
const Tile = styled.div`
  width: 272px; height: 272px; background: #121212; overflow: hidden; display: flex; align-items: center; justify-content: center;
  @media (max-width: 640px) {
    width: 160px; height: 160px;
}
`;

export default function InstagramBlock() {
  return (
    <Wrap aria-labelledby="insta-title">
      <Inner>
        <Head>
          <Icon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
              <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z" />
              <circle cx="17.5" cy="6.5" r="1.2" />
              <path d="M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z" />
            </svg>
          </Icon>
          <Handle id="insta-title">@tukd_grad</Handle>
          <TileWrap>
            <Tile><img src={`${base}insta-qr.png`} alt="Instagram preview" /></Tile>
            <OutlineButton as="a" href="https://www.instagram.com/tukd_grad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" label="View Instagram" size="sm" />
          </TileWrap>
        </Head>
      </Inner>
    </Wrap>
  );
}
