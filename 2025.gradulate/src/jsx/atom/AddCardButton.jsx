import React from 'react';
import styled from 'styled-components';
import { CARD_W, CARD_H } from '../organism/GuestbookGrid';

const Button = styled.button`
  width: ${(p) => p.$w}px;
  height: ${(p) => p.$h}px;
  border-radius: 8px;
  background: linear-gradient(137deg, #AEAEAE 0%, #848484 100%);
  outline: 1px rgba(255,255,255,.5) solid;
  outline-offset: -1px;
  display: grid;
  place-items: center;
  cursor: pointer;
  border: none;
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
  background: rgba(0,0,0,.35);
  display: grid;
  place-items: center;
  @media (max-width: 640px) {
    width: 26px;
    height: 26px;
  }
`;

const PlusBox = styled.div`
  width: 14px;
  height: 14px;
  position: relative;
  @media (max-width: 640px) {
    width: 12px;
    height: 12px;
  }
`;

const VBar = styled.span`
  position: absolute;
  left: 6px;
  top: 0;
  width: 2px;
  height: 14px;
  background: #fff;
  border-radius: 1px;
  @media (max-width: 640px) {
    left: 5px;
    height: 12px;
  }
`;

const HBar = styled.span`
  position: absolute;
  left: 0;
  top: 6px;
  width: 14px;
  height: 2px;
  background: #fff;
  border-radius: 1px;
  @media (max-width: 640px) {
    top: 5px;
    width: 12px;
  }
`;

export default function AddCardButton({ onClick }) {
  return (
    <Button onClick={onClick} aria-label="방명록 작성" $w={CARD_W} $h={CARD_H}>
      <Inner>
        <PlusBox>
          <VBar />
          <HBar />
        </PlusBox>
      </Inner>
    </Button>
  );
}
