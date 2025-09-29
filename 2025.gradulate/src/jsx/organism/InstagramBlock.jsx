import React from 'react';
import OutlineButton from '../atom/OutlineButton';

const s = {
  wrap: { position: 'relative', height: 555 },
  head: { position: 'absolute', left: 0, right: 0, top: 0, height: 154, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 },
  icon: { width: 48, height: 48, background: '#FFFFFF' },
  handle: { display: 'flex', alignItems: 'center', height: 49, paddingBottom: 21, color: '#FFFFFF', fontFamily: 'Pretendard, system-ui', fontSize: 40, fontWeight: 700, lineHeight: '38.4px' },
  tileWrap: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 80, marginTop: 154 },
  tile: { width: 272, height: 272, background: '#121212', borderRadius: 14.5, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' },
};

export default function InstagramBlock() {
  return (
    <section aria-labelledby="insta-title" style={{ padding: 0 }}>
      <div style={s.wrap}>
        <div style={s.head}>
          <div style={s.icon} aria-hidden />
          <div id="insta-title" style={s.handle}>@tukd_grad</div>
          <div style={s.tileWrap}>
            <div style={s.tile}><img src="https://placehold.co/226x226?text=QR" alt="Instagram preview" /></div>
            <OutlineButton as="a" href="#" label="View Instagram" size="sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
