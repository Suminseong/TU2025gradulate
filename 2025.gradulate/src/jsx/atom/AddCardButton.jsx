import React from 'react';
import styled from 'styled-components';
import { CARD_W, CARD_H } from '../organism/GuestbookGrid';

const Button = styled.button`
  width: ${(p) => p.$w}px;
  height: ${(p) => p.$h}px;
  border-radius: 8px;
  /* background: linear-gradient(157deg, #AEAEAE 0%, #848484 100%); */
  outline: 1px rgba(255,255,255,.5) solid;
  outline-offset: -1px;
  display: grid;
  place-items: center;
  position: relative; 
  cursor: pointer;
  border: none;
  @media (max-width: 640px) {
    width: 100%;
    height: 216px;
    border-radius: 10px;
  }
`;

const Background = styled.div`
  position: absolute;
  width: ${(p) => p.$w}px;
  height: ${(p) => p.$h}px;
  top: 0;
  left: 0;
  background: linear-gradient(157deg, #AEAEAE 0%, #848484 100%);
  border-radius: 8px;
  @media (max-width: 640px) {
    width: 100%;
    height: 216px;
    border-radius: 10px;
  }
`;

const Inner = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: grid;
  place-items: center;
  @media (max-width: 640px) {
    width: 26px;
    height: 26px;
  }
`;

const PlusBox = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  @media (max-width: 640px) {
    width: 26px;
    height: 26px;
  }
`;

const VBar = styled.span`
  position: absolute;
  left: 14px;
  top: 1px;
  width: 4px;
  height: 30px;
  background: #fff;
  border-radius: 4px;
  @media (max-width: 640px) {
    left: 11px;
    height: 24px;
    width: 3px;
  }
`;

const HBar = styled.span`
  position: absolute;
  left: 1px;
  top: 14px;
  width: 30px;
  height: 4px;
  background: #fff;
  border-radius: 4px;
  @media (max-width: 640px) {
    top: 11px;
    width: 24px;
    height: 3px;
  }
`;

export default function AddCardButton({ onClick }) {
  return (
    <Button onClick={onClick} aria-label="방명록 작성" $w={CARD_W} $h={CARD_H}>
      <Background $w={CARD_W} $h={CARD_H} />
      <Inner>
        <PlusBox>
          <VBar />
          <HBar />
        </PlusBox>
      </Inner>
    </Button>
  );
}
