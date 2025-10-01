//Works.jsx
//작품 상세페이지

import React from 'react';
import WorkInfo from '../atom/WorkInfo';

const PAGE_SIDE = 40;

const Img = ({ src, alt }) => (<img src={src} alt={alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />);

function PageContainer({ children }) {
    return (
        <div style={{ position: 'relative', background: '#fff' }}>
            <div style={{
                paddingLeft: '350px',
                paddingRight: PAGE_SIDE,
                display: 'flex',
                flexDirection: 'column',
            }}>
                {children}
            </div>
        </div>
    );
}



export default function Work() {
    return (
        <div style={{ position: 'relative' }}>
            <PageContainer>
                <WorkInfo
                    titleKor="작품 제목(한글)"
                    titleEng="Work Title (English)"
                    context="이곳은 작품 설명이 들어가는 영역입니다. 작품에 대한 상세한 설명이나 배경, 제작 과정 등을 기술할 수 있습니다. 이 텍스트는 예시로 작성된 내용이며, 실제 작품 설명으로 대체되어야 합니다."
                />
                <Img src="https://placehold.co/1530x4000" alt="featured" />
            </PageContainer>
        </div>
    );
}