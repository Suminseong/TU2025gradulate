// Dropdown.jsx
import React from 'react';
import PropTypes from 'prop-types';
import DropdownBtn from '../atom/DropdownBtn';
import DropdownMenu from '../atom/DropdownMenu';

/**
 * 드롭다운 컴포넌트
 */

export default function Dropdown({
    label,
    options,
    onSelect,
    style,
    filter
}) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [position, setPosition] = React.useState({ top: 0, left: 0 });
    const dropdownRef = React.useRef(null);
    
    const handleButtonClick = () => {
        if (dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect();
            setPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
        }
        setIsOpen((prev) => !prev);
    }

    const handleSelect = (option) => {
        if (onSelect) {
            onSelect(option);
        }
        setIsOpen(false);
    }

    return (
        <div ref={dropdownRef} style={{ position: 'relative', ...style }}>
            <div onClick={handleButtonClick}>
                <DropdownBtn label={label} options={options} onSelect={onSelect} style={{}} filter={filter} />
            </div>
            {isOpen && (
                <DropdownMenu
                    options={options}
                    onSelect={handleSelect}
                    style={{}}
                    isOpen={isOpen}
                    position={position}
                />
            )}
        </div>
    )
}

Dropdown.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelect: PropTypes.func.isRequired,
    style: PropTypes.object,
    filter: PropTypes.string
};

Dropdown.defaultProps = {
    style: {},
    filter: ''
};