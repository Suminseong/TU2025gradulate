// NavHeader.jsx
import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBtn from '../atom/NavBtn';
import { Link } from 'react-router-dom';
import HamburgerIcon from '../atom/HamburgerIcon';

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
  width: 100vw;
  z-index: 1000;
  transition: background 180ms ease, box-shadow 180ms ease, color 180ms ease;
  background: ${(p) => p.$background};
  color: ${(p) => p.$textColor};
  box-shadow: ${(p) => p.$boxShadow || 'none'};
  @media (max-width: 640px) {
    width: 100vw;
    min-width: 0;
    left: 0;
    right: 0;
  }
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
  @media (max-width: 640px) {
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
    gap: 6px;
    max-width: 100vw;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  @media (max-width: 640px) {
    gap: 8px;
  }
`;

// 데스크탑: 로고와 네비를 좌측에 묶어서 배치하기 위한 그룹
const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const NavRow = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 24px; */
  width: 510px;
  @media (max-width: 640px) {
    display: none;
  }
`;

const HamburgerBtn = styled.button`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    padding: 6px;
    margin-right: 2px;
    cursor: pointer;
    z-index: 1300;
  }
`;

const Overlay = styled.div`
  display: none;
  @media (max-width: 640px) {
    display: ${(p) => (p.$open ? 'flex' : 'none')};
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 1200;
    background: linear-gradient(180deg, #121212 0%, rgba(18,18,18,0.7) 60%, rgba(18,18,18,0.2) 100%);
    backdrop-filter: blur(12px);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 48px;
    animation: fadeIn 0.2s;
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const OverlayMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-top: 12px;
`;

const OverlayNavBtn = styled(NavBtn)`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.26px;
`;

const LogoBox = styled.div`
  width: 49.48px;
  height: 44px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1300;
  @media (max-width: 640px) {
    width: 32px;
    height: 28px;
  }
`;

const LogoOuter = styled.div`
  width: 38.33px;
  height: 32px;
  position: relative;
  @media (max-width: 640px) {
    width: 28px;
    height: 24px;  
 }
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
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
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
  const logoSrc = isDarkMode
    ? `${import.meta.env.BASE_URL}icons/logoLight.svg`
    : `${import.meta.env.BASE_URL}icons/logoDark.svg`;
  const logoAlt = isDarkMode ? 'LogoLight' : 'LogoDark';

  // 모바일 메뉴에서 쇼룸 제외
  const mobileMenu = items.filter((item) => item.label !== 'SHOWROOM');

  // 모바일 오버레이 열림 시 스크롤 방지
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileNavOpen]);

  return (
    <Wrapper role="banner" $sticky={sticky} $background={background} $textColor={textColor} $boxShadow={boxShadow}>
      <Inner $maxWidth={maxWidth}>
        <Row>
          <LeftGroup>
            {/* Logo */}
            <Link to="/" aria-label="홈으로" style={{ color: 'inherit', textDecoration: 'none' }}>
              <LogoBox aria-hidden>
                <LogoOuter>
                  <div style={{ backgroundImage: `url(${logoSrc})`, width: '100%', height: '100%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
                </LogoOuter>
              </LogoBox>
            </Link>

            {/* 데스크탑 Nav */}
            <NavRow aria-label="주 메뉴">
              {items.map((item) => (
                <NavBtn key={item.key} label={item.label} href={item.href} active={item.key === activeKey} />
              ))}
            </NavRow>
          </LeftGroup>

          {/* 모바일 햄버거 버튼 */}
          <HamburgerBtn
            aria-label={mobileNavOpen ? '메뉴 닫기' : '메뉴 열기'}
            onClick={() => setMobileNavOpen((v) => !v)}
          >
            <HamburgerIcon
              size={24}
              color={mode === NAV_HEADER_MODES.DARK ? '#fff' : '#000'}
            />
          </HamburgerBtn>
        </Row>
      </Inner>
      {/* 모바일 오버레이 메뉴 */}
      <Overlay $open={mobileNavOpen} onClick={() => setMobileNavOpen(false)}>
        <OverlayMenu onClick={e => e.stopPropagation()}>
          {mobileMenu.map((item) => (
            <OverlayNavBtn
              key={item.key}
              label={item.label}
              href={item.href}
              active={item.key === activeKey}
              style={{ fontSize: 18, fontWeight: 500, color: '#fff', textAlign: 'center' }}
              onClick={() => setMobileNavOpen(false)}
            />
          ))}
        </OverlayMenu>
      </Overlay>
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
