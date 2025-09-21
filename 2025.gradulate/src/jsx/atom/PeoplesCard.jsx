// PeoplesCard.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * 인물 카드 컴포넌트
 * 
 */
export default function PeoplesCard({
    nameKor,
    nameEng,
    role,
    sns,
    eMail,
    imgSrc,
    imgAlt,
}) {
    const cardStyle = {
        // 시안 수치
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        letterSpacing: '0.02em',
        color: 'inherit',
        textDecoration: 'none',
        display: 'flex',
        padding: 0,
        cursor: 'pointer',
        width: '445px',
        height: '393px',
        borderRadius: '16px',
        overflow: 'hidden',
    };

    const cardImageStyle = {
        // 프로필 이미지 수치
        width: '60%',
        height: '100%',
        objectFit: 'cover',
        flex: '0 0 auto',
        zIndex: 1,
    };

    const cardContentStyle = {
        // 프로필 콘텐츠
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        zIndex: 2,
        fontSize: '13px',
        fontWeight: '400',
        // 백그라운드 컬러 : 그라데이션 왼쪽부터 0% FFF(0%) ~ 14% F0F0F0(100%) ~ 100% F0F0F0(100%)
        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(240, 240, 240, 1) 14%, rgba(240, 240, 240, 1) 100%)',
    };

    const contentTextStyle = {
        // 프로필 콘텐츠 텍스트
        margin: '0',
        padding: '0',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: '41px'
    };

    return (
    <div style={{...cardStyle}}>
        <img src={imgSrc} alt={imgAlt} style={{...cardImageStyle}}/>
        <div style={{...cardContentStyle}}>
            <div style={{...contentTextStyle}}>
                <h1 style={{fontSize: '28px', fontWeight: '700'}}>{nameKor}</h1>
                <p>{nameEng}</p>
            </div>
            <div style={{...contentTextStyle}}>
                <p>{role}</p>
                <p>{eMail}</p>
                <div>
                    {sns.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.platform}
                    </a>
                ))}
                </div>
            </div>
        </div>
    </div>
)

}

PeoplesCard.propTypes = {
    nameKor: PropTypes.string.isRequired,
    nameEng: PropTypes.string,
    role: PropTypes.string,
    sns: PropTypes.arrayOf(
        PropTypes.shape({
            platform: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ),
    eMail: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
};


