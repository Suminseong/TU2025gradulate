import React from 'react';

export const CARD_W = 270;
export const CARD_H = 337;
const font = 'Pretendard, system-ui';

const base = {
  width: CARD_W,
  height: CARD_H,
  borderRadius: 8,
  overflow: 'hidden',
  position: 'relative',
  background: 'linear-gradient(225deg, #F2F0FF 0%, #FFFFFF 100%)',
};

export default function GuestbookCard({ to, from, message, style }) {
  return (
    <article style={{ ...base, ...style }}>
      {/* 배경 장식 (회전된 라이트 그레이) */}
      <div
        aria-hidden
        style={{
          width: 149.08, height: 147.2, position: 'absolute',
          left: 39.92, top: 190, background: '#EDECF2', transform: 'rotate(-17deg)',
        }}
      />
      <div
        aria-hidden
        style={{
          width: 25.28, height: 24.63, position: 'absolute',
          left: 8, top: 304.15, background: '#EDECF2', transform: 'rotate(-17deg)',
        }}
      />

      {/* 텍스트 */}
      <div style={{
        position: 'absolute', left: 20, top: 30,
        color: '#555555', fontFamily: font, fontWeight: 600, fontSize: 20,
      }}>
        To. {to}
      </div>

      <div style={{
        position: 'absolute', left: 21, top: 63, width: 229,
        color: '#303030', fontFamily: font, fontWeight: 300, fontSize: 18, lineHeight: '27px',
      }}>
        {message}
      </div>

      <div style={{
        position: 'absolute', left: 141, top: 282,
        color: '#555555', fontFamily: font, fontWeight: 600, fontSize: 20, textAlign: 'right',
      }}>
        From. {from}
      </div>
    </article>
  );
}
