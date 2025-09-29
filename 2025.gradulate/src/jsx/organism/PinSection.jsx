import React from 'react';

/*
섹션 전체 높이를 `durationVh`(기본 300vh)로 잡고,
내부 stage를 sticky(top:0, height:100vh)로 고정합니다.
progress(0~1)를 계산해 자식 render prop으로 내려줍니다.
GPT가 생성한 각주 설띵
 */
export default function PinSection({
  durationVh = 300,                  // 섹션 진행 길이 (vh 단위)
  center = true,
  centerOffsetPx = 0,
  children,                          // (progress)=>node
  style,
}) {
  const ref = React.useRef(null);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let mounted = true;

    const onFrame = () => {
      if (!mounted) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = (durationVh / 100) * vh - vh; // sticky 100vh를 제외한 소비 스크롤
      const traveled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? traveled / total : 0);
      raf = requestAnimationFrame(onFrame);
    };

    raf = requestAnimationFrame(onFrame);
    return () => { mounted = false; cancelAnimationFrame(raf); };
  }, [durationVh]);

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        height: `${durationVh}vh`,
        ...style,
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: center ? 'flex' : 'block',
          alignItems: center ? 'center' : 'stretch',
          justifyContent: center ? 'center' : undefined,
        }}
      >
        <div
          style={{
            width: '100%',
            transform: centerOffsetPx ? `translateY(${centerOffsetPx}px)` : undefined,
          }}
        >
          {typeof children === 'function' ? children(progress) : children}
        </div>
      </div>
    </section>
  );
}
