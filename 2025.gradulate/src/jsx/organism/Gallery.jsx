import React from 'react';
import OutlineButton from '../atom/OutlineButton';
import GradientEdge from '../atom/GradientEdge';
import { G } from '../atom/gradients';

const Img = ({ src, alt }) => (<img src={src} alt={alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />);

const s = {
  section: { position: 'relative', paddingTop: 120, paddingBottom: 120, background: '#121212', zIndex: 1 },
  container: { width: '100%', maxWidth: 1840, margin: '0 auto' },
  hero: { position: 'relative', width: '100%', borderRadius: 4, overflow: 'hidden', background: '#171717' },
  play: {
    position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
    width: 70, height: 70, borderRadius: 35, background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(5px)',
  },
  playTri: {
    position: 'absolute', left: 27, top: 23,
    width: 0, height: 0, borderLeft: '16px solid #000', borderTop: '10px solid transparent', borderBottom: '10px solid transparent',
  },
  grid: { display: 'flex', flexDirection: 'column', gap: 20, marginTop: 20 },
  row: { display: 'flex', gap: 20, justifyContent: 'center' },
  card: {
    position: 'relative', borderRadius: 4, overflow: 'hidden', background: '#151515',
  },
  cap: {
    position: 'absolute', left: 0, right: 0, bottom: 0, padding: '12px 16px',
    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.55) 100%)',
    color: '#fff', fontFamily: 'Pretendard, system-ui', fontSize: 14, lineHeight: '22.4px', textAlign: 'center', opacity: 0, transition: 'opacity .2s',
  },
};

export default function Gallery() {
  return (
    <section aria-label="Gallery" style={s.section}>
      {/* 상단 살짝 어둡게 눌러주는 블렌딩 */}
      <GradientEdge
        position="top"
        from={G.blackToBlackSoft.from}
        to={G.blackToBlackSoft.to}
        height={G.blackToBlackSoft.h}
        z={0}
      />
      <div style={s.container}>
        {/* Featured */}
        <div style={s.hero}>
          <Img src="https://placehold.co/1840x1000" alt="featured" />
          <div style={s.play} aria-hidden><div style={s.playTri} /></div>
        </div>

        {/* Grid */}
        <div style={s.grid}>
          <div style={s.row}>
            <div style={{ ...s.card, width: 910, height: 445 }}><Img src="https://placehold.co/910x512" alt="" /></div>
            <div style={{ ...s.card, width: 445, height: 445 }}>
              <Img src="https://placehold.co/727x445" alt="" />
              <div style={s.cap}>뭐</div>
            </div>
            <div style={{ ...s.card, width: 445, height: 445 }}>
              <Img src="https://placehold.co/727x445" alt="" />
              <div style={s.cap}>뭐</div>
            </div>
          </div>

          <div style={s.row}>
            <div style={{ ...s.card, width: 445, height: 445 }}>
              <Img src="https://placehold.co/727x445" alt="" /><div style={s.cap}>뭐</div>
            </div>
            <div style={{ ...s.card, width: 445, height: 445 }}>
              <Img src="https://placehold.co/727x445" alt="" /><div style={s.cap}>뭐</div>
            </div>
            <div style={{ ...s.card, width: 910, height: 445 }}><Img src="https://placehold.co/910x517" alt="" /></div>
          </div>

          <div style={s.row}>
            <div style={{ ...s.card, width: 910, height: 445 }}><Img src="https://placehold.co/987x555" alt="" /></div>
            <div style={{ ...s.card, width: 445, height: 445 }}>
              <Img src="https://placehold.co/727x445" alt="" /><div style={s.cap}>뭐</div>
            </div>
            <div style={{ ...s.card, width: 445, height: 445 }}>
              <Img src="https://placehold.co/727x445" alt="" /><div style={s.cap}>뭐</div>
            </div>
          </div>
        </div>

        {/* View More 버튼(시안 스타일) */}
        <div style={{ paddingTop: 40, display: 'flex', justifyContent: 'center' }}>
          <OutlineButton label="View More" />
        </div>
      </div>
    </section>
  );
}
