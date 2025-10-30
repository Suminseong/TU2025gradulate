// CateDropdownMenu.jsx
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    top: 100%;
    height: auto;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(6px);
    z-index: 10;

    // 애니메이션
    opacity: ${(p) => (p.$open ? 1 : 0)};
    transform: ${(p) => (p.$open ? 'translateY(0)' : 'translateY(-10px)')};
    visibility: ${(p) => (p.$open ? 'visible' : 'hidden')};
    pointer-events: ${(p) => (p.$open ? 'auto' : 'none')};
    transition:
    opacity 220ms ease,
    transform 220ms ease,
    visibility 0ms linear ${(p) => (p.$open ? '0ms' : '220ms')};
    will-change: opacity, transform;
    transform-origin: top left;
    @media (max-width: 1500px) {
        padding: 20px 40px;
        left: -40px;
        width: calc(100vw - 80px);
    }
    @media (max-width: 640px) {
        padding: 20px 16px;
        left: -16px;
        width: calc(100vw - 32px);
    }
`;

const CateWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    justify-content: flex-start;
    gap: 12px;

    // 애니메이션
    transform: ${(p) => (p.$open ? 'scaleY(1)' : 'scaleY(0.96)')};
    transform-origin: top left;
    transition: transform 220ms ease;
`;

const CateItem = styled.div`
    font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    height: 24px;
    color: ${(p) => (p.$selected ? '#000' : '#909090')};
    cursor: pointer;
    @media (max-width: 640px) {
        font-size: 14px;
    }
    @media (max-width: 393px) {
        font-size: 12px;
  }
`


export default function CateDropdownMenu({
    options,
    isOpen,
    onSelect,
    selected,
}) {
    return (
        <Menu $open={isOpen}>
            <CateWrap $open={isOpen}>
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
