import React from 'react';
import { CARD_W, CARD_H } from '../organism/GuestbookGrid';

export default function AddCardButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="방명록 작성"
      style={{
        width: CARD_W, height: CARD_H, borderRadius: 8,
        background: 'linear-gradient(137deg, #AEAEAE 0%, #848484 100%)',
        outline: '1px rgba(255,255,255,.5) solid', outlineOffset: '-1px',
        display: 'grid', placeItems: 'center', cursor: 'pointer',
        border: 'none',
      }}
    >
      <div
        style={{
          width: 32, height: 32, borderRadius: 6,
          background: 'rgba(0,0,0,.35)', display: 'grid', placeItems: 'center'
        }}
      >
        <div style={{
          width: 14, height: 14, position: 'relative'
        }}>
          <span style={{
            position: 'absolute', left: 6, top: 0, width: 2, height: 14, background: '#fff', borderRadius: 1
          }}/>
          <span style={{
            position: 'absolute', left: 0, top: 6, width: 14, height: 2, background: '#fff', borderRadius: 1
          }}/>
        </div>
      </div>
    </button>
  );
}
