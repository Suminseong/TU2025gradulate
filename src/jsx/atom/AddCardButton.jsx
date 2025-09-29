import React from 'react';
import { CARD_W, CARD_H } from './GuestbookCard';

export default function AddCardButton({ onClick, style }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: CARD_W, height: CARD_H, borderRadius: 8, position: 'relative',
        outline: '1px rgba(255,255,255,0.50) solid', outlineOffset: '-1px',
        background: 'linear-gradient(137deg, #AEAEAE 0%, #848484 100%)',
        cursor: 'pointer', border: 'none',
        boxShadow: '0 8px 28px rgba(0,0,0,0.25)',
        ...style,
      }}
    >
      <div
        aria-hidden
        style={{
          width: 31.6, height: 31.6, background: '#FFFFFF',
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)', borderRadius: 4,
        }}
      />
    </button>
  );
}
