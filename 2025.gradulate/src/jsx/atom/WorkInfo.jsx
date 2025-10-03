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
        bottom: '0px',
        left: 0,
        width: '350px',
        height: 'auto',
        backgroundColor: '#121212',
        padding: '60px 40px',
        boxSizing: 'border-box',
        zIndex: 1000,
    };

    const contentWrapperStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '270px',
        height: 'auto',
        gap: '48px'
    };

    const contentGapStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: 'auto',
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
        fontWeight: '300',
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
        width: '100%',
        height: '75px',
    };

    const likeIconWrapperStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: 'auto',
        height: '32px',
        cursor: 'pointer',
    };

    const likeIconAlignStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
    };

    const likeIconStyle = {
        width: '24px',
        height: '24px',
    };

    const likeCountStyle = {
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        fontSize: '20px',
        fontWeight: '400',
        color: '#e0e0e0',
        margin: 0,
        padding: 0,
        // lineHeight: '13.8px',
    }

    const pageDownIconWrapperStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: '12px',
        cursor: 'pointer',
    };

    const pageDownTextStyle = {
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        fontSize: '18px',
        fontWeight: '300',
        color: '#e0e0e0',
        margin: 0,
        padding: 0,
        lineHeight: 'auto',
        marginBottom: '12px',
    };

    const pageDownIconStyle = {
        display: 'flex',
        width: '20px',
        height: '75px',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={{ ...containerStyle }}>
            <div style={{ ...contentGapStyle }}>
                <div style={{ ...contentWrapperStyle }}>
                    <div style={{ ...closeIconStyle }} onClick={() => { /* 닫기 기능 추후 구현 */ }}>
                        <img src="../icons/closeIcon.svg" alt="Close Icon" />
                    </div>
                    <div style={{ ...contentStyle }}>
                        <h1 style={{ ...titleStyle }}>{titleKor}</h1>
                        <p style={{ ...contextStyle }}>{context}</p>
                    </div>
                </div>

                <div style={{ ...iconWrapperStyle }}>
                    <div style={{ ...likeIconWrapperStyle }} onClick={() => { /* 좋아요 기능 추후 구현 */ }}>
                        <div style={{ ...likeIconAlignStyle }}>
                            <img style={{ ...likeIconStyle }} src="../icons/likeIcon(white).svg" alt="Like Icon" />
                            <p style={{ ...likeCountStyle }}>256</p>
                        </div>
                    </div>
                    <div style={{ ...pageDownIconWrapperStyle }} onClick={() => { window.scrollBy({ top: window.innerHeight, behavior: 'smooth' }); }}>
                        <p style={{ ...pageDownTextStyle }}>Designer Info</p>
                        <div style={{ ...pageDownIconStyle }}>
                            <img src="../icons/pageDownIcon.svg" alt="Page Down Icon" />
                        </div>
                    </div>
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
