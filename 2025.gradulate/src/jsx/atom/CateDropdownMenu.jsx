// CateDropdownMenu.jsx
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Menu = styled.div`
    display: ${(p) => (p.$open ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    top: 100%;
    left: -16px;
    width: 100vw;
    height: auto;
    padding: 20px 16px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(6px);
    z-index: 10;
`;

const CateWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    justify-content: flex-start;
    gap: 12px;
`;

const CateItem = styled.div`
    font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    height: 20px;
    color: ${(p) => (p.$selected ? '#000' : '#909090')};
    cursor: pointer;
`


export default function CateDropdownMenu({
    options,
    isOpen,
    onSelect,
    selected,
}) {
    return (
        <Menu $open={isOpen}>
            <CateWrap>
                {options.map((option, index) => (
                    <CateItem
                        key={index}
                        $selected={selected === option}
                        onClick={() => onSelect(option)}
                    >
                        {option}
                    </CateItem>
                ))}
            </CateWrap>
        </Menu>
    );
}

CateDropdownMenu.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    isOpen: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
