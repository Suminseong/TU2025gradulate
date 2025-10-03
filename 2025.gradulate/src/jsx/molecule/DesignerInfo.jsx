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
                {/* {designers.map((designer, index) => (
                    <DesignerCard
                        key={index}
                        nameKor={designer.nameKor}
                        nameEn={designer.nameEn}
                        role={designer.role}
                        email={designer.email}
                        phone={designer.phone}
                        profileImage={designer.profileImage}
                    />
                ))} */}
                {/* 디자이너카드 임의 2개 제작, 데이터 들어오면 다시 제작 */}
                <DesignerCard
                    nameKor="김예준"
                    nameEng="Yejun Kim"
                    part="UI/UX Designer"
                    sns="@yejun_kim"
                    eMail="yejun.kim@example.com"
                    imgSrc="../public/김예준.jpg"
                    imgAlt="김예준 프로필 이미지"
                />
                <DesignerCard
                    nameKor="성수민"
                    nameEng="Sung Sumin"
                    part="Frontend Developer"
                    sns="@sung_sumin"
                    eMail="sung.sumin@example.com"
                    imgSrc="../public/김예준.jpg"
                    imgAlt="성수민 프로필 이미지"
                />
            </div>
        </div>
    );
}