// src/jsx/organism/GuestbookModal.jsx
import React, { useEffect, useRef, useState } from 'react';

const s = {
  overlay: {
    position: 'fixed', inset: 0, zIndex: 1000,
    display: 'grid', placeItems: 'center',
    background: 'rgba(0,0,0,.45)',
  },

  wrapper: { position: 'relative', display: 'inline-flex', alignItems: 'flex-end', gap: 17 },

  glass: {
    padding: 40, borderRadius: 16,
    background: 'rgba(160,160,160,.80)',
    backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)',
    display: 'inline-flex', gap: 20, alignItems: 'center',
  },

  row: { width: 520, display: 'inline-flex', gap: 20, alignItems: 'center' },

  card: {
    width: 450, height: 560, position: 'relative', overflow: 'hidden',
    borderRadius: 16,
    background: 'linear-gradient(225deg, #F2F0FF 0%, #FFFFFF 100%)',
    boxShadow: '0 20px 60px rgba(0,0,0,.25)',
  },

  // 장식
  decoBig:  { position: 'absolute', left: 66.53, top: 314.67, width: 248.47, height: 245.33, borderRadius: 9999, background: '#EDECF2' },
  decoDot:  { position: 'absolute', left: 13.33, top: 504.92, width: 42.14, height: 41.05, borderRadius: 9999, background: '#EDECF2' },

  // To. 입력 (시안 좌표)
  titleRow: { position: 'absolute', left: 32, top: 50, display: 'inline-flex', alignItems: 'center', gap: 8 },
  labelTo:   { fontFamily: 'Pretendard, system-ui', fontWeight: 600, fontSize: 32, color: '#555' },
  toInput: {
    border: 'none', outline: 'none',
    borderBottom: '1px solid rgba(0,0,0,.18)',
    background: 'transparent',
    fontFamily: 'Pretendard, system-ui',
    fontSize: 28, color: '#303030',
    padding: '2px 4px 4px',
    minWidth: 120, maxWidth: 220,
  },

  // 내용 입력
  contentWrap: { position: 'absolute', left: 32, top: 104, width: 381 },
  textarea: {
    width: '100%', minHeight: 220, resize: 'none',
    border: 'none', outline: 'none',
    borderRadius: 12, padding: '14px 16px',
    fontFamily: 'Pretendard, system-ui', fontSize: 18, lineHeight: '27px', color: '#303030',
    background: 'rgba(255,255,255,.6)',
    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.5)',
  },

  // From. 입력 (시안 좌표)
  fromRow: { position: 'absolute', left: 181, top: 472, display: 'inline-flex', alignItems: 'center', gap: 8 },
  labelFrom: { fontFamily: 'Pretendard, system-ui', fontWeight: 600, fontSize: 32, color: '#555' },
  fromInput: {
    border: 'none', outline: 'none',
    borderBottom: '1px solid rgba(0,0,0,.18)',
    background: 'transparent',
    fontFamily: 'Pretendard, system-ui', fontSize: 20, color: '#303030',
    padding: '2px 4px 4px',
    minWidth: 120, maxWidth: 180,
  },

  // 우측 전송 버튼
  sideCol: { width: 50, height: 560, display: 'inline-flex', flexDirection: 'column', justifyContent: 'flex-end' },
  sendBtn: {
    width: 50, height: 50, borderRadius: 25,
    background: '#202020', cursor: 'pointer',
    display: 'grid', placeItems: 'center', border: 'none',
  },
  sendInner: { width: 20, height: 17, background: '#fff', clipPath: 'polygon(0 0,100% 50%,0 100%)' },

  // 닫기 레일(시안: 가로 60, 세로 충분히 길게)
  closeRail: { width: 60, height: 640, position: 'relative' }, // 560 + pad(40*2) 대략
  closeBox: {
    width: 60, height: 60, position: 'absolute', left: 0, top: 0,
    display: 'grid', placeItems: 'center', cursor: 'pointer',
    background: 'transparent', border: 'none',
  },
  // 안쪽 32x32 영역(마진 포함) + X 아이콘(흰색)
  closeInner: {
    width: 32, height: 32, position: 'relative',
  },
  closeX: {
    position: 'absolute', inset: 0,
    display: 'block',
    width: 32, height: 32,
  },
  closeStroke: (deg) => ({
    position: 'absolute', left: 15, top: 4, width: 2, height: 24,
    background: '#FFFFFF', transform: `rotate(${deg}deg)`,
  }),
};

export default function GuestbookModal({
  open,
  onClose,
  onSubmit,
  defaultTo = '',
  defaultFrom = '',
}) {
  const [toName, setToName] = useState(defaultTo);
  const [fromName, setFromName] = useState(defaultFrom);
  const [message, setMessage] = useState('');
  const overlayRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose?.(); };
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose?.();
  };

  const submit = () => {
    const data = { to: (toName || '').trim(), from: (fromName || '').trim(), message: (message || '').trim() };
    if (!data.message) return;
    onSubmit?.(data);
  };

  return (
    <div style={s.overlay} ref={overlayRef} onMouseDown={handleOverlayClick}>
      <div style={s.wrapper} onMouseDown={(e) => e.stopPropagation()}>
        {/* 카드 주변에만 blur가 걸린 유리 패널 */}
        <div style={s.glass}>
          <div style={s.row}>
            <div style={s.card}>
              {/* 장식 */}
              <div style={s.decoBig} />
              <div style={s.decoDot} />

              {/* To. + 입력 */}
              <div style={s.titleRow}>
                <div style={s.labelTo}>To.</div>
                <input
                  style={s.toInput}
                  value={toName}
                  onChange={(e) => setToName(e.target.value)}
                  placeholder="받는 사람"
                />
              </div>

              {/* 내용 */}
              <div style={s.contentWrap}>
                <textarea
                  style={s.textarea}
                  placeholder="내용을 입력해 주세요."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {/* From. + 입력 */}
              <div style={s.fromRow}>
                <div style={s.labelFrom}>From.</div>
                <input
                  style={s.fromInput}
                  value={fromName}
                  onChange={(e) => setFromName(e.target.value)}
                  placeholder="보내는 사람"
                />
              </div>
            </div>

            {/* 전송 버튼 */}
            <div style={s.sideCol}>
              <button type="button" style={s.sendBtn} onClick={submit} aria-label="send">
                <div style={s.sendInner} />
              </button>
            </div>
          </div>
        </div>

        {/* 닫기 버튼(60x60, 내부 32x32 + 흰색 X) — 카드 ‘외부’ 우상단 */}
        <div style={s.closeRail}>
          <button type="button" style={s.closeBox} onClick={onClose} aria-label="close">
            <div style={s.closeInner}>
              <span style={s.closeStroke(45)} />
              <span style={s.closeStroke(-45)} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
