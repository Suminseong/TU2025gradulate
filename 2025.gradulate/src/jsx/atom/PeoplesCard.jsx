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
        flexDirection: 'row',
        padding: 0,
        cursor: 'pointer',
        width: '445px',
        height: '393px',
        borderRadius: '16px',
        overflow: 'hidden',
    };

    const cardImageContainerStyle = {
        // 이미지 컨테이너
        position: 'relative',
        width: '55%',
        height: '100%',
        flex: '0 0 auto',
    };

    const cardImageStyle = {
        // 프로필 이미지 수치
        display: 'flex',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        flex: '0 0 auto',
        zIndex: 1,
        border: 'none',
        margin: 0,
        padding: 0,
    };

    const cardGradientStyle = {
        // 이미지 위 그라데이션 오버레이
        position: 'absolute',
        height: '100%',
        top: 0,
        right: 0,
        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(240, 240, 240, 1) 100%)',
        zIndex: 2,
        width: '20%',
    };

    const cardContentStyle = {
        // 프로필 콘텐츠
        width: '45%',
        padding: '16px',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        zIndex: 2,
        fontSize: '13px',
        fontWeight: '400',
        // 백그라운드 컬러 : 그라데이션 왼쪽부터 0% FFF(0%) ~ 14% F0F0F0(100%) ~ 100% F0F0F0(100%)
        background: 'rgba(240, 240, 240, 1)',
        right: 0,
        // 마진 : 왼쪽 41px, 상하 50px
        padding: '50px 0 50px 15px',
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
    };

    return (
    <div style={{...cardStyle}}>
        <div style={{...cardImageContainerStyle}}>
            <img src={imgSrc} alt={imgAlt} style={{...cardImageStyle}}/>
            <div style={{...cardGradientStyle}}></div>
        </div>
        <div style={{...cardContentStyle}}>
            <div style={{...contentTextStyle, top: '50px'}}>
                <h1 style={{fontSize: '28px', fontWeight: '700', margin: '0'}}>{nameKor}</h1>
                <p style={{margin: '0'}}>{nameEng}</p>
            </div>
            <div style={{...contentTextStyle}}>
                <p style={{margin: '0'}}>{role}</p>
                <p style={{margin: '0'}}>{eMail ? (<a style={{textDecoration: 'none', color: 'inherit'}} href={`mailto:${eMail}`}>{eMail}</a>) : null}</p> {/* GPT: 이메일 클릭 및 null 가드 */}
                <p style={{margin: '0'}}>{sns.linkedin}</p>
            </div>
        </div>
    </div>
)

}

// GPT: 기본값으로 sns를 빈 배열로 지정해 안전성 강화
PeoplesCard.defaultProps = {
    sns: [],
};

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
