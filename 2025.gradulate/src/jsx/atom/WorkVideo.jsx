// WorkVideo.jsx
// 작품 상세페이지 - 비디오 컴포넌트 (atom)
// Vimeo 사용한 컴포넌트

import React from 'react';
import styled from 'styled-components';

const VideoWrapper = styled.div`
    width: 100%; // 임시값
    margin-top: 50px;
@media (max-width: 640px) {
    margin-top: 20px;
}
`;

const RatioBox = styled.div`
    position: relative;
    width: 100%;
    max-width: 100vw;
    padding-top: 56.25%; // 16:9 비율
`;

const Iframe = styled.iframe`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`

export default function WorkVideo({ videoId }) {
    return (
        <VideoWrapper>
            <RatioBox>
                <Iframe
                    src={`https://player.vimeo.com/video/1126266309?h=1f3e4f1f6e&title=0&byline=0&portrait=0`}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Embedded Vimeo"
                ></Iframe>
            </RatioBox>
        </VideoWrapper>
    );
}

