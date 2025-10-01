// WorkInfo.jsx
// 작품 정보 컴포넌트
import React from 'react';
import PropTypes from 'prop-types';

export default function WorkInfo({
    titleKor,
    titleEng,
    context
}) {
    const containerStyle = {
        display: 'flex',
        position: 'fixed',
        top: '80px',
        left: 0,
        width: '270px',
        height: '100%',
        backgroundColor: '#121212',
        padding: '60px 40px'
    };

    const contentWrapperStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '270px',
        height: 'auto',
        gap: '48px'
    };

    const closeIconStyle = {
        display: 'flex',
        width: '40px',
        height: '40px',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    }

    const contentStyle = {
        display: 'flex',
        width: '100%',
        height: 'auto',
        flexDirection: 'column',
        gap: '16px'
    };

    const titleStyle = {
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        fontSize: '24px',
        fontWeight: '600',
        color: '#FFFFFF',
        margin: 0,
        padding: 0,
        lineHeight: '125%'
    };

    const contextStyle = {
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        fontSize: '16px',
        fontWeight: '400',
        color: '#F0F0F0',
        margin: 0,
        padding: 0,
        lineHeight: '150%'
    };

    const iconWrapperStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    };

    const likeIconWrapperStyle = {

    }

    return (
        <div style={containerStyle}>
            <div style={contentWrapperStyle}>
                <div style={closeIconStyle} onClick={() => { /* 닫기 기능 추후 구현 */ }}>
                    <img src="../icons/closeIcon.svg" alt="Close Icon" />
                </div>
                <div style={contentStyle}>
                    <h1 style={titleStyle}>{titleKor}</h1>
                    <p style={contextStyle}>{context}</p>
                </div>
            </div>
        </div>
    );
}

WorkInfo.propTypes = {
    titleKor: PropTypes.string.isRequired,
    titleEng: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
};

WorkInfo.defaultProps = {
    titleKor: '작품 제목(한글)',
    titleEng: 'Work Title (English)',
    context: '이곳에 작품 설명이 들어갑니다. 작품에 대한 간단한 설명이나 소개를 작성해주세요. 최대 3줄 정도로 요약하는 것이 좋습니다.',
};
