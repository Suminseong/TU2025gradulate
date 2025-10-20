import React from 'react';
import styled from 'styled-components';
import { CARD_W, CARD_H } from '../organism/GuestbookGrid';

const base = import.meta.env.BASE_URL || '/';

const font = 'Pretendard, system-ui';

const Card = styled.div`
  width: ${(p) => p.$w}px;
  height: ${(p) => p.$h}px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(246deg, #F2F0FF -0.07%, #FFF 99.93%);
  @media (max-width: 640px) {
    width: 100%;
    height: auto;
    min-height: 216px;
    border-radius: 4px;
  }
`;

const guestUrl = `${base}guestbook-card.svg`;

const Deco1 = styled.div`
  width: 181px;
  height: 147px;
  position: absolute;
  left: 6px;
  top: 190px;
  background-image: url(${guestUrl});
  background-size: cover;
  background-repeat: no-repeat;
  transform: translateZ(0);
  @media (max-width: 640px) {
    width: 117px;
    height: 95px;
    left: 4px;
    top: 118px;
    border-radius: 6px;
  }
`;

const ContentWrap = styled.div` 
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: 8px;
  width: calc(${(p) => p.$w}px - 40px);
  height: calc(${(p) => p.$h}px - 60px);
  left: 20px;
  top: 30px;
  @media (max-width: 640px) {
    width: calc(100% - 28px);
    height: calc(216px - 40px);
    left: 14px;
    top: 16px;
  }
`;

const To = styled.div`
  /* position: absolute; */
  font-family: ${font};
  font-weight: 600;
  font-size: 20px;
  color: #555;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const Message = styled.div`
  /* position: absolute; */
  top: 63px;
  width: 229px;
  height: 190px;
  font-family: ${font};
  font-weight: 300;
  font-size: 18px;
  line-height: 125%;
  overflow: hidden; 
  color: #333;
  @media (max-width: 640px) {
    width: 100%;
    font-size: 14px;
    line-height: 21px;
    max-height: 108px;
  }
`;

const From = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  font-family: ${font};
  font-weight: 600;
  font-size: 14px;
  color: #555;
  @media (max-width: 640px) {
    right: 0px;
    bottom: 0px;
    font-size: 12px;
  }
`;

export default function GuestbookCard({ to, from, message }) {
  return (
    <Card $w={CARD_W} $h={CARD_H}>
      <Deco1 />
      <ContentWrap $w={CARD_W} $h={CARD_H}>
        <To>{`To. ${to}`}</To>
        <Message>{message}</Message>
        <From>{`From. ${from}`}</From>
      </ContentWrap>
    </Card>
  );
}
