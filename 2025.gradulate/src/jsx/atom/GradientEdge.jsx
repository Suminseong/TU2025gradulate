import React from 'react';
import styled from 'styled-components';

/**
 * position: 'top' | 'bottom'
 * from, to: CSS color (rgba 포함)
 * height: number(px)
 * z: z-index (기본 0)
 */
const Edge = styled.div(({ height, from, to, position, z }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  [position]: -1,
  height,
  pointerEvents: 'none',
  zIndex: z ?? 0,
  background: `linear-gradient(${position === 'top' ? '180deg' : '180deg'}, ${from} 0%, ${to} 100%)`
}));

export default function GradientEdge({ position = 'bottom', from, to, height = 240, z = 0, style }) {
  return <Edge position={position} from={from} to={to} height={height} z={z} style={style} />;
}
