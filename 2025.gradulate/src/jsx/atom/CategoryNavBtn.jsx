// NavBtn.jsx
import PropTypes from 'prop-types';

/**
 * 카테고리 단일 네비게이션 버튼
 * - active 시 굵게(700), aria-current="page"
 */
export default function NavBtn({
    label,
    href = '#',
    active = false,
    onClick,
    style,
    target,
    rel,
}) {
    const baseStyle = {
        // 시안 수치
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        fontSize: 24,
        lineHeight: '28.8px',
        letterSpacing: 0.24,
        fontWeight: active ? 700 : 400,
        color: active ? '#000' : '#bababa',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'nowrap',
        padding: 0,
        margin: 0,
        cursor: 'pointer',
        // 미세 인터랙션
        outline: 'none',
        transition: 'opacity 120ms ease',
    };

    const handleKeyDown = (e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onClick(e);
        }
    };

    // a 태그를 기본으로 사용하되 onClick-only도 허용
    const commonProps = {
        'aria-current': active ? 'page' : undefined,
        'data-active': active ? 'true' : 'false',
        style: { ...baseStyle, ...style },
        onKeyDown: handleKeyDown,
        onClick,
    };

    return href ? (
        <a href={href} target={target} rel={rel} {...commonProps}>
            {label}
        </a>
    ) : (
        <button type="button" {...commonProps} style={{ ...baseStyle, background: 'none', border: 0 }}>
            {label}
        </button>
    );
}

NavBtn.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object,
    target: PropTypes.string,
    rel: PropTypes.string,
};
