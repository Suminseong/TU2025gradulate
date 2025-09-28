// PeoplesCard.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * 인물 카드 컴포넌트
 * 토글 버튼 qhd로 볼때 이상함 고쳐야할듯
 * 아니다 그냥 이상함 고쳐야함
 */

export default function ToggleBtn({
    path = 'student',
    isActive = false,
    onClick,
}) {
    const toggleContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: '120px',
        height: '40px',
        borderRadius: '20px',
        backgroundColor: '#F0F0F0',
        cursor: 'pointer',
        padding: '2px',
        position: 'relative',
    };

    const activeBtnStyle = {
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'left 0.3s ease-in-out',
        width: '56px',
        height: '36px',
        borderRadius: '18px',
        backgroundColor: '#0e0e0e',
        zIndex: 1,
        left: isActive ? '4px' : '64px',

    };

    const textStyle = {
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        fontSize: '16px',
        fontWeight: '700',
        margin: '0',
        lineHeight: '24px',
        color: '#Fafafa',
        zIndex: '2',
        transition: 'left 0.3s ease-in-out',
    };

    return (
        <div style={{ ...toggleContainerStyle}} onClick={onClick}>
            <p style={{ ...textStyle, marginLeft: '16px', color: isActive ? '#Fafafa' : '#909090', fontWeight: isActive ? '700' : '400'}}>교수</p>
            <p style={{ ...textStyle, marginLeft: '32px', color: isActive ? '#909090' : '#Fafafa', fontWeight: isActive ? '400' : '700'}}>학생</p>
            <div style={{ ...activeBtnStyle }}></div>
        </div>
    );
}

ToggleBtn.propTypes = {
    path: PropTypes.oneOf(['student', 'professor']),
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
};
