import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const SCROLLFADE_DELAY = 1200;

const Track = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 80%;
  background-color: rgba(0,0,0,0.05);
  border-radius: 6px;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.18s ease-in-out, transform 0.12s ease;
  pointer-events: auto;
  backdrop-filter: blur(2px);
`;

const Thumb = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
  touch-action: none;
  transition: background-color 0.12s ease, transform 0.08s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  border: 1px solid rgba(255,255,255,0.06);
  min-height: 30px;
`;

export default function CustomScrollbar() {
  const trackRef = useRef(null);
  const thumbRef = useRef(null);
  const hideTimerRef = useRef(null);
  const draggingRef = useRef(false);
  const dragStartYRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const [visible, setVisible] = useState(false);

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  function ensureContrastColor() {
    try {
      const bodyBg = window.getComputedStyle(document.body).backgroundColor || '';
      const m = bodyBg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/);
      if (m) {
        const r = Number(m[1]), g = Number(m[2]), b = Number(m[3]);
        const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        if (lum < 140) {
          thumbRef.current.style.backgroundColor = 'rgba(255,255,255,0.92)';
          thumbRef.current.style.border = '1px solid rgba(0,0,0,0.12)';
          thumbRef.current.style.boxShadow = '0 2px 6px rgba(0,0,0,0.45)';
        } else {
          thumbRef.current.style.backgroundColor = 'rgba(0,0,0,0.78)';
          thumbRef.current.style.border = '1px solid rgba(255,255,255,0.06)';
          thumbRef.current.style.boxShadow = '0 2px 6px rgba(0,0,0,0.25)';
        }
      } else {
        thumbRef.current.style.backgroundColor = 'rgba(0,0,0,0.78)';
      }
    } catch (e) {
      if (thumbRef.current) thumbRef.current.style.backgroundColor = 'rgba(0,0,0,0.78)';
    }
  }

  function resetHideTimer() {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setVisible(false), SCROLLFADE_DELAY);
  }

  function update() {
    const trackEl = trackRef.current;
    const thumbEl = thumbRef.current;
    if (!trackEl || !thumbEl) return;
    const doc = document.documentElement;
    const scrollHeight = doc.scrollHeight - window.innerHeight;
    const trackHeight = trackEl.clientHeight || (window.innerHeight * 0.8);
    if (scrollHeight <= 0) {
      setVisible(false);
      return;
    }
    const thumbH = Math.max(20, (window.innerHeight / doc.scrollHeight) * trackHeight);
    const thumbTop = (window.scrollY / scrollHeight) * (trackHeight - thumbH);
    thumbEl.style.height = thumbH + 'px';
    thumbEl.style.top = thumbTop + 'px';
    setVisible(true);
    ensureContrastColor();
    resetHideTimer();
  }

  useEffect(() => {
    const onWheel = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      setVisible(true);
      resetHideTimer();
    };

    const onResize = () => update();
    const onScroll = () => update();

    document.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // expose update
    // eslint-disable-next-line no-undef
    if (typeof window !== 'undefined') window.__CustomScrollbar = { update };

    // initial
    update();
    setVisible(true);
    resetHideTimer();

    return () => {
      document.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      try { if (typeof window !== 'undefined') delete window.__CustomScrollbar; } catch (_) {}
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pointer-based dragging and track click
  useEffect(() => {
    const trackEl = trackRef.current;
    const thumbEl = thumbRef.current;
    if (!trackEl || !thumbEl) return undefined;

    function onPointerDown(e) {
      if (e.target === thumbEl) {
        // start dragging
        draggingRef.current = true;
        dragStartYRef.current = e.clientY;
        dragStartScrollRef.current = window.scrollY;
        thumbEl.setPointerCapture(e.pointerId);
        thumbEl.classList && thumbEl.classList.add('dragging');
      } else {
        // track click
        const rect = trackEl.getBoundingClientRect();
        const clickY = e.clientY - rect.top;
        const trackHeight = rect.height;
        const doc = document.documentElement;
        const scrollHeight = doc.scrollHeight - window.innerHeight;
        const thumbH = thumbEl.offsetHeight;
        const targetTop = clamp(clickY - thumbH / 2, 0, trackHeight - thumbH);
        const targetScroll = (targetTop / (trackHeight - thumbH)) * scrollHeight;
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
        update();
      }
    }

    function onPointerMove(e) {
      if (!draggingRef.current) return;
      const doc = document.documentElement;
      const scrollHeight = doc.scrollHeight - window.innerHeight;
      const trackHeight = trackEl.clientHeight;
      const thumbH = thumbEl.offsetHeight;
      const deltaY = e.clientY - dragStartYRef.current;
      const scrollableTrack = trackHeight - thumbH;
      const scrollDelta = (deltaY / (scrollableTrack || 1)) * scrollHeight;
      window.scrollTo({ top: clamp(dragStartScrollRef.current + scrollDelta, 0, scrollHeight) });
    }

    function onPointerUp(e) {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      try { thumbEl.releasePointerCapture(e.pointerId); } catch (_) {}
      thumbEl.classList && thumbEl.classList.remove('dragging');
      resetHideTimer();
    }

    trackEl.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    return () => {
      trackEl.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Track
      ref={trackRef}
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }}
      aria-hidden={false}
    >
      <Thumb ref={thumbRef} />
    </Track>
  );
}
