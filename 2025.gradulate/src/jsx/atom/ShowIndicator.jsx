// ShowIndicator.jsx
// 쇼룸 안내 컴포넌트

import styled, { keyframes, css } from 'styled-components';

const base = import.meta.env.BASE_URL || '/';

const floatY = keyframes`
  0%   { transform: translateY(calc(var(--amp, 8px) * -1)); }
  100% { transform: translateY(var(--amp, 8px)); }
`;


const Container = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: auto;
    height: auto;
    padding: 20px 20px 10px 20px;
    background-color: rgba(0,0,0, 1);
    border-radius: 8px;
    pointer-events: none;
    z-index: 4;
    // 컴포넌트 화면 중앙 정렬
    top: calc(50vh - 80px);
    left: 50%;
    transform: translate(-50%, -50%) translateY(0);
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transition:
    opacity ${({ $fadeMs }) => $fadeMs ?? 800}ms ease,
    transform ${({ $fadeMs }) => $fadeMs ?? 800}ms ease;
    ${({ $visible }) => $visible ? '' : 'transform: translate(-50%, -50%) translateY(6px);'}
`;

const Inner = styled.div`
    animation: ${({ $visible, $floatDur }) =>
        $visible ? css`${floatY} ${$floatDur ?? 1800}ms ease-in-out infinite alternate` : 'none'};
    will-change: transform;
`;

const IconBox = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    background-image: url(${(props) => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

export default function ShowIndicator({
    visible = true,
    fadeMs = 800,
    floatDur = 1800,
    amp = 6,
} = {}) {

    return (
        <Container $visible={visible} $fadeMs={fadeMs} aria-hidden={!visible}>
            <IconBox src={`${base}icons/showIndicatorMouse.svg`} style={{ color: '#FFF' }} />
            <Inner $visible={visible} $floatDur={floatDur} style={{ '--amp': `${amp}px` }}>
                <IconBox src={`${base}icons/showIndicatorDown.svg`} />
            </Inner>
        </Container>
    );
}