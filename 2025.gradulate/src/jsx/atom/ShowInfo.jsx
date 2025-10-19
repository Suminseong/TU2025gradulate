// ShowInfo.jsx
// 쇼룸 정보 컴포넌트

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    z-index: 5;
    display: flex;
    position: absolute;
    flex-direction: row;
    align-items: flex-start;
`;

const CircleLine = styled.div`
    display: flex;
    width: 20px;
    height: 20px;
    border: 1px solid #333;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
`;

const CircleFill = styled.div`
    display: flex;
    width: 14px;
    height: 14px;
    background-color: #333;
    border-radius: 50%;
`;

const Line = styled.div`
    display: flex;
    width: 72px;
    height: 0.5px;
    background-color: #333;
`;

const LineBox = styled.div`
    display: flex;
    align-items: center;
`;

const TextCol = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    width: 300px;
    height: 300px;
`;

const Text = styled.p`
    font-size: 16px;
    font-weight: 300;
    color: #333;
    line-height: 150%;
    text-align: justify;
`;

function TextBox({ children }) {
    return (
        <TextCol>
            <Text>{children}</Text>
        </TextCol>
    );
}

function Circle() {
    return (
        <CircleLine>
            <CircleFill />
        </CircleLine>
    );
}

export default function ShowInfo(
    info,
    setInfo
) {
    return (
        <Container>
            <LineBox>
                <Circle />
                <Line />
            </LineBox>
            <TextBox></TextBox>
        </Container>
    );
} 