// ShowProgress.jsx
// 쇼룸 진행 컴포넌트

import React from 'react';
import styled, { css } from 'styled-components';

// Right-side fixed vertical session indicator
const Container = styled.div`
    position: fixed;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 22px;
    z-index: 60;
    pointer-events: none;
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transition: opacity ${({ $fadeMs }) => $fadeMs ?? 400}ms ease;
`;

const Dot = styled.div`
    border-radius: 50%;
    transition: all 600ms ease;
    ${props => props.$active ? css`
        width: 10px;
        height: 10px;
        background: rgba(48,48,48,1);
    ` : css`
        width: 6px;
        height: 6px;
        background: rgba(0,0,0,0.3);
    `}
`;

export default function ShowProgress({
    visible = true,
    fadeMs = 400,
    activeIndex = 0,
    total = 5,
} = {}) {
    const dots = new Array(total).fill(0);
    return (
        <Container $visible={visible} $fadeMs={fadeMs} aria-hidden={!visible}>
            {dots.map((_, i) => (
                <Dot key={i} $active={i === (activeIndex ?? 0)} />
            ))}
        </Container>
    );
}
