//Showroom.jsx

import React from 'react';
import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';

import ShowIndicator from '../atom/ShowIndicator';
// import ShowProgress from '../atom/ShowProgress';
import ShowInfo from '../atom/ShowInfo';

const base = import.meta.env.BASE_URL || '/';



const Container = styled.div`
    display: flex;
    position: relative;
    margin-top: 80px;
    width: 100vw;
    flex-direction: column;
`;

const ShowroomImgContainer = styled.div`
    display: flex;
    position: relative;
    width: 100vw;
    height: 500vh;
    background-color: #FFF;
    background-color: transparent;
    isolation: isolate;
`;

const ShowroomImg = styled.img`
    display: flex;
    width: 100%;
    height: calc(100vh - 120px);
    object-fit: cover;
    opacity: ${({ $opacity }) => ($opacity !== undefined ? $opacity : 0.3)};
    z-index: 1;
    top: 80px;
    left: 0;
    position: fixed;

    transition: opacity 1000ms ease-out;
    will-change: opacity;
`;

const ShowroomBottom = styled.div`
    display: flex;
    position: fixed;
    width: 100vw;
    height: 40px;
    bottom: 0;
    left: 0;
    background-color: #202020;
    z-index: 6;
`


export default function Showroom() {
    const containerRef = useRef(null);
    const [stage, setStage] = useState(0);
    const currentSectionRef = useRef(0);
    const animatingRef = useRef(false);
    const snapTimerRef = useRef(null);

    const [activeSection, setActiveSection] = useState(0);
    const [snapSettled, setSnapSettled] = useState(false);

    const [showIndicator, setShowIndicator] = useState(true);
    const indicatorDismissedRef = useRef(false);
    const indicatorTimerRef = useRef(null);

    const INDICATOR_REPLAY_ON_RETURN = false;

    const showInfos = [
        {
            top: '130vh', left: '15vw', textWidth: '300px', textHeight: 'auto', position: 'left', section: 1,
            info: '모든 꽃이 피어날 수 있는 근원적인 기반이다. 거칠고 단단한 돌은 졸업전시를 향한 수많은 준비와 실험, 실패와 성장의 흔적을 품고 있다. 돌 위에 스며든 이끼와 작은 생명들은 그 과정 속에서 서서히 쌓인 노력의 결실을 상징한다. 이는 향이 머무는 토양처럼, 모든 창작의 향이 퍼져나가기 전의 저장된 시간을 의미한다.'
        }, {
            top: '220vh', right: '53vw', textWidth: '300px', textHeight: 'auto', position: 'right', section: 2,
            info: '시간 위에 피어난 졸업생들의 존재이자 향의 발화점이다. 꽃은 자신만의 빛깔과 감정, 그리고 이야기를 담은 향을 내뿜는다. 이 향은 단순한 냄새가 아닌, 졸업생들의 기억과 감정이 응축된 예술의 잔향이다. 전시장을 거닐던 관람객들은 그 향을 맡으며 각자의 기억과 감정 속에서 새로운 장면을 떠올리고, 그 순간 작품은 관람객의 내면으로 스며든다.'
        }, {
            top: '355vh', right: '15vw', textWidth: '300px', textHeight: 'auto', position: 'right', section: 3,
            info: '향의 흐름이 새로운 생명으로 이어지는 장면을 형상화한다. 돌에서 피어난 꽃들이 줄기와 풀로 연결되며, 이는 졸업전시를 통해 이어지는 졸업생과 관람객의 감정적 교류를 상징한다. 꽃에서 나온 향을 맡은 관람객들은 단순히 감상자가 아닌, 그 향의 영향을 받아 자신만의 ‘꽃’을 피우는 존재로 변화한다. 그리고 다시 그들이 만들어내는 향은 또 다른 사람에게 스며들어, 기억과 감정의 연쇄를 만들어낸다.'
        }, {
            top: '420vh', left: '25vw', textWidth: '300px', textHeight: 'auto', position: 'no-line', section: 4,
            info: '결국 이 세 오브제는 한 사람의 향이 또 다른 향으로 이어지는 순환을 이야기한다. 돌은 그 순환의 뿌리이며, 꽃은 향의 시작점이고, 메인오브제는 그 향이 세상으로 확산되어 기억과 창작이 끊임없이 이어지는 ‘잔향의 생태계’를 완성하는 상징이다.'
        },

    ];


    const leftOpacity = stage === 1 || stage === 4 ? 1 : 0.3;
    const centerOpacity = stage === 2 || stage === 4 ? 1 : 0.3;
    const rightOpacity = stage === 3 || stage === 4 ? 1 : 0.3;

    useEffect(() => {
        const onScroll = () => {
            if (!containerRef.current) return;
            const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
            const relY = Math.max(0, Math.min(window.scrollY - containerTop, 4 * window.innerHeight));

            const scrolledVh = (relY / window.innerHeight) * 100;

            let nextStage = 0;
            if (scrolledVh >= 350) nextStage = 4;
            else if (scrolledVh >= 270) nextStage = 3;
            else if (scrolledVh >= 170) nextStage = 2;
            else if (scrolledVh >= 70) nextStage = 1;
            else nextStage = 0;

            setStage(prev => (prev === nextStage ? prev : nextStage));
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);

    }, []);

    useEffect(() => {
        const onWheelSnap = (e) => {
            setShowIndicator(false);
            indicatorDismissedRef.current = true;
            clearTimeout(indicatorTimerRef.current);
            setSnapSettled(false);
            if (!containerRef.current) return;

            const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
            const start = containerTop;
            const end = containerTop + 4 * window.innerHeight; // 0~400vh 구간
            const y = window.scrollY;

            if (y < start - 20 || y > end + 20) return;

            if (animatingRef.current) {
                e.preventDefault();
                return;
            }

            const delta = e.deltaY;
            const direction = Math.sign(delta);
            if (direction === 0) return;

            const maxIndex = 4;
            const next = Math.max(0, Math.min(maxIndex, currentSectionRef.current + direction));

            if (next === currentSectionRef.current) {
                e.preventDefault();
                return;
            }

            animatingRef.current = true;
            currentSectionRef.current = next;

            const targetY = containerTop + next * window.innerHeight;

            window.scrollTo({ top: targetY, behavior: 'smooth' });

            clearTimeout(snapTimerRef.current);
            snapTimerRef.current = setTimeout(() => {
                animatingRef.current = false;
                setSnapSettled(true);
                setActiveSection(next);
            }, 600);

            e.preventDefault();
        };

        window.addEventListener('wheel', onWheelSnap, { passive: false });
        return () => {
            window.removeEventListener('wheel', onWheelSnap);
            clearTimeout(snapTimerRef.current);
        };
    }, []);

    useEffect(() => {
        const onKey = (e) => {
            const keysNext = [' ', 'PageDown', 'ArrowDown'];
            const keysPrev = ['PageUp', 'ArrowUp'];
            setShowIndicator(false);
            indicatorDismissedRef.current = true;
            clearTimeout(indicatorTimerRef.current);
            if (keysNext.includes(e.key)) {
                e.preventDefault();
                window.dispatchEvent(new WheelEvent('wheel', { deltaY: 100 }));
            } else if (keysPrev.includes(e.key)) {
                e.preventDefault();
                window.dispatchEvent(new WheelEvent('wheel', { deltaY: -100 }));
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    useEffect(() => {
        if (!indicatorDismissedRef.current) {
            setShowIndicator(true);
            clearTimeout(indicatorTimerRef.current);
            indicatorTimerRef.current = setTimeout(() => {
                setShowIndicator(false);
                indicatorDismissedRef.current = true;
            }, 5000);
        }
        return () => clearTimeout(indicatorTimerRef.current);
    }, []);

    useEffect(() => {
        if (INDICATOR_REPLAY_ON_RETURN && snapSettled && activeSection === 0) {
            indicatorDismissedRef.current = false;
            setShowIndicator(true);
            clearTimeout(indicatorTimerRef.current);
            indicatorTimerRef.current = setTimeout(() => {
                setShowIndicator(false);
                indicatorDismissedRef.current = true;
            }, 2000);
        }
    }, [snapSettled, activeSection]);



    return (
        <Container>
            <ShowIndicator
                visible={showIndicator}
                fadeMs={700}
                floatDur={1900}
                amp={8}
            />
            <ShowroomImgContainer ref={containerRef}>
                {showInfos.map((item, index) => (
                    <ShowInfo
                        key={index}
                        top={item.top}
                        left={item.left}
                        right={item.right}
                        textWidth={item.textWidth}
                        textHeight={item.textHeight}
                        position={item.position}
                        isActive={snapSettled && activeSection === item.section}

                        anim={{
                            circle: { duration: 250, delay: 120, easing: 'cubic-bezier(0.22,1,0.36,1)' },
                            line: { duration: 500, delay: 120, easing: 'cubic-bezier(0.22,1,0.36,1)' },
                            text: { duration: 280, delay: 80, easing: 'cubic-bezier(0.22,1,0.36,1)' },
                        }}
                        section={item.section}
                        currentSection={activeSection}
                    >
                        {item.info}
                    </ShowInfo>
                ))}
                <ShowroomImg src={`${base}showroom/showRight.png`} alt="Showroom Right" $opacity={rightOpacity} />
                <ShowroomImg src={`${base}showroom/showCenter.png`} alt="Showroom Center" $opacity={centerOpacity} />
                <ShowroomImg src={`${base}showroom/showLeft.png`} alt="Showroom Left" $opacity={leftOpacity} />
            </ShowroomImgContainer>
            <ShowroomBottom />
        </Container>
    );
}