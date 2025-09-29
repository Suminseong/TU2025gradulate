import React from 'react';
import { CARD_W, CARD_H } from './GuestbookCard';

export default function PhotoCard({ src, style, alt='guestbook photo' }) {
  return (
    <article style={{
      width: CARD_W, height: CARD_H, borderRadius: 8, overflow: 'hidden', background: '#FFF',
      boxShadow: '0 8px 28px rgba(0,0,0,0.25)', position: 'relative', ...style,
    }}>
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </article>
  );
}
