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
    height: 216px;
    border-radius: 10px;
  }
`;

const Deco1 = styled.div`
  width: 181px;
  height: 147px;
  position: absolute;
  left: 6px;
  top: 190px;
  background-image: url(${base}/gestbook-card.svg);
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

const Deco2 = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  left: 8px;
  top: 304px;
  background: #EDECF2;
  border-radius: 4px;
  transform: translateZ(0);
  @media (max-width: 640px) {
    width: 18px;
    height: 18px;
    left: 6px;
    top: 188px;
  }
`;

const To = styled.div`
  position: absolute;
  left: 20px;
  top: 30px;
  font-family: ${font};
  font-weight: 600;
  font-size: 20px;
  color: #555;
  @media (max-width: 640px) {
    left: 14px;
    top: 16px;
    font-size: 16px;
  }
`;

const Message = styled.div`
  position: absolute;
  left: 21px;
  top: 63px;
  width: 229px;
  font-family: ${font};
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
  color: #333;
  @media (max-width: 640px) {
    left: 14px;
    top: 44px;
    width: 136px;
    font-size: 14px;
    line-height: 21px;
  }
`;

const From = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-family: ${font};
  font-weight: 600;
  font-size: 14px;
  color: #555;
  @media (max-width: 640px) {
    right: 8px;
    bottom: 8px;
    font-size: 12px;
  }
`;

export default function GuestbookCard({ to, from, message }) {
  return (
    <Card $w={CARD_W} $h={CARD_H}>
      <Deco1 />
      <To>{`To. ${to}`}</To>
      <Message>{message}</Message>
      <From>{`From. ${from}`}</From>
    </Card>
  );
}
