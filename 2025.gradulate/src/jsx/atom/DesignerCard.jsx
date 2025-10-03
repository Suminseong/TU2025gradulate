// DesignerCard.jsx
// 디자이너 카드 컴포넌트

import React from 'react';
import PropTypes from 'prop-types';

export default function DesignerCard({
    nameKor,
    nameEng,
    part,
    sns,
    eMail,
    imgSrc,
    imgAlt,
}) {
    const cardStyle = {
        // 시안 수치
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        letterSpacing: '0.24px',
        color: '#202020',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        width: 'auto',
        height: '387px',
        gap: '40px'
    }

    const cardImageContainterStyle = {
        // 이미지 컨테이너
        display: 'flex',
        width: '290px',
        height: '387px',
        borderRadius: '4px',
    }

    const cardContentWrapperStyle = {
        // 텍스트 컨테이너
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'calc(100% - 8px)',
        width: 'auto'
    }

    const cardProfileNameWapperStyle = {
        // 이름 컨테이너
        display: 'flex',
        height: 'auto',
        padding: '0',
        margin: '0',
        flexDirection: 'column',
        gap: '0px'
    }

    const cardProfileNameKorStyle = {
        // 이름 한글
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        fontSize: '42px',
        fontWeight: '700',
        lineHeight: 'auto',
        color: '#202020',
        margin: '0',
        padding: '0',
    }

    const cardProfileNameEngStyle = {
        // 이름 영문
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        fontSize: '20px',
        fontWeight: '400',
        lineHeight: 'auto',
        color: '#202020',
        margin: '0',
        padding: '0',
    }

    const cardInfoWrapperStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '84px',
    }

    const cardInfoTitleWrapperStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '90px',
        height: '84px',
        margin: '0',
        padding: '0',
    }

    const cardInfoTitleStyle = {
        display: 'flex',
        height: '20px',
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        fontSize: '20px',
        fontWeight: '300',
        lineHeight: '19.2px',
        color: '#404040',
        margin: '0',
        padding: '0',
    }

    const cardInfoTextWrapperStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 'auto',
        height: '84px',
        lineHeight: '19.2px',
        margin: '0',
        padding: '0',
    }

    const cardInfoTextStyle = {
        display: 'flex',
        height: '20px',
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        fontSize: '20px',
        fontWeight: '400',
        color: '#202020',
        margin: '0',
        padding: '0',
    }

    return (
        <div style={{ ...cardStyle }}>
            <div style={{ ...cardImageContainterStyle }}>
                <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} src={imgSrc} alt={imgAlt} />
            </div>
            <div style={{ ...cardContentWrapperStyle }}>
                <div style={{ ...cardProfileNameWapperStyle }}>
                    <h1 style={{ ...cardProfileNameKorStyle }}>{nameKor}</h1>
                    <h2 style={{ ...cardProfileNameEngStyle }}>{nameEng}</h2>
                </div>
                <div style={{ ...cardInfoWrapperStyle }}>
                    <div style={{ ...cardInfoTitleWrapperStyle }}>
                        <h3 style={{ ...cardInfoTitleStyle }}>Part</h3>
                        <h3 style={{ ...cardInfoTitleStyle }}>SNS</h3>
                        <h3 style={{ ...cardInfoTitleStyle }}>E-mail</h3>
                    </div>
                    <div style={{ ...cardInfoTextWrapperStyle }}>
                        <p style={{ ...cardInfoTextStyle }}>{part}</p>
                        <p style={{ ...cardInfoTextStyle }}>{sns}</p>
                        <p style={{ ...cardInfoTextStyle }}>{eMail}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

DesignerCard.propTypes = {
    nameKor: PropTypes.string.isRequired,
    nameEng: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    sns: PropTypes.string,
    eMail: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
};

DesignerCard.defaultProps = {
    sns: 'N/A',
    eMail: 'N/A',
};