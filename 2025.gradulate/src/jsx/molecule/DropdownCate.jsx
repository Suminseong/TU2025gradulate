// DropdownCate.jsx
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CateDropdownMenu from '../atom/CateDropdownMenu';
import DropdownBtn from '../atom/DropdownBtn';

const Root = styled.div`
    position: relative;
    // 안에 들어가는 요소들 왼쪽 정렬
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;


export default function DropdownCate({
    label,
    options,
    onSelect,
    style,
    mode
}) {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef(null);

    const handleButtonClick = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSelect = (option) => {
        if (onSelect) {
            onSelect(option);
        }
        setIsOpen(false);
    };

    return (
        <Root ref={dropdownRef} style={style}>
            <div onClick={handleButtonClick}>
                <DropdownBtn label={label} mode={mode} />
            </div>
                <CateDropdownMenu
                    options={options}
                    onSelect={handleSelect}
                    isOpen={isOpen}
                    selected={label}
                />
        </Root>
    );
}

DropdownCate.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelect: PropTypes.func.isRequired,
    style: PropTypes.object,
    mode: PropTypes.string
};

DropdownCate.defaultProps = {
    style: {},
    mode: 'category'
};