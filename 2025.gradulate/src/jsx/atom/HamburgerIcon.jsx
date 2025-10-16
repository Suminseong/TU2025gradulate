import React from 'react';

const HamburgerIcon = ({ isOpen = false, size = 28, color = '#fff', ...props }) => {
  const strokeWidth = Math.max(2, Math.round(size / 14));
  const half = size / 2;
  const gap = Math.round(size * 0.28);

  if (isOpen) {
    // Render an "X"
    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" {...props}>
        <line x1={half - gap} y1={half - gap} x2={half + gap} y2={half + gap} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
        <line x1={half - gap} y1={half + gap} x2={half + gap} y2={half - gap} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      </svg>
    );
  }

  // Render the hamburger (three bars)
  const barHeight = strokeWidth;
  const radius = strokeWidth / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" {...props}>
      <rect x={0} y={half - gap - barHeight / 2} width={size} height={barHeight} rx={radius} fill={color} />
      <rect x={0} y={half - barHeight / 2} width={size} height={barHeight} rx={radius} fill={color} />
      <rect x={0} y={half + gap - barHeight / 2} width={size} height={barHeight} rx={radius} fill={color} />
    </svg>
  );
};

export default HamburgerIcon;
