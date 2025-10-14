// WorkInfoOpen.jsx
// 작품 info 오픈 컴포넌트
// WrokInfo.jsx가 닫혀있을 때 나타나고, 클릭시 WorkInfo.jsx가 열림

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: ${props => (props.$visible ? 'flex' : 'none')};
    position: fixed;
    top: 125px;
    left: 0;
    z-index: 1001;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    background: #121212;
    cursor: pointer;
    transform: translateX(${props => (props.$active ? '0' : '-100px')});
    transition: transform 500ms ease;
`;

const OpenIcon = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
`

export default function WorkInfoOpen({
    isOpen = false,
    onClick,
}) {
    const [active, setActive] = useState(false);

    // WorkInfo가 닫히면 (isOpen=false), 500ms 뒤에 active=true로 전환
    useEffect(() => {
        let timer;
        if (!isOpen) {
            setActive(false); // 일단 왼쪽에 숨어 있게
            timer = setTimeout(() => {
                setActive(true); // 500ms 뒤 등장
            }, 500);
        } else {
            setActive(false); // WorkInfo가 열릴 때는 즉시 숨기기
        }
        return () => clearTimeout(timer);
    }, [isOpen]);

    {
        return (
            <Container
                $visible={!isOpen}
                $active={active}
                onClick={() => {
                    if (typeof onClick === 'function') onClick();
                }}
            >
                <OpenIcon>
                    <img src="/icons/infoOpenIcon.svg" alt="작품 정보 열기" />
                </OpenIcon>
            </Container>
        );
    }
}