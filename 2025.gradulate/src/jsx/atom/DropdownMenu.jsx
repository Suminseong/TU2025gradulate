// DropdownMenu.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: auto;
  height: auto;
  padding: 10px 25px;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  gap: 10px;
  z-index: 10;

  // 애니메이션
  opacity: ${(p) => (p.$open ? 1 : 0)};
  transform: ${(p) => (p.$open ? 'translateY(0)' : 'translateY(-10px)')};
  visibility: ${(p) => (p.$open ? 'visible' : 'hidden')};
  pointer-events: ${(p) => (p.$open ? 'auto' : 'none')};
  max-height: ${(p) => (p.$open ? '600px' : '0')};
  overflow: hidden;
  transition:
  opacity 220ms ease,
  transform 220ms ease,
  max-height 240ms ease,
  visibility 0ms linear ${(p) => (p.$open ? '0ms' : '220ms')};
  will-change: opacity, transform;
  transform-origin: top right;
  @media (max-width: 640px) {
     padding: 10px 16px;
 }
`;

const Item = styled.div`
  display: flex;
  width: 90px;
  height: 20px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 52px;  
 }
`;

const ItemText = styled.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 16px;
  font-weight: ${(p) => (p.$selected ? 500 : 300)};
  color: ${(p) => (p.$selected ? '#191919' : '#5e5e5e')};
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 12px;  
 }
  @media (max-width: 375px) {
    font-size: 10px;
  }
`;

export default function DropdownMenu({
    options,
    onSelect,
    style,
    isOpen,
    position,
    selected
}) {
    return (
        <Menu style={style} $open={isOpen}>
            {options.map((option, index) => (
                <Item key={index} onClick={() => onSelect(option)}>
                    <ItemText $selected={option === selected}>{option}</ItemText>
                </Item>
            ))}
        </Menu>
    );
}

DropdownMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  style: PropTypes.object,
  isOpen: PropTypes.bool,
  position: PropTypes.any,
  selected: PropTypes.string,
};