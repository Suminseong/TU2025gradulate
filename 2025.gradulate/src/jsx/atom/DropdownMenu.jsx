// DropdownMenu.jsx
import React from 'react';
import PropsTypes from 'prop-types';

/**
 * 드롭다운 메뉴 컴포넌트
 */

export default function DropdownMenu({
    options,
    onSelect,
    style,
    isOpen,
    position
}) {

    const dropdownMenuStyle = {
        // display: isOpen ? 'flex' : 'none',
        // 기능 확정되면 위 부분 주석 해제
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: 'calc(100% + 8px)',
        right: 0,
        width: 'auto',
        minWidth: 'px',
        height: 'auto',
        // 패딩 좌우 25px, 상하 10px
        padding: '10px 25px',
        // 백그라운드 컬러 #FFF 80%
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        // 백그라운드 블러 강도 4px
        backdropFilter: 'blur(4px)',
        // 박스 쉐도우 #000 15% X:0, Y:0, 블러: 6px, 확산: 2px
        boxShadow: '0px 0px 6px 2px rgba(0, 0, 0, 0.15)',
        borderRadius: '16px',
        gap: '10px',
        zIndex: 10,


    }

    const dropdownItemStyle = {
        display: 'flex',
        width: '90px',
        height: '20px',
        margin: '0',
        padding: '0'
    }

    const itemTextStyle = {
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        fontSize: '16px',
        fontWeight: '500',
        color: '#191919',
        cursor: 'pointer',
        margin: '0',
        padding: '0'
    }

    // css 확인용, 기능 추가되면 위에 스타일에 논리 연산자로 결합예정
    const itemTextNoneSelectStyle = {
        color: '#bababa',
        fontWeight: '400'
    }

    return (
        <div style={{ ...dropdownMenuStyle}}>
            {/* {options.map((option, index) => (
                <div key={index} style={{ ...dropdownItemStyle }} onClick={() => onSelect(option)}>
                    <p style={{ ...itemTextStyle }}>{option}</p>
                </div>
            ))} */}
            {/* 기능 확정되면 위 부분 주석 해제 or 새로운 기능 추가 */}
            <div style={{ ...dropdownItemStyle }} onClick={() => onSelect('이름순')}>
                <p style={{ ...itemTextStyle }}>이름순</p>
            </div>
            <div style={{ ...dropdownItemStyle }} onClick={() => onSelect('좋아요순')}>
                <p style={{ ...itemTextStyle, ...itemTextNoneSelectStyle }}>좋아요순</p>
            </div>
            <div style={{ ...dropdownItemStyle }} onClick={() => onSelect('조회수순')}>
                <p style={{ ...itemTextStyle, ...itemTextNoneSelectStyle }}>조회수순</p>
            </div>
            <div style={{ ...dropdownItemStyle }} onClick={() => onSelect('팀작우선')}>
                <p style={{ ...itemTextStyle, ...itemTextNoneSelectStyle }}>팀작우선</p>
            </div>
            <div style={{ ...dropdownItemStyle }} onClick={() => onSelect('개인작우선')}>
                <p style={{ ...itemTextStyle, ...itemTextNoneSelectStyle }}>개인작우선</p>
            </div>
        </div>
    );
}