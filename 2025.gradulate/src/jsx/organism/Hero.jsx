import React from 'react';
import GradientEdge from '../atom/GradientEdge';
import { G } from '../atom/gradients';

const styles = {
  wrap: { position: 'relative', height: 974, minHeight: 620, overflow: 'hidden', background: '#121212', zIndex: 1 },
  bg: {
    position: 'absolute', inset: 0,
    background: 'url("https://placehold.co/3169x1783") center/cover no-repeat',
  },
  bgGrad: {
    content: '""', position: 'absolute', inset: 0,
    background: 'linear-gradient(180deg, #121212 0%, rgba(18,18,18,0) 55%)',
  },
  copyWrap: { position: 'absolute', left: 40, bottom: 80, maxWidth: 1029, display: 'flex', flexDirection: 'column', gap: 8 },
  p: { margin: 0, color: '#FFFFFF', fontFamily: 'Pretendard, system-ui', fontSize: 16, lineHeight: '19.2px' },
  title: { margin: 0, color: '#FFFFFF', fontFamily: 'Pretendard, system-ui', fontWeight: 600, fontSize: 24, lineHeight: '27.6px' },
  cta: {
    position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: 72,
    width: 240, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'rgba(255,255,255,0.05)', border: '1px solid #FFFFFF', color: '#FFFFFF',
    fontFamily: 'Pretendard, system-ui', fontWeight: 700, cursor: 'pointer',
  },
  markA: { position: 'absolute', left: 840, top: 482, width: 120, height: 124, transform: 'rotate(-90deg)', opacity: .15 },
  markB: { position: 'absolute', left: 960, top: 522, width: 120, height: 120, transform: 'rotate(-90deg)', opacity: .15 },
};

export default function Hero() {
  return (
    <section aria-label="Hero" style={styles.wrap}>
      <div style={styles.bg}>
        <div style={styles.bgGrad} />
      </div>

      <div style={styles.copyWrap}>
        <p style={styles.p}>25. 10. 24. FRI~26. SUN<br />Hongdae Art Center B2</p>
        <p style={styles.p}>Department of Design Engineering</p>
        <p style={styles.title}>Tech University of Korea<br />20th Grad Exhibition</p>
      </div>

      <button type="button" style={styles.cta} aria-label="View More">View More</button>


      {/* 히어로 → Brand 연결 게이트 */}
      <GradientEdge
        position="bottom"
        from={G.heroToWhite.from}
        to={G.heroToWhite.to}
        height={G.heroToWhite.h}
        z={0}
      />
    </section>
  );
}
