// WorkVideo.jsx
// 작품 상세페이지 - 비디오 컴포넌트 (atom)
// Vimeo 사용한 컴포넌트

import React from 'react';
import styled from 'styled-components';

const VideoWrapper = styled.div`
    width: '1600px'; // 임시값
    height: '100%'; // 임시값
`

const Iframe = styled.iframe`
    width: 100%;
    height: 1080px;
    border: none;
    margin: 0;
    padding: 0;
    overflow: hidden;   
`

export default function WorkVideo({ videoId }) {
    return (
        <VideoWrapper>
            <Iframe
                src={`https://player.vimeo.com/video/1126266309?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Embedded Vimeo"
            ></Iframe>
        </VideoWrapper>
    );
}

