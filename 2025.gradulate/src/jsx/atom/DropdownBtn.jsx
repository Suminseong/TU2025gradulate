// DropdownBtn.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * 드롭다운 버튼 컴포넌트
**/

export default function DropdownBtn({
    label,
    options,
    onSelect,
    style,
    filter
}) {

    const dropdownWrapperStyle = {
        display: 'flex',
        width: '120px',
        height: '40px',
        flexDirection: 'row',
        justifyContetn: 'flex-end',
        alignItems: 'center',

    }

    const dropdownIconStyle = {
        display: 'flex',
        width: '24px',
        height: '24px',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '4px',
    }

    const dropdownTextStyle = {
        width: 'auto',
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        fontSize: '20px',
        fontWeight: '400',
        color: '#191919'
    }

    return (
        
    )
}

