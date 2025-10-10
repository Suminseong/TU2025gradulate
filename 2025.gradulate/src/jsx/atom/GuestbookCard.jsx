import React from 'react';
import styled from 'styled-components';
import { CARD_W, CARD_H } from '../organism/GuestbookGrid';

const font = 'Pretendard, system-ui';

const Card = styled.div`
  width: ${(p) => p.$w}px;
  height: ${(p) => p.$h}px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(225deg, #F2F0FF 0%, #FFFFFF 100%);
`;

const Deco1 = styled.div`
  width: 149px;
  height: 147px;
  position: absolute;
  left: 40px;
  top: 190px;
  background: #EDECF2;
  border-radius: 8px;
  transform: translateZ(0);
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
`;

const To = styled.div`
  position: absolute;
  left: 20px;
  top: 30px;
  font-family: ${font};
  font-weight: 600;
  font-size: 20px;
  color: #555;
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
`;

const From = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-family: ${font};
  font-weight: 600;
  font-size: 14px;
  color: #555;
`;

export default function GuestbookCard({ to, from, message }) {
  return (
    <Card $w={CARD_W} $h={CARD_H}>
      <Deco1 />
      <Deco2 />
      <To>{`To. ${to}`}</To>
      <Message>{message}</Message>
      <From>{`From. ${from}`}</From>
    </Card>
  );
}
