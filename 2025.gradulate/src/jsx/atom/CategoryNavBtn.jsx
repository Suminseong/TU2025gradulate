// CategoryNavBtn.jsx (styled-components, v6-safe)
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * 카테고리 단일 네비게이션 버튼
 * - active 시 굵게(700), aria-current="page"
 * - 미디어쿼리 적용 없음 (추후 추가 예정)
 */
const Base = styled.a`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 24px;
  line-height: 28.8px;
  letter-spacing: 0.24px;
  font-weight: ${(p) => (p.$active ? 700 : 400)};
  color: ${(p) => (p.$active ? '#000' : '#bababa')};
  text-decoration: none;
  display: inline-grid;
  position: relative;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
  transition: all 200ms ease;

  &:hover {
  font-weight: 700;
  color: #000;
  }
    &::after {
    content: attr(data-label);
    top: 0;
    height: 0;
    font-weight: 700;
    font-family: inherit;
    letter-spacing: 0.24px;
    white-space: nowrap;
    visibility: hidden;
    pointer-events: none;
    display: block;
    }
    & > .navbtn-text { grid-area: 1 / 1; }
    &:hover, &:focus {
        font-weight: 700;
    }

  @media (max-width: 1600px) {
    font-size: 20px;
    line-height: 24px;
    &::after {
        font-size: 20px;
        line-height: 24px;
    }
  }
`;

const LabelSpan = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export default function NavBtn({
    label,
    href = null,
    active = false,
    onClick,
    style,
    target,
    rel,
}) {
    const handleKeyDown = (e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onClick(e);
        }
    };

    const commonProps = {
        'aria-current': active ? 'page' : undefined,
        'data-active': active ? 'true' : 'false',
        onKeyDown: handleKeyDown,
        'data-label': label,
        onClick,
        style,          // 외부 style override 유지
        $active: active // DOM 누수 방지용 transient prop
    };

    // a 태그 기본, href 없으면 button으로 렌더링
    return href ? (
        <Base href={href} target={target} rel={rel} {...commonProps}>
            <LabelSpan className="navbtn-text">{label}</LabelSpan>
        </Base>
    ) : (
        <Base as="button" type="button" {...commonProps} style={{ background: 'none', border: 0, ...style }}>
            <LabelSpan className="navbtn-text">{label}</LabelSpan>
        </Base>
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
