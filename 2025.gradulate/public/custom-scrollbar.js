// Custom global scrollbar behavior
(function(){
  const SCROLLFADE_DELAY = 1200; // ms to hide after last scroll

  // Create DOM elements
  const track = document.createElement('div');
  track.className = 'custom-scrollbar-track';
  const thumb = document.createElement('div');
  thumb.className = 'custom-scrollbar-thumb';
  track.appendChild(thumb);
  // Append after DOM ready
  const appendTrack = () => document.body.appendChild(track);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', appendTrack);
  } else {
    appendTrack();
  }

  let isDragging = false;
  let dragStartY = 0;
  let dragStartScroll = 0;
  let hideTimer = null;

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  function update() {
    const doc = document.documentElement;
    const scrollHeight = doc.scrollHeight - window.innerHeight;
    const trackHeight = track.clientHeight || (window.innerHeight * 0.8);
    if (scrollHeight <= 0) {
      track.classList.remove('visible');
      return;
    }
    const thumbH = Math.max(20, (window.innerHeight / doc.scrollHeight) * trackHeight);
    const thumbTop = (window.scrollY / scrollHeight) * (trackHeight - thumbH);
    thumb.style.height = thumbH + 'px';
    thumb.style.top = thumbTop + 'px';
    track.classList.add('visible');
    // ensure thumb contrasts with page background
    ensureContrastColor();
    resetHideTimer();
  }

  function resetHideTimer(){
    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = setTimeout(()=> track.classList.remove('visible'), SCROLLFADE_DELAY);
  }

  // Wheel handler: don't intercept wheel (use native scrolling speed).
  function onWheel(e){
    // allow modifier keys to pass through (ctrl+wheel for zoom)
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    // show the custom scrollbar briefly when user scrolls
    track.classList.add('visible');
    resetHideTimer();
  }

  // Thumb dragging
  function onThumbMouseDown(e){
    e.preventDefault();
    isDragging = true;
    thumb.classList.add('dragging');
    dragStartY = e.clientY;
    dragStartScroll = window.scrollY;
    document.addEventListener('mousemove', onThumbMouseMove);
    document.addEventListener('mouseup', onThumbMouseUp);
  }

  function onThumbMouseMove(e){
    if (!isDragging) return;
    const doc = document.documentElement;
    const scrollHeight = doc.scrollHeight - window.innerHeight;
    const trackHeight = track.clientHeight;
    const thumbH = thumb.offsetHeight;
    const deltaY = e.clientY - dragStartY;
    const scrollableTrack = trackHeight - thumbH;
    const scrollDelta = (deltaY / scrollableTrack) * scrollHeight;
    window.scrollTo({ top: clamp(dragStartScroll + scrollDelta, 0, scrollHeight) });
  }

  function onThumbMouseUp(){
    isDragging = false;
    thumb.classList.remove('dragging');
    document.removeEventListener('mousemove', onThumbMouseMove);
    document.removeEventListener('mouseup', onThumbMouseUp);
    resetHideTimer();
  }

  // Track click moves center of thumb to click position
  function onTrackClick(e){
    // ignore clicks on thumb itself
    if (e.target === thumb) return;
    const rect = track.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const trackHeight = rect.height;
    const doc = document.documentElement;
    const scrollHeight = doc.scrollHeight - window.innerHeight;
    const thumbH = thumb.offsetHeight;
    const targetTop = clamp(clickY - thumbH / 2, 0, trackHeight - thumbH);
    const targetScroll = (targetTop / (trackHeight - thumbH)) * scrollHeight;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    update();
  }

  // Touch support for thumb dragging
  function onThumbTouchStart(e){
    if (e.touches.length !== 1) return;
    isDragging = true;
    thumb.classList.add('dragging');
    dragStartY = e.touches[0].clientY;
    dragStartScroll = window.scrollY;
    document.addEventListener('touchmove', onThumbTouchMove, { passive: false });
    document.addEventListener('touchend', onThumbTouchEnd);
  }

  function onThumbTouchMove(e){
    if (!isDragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    const doc = document.documentElement;
    const scrollHeight = doc.scrollHeight - window.innerHeight;
    const trackHeight = track.clientHeight;
    const thumbH = thumb.offsetHeight;
    const deltaY = touch.clientY - dragStartY;
    const scrollableTrack = trackHeight - thumbH;
    const scrollDelta = (deltaY / scrollableTrack) * scrollHeight;
    window.scrollTo({ top: clamp(dragStartScroll + scrollDelta, 0, scrollHeight) });
  }

  function onThumbTouchEnd(){
    isDragging = false;
    thumb.classList.remove('dragging');
    document.removeEventListener('touchmove', onThumbTouchMove);
    document.removeEventListener('touchend', onThumbTouchEnd);
    resetHideTimer();
  }

  // Show on user pointer move
//   function onPointerMove(){
//     track.classList.add('visible');
//     resetHideTimer();
//   }

  // Wire events
  // keep wheel listener passive to preserve native scroll performance
  document.addEventListener('wheel', onWheel, { passive: true });
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  thumb.addEventListener('mousedown', onThumbMouseDown);
  track.addEventListener('click', onTrackClick);
  thumb.addEventListener('touchstart', onThumbTouchStart, { passive: false });
  // show when pointer enters the track; keep visible until pointer leaves
  track.addEventListener('pointerenter', () => {
    track.classList.add('active');
    track.classList.add('visible');
    if (hideTimer) clearTimeout(hideTimer);
  });
  track.addEventListener('pointerleave', () => {
    track.classList.remove('active');
    resetHideTimer();
  });

  // Initial update after DOM ready
  function readyInit(){
    update();
    // ensure visibility briefly on load
    track.classList.add('visible');
    resetHideTimer();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', readyInit);
  else readyInit();

  // Contrast helper: choose thumb color (black or white) depending on body background luminance
  function ensureContrastColor(){
    try{
      const bodyBg = window.getComputedStyle(document.body).backgroundColor || '';
      const m = bodyBg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/);
      if(m){
        const r = Number(m[1]), g = Number(m[2]), b = Number(m[3]);
        // approximate luminance
        const lum = 0.2126*r + 0.7152*g + 0.0722*b;
        if(lum < 140){
          // dark background -> light thumb
          thumb.style.backgroundColor = 'rgba(255,255,255,0.92)';
          thumb.style.border = '1px solid rgba(0,0,0,0.12)';
          thumb.style.boxShadow = '0 2px 6px rgba(0,0,0,0.45)';
        } else {
          // light background -> dark thumb
          thumb.style.backgroundColor = 'rgba(0,0,0,0.78)';
          thumb.style.border = '1px solid rgba(255,255,255,0.06)';
          thumb.style.boxShadow = '0 2px 6px rgba(0,0,0,0.25)';
        }
      } else {
        // fallback
        thumb.style.backgroundColor = 'rgba(0,0,0,0.78)';
      }
    }catch(e){
      thumb.style.backgroundColor = 'rgba(0,0,0,0.78)';
    }
  }

  // Expose a small API for potential later use
  window.__CustomScrollbar = { update, ensureContrastColor };
})();
