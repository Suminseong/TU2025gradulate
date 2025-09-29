import React from 'react';
import PinSection from './PinSection';

const s = {
    wrap: { position: 'relative', background: '#121212' },
    stage: { position: 'relative', height: '100%', background: '#121212' },
    title: { position: 'absolute', left: 0, right: 0, top: 4, textAlign: 'center', color: '#fff', fontFamily: 'Pretendard, system-ui', fontWeight: 700, fontSize: 40, lineHeight: '64px', zindex: 10000 },
    frame: { position: 'absolute', left: 351, top: 140, width: 1219, height: 686, borderRadius: 3.55, background: '#606060', overflow: 'hidden' },
    leftName: { position: 'absolute', left: 195, top: 240, color: '#FAFAFA', fontFamily: 'Pretendard, system-ui', fontSize: 112, fontWeight: 600 },
    leftMeta: { position: 'absolute', left: 195, top: 374, color: '#D9D9D9', fontFamily: 'Pretendard, system-ui', fontSize: 24, fontWeight: 400 },
    rightMeta1: { position: 'absolute', right: 195, top: 509, width: 690.67, color: '#D9D9D9', fontFamily: 'Pretendard, system-ui', fontSize: 24, fontWeight: 300, textAlign: 'right' },
    rightMeta2: { position: 'absolute', right: 195, top: 547, width: 690.67, color: '#FAFAFA', fontFamily: 'Pretendard, system-ui', fontWeight: 500, fontSize: 32, textAlign: 'right' },
    workBlock: { position: 'absolute', left: 195, top: 679, width: 690.67 },
    workSmall: { display: 'block', color: '#D9D9D9', fontFamily: 'Pretendard, system-ui', fontSize: 24, fontWeight: 400 },
    workStrong: { display: 'block', color: '#FAFAFA', fontFamily: 'Pretendard, system-ui', fontSize: 42, fontWeight: 700 },
    // 텍스트 롤업용 마스크(슬롯머신 느낌)
    slotMask: {
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)',
    },
};

const clamp = (n, a = 0, b = 1) => Math.max(a, Math.min(b, n));
const lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; // easeInOutQuad

export default function ExpoWorks() {
    return (
        <PinSection durationVh={320} style={{}} >
            {(pRaw) => {
                const p = ease(clamp(pRaw, 0, 1));

                // 속도 차등(필요 시 값 조정)
                const imgY = lerp(0, -120, p);  // 느리게
                const leftNameY = lerp(0, -360, p);  // 빠르게
                const leftMetaY = lerp(0, -280, p);
                const right1Y = lerp(0, -220, p);  // 중간
                const right2Y = lerp(0, -260, p);
                const workBlockY = lerp(0, -180, p);

                // 롤업 페이드
                const fadeStart = 0.55, fadeEnd = 0.9;
                const fade = p < fadeStart ? 1 : 1 - clamp((p - fadeStart) / (fadeEnd - fadeStart), 0, 1);

                const t = (y) => ({ transform: `translate3d(0, ${y}px, 0)` });
                const tf = (y) => ({ transform: `translate3d(0, ${y}px, 0)`, opacity: fade });

                return (
                    <div style={s.wrap}>
                        <div style={s.stage}>
                            <div style={s.title}>TU-EXPO Works</div>

                            <div style={{ ...s.frame, ...t(imgY) }}>
                                <img src="https://placehold.co/1265x712" alt="작품 이미지" style={{ width: 1265, height: 712, display: 'block' }} />
                            </div>

                            <div style={{ ...s.leftName, ...s.slotMask, ...tf(leftNameY) }}>홍길동</div>
                            <div style={{ ...s.leftMeta, ...s.slotMask, ...tf(leftMetaY) }}>Media Design Engineering</div>

                            <div style={{ ...s.rightMeta1, ...s.slotMask, ...tf(right1Y) }}>gandanhan jakpum seolmyeong</div>
                            <div style={{ ...s.rightMeta2, ...s.slotMask, ...tf(right2Y) }}>Janhyeang - daechung ganji naneun mal</div>

                            <div style={{ ...s.workBlock, ...s.slotMask, ...tf(workBlockY) }}>
                                <small style={s.workSmall}>jakpum en name</small>
                                <strong style={s.workStrong}>작품 한글이름이름이름이</strong>
                            </div>
                        </div>
                    </div>
                );
            }}
        </PinSection>
    );
}