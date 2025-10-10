// NavHeader.jsx
import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const Wrapper = styled.header`
  position: ${(p) => (p.$sticky ? 'sticky' : 'relative')};
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background 180ms ease, box-shadow 180ms ease, color 180ms ease;
  background: ${(p) => p.$background};
  color: ${(p) => p.$textColor};
  box-shadow: ${(p) => p.$boxShadow || 'none'};
`;

const Inner = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 18px;
  padding-bottom: 18px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin: 0;
  max-width: ${(p) => (p.$maxWidth ? p.$maxWidth : 'none')};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 60px;
  width: 100%;
`;

const NavRow = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
`;

const LogoBox = styled.div`
  width: 49.48px;
  height: 44px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoOuter = styled.div`
  width: 38.33px;
  height: 32px;
  position: relative;
`;

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
          background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0) 100%)',
          textColor: '#000000',
        };
      case NAV_HEADER_MODES.DARK:
        return {
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

  const isDarkMode = mode === NAV_HEADER_MODES.DARK;
  const logoSrc = isDarkMode ? '../public/icons/logoLight.svg' : '../public/icons/logoDark.svg';
  const logoAlt = isDarkMode ? 'LogoLight' : 'LogoDark';

  return (
    <Wrapper role="banner" $sticky={sticky} $background={background} $textColor={textColor} $boxShadow={boxShadow}>
      <Inner $maxWidth={maxWidth}>
        <Row>
          {/* Logo */}
          <a href="/" aria-label="홈으로" style={{ color: 'inherit', textDecoration: 'none' }}>
            <LogoBox aria-hidden>
              <LogoOuter>
                <img src={logoSrc} alt={logoAlt} />
              </LogoOuter>
            </LogoBox>
          </a>

          {/* Nav */}
          <NavRow aria-label="주 메뉴">
            {items.map((item) => (
              <NavBtn key={item.key} label={item.label} href={item.href} active={item.key === activeKey} />
            ))}
          </NavRow>
        </Row>
      </Inner>
    </Wrapper>
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
