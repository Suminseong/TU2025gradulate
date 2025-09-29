import React, { useMemo, useRef, useEffect, useState, useCallback } from 'react';
import GuestbookCard from '../atom/GuestbookCard';
import PhotoCard from '../atom/PhotoCard';
import AddCardButton from '../atom/AddCardButton';

export const CARD_W = 270;
export const CARD_H = 337;
const RAIL_GAP = 30;
const ROW_GAP  = 20;
const PAD_L = 210;
const PAD_R = 60;

const toFlatWithPhoto = (items) => {
  const flat = [{ type: 'add', id: 'add' }, ...items];
  const minI = 6, maxI = 10;
  if (flat.length > minI) {
    const idx = Math.min(Math.floor(Math.random() * (maxI - minI + 1)) + minI, flat.length);
    flat.splice(idx, 0, { type: 'photo', id: `ph-${Date.now()}`, src: 'https://placehold.co/662x405' });
  }
  return flat;
};
const toColumns = (flat) => {
  const cols = [];
  for (let i = 0; i < flat.length; i += 2) cols.push([flat[i], flat[i + 1] || null]);
  return cols;
};

export default function GuestbookGrid({ onOpenModal, items }) {
  const railRef = useRef(null);

  // 진행바 상태: width(채워지는 길이), trackW(전체 트랙 너비)
  const [prog, setProg] = useState({ width: 0, trackW: 0 });

  const columns = useMemo(() => {
    const flat = toFlatWithPhoto(items);
    return toColumns(flat);
  }, [items]);

  // 수직 휠 → 가로 스크롤
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollLeft += e.deltaY; // 연속 스크롤
        e.preventDefault();
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  // 드래그 스크롤
  const dragRef = useRef({ on: false, moved: false, startX: 0, startScroll: 0 });

  const isInteractive = (el) =>
    !!el?.closest?.('button, a, input, textarea, select, label, [role="button"], [data-nodrag]');

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    const onPointerDown = (e) => {
      if (e.button !== 0) return; // left button only
      if (isInteractive(e.target)) return; // don't start drag on interactive controls

      dragRef.current.on = true;
      dragRef.current.moved = false;
      dragRef.current.startX = e.clientX;
      dragRef.current.startScroll = el.scrollLeft;

      el.setPointerCapture?.(e.pointerId);
      document.body.style.userSelect = 'none';
      el.style.cursor = 'grabbing';
    };

    const onPointerMove = (e) => {
      if (!dragRef.current.on) return;
      const dx = e.clientX - dragRef.current.startX;
      if (Math.abs(dx) > 2) dragRef.current.moved = true; // small threshold to preserve clicks
      el.scrollLeft = dragRef.current.startScroll - dx;
    };

    const onPointerUp = (e) => {
      if (!dragRef.current.on) return;
      el.releasePointerCapture?.(e.pointerId);
      document.body.style.userSelect = '';
      el.style.cursor = 'grab';

      // If this was a real drag (moved), cancel the click
      if (dragRef.current.moved) {
        e.preventDefault();
        e.stopPropagation();
      }
      dragRef.current.on = false;
    };

    el.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointercancel', onPointerUp);

    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointercancel', onPointerUp);
    };
  }, []);

  // === 진행바: 채워지는 방식으로 계산 ===
  const updateProgress = useCallback(() => {
    const el = railRef.current;
    if (!el) return;

    const viewportW = el.clientWidth;
    const contentW  = el.scrollWidth;
    const scrollL   = el.scrollLeft;

    // 트랙은 레일 컨테이너(상위 래퍼)의 전체 너비(100%) 기준
    const wrapper = el.parentElement; // progress bar container sits above the rail
    const trackW  = wrapper?.clientWidth || viewportW;

    const maxScroll = Math.max(1, contentW - viewportW);
    const ratio     = Math.min(1, Math.max(0, scrollL / maxScroll));

    // 왼쪽에서부터 채워지는 길이
    const filled = Math.round(trackW * ratio);

    setProg({ width: filled, trackW });
  }, []);

  useEffect(() => {
    updateProgress();
    const el = railRef.current;
    if (!el) return;
    const onScroll = () => requestAnimationFrame(updateProgress);
    const onResize = () => requestAnimationFrame(updateProgress);
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [updateProgress]);

  return (
    <>
      {/* 스크롤바 숨김 + 커서 */}
      <style>{`
        .gb-rail { scrollbar-width: none; -ms-overflow-style: none; cursor: grab; }
        .gb-rail::-webkit-scrollbar { display: none; }
      `}</style>

      {/* 진행바: 너비 100%의 트랙(3px,#7A7A7A) + 왼쪽에서 채워지는 흰색 바 */}
      <div style={{ padding: '0 0 12px 0' }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: 3,
          background: '#171717',
          borderRadius: 2,
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: 3,
            width: prog.width,
            minWidth: 100,
            background: '#7a7a7a',
            borderRadius: 2,
            transition: 'width 60ms linear'
          }}/>
        </div>
      </div>

      {/* 레일: scroll-snap 완전 제거 → 연속 스크롤 */}
      <div
        ref={railRef}
        className="gb-rail"
        style={{
          overflowX: 'auto',
          overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-y',    // ← allow vertical touch scrolling; horizontal handled by pointer drag
          cursor: 'grab',
          padding: `0 ${PAD_R}px 0 ${PAD_L}px`,
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: RAIL_GAP,
            alignItems: 'flex-start',
            minHeight: CARD_H * 2 + ROW_GAP,
          }}
        >
          {columns.map((pair, i) => (
            <div key={`col-${i}`} style={{ display: 'flex', flexDirection: 'column', gap: ROW_GAP }}>
              <CardSwitch data={pair[0]} onOpenModal={onOpenModal} />
              {pair[1] ? <CardSwitch data={pair[1]} onOpenModal={onOpenModal} /> : <div style={{ width: CARD_W, height: CARD_H }} />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function CardSwitch({ data, onOpenModal }) {
  if (!data) return <div style={{ width: CARD_W, height: CARD_H }} />;
  if (data.type === 'add') return <AddCardButton onClick={onOpenModal} style={{ pointerEvents: 'auto' }} />;
  if (data.type === 'photo') return <PhotoCard src={data.src} />;
  return <GuestbookCard to={data.to} from={data.from} message={data.message} />;
}
