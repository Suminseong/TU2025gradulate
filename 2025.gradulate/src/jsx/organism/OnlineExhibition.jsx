import React from 'react';
import OutlineButton from '../atom/OutlineButton';

const s = {
  wrap: { position: 'relative', height: 1045, overflow: 'hidden' },
  bg: { position: 'absolute', left: 40, right: 40, top: 140, height: 905, borderRadius: 4, overflow: 'hidden' },
  title: { position: 'absolute', left: 0, right: 0, top: 0, textAlign: 'center', color: '#FFFFFF', fontFamily: 'Pretendard, system-ui', fontWeight: 700, fontSize: 40, lineHeight: '64px' },
  card: { position: 'absolute', left: 732, top: 327, width: 787, height: 492, background: '#FFFCFD' },
  h1: { position: 'absolute', left: 610, top: 496, width: 700, textAlign: 'center', color: '#000', fontFamily: 'Pretendard, system-ui', fontWeight: 600, fontSize: 48, lineHeight: '76.8px' },
};

export default function OnlineExhibition() {
  return (
    <section aria-labelledby="online-title" style={{ padding: 0 }}>
      <div style={s.wrap}>
        <div style={s.title} id="online-title">Online Exhibition</div>
        <div style={s.bg}><img src="https://placehold.co/1840x905" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
        <div style={s.card} aria-hidden />
        <div style={s.h1}>온라인 쇼룸을 통해 작품을 감상해보세요</div>
        <div style={{ position:'absolute', left:860, top:935 }}>
          <OutlineButton label="View More" />
        </div>
      </div>
    </section>
  );
}
