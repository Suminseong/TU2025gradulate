import React from 'react';

const HamburgerIcon = ({ size = 28, color = '#fff', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" {...props}>
    <rect y="5" width="28" height="2.5" rx="1.25" fill={color} />
    <rect y="12.25" width="28" height="2.5" rx="1.25" fill={color} />
    <rect y="19.5" width="28" height="2.5" rx="1.25" fill={color} />
  </svg>
);

export default HamburgerIcon;
