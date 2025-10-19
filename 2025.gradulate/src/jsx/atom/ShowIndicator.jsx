// ShowIndicator.jsx
// 쇼룸 안내 컴포넌트

import React from 'react';
import styled from 'styled-components';

const base = import.meta.env.BASE_URL || '/';

const Container = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 80px;
    height: 110px;
    padding: 20px 20px 10px 20px;
    background-color: rgba(160, 160, 160, 0.6);
    border-radius: 8px;
    filter: blur(4px) brightness(0.8) saturate()(1.2);
    z-index: 4;
    // 컴포넌트 화면 중앙 정렬
    top: calc(50% - 80px);
    left: 50%;
    transform: translate(-50%, -50%);
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

export default function ShowIndicator(
    src,
) {
    return (
        <Container>
            <IconBox src={`${base}icons/showIndicatorMouse.svg`} />
            <IconBox src={`${base}icons/showIndicatorDown.svg`} />
        </Container>
    );
}
