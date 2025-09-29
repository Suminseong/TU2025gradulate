import React from 'react';

const FONT = 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif';

export default function OutlineButton({
  as = 'button',
  href,
  label = 'View More',
  size = 'md',
  fullWidth = false,
  showArrow,                // Controlled prop (optional)
  defaultShowArrow = true,  // Uncontrolled initial value
  onArrowChange,            // Optional callback when internal toggle happens
  onClick,
  style,
}) {
  const SIZES = { sm: { h: 40, padX: 16, fz: 13 }, md: { h: 52, padX: 24, fz: 14 } };
  const sz = SIZES[size] ?? SIZES.md;

  // 내부 상태 (부모가 showArrow를 제공하지 않을 때만 사용)
  const [innerArrow, setInnerArrow] = React.useState(defaultShowArrow);
  const isControlled = typeof showArrow === 'boolean';
  const arrowVisible = isControlled ? showArrow : innerArrow;

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: sz.h,
    padding: `0 ${sz.padX}px`,
    border: '1px solid #FFFFFF',
    color: '#FFFFFF',
    background: 'transparent',
    fontFamily: FONT,
    fontWeight: 700,
    fontSize: sz.fz,
    letterSpacing: .2,
    borderRadius: 4,
    cursor: 'pointer',
    textDecoration: 'none',
    width: fullWidth ? '100%' : 'auto',
    transition: 'background .15s ease, color .15s ease, border-color .15s ease',
    ...style,
  };

  const Arrow = arrowVisible ? (
    <span aria-hidden
      style={{
        display: 'inline-block', width: 8, height: 8, marginLeft: 8,
        borderTop: '1px solid #FFFFFF', borderRight: '1px solid #FFFFFF',
        transform: 'rotate(45deg)'
      }}
    />
  ) : null;

  // 내부 토글 유틸 (필요 시 부모에게도 알림)
  const toggleArrow = React.useCallback(() => {
    if (isControlled) {
      onArrowChange && onArrowChange(!showArrow);
      return;
    }
    setInnerArrow(prev => {
      const next = !prev;
      onArrowChange && onArrowChange(next);
      return next;
    });
  }, [isControlled, onArrowChange, showArrow]);

  // Expose data attribute for styling/tests; avoid changing API shape
  const commonProps = {
    onClick,
    style: base,
    'data-arrow-visible': arrowVisible,
    // optional: users can bind toggleArrow to some event if desired
    'data-toggle-arrow-fn': undefined,
  };

  if (as === 'a') {
    return (
      <a href={href} {...commonProps}>
        {label}
        {Arrow}
      </a>
    );
  }
  return (
    <button type="button" {...commonProps}>
      {label}
      {Arrow}
    </button>
  );
}
