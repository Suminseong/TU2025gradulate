// DesignerInfo.jsx
// 디자이너 정보 컴포넌트

import React from 'react';
import DesignerCard from '../atom/DesignerCard';

export default function DesignerInfo({ designers }) {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '775px',
        height: '945px',
        gap: '20px',
        margin: '140px 0 120px 77px',
    }

    const contentWrapperStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '810px',
        height: 'auto',
        gap: '76px',
    }

    const titleStyle = {
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        fontSize: '80px',
        fontWeight: '600',
        color: '#202020',
        margin: '0',
        padding: '0',
        height: '95px',
        width: 'auto',
    }

    return (
        <div style={{ ...containerStyle }}>
            <h1 style={{ ...titleStyle }}>Designer</h1>
            <div style={{ ...contentWrapperStyle }}>
                {designers.map((designer, index) => (
                    <DesignerCard
                        key={index}
                        nameKor={designer.nameKor}
                        nameEn={designer.nameEn}
                        part={designer.role}
                        sns={designer.sns}
                        eMail={designer.eMail}
                        imgUrl={designer.imgUrl}
                    />
                ))}
            </div>
        </div>
    );
}