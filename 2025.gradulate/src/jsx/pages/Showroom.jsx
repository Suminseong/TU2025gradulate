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
    overflow-y: scroll;
`;

const ShowroomImg = styled.img`
    display: flex;
    width: 100%;
    height: calc(100vh - 120px);
    object-fit: cover;
    opacity: 0.3;
    z-index: 1;
    top: 80px;
    left: 0;
    position: fixed;
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
    const [scrollY, setScrollY] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);
    const [progress, setProgress] = useState(0);

    const handleScroll = () => {
        const el = containerRef.current;
        const max = el.scrollHeight - el.clientHeight;
        const p = max > 0 ? el.scrollTop / max : 0;
        setProgress(p);
    };

    return (
        <Container>
            {/* <ShowIndicator /> */}
            <ShowroomImgContainer ref={containerRef} onScroll={handleScroll}>
                <ShowInfo />
                <ShowroomImg src={`${base}showroom/showRight.png`} alt="Showroom Right" />
                <ShowroomImg src={`${base}showroom/showCenter.png`} alt="Showroom Center" />
                <ShowroomImg src={`${base}showroom/showLeft.png`} alt="Showroom Left" />
            </ShowroomImgContainer>
            <ShowroomBottom />
        </Container>
    );
}