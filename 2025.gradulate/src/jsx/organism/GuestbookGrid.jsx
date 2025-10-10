import React, { useMemo, useRef, useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import GuestbookCard from '../atom/GuestbookCard';
import PhotoCard from '../atom/PhotoCard';
import AddCardButton from '../atom/AddCardButton';

export const CARD_W = 270;
export const CARD_H = 337;
const RAIL_GAP = 30;
const ROW_GAP  = 20;
const PAD_L = 210;
const PAD_R = 60;

const ProgressOuter = styled.div`
  padding: 0 0 12px 0;
`;
const ProgressTrack = styled.div`
  position: relative;
  width: 100%;
  height: 3px;
  background: #171717;
  border-radius: 2px;
  overflow: hidden;
`;
const ProgressFill = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 3px;
  width: ${(p)=>p.$w}px;
  min-width: 25px;
  background: #7a7a7a;
  border-radius: 2px;
  transition: width 350ms ease-in;
`;

const Rail = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  cursor: grab;
  padding: 0 ${PAD_R}px 0 ${PAD_L}px;
  scrollbar-width: none; 
  -ms-overflow-style: none;
  &::-webkit-scrollbar { display: none; }
`;

const RailInner = styled.div`
  display: flex;
  gap: ${RAIL_GAP}px;
  align-items: flex-start;
  min-height: ${CARD_H * 2 + ROW_GAP}px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${ROW_GAP}px;
`;

const Placeholder = styled.div`
  width: ${CARD_W}px;
  height: ${CARD_H}px;
`;

const toFlatWithPhoto = (items) => {
  const flat = [{ type: 'add', id: 'add' }, ...items];
  const ranges = [
    { min: 6, max: 10 },
    { min: 16, max: 20 },
    { min: 26, max: 30 },
  ];
  let offset = 0;
  ranges.forEach((range, i) => {
    if (flat.length > range.min + offset) {
      const idx = Math.min(
        Math.floor(Math.random() * (range.max - range.min + 1)) + range.min,
        flat.length
      ) + offset;
      flat.splice(idx, 0, {
        type: 'photo',
        id: `ph-${Date.now()}-${i}`,
        src: 'https://placehold.co/662x405',
      });
      offset++;
    }
  });
  return flat;
};
const toColumns = (flat) => {
  const cols = [];
  for (let i = 0; i < flat.length; i += 2) cols.push([flat[i], flat[i + 1] || null]);
  return cols;
};

export default function GuestbookGrid({ onOpenModal, items }) {
  const railRef = useRef(null);
  const [prog, setProg] = useState({ width: 0, trackW: 0 });
  const [flat, setFlat] = useState(() => toFlatWithPhoto(items));
  useEffect(() => {
    setFlat(toFlatWithPhoto(items));
  }, [items]);
  const columns = toColumns(flat);

  // vertical wheel → horizontal scroll
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  // drag to scroll
  const dragRef = useRef({ on: false, moved: false, startX: 0, startScroll: 0 });
  const isInteractive = (el) =>
    !!el?.closest?.('button, a, input, textarea, select, label, [role="button"], [data-nodrag]');
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    const onPointerDown = (e) => {
      if (e.button !== 0) return;
      if (isInteractive(e.target)) return;
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
      if (Math.abs(dx) > 2) dragRef.current.moved = true;
      el.scrollLeft = dragRef.current.startScroll - dx;
    };
    const onPointerUp = (e) => {
      if (!dragRef.current.on) return;
      el.releasePointerCapture?.(e.pointerId);
      document.body.style.userSelect = '';
      el.style.cursor = 'grab';
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

  // progress update
  const updateProgress = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const viewportW = el.clientWidth;
    const contentW  = el.scrollWidth;
    const scrollL   = el.scrollLeft;
    const wrapper = el.parentElement;
    const trackW  = wrapper?.clientWidth || viewportW;
    const maxScroll = Math.max(1, contentW - viewportW);
    const ratio     = Math.min(1, Math.max(0, scrollL / maxScroll));
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
      <ProgressOuter>
        <ProgressTrack>
          <ProgressFill $w={prog.width} />
        </ProgressTrack>
      </ProgressOuter>

      <Rail ref={railRef}>
        <RailInner>
          {columns.map((pair, i) => (
            <Col key={`col-${i}`}>
              <CardSwitch data={pair[0]} onOpenModal={onOpenModal} />
              {pair[1] ? <CardSwitch data={pair[1]} onOpenModal={onOpenModal} /> : <Placeholder />}
            </Col>
          ))}
        </RailInner>
      </Rail>
    </>
  );
}

function CardSwitch({ data, onOpenModal }) {
  if (!data) return <Placeholder />;
  if (data.type === 'add') return <AddCardButton onClick={onOpenModal} style={{ pointerEvents: 'auto' }} />;
  if (data.type === 'photo') return <PhotoCard src={data.src} />;
  return <GuestbookCard to={data.to} from={data.from} message={data.message} />;
}
