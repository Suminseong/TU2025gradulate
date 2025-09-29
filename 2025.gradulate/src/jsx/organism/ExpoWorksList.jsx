import React from 'react';
import PinSection from './PinSection';
import { EXPO_WORKS } from '../../data/expoWorks';

const s = {
  wrap: { position: 'relative', background: '#121212' },
  stage: { position: 'relative', height: 979, background: '#121212' },
  title: { position: 'absolute', left: 0, right: 0, top: 4, textAlign: 'center', color: '#fff', fontFamily: 'Pretendard, system-ui', fontWeight: 700, fontSize: 40, lineHeight: '64px' },
  frame: { position: 'absolute', left: 351, top: 140, width: 1219, height: 686, borderRadius: 3.55, background: '#606060', overflow: 'hidden' },
  leftName: { position: 'absolute', left: 195, top: 240, color: '#FAFAFA', fontFamily: 'Pretendard, system-ui', fontSize: 112, fontWeight: 600 },
  leftMeta: { position: 'absolute', left: 195, top: 374, color: '#D9D9D9', fontFamily: 'Pretendard, system-ui', fontSize: 24, fontWeight: 400 },
  rightMeta1: { position: 'absolute', right: 195, top: 509, width: 690.67, color: '#D9D9D9', fontFamily: 'Pretendard, system-ui', fontSize: 24, fontWeight: 300, textAlign: 'right' },
  rightMeta2: { position: 'absolute', right: 195, top: 547, width: 690.67, color: '#FAFAFA', fontFamily: 'Pretendard, system-ui', fontWeight: 500, fontSize: 32, textAlign: 'right' },
  workBlock: { position: 'absolute', left: 195, top: 679, width: 690.67 },
  workSmall: { display: 'block', color: '#D9D9D9', fontFamily: 'Pretendard, system-ui', fontSize: 24, fontWeight: 400 },
  workStrong: { display: 'block', color: '#FAFAFA', fontFamily: 'Pretendard, system-ui', fontSize: 42, fontWeight: 700 },
  slotMask: {
    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)',
    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)',
  },
};

const clamp = (n, a=0, b=1)=>Math.max(a, Math.min(b, n));
const lerp = (a,b,t)=>a+(b-a)*t;
const ease = (t)=> (t<0.5 ? 2*t*t : 1 - Math.pow(-2*t+2,2)/2);

// 단일 아이템 렌더(기존 연출을 파라미터화했음)
// 9.29 예준이 보여주기 편하게 맹그러봣음
function ExpoItem({ work, progress }) {
  const p = ease(clamp(progress, 0, 1));

  const imgY       = lerp(0, -120, p);
  const leftNameY  = lerp(0, -360, p);
  const leftMetaY  = lerp(0, -280, p);
  const right1Y    = lerp(0, -220, p);
  const right2Y    = lerp(0, -260, p);
  const workBlockY = lerp(0, -180, p);

  const fadeStart=0.55, fadeEnd=0.9;
  const fade = p < fadeStart ? 1 : 1 - clamp((p - fadeStart)/(fadeEnd - fadeStart), 0, 1);

  const t  = (y)=>({ transform:`translate3d(0, ${y}px, 0)` });
  const tf = (y)=>({ transform:`translate3d(0, ${y}px, 0)`, opacity: fade });

  return (
    <div style={s.wrap}>
      <div style={s.stage}>
        <div style={s.title}>TU-EXPO Works</div>

        <div style={{ ...s.frame, ...t(imgY) }}>
          <img src={work.image} alt="작품 이미지" style={{ width: 1265, height: 712, display: 'block' }} />
        </div>

        <div style={{ ...s.leftName, ...s.slotMask, ...tf(leftNameY) }}>{work.artistKr}</div>
        <div style={{ ...s.leftMeta, ...s.slotMask, ...tf(leftMetaY) }}>{work.dept}</div>

        <div style={{ ...s.rightMeta1, ...s.slotMask, ...tf(right1Y) }}>{work.rightMeta1}</div>
        <div style={{ ...s.rightMeta2, ...s.slotMask, ...tf(right2Y) }}>{work.rightMeta2}</div>

        <div style={{ ...s.workBlock, ...s.slotMask, ...tf(workBlockY) }}>
          <small style={s.workSmall}>{work.titleSmall}</small>
          <strong style={s.workStrong}>{work.titleStrong}</strong>
        </div>
      </div>
    </div>
  );
}

export default function ExpoWorksList() {
  return (
    <>
      {EXPO_WORKS.map((work) => (
        <PinSection
          key={work.id}
          durationVh={320}
          center
          centerOffsetPx={-40}
        >
          {(p)=> <ExpoItem work={work} progress={p} />}
        </PinSection>
      ))}
    </>
  );
}
