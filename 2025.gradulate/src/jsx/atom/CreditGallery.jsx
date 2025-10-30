// CreditGallery.jsx
// 크레딧 갤러리 컴포넌트
import { useEffect, useMemo, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1220px;
    height: auto;
    gap: 20px;
    margin-top: 0px;
`;

const MainStage = styled.div`
        position: relative;
        width: 100%;
        height: 800px;
        overflow: hidden;
`;

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;
const fadeOut = keyframes`
    from { opacity: 1; }
    to { opacity: 0; }
`;

const MainImgLayer = styled.img`
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
    will-change: opacity;
    backface-visibility: hidden;
    transform: translateZ(0);
        animation: ${p => p.$fadeIn ? fadeIn : p.$fadeOut ? fadeOut : 'none'} 1000ms ease-in-out forwards;
`;

const SubImg = styled.img`
    width: 290px;
    height: 190px;
    object-fit: cover;
    cursor: pointer;
    filter: ${p => (p.$active ? 'none' : 'grayscale(100%)')};
    transition: filter 1000ms ease;
    &:hover,
    &:focus-visible {
        filter: ${p => (p.$active ? 'none' : 'grayscale(65%)')};
    }
`;

const SubImgRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
    height: 190px;
`;

export default function CreditGallery({
    mainImage,
    subImages,
})


{
    const base = import.meta.env.BASE_URL || '/';

    const defaultSubs = useMemo(() => ([
        `${base}credits/credit-1.jpg`,
        `${base}credits/credit-2.jpg`,
        `${base}credits/credit-3.jpeg`,
        `${base}credits/credit-4.jpeg`,
    ]), [base]);

    const effectiveSubs = (Array.isArray(subImages) && subImages.length > 0) ? subImages : defaultSubs;

    const [currentMain, setCurrentMain] = useState('');
    const [nextMain, setNextMain] = useState(null);
    const [isSwitching, setIsSwitching] = useState(false);
    const timerRef = useRef(null);        
    const autoTimerRef = useRef(null);   
    const lastManualRef = useRef(false); 
    const loadedRef = useRef(new Set()); 

    useEffect(() => {
        if (mainImage) setCurrentMain(mainImage);
        else if (effectiveSubs.length > 0) setCurrentMain(effectiveSubs[0]);
        else setCurrentMain('');
    }, [mainImage, subImages, defaultSubs]);

    useEffect(() => {
        effectiveSubs.forEach((src) => {
            if (!src || loadedRef.current.has(src)) return;
            const img = new Image();
            img.src = src;
            const mark = () => loadedRef.current.add(src);
            if (img.decode) {
                img.decode().then(mark).catch(mark);
            } else {
                img.onload = mark;
                img.onerror = mark;
            }
        });
    }, [effectiveSubs]);

    useEffect(() => () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
    }, []);

    const startTransition = (imgSrc) => {
        if (!imgSrc || imgSrc === currentMain || isSwitching) return;
        setNextMain(imgSrc);
        setIsSwitching(true);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setCurrentMain(imgSrc);
            setNextMain(null);
            setIsSwitching(false);
        }, 1000);
    };

    const onThumbClick = (imgSrc) => {
        if (!imgSrc) return;
        lastManualRef.current = true;
        if (autoTimerRef.current) {
            clearTimeout(autoTimerRef.current);
            autoTimerRef.current = null;
        }
        startTransition(imgSrc);
    };

    useEffect(() => {
        if (autoTimerRef.current) {
            clearTimeout(autoTimerRef.current);
            autoTimerRef.current = null;
        }
        if (isSwitching) return; 
        const list = effectiveSubs;
        if (!currentMain || list.length <= 1) return;
        const idx = Math.max(0, list.indexOf(currentMain));
        const nextIdx = (idx + 1) % list.length; 

        const DEFAULT_DELAY = 6000;
        const LONG_DELAY = 12000;  
        const delay = lastManualRef.current ? LONG_DELAY : DEFAULT_DELAY;

        autoTimerRef.current = setTimeout(() => {
            lastManualRef.current = false;
            startTransition(list[nextIdx]);
        }, delay);

        return () => {
            if (autoTimerRef.current) {
                clearTimeout(autoTimerRef.current);
                autoTimerRef.current = null;
            }
        };
    }, [currentMain, isSwitching, effectiveSubs]);

    return (
        <Container>
            <MainStage>
                {currentMain && (
                    <MainImgLayer src={currentMain} alt="Main Credit Image" $fadeOut={isSwitching} />
                )}
                {nextMain && (
                    <MainImgLayer src={nextMain} alt="Next Credit Image" $fadeIn />
                )}
            </MainStage>
            <SubImgRow>
                {effectiveSubs.map((imgSrc, index) => {
                    const activeSrc = nextMain || currentMain;
                    return (
                    <SubImg
                        key={index}
                        src={imgSrc}
                        alt={`Sub Credit Image ${index + 1}`}
                        $active={imgSrc === activeSrc}
                        onClick={() => onThumbClick(imgSrc)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                onThumbClick(imgSrc);
                            }
                        }}
                    />
                    );
                })}
            </SubImgRow>
        </Container>
    );
}