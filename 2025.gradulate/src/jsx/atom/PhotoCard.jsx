import React from 'react';
import { CARD_W, CARD_H } from '../organism/GuestbookGrid';

export default function PhotoCard({ src }) {
  return (
    <div
      style={{
        width: CARD_W,
        height: CARD_H,
        borderRadius: 8,
        overflow: 'hidden',
        background: '#fff',
      }}
    >
      <img
        src={src}
        alt="포토 카드"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>
  );
}
