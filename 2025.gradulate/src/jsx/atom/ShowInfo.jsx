// ShowInfo.jsx
// 쇼룸 정보 컴포넌트

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Container = styled.div`
    z-index: 5;
    display: flex;
    position: absolute;
    flex-direction: row;
    align-items: flex-start;
    gap: 12px;

    top: ${({ $top }) => $top || '0'};
    left: ${({ $left }) => ($left !== undefined ? $left : 'auto')};
    right: ${({ $right }) => ($right !== undefined ? $right : 'auto')};
    bottom: ${({ $bottom }) => ($bottom !== undefined ? $bottom : 'auto')};
`;

const CircleLine = styled.div`
    display: flex;
    width: 20px;
    height: 20px;
    border: 1px solid #333;
    border-radius: 50%;
    align-items: center;
    justify-content: center;

    opacity: ${({ $shown }) => ($shown ? 1 : 0)};
    transform: ${({ $shown }) => ($shown ? 'scale(1)' : 'scale(0.8)')};
    transition:
    opacity ${({ $cDur }) => $cDur}ms ${({ $ease }) => $ease} ${({ $cDelay }) => $cDelay}ms,
    transform ${({ $cDur }) => $cDur}ms ${({ $ease }) => $ease} ${({ $cDelay }) => $cDelay}ms;
`;

const CircleFill = styled.div`
    display: flex;
    width: 14px;
    height: 14px;
    background-color: #333;
    border-radius: 50%;

    opacity: ${({ $shown }) => ($shown ? 1 : 0)};
    transform: ${({ $shown }) => ($shown ? 'scale(1)' : 'scale(0.8)')};
    transition:
    opacity ${({ $cDur }) => $cDur}ms ${({ $ease }) => $ease} ${({ $cDelay }) => $cDelay}ms,
    transform ${({ $cDur }) => $cDur}ms ${({ $ease }) => $ease} ${({ $cDelay }) => $cDelay}ms;
`;

const Line = styled.div`
    display: flex;
    width: 72px;
    height: 1px;

    height: 1px; background:#333;
    width: ${({ $shown, $lineWidth }) => ($shown ? $lineWidth || '72px' : '0px')};
    transition:
    width ${({ $lDur }) => $lDur}ms ${({ $ease }) => $ease} ${({ $lDelay }) => $lDelay}ms;
`;

const LineBox = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    mix-blend-mode: difference;
`;

const TextCol = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: auto;
    background-color: rgba(242, 245, 245, 0.5);
    border-radius: 4px;
    padding: 4px;
    backdrop-filter: blur(8px);

    width: ${({ $textWidth }) => $textWidth || '300px'};
    height: ${({ $textHeight }) => $textHeight || 'auto'};
    opacity: ${({ $shown }) => ($shown ? 1 : 0)};
    transform: ${({ $shown }) => ($shown ? 'translateY(0)' : 'translateY(8px)')};
    transition:
    opacity ${({ $tDur }) => $tDur}ms ${({ $ease }) => $ease} ${({ $tDelay }) => $tDelay}ms,
    transform ${({ $tDur }) => $tDur}ms ${({ $ease }) => $ease} ${({ $tDelay }) => $tDelay}ms;
`;

const Text = styled.p`
    font-size: 16px;
    font-weight: 300;
    color: #222;
    line-height: 150%;
    text-align: justify;
    margin: 0;
`;

function TextBox({
    children,
    textWidth,
    textHeight,
    shown,
    tDur,
    tDelay,
    ease,
}) {
    return (
        <TextCol $textWidth={textWidth} $textHeight={textHeight} $shown={shown} $tDur={tDur} $tDelay={tDelay} $ease={ease} >
            <Text>{children}</Text>
        </TextCol>
    );
}

export default function ShowInfo({
    top,
    left,
    right = 'auto',
    bottom,
    lineWidth,
    textWidth,
    textHeight,
    children,
    position = 'left',
    isActive,
    section,
    currentSection,
    anim,
}) {
    const [played, setPlayed] = useState(false);
    const ease = anim?.circle?.easing || anim?.line?.easing || anim?.text?.easing || 'cubic-bezier(0.22,1,0.36,1)';
    const circleDur = anim?.circle?.duration ?? 250;
    const circleDelay = anim?.circle?.delay ?? 120;
    const lineDur = anim?.line?.duration ?? 500;
    const lineDelay = (circleDelay + circleDur) + (anim?.line?.delay ?? 120);
    const textDur = anim?.text?.duration ?? 280;
    const textDelay = (lineDelay + lineDur) + (anim?.text?.delay ?? 80);
    const keepWhileScrolling = played && currentSection === section;
    const shown = isActive || keepWhileScrolling;


    useEffect(() => {
        if (isActive && !played) {
            setPlayed(true);
        }
    }, [isActive, played]);

    if (position === 'right') {
        return (
            <Container $top={top} $left={left} $right={right} $bottom={bottom}>
                <TextBox
                    textWidth={textWidth}
                    textHeight={textHeight}
                    shown={shown}
                    tDur={textDur}
                    tDelay={textDelay}
                    ease={ease}
                >
                    {children}
                </TextBox>
                <LineBox>
                    <Line $lineWidth={lineWidth} $shown={shown} $lDur={lineDur} $lDelay={lineDelay} $ease={ease} />
                    <CircleLine $shown={shown} $cDur={circleDur} $cDelay={circleDelay} $ease={ease}>
                        <CircleFill $shown={shown} $cDur={circleDur} $cDelay={circleDelay} $ease={ease} />
                    </CircleLine>
                </LineBox>
            </Container>
        );
    }
    else if (position === 'left') {
        return (
            <Container $top={top} $left={left} $right={right} $bottom={bottom}>
                <LineBox>
                    <CircleLine $shown={shown} $cDur={circleDur} $cDelay={circleDelay} $ease={ease}>
                        <CircleFill $shown={shown} $cDur={circleDur} $cDelay={circleDelay} $ease={ease} />
                    </CircleLine>
                    <Line $lineWidth={lineWidth} $shown={shown} $lDur={lineDur} $lDelay={lineDelay} $ease={ease} />
                </LineBox>
                <TextBox
                    textWidth={textWidth}
                    textHeight={textHeight}
                    shown={shown}
                    tDur={textDur}
                    tDelay={textDelay}
                    ease={ease}
                >
                    {children}
                </TextBox>
            </Container>
        );
    }
    else if (position === 'no-line') {
        return (
            <Container $top={top} $left={left} $right={right} $bottom={bottom}>
                <TextBox
                    textWidth={textWidth}
                    textHeight={textHeight}
                    shown={shown}
                    tDur={textDur}
                    tDelay={textDelay}
                    ease={ease}
                >
                    {children}
                </TextBox>
            </Container>
        );
    }
} 