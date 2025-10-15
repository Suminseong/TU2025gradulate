// DropdownMenu.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Menu = styled.div`
  display: ${(p) => (p.$open ? 'flex' : 'none')};
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
  font-weight: ${(p) => (p.$selected ? 500 : 400)};
  color: ${(p) => (p.$selected ? '#191919' : '#bababa')};
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 12px;  
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