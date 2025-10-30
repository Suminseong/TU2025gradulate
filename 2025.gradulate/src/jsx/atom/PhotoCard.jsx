import styled from 'styled-components';
import { CARD_W, CARD_H } from '../organism/GuestbookGrid';

const Wrap = styled.div`
  width: ${(p) => p.$w}px;
  height: ${(p) => p.$h}px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  @media (max-width: 640px) {
    width: 100%;
    height: 216px;
    border-radius: 4px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export default function PhotoCard({ src }) {
  return (
    <Wrap $w={CARD_W} $h={CARD_H}>
      <Img src={src} alt="포토 카드" />
    </Wrap>
  );
}
