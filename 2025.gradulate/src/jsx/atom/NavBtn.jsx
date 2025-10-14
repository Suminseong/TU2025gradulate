// NavBtn.jsx (styled-components, v6-safe)
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * 단일 네비게이션 버튼
 * - 텍스트 컬러는 부모로부터 상속(inherit)
 * - active 시 굵게(700), aria-current="page"
 */
const Base = styled.a`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 16px;
  line-height: 19.2px;
  letter-spacing: 0.24px;
  font-weight: ${(p) => (p.$active ? 700 : 400)};
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 0;
  cursor: pointer;
  outline: none;
  transition: opacity 120ms ease;
`;

export default function NavBtn({
  label,
  href = '#',
  active = false,
  onClick,
  style,
  target,
  rel,
}) {
  // 내부 라우터 링크 판별 및 변환
  const base = import.meta.env.BASE_URL || '/';
  const isExternal = /^https?:\/\//i.test(href) || href?.startsWith('mailto:') || href?.startsWith('tel:');
  let to = undefined;
  let isInternal = false;
  if (!isExternal && href) {
    if (base !== '/' && href.startsWith(base)) {
      const rest = href.slice(base.length);
      to = '/' + rest.replace(/^\/+/, '');
      isInternal = true;
    } else if (href.startsWith('/')) {
      // base가 '/'인 dev 환경 등
      to = href;
      isInternal = true;
    }
    if (href === base) {
      to = '/';
      isInternal = true;
    }
  }

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
    onClick,
    style,
    $active: active,
  };

  return isInternal ? (
    <Base as={Link} to={to} {...commonProps}>
      {label}
    </Base>
  ) : href ? (
    <Base href={href} target={target} rel={rel} {...commonProps}>
      {label}
    </Base>
  ) : (
    <Base as="button" type="button" {...commonProps} style={{ background: 'none', border: 0, ...style }}>
      {label}
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
