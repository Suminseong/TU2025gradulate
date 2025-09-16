// Footer.jsx
import React from 'react';
import PropTypes from 'prop-types';

const FONT_STACK =
  "Pretendard, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR', Arial, sans-serif";

export default function Footer({
  title = '잔향 : 기억의 향기',
  nav = [
    { label: 'PROJECTS', href: '/projects' },
    { label: 'PEOPLES', href: '/peoples' },
    { label: 'SHOWROOM', href: '/showroom' },
    { label: 'GUESTBOOK', href: '/guestbook' },
    { label: 'CREDITS', href: '/credits' },
  ],
  copyright = [
    'ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.',
    'TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION',
  ],
  social = {
    youtube: { href: 'https://youtube.com', label: 'YouTube' },
    instagram: { href: 'https://instagram.com', label: 'Instagram' },
  },
  maxWidth = 1220,
  sidePadding = 350,
}) {
  const wrap = {
    width: '100%',
    background: '#0E0E0E',
    borderTop: '1px #A1A1A1 solid',
  };

  const container = {
    margin: '0 auto',
    paddingLeft: sidePadding,
    paddingRight: sidePadding,
    // 시안 여백
    paddingTop: 52,
    paddingBottom: 52,
    maxWidth: `calc(${maxWidth}px + ${sidePadding * 2}px)`,
    position: 'relative',
    boxSizing: 'border-box',
  };

  const titleStyle = {
    fontFamily: FONT_STACK,
    fontSize: 24,
    fontWeight: 700,
    color: '#FAFAFA',
    marginBottom: 36,
  };

  const navRow = {
    display: 'flex',
    gap: 60,
    flexWrap: 'wrap',
    alignItems: 'center',
    color: '#F0F0F0',
    fontFamily: FONT_STACK,
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 36,
  };

  const navLink = {
    color: 'inherit',
    textDecoration: 'none',
    opacity: 0.95,
  };

  const copyWrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    color: '#909090',
    fontFamily: FONT_STACK,
    fontSize: 14,
    fontWeight: 300,
    maxWidth: 475,
  };

  const socialWrap = {
    position: 'absolute',
    right: sidePadding,
    top: 52 + 112, // 타이틀(52top + 24px line-height 근사) 아래 선호 위치
    display: 'flex',
    gap: 20,
  };

  const iconBtn = {
    width: 48,
    height: 48,
    background: '#151515',
    borderRadius: 999,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    outline: 'none',
  };

  return (
    <footer style={wrap} role="contentinfo">
      <div style={container}>
        {/* 좌측 타이틀 */}
        <div style={titleStyle}>{title}</div>

        {/* 네비게이션 링크 */}
        <nav aria-label="푸터 메뉴" style={navRow}>
          {nav.map((it) => (
            <a key={it.label} href={it.href} style={navLink}>
              {it.label}
            </a>
          ))}
        </nav>

        {/* 저작권 */}
        <div style={copyWrap}>
          {copyright.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>

        {/* 소셜 아이콘 */}
        <div style={socialWrap}>
          {/* YouTube */}
          {social?.youtube?.href && (
            <a
              style={iconBtn}
              href={social.youtube.href}
              aria-label={social.youtube.label || 'YouTube'}
              target="_blank"
              rel="noreferrer noopener"
            >
              {/* 단색(white) 심볼 */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden>
                <path d="M23.5 7.2a4 4 0 0 0-2.8-2.8C18.8 4 12 4 12 4s-6.8 0-8.7.4A4 4 0 0 0 .5 7.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 4.8 4 4 0 0 0 2.8 2.8C5.2 20 12 20 12 20s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-4.8zM9.6 15.2V8.8L15.8 12l-6.2 3.2z" />
              </svg>
            </a>
          )}

          {/* Instagram */}
          {social?.instagram?.href && (
            <a
              style={iconBtn}
              href={social.instagram.href}
              aria-label={social.instagram.label || 'Instagram'}
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden>
                <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z" />
                <circle cx="17.5" cy="6.5" r="1.2" />
                <path d="M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  title: PropTypes.string,
  nav: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string.isRequired, href: PropTypes.string.isRequired })
  ),
  copyright: PropTypes.arrayOf(PropTypes.string),
  social: PropTypes.shape({
    youtube: PropTypes.shape({ href: PropTypes.string, label: PropTypes.string }),
    instagram: PropTypes.shape({ href: PropTypes.string, label: PropTypes.string }),
  }),
  maxWidth: PropTypes.number,
  sidePadding: PropTypes.number,
};
