// ProfProfile.jsx
import React from 'react';
import PropTypes from 'prop-types';

// 교수 프로필 카드
// atom으로 넣은 이유는 재사용성 때문
export default function ProfProfile({ nameKor, rank, eMail, education, field, imgSrc, imgAlt }) {
    const wrapperStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100vw',
        height: 'auto',
        marginTop: '100px',
    };

    const profileWrapperStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: '40px',
        width: 'auto',
        height: 'auto',
        marginTop: '20px'
    };

    const profileImageStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '240px',
        height: '332px',
        border: '1px solid #d0d0d0',
        objectFit: 'cover',
    };

    const profileTextWrapperStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: '0 20px',
        width: '983px',
        height: 'auto',
    };

    const profileNameKorStyle = {
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        fontSize: '28px',
        fontWeight: '600',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: 'auto',
        height: '32px',
        color: '#212121',
        // 마진 상단 0, 하단 12px
        margin: '0 0 12px 0',
    };

    const profileTextStyle = {
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        height: 'auto',
        padding: '22px 0 40px 0',
        margin: '0',
        borderTop: '1px solid #e0e0e0',
    };

    const profileTextBoldStyle = {
        fontWeight: '500',
        margin: '0',
        fontSize: '20px',
        lineHeight: '22.4px',
        color: '#606060',
        width: '135px',
    };

    const profileTextNomalWrapperStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: '0',
    };

    const profileTextNormalStyle = {
        fontWeight: '300',
        margin: '0',
        fontSize: '16px',
        lineHeight: '22.4px',
        color: '#000000'
    };

    return (
        <div style={{ ...wrapperStyle }}>
            <div style={{ ...profileWrapperStyle }}>
                <img src={imgSrc} alt={imgAlt} style={{ ...profileImageStyle }} />
                <div style={{ ...profileTextWrapperStyle }}>
                    <p style={{ ...profileNameKorStyle }}>{nameKor}</p>
                    <div style={{ ...profileTextStyle }}>
                        <p style={{ ...profileTextBoldStyle }}>직위(직급)</p>
                        <p style={{ ...profileTextNormalStyle }}>{rank}</p>
                    </div>
                    <div style={{ ...profileTextStyle }}>
                        <p style={{ ...profileTextBoldStyle }}>이메일</p>
                        <p style={{ ...profileTextNormalStyle }}>{eMail}</p>
                    </div>
                    <div style={{ ...profileTextStyle }}>
                        <p style={{ ...profileTextBoldStyle }}>학력</p>
                        <div style={{ ...profileTextNomalWrapperStyle }}>
                            <p style={{ ...profileTextNormalStyle }}>{education}</p>
                            <p style={{ ...profileTextNormalStyle }}>{education}</p>
                            <p style={{ ...profileTextNormalStyle }}>{education}</p>
                        </div>
                    </div>
                    <div style={{ ...profileTextStyle }}>
                        <p style={{ ...profileTextBoldStyle }}>전문 분야</p>
                        <div style={{ ...profileTextNomalWrapperStyle }}>
                            <p style={{ ...profileTextNormalStyle }}>{field}</p>
                            <p style={{ ...profileTextNormalStyle }}>{field}</p>
                            <p style={{ ...profileTextNormalStyle }}>{field}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProfProfile.propTypes = {
    nameKor: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    eMail: PropTypes.string.isRequired,
    education: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
};

ProfProfile.defaultProps = {
    nameKor: '홍길동',
    rank: '교수',
    eMail: 'honggildong@example.com',
    education: '서울대학교 컴퓨터공학과',
    field: '인공지능',
    imgSrc: 'https://via.placeholder.com/240x332.png?text=Profile+Image',
    imgAlt: '홍길동 교수의 프로필 이미지',
};
