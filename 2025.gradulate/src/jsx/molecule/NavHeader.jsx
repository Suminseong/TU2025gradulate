// NavHeader.jsx
import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import NavBtn from '../atom/NavBtn';

/**
 * 네비게이션 헤더
 * - mode: 'gradient' | 'light' | 'dark'
 * - autoOnScroll: true면 스크롤>threshold에서 light로 전환, 최상단은 gradient 유지
 * - items: [{ key, label, href }]
 * - activeKey: 활성 메뉴 키
 */
export const NAV_HEADER_MODES = Object.freeze({
  GRADIENT: 'gradient',
  LIGHT: 'light',
  DARK: 'dark',
});

export default function NavHeader({
  items = [],
  activeKey,
  mode: controlledMode,        // 외부 제어 모드
  onModeChange,                // 모드 변경 콜백(선택)
  autoOnScroll = false,        // 스크롤 자동 전환
  scrollThreshold = 8,         // 몇 px부터 전환할지
  sticky = true,               // sticky 헤더
  maxWidth,                    // 내부 컨테이너 최대폭(선택)
}) {
  // 내부 상태(비제어) — 외부에서 mode 넘기면 그 값을 우선 사용
  const [uncontrolledMode, setUncontrolledMode] = useState(NAV_HEADER_MODES.GRADIENT);
  const isControlled = typeof controlledMode === 'string';
  const mode = isControlled ? controlledMode : uncontrolledMode;

  // 배경/글자색 계산
  const { background, textColor, boxShadow } = useMemo(() => {
    switch (mode) {
      case NAV_HEADER_MODES.LIGHT:
        return {
          // background: '#FFFFFF',
          // textColor: '#000000',
          // boxShadow: '0 1px 0 rgba(0,0,0,0.06)', // 살짝 구분선

          background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0) 100%)',
          textColor: '#000000',
        };
      case NAV_HEADER_MODES.DARK:
        return {
          // background: '#121212',
          // textColor: '#FFFFFF',
          // boxShadow: '0 1px 0 rgba(255,255,255,0.06)',

          background: '#121212',
          textColor: '#FFFFFF',
        };
      case NAV_HEADER_MODES.GRADIENT:
      default:
        return {
          background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
          textColor: '#000000',
          boxShadow: 'none',
        };
    }
  }, [mode]);

  // 스크롤 자동 전환(선택)
  useEffect(() => {
    if (!autoOnScroll) return;

    const handler = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      const nextMode = y > scrollThreshold ? NAV_HEADER_MODES.LIGHT : NAV_HEADER_MODES.GRADIENT;

      if (!isControlled) {
        setUncontrolledMode(nextMode);
      }
      if (onModeChange) {
        onModeChange(nextMode);
      }
    };

    handler(); // 초기 1회
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [autoOnScroll, isControlled, onModeChange, scrollThreshold]);

  // 레이아웃 스타일(시안 수치 반영)
  const wrapperStyle = {
    position: sticky ? 'sticky' : 'relative',
    top: 0,
    width: '100%',
    zIndex: 1000,
    // 배경 전환 부드럽게
    transition: 'background 180ms ease, box-shadow 180ms ease, color 180ms ease',
    background,
    color: textColor,
    boxShadow,
    // 그라데이션이 투명해도 안의 영역 클릭 보장
    // (gradient일 때는 투명 하단까지 영역을 충분히 둠)
  };

  const innerStyle = {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 18,
    paddingBottom: 18,
    display: 'flex',
    flexDirection: 'column',
    gap: 13,
    margin: '0',
    maxWidth: maxWidth || 'none',
  };

  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 60,
    width: '100%',
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 30,
  };

  // 로고(빨간 네모)
  const logoBoxStyle = {
    width: 49.48,
    height: 44,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const logoOuter = {
    width: 38.33,
    height: 32,
    position: 'relative',
    // overflow: 'hidden',Z
  };

  const isDarkMode = mode === NAV_HEADER_MODES.DARK;
  const logoSrc = isDarkMode ? '../public/icons/logoLight.svg' : '../public/icons/logoDark.svg';
  const logoAlt = isDarkMode ? 'LogoLight' : 'LogoDark';

  return (
    <header style={wrapperStyle} role="banner">
      <div style={innerStyle}>
        <div style={rowStyle}>
          {/* Logo */}
          <a
            href="/"
            aria-label="홈으로"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <div style={logoBoxStyle} aria-hidden>
              <div style={logoOuter}>
                <img src={logoSrc} alt={logoAlt} />
              </div>
            </div>
          </a>

          {/* Nav */}
          <nav aria-label="주 메뉴" style={navStyle}>
            {items.map((item) => (
              <NavBtn
                key={item.key}
                label={item.label}
                href={item.href}
                active={item.key === activeKey}
              />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

NavHeader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ),
  activeKey: PropTypes.string,
  mode: PropTypes.oneOf([
    NAV_HEADER_MODES.GRADIENT,
    NAV_HEADER_MODES.LIGHT,
    NAV_HEADER_MODES.DARK,
  ]),
  onModeChange: PropTypes.func,
  autoOnScroll: PropTypes.bool,
  scrollThreshold: PropTypes.number,
  sticky: PropTypes.bool,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
