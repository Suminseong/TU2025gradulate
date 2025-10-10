import React from 'react';
import styled from 'styled-components';

const FONT = 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif';

const Base = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${(p) => (p.$size === 'sm' ? 40 : 52)}px;
  padding: 0 ${(p) => (p.$size === 'sm' ? 16 : 24)}px;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  background: transparent;
  font-family: ${FONT};
  font-weight: 700;
  font-size: ${(p) => (p.$size === 'sm' ? 13 : 14)}px;
  letter-spacing: 0.2px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  width: ${(p) => (p.$full ? '100%' : 'auto')};
  transition: background .15s ease, color .15s ease, border-color .15s ease;
`;

const Arrow = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-left: 8px;
  border-top: 1px solid #FFFFFF;
  border-right: 1px solid #FFFFFF;
  transform: rotate(45deg);
`;

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
  const isControlled = typeof showArrow === 'boolean';
  const [innerArrow, setInnerArrow] = React.useState(defaultShowArrow);
  const arrowVisible = isControlled ? showArrow : innerArrow;

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

  const commonProps = {
    onClick,
    style,
    'data-arrow-visible': arrowVisible,
    'data-toggle-arrow-fn': undefined,
    $size: size,
    $full: fullWidth,
    as,
    href,
    type: as === 'button' ? 'button' : undefined,
  };

  return (
    <Base {...commonProps}>
      {label}
      {arrowVisible ? <Arrow aria-hidden /> : null}
    </Base>
  );
}
