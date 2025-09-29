import React from 'react';
import { CARD_W, CARD_H } from '../organism/GuestbookGrid';

const font = 'Pretendard, system-ui';

export default function GuestbookCard({ to, from, message }) {
  return (
    <div
      style={{
        width: CARD_W,
        height: CARD_H,
        position: 'relative',
        borderRadius: 8,
        overflow: 'hidden',
        background: 'linear-gradient(225deg, #F2F0FF 0%, #FFFFFF 100%)',
      }}
    >
      {/* 장식 */}
      <div
        style={{
          width: 149,
          height: 147,
          position: 'absolute',
          left: 40,
          top: 190,
          background: '#EDECF2',
          borderRadius: 8,
          transform: 'translateZ(0)',
        }}
      />
      <div
        style={{
          width: 25,
          height: 25,
          position: 'absolute',
          left: 8,
          top: 304,
          background: '#EDECF2',
          borderRadius: 4,
          transform: 'translateZ(0)',
        }}
      />

      {/* 본문 */}
      <div
        style={{
          position: 'absolute',
          left: 20,
          top: 30,
          fontFamily: font,
          fontWeight: 600,
          fontSize: 20,
          color: '#555',
        }}
      >
        {`To. ${to}`}
      </div>

      <div
        style={{
          position: 'absolute',
          left: 21,
          top: 63,
          width: 229,
          fontFamily: font,
          fontWeight: 300,
          fontSize: 18,
          lineHeight: '27px',
          color: '#303',
        }}
      >
        {message}
      </div>

      <div
        style={{
          position: 'absolute',
          right: 10,
          bottom: 10,
          fontFamily: font,
          fontWeight: 600,
          fontSize: 14,
          color: '#555',
        }}
      >
        {`From. ${from}`}
      </div>
    </div>
  );
}
