// Footer.jsx
// 수정 금지. fix 된 형태
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FONT_STACK =
  "Pretendard, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR', Arial, sans-serif";

const FooterWrap = styled.footer`
  width: 100vw;
  background: #0E0E0E;
  border-top: 1px #A1A1A1 solid;
  @media (max-width: 640px) {
    min-width: 0;
    left: 0;
    right: 0;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  padding-left: ${(p) => p.$sidePadding}px;
  padding-right: ${(p) => p.$sidePadding}px;
  padding-top: 52px;
  padding-bottom: 52px;
  max-width: ${(p) => `calc(${p.$maxWidth}px + ${p.$sidePadding * 2}px)`};
  position: relative;
  box-sizing: border-box;
  @media (max-width: 640px) {
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 24px;
    padding-bottom: 24px;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const TitleBox = styled.div`
  font-family: ${FONT_STACK};
  font-size: 24px;
  font-weight: 700;
  color: #FAFAFA;
  margin-bottom: 36px;
  @media (max-width: 640px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
    @media (max-width: 393px) {
    font-size: 12px;
  }
`;

const NavRow = styled.nav`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  align-items: center;
  color: #F0F0F0;
  font-family: ${FONT_STACK};
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 36px;
  @media (max-width: 640px) {
    gap: 16px;
    font-size: 12px;
    margin-bottom: 16px;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-direction: column;
  }
  @media (max-width: 393px) {
    font-size: 10px;
  }
`;

const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  opacity: 0.95;
`;

const CopyWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #909090;
  font-family: ${FONT_STACK};
  font-size: 14px;
  font-weight: 300;
  max-width: 475px;
  @media (max-width: 640px) {
    font-size: 10px;
    max-width: 100vw;
    gap: 4px;
    align-items: center;
  }
  @media (max-width: 393px) {
    font-size: 8px;
  }
`;

const SocialWrap = styled.div`
  position: absolute;
  right: ${(p) => p.$sidePadding}px;
  top: 164px; /* 52 + 112 */
  display: flex;
  gap: 20px;
  @media (max-width: 640px) {
    position: static;
    right: 0;
    top: auto;
    gap: 10px;
    margin-top: 12px;
  }
`;

const IconBtn = styled.a`
  width: 48px;
  height: 48px;
  background: #151515;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  outline: none;
  @media (max-width: 640px) {
    width: 32px;
    height: 32px;
  }
  @media (max-width: 393px) {
    width: 24px;
    height: 24px;
  }
`;

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
  return (
    <FooterWrap role="contentinfo">
      <Container $sidePadding={sidePadding} $maxWidth={maxWidth}>
        {/* 좌측 타이틀 */}
        <TitleBox>{title}</TitleBox>

        {/* 네비게이션 링크 */}
        <NavRow aria-label="푸터 메뉴">
          {nav.map((it) => {
            const href = it.href || '#';
            const isExternal = /^https?:\/\//i.test(href);
            const base = import.meta.env.BASE_URL || '/';
            let to = href;
            if (!isExternal) {
              if (href === base) to = '/';
              else if (base !== '/' && href.startsWith(base)) to = '/' + href.slice(base.length).replace(/^\/+/, '');
            }
            return isExternal ? (
              <NavLink key={it.label} href={href}>
                {it.label}
              </NavLink>
            ) : (
              <NavLink as={Link} key={it.label} to={to}>
                {it.label}
              </NavLink>
            );
          })}
        </NavRow>

        {/* 저작권 */}
        <CopyWrap>
          {copyright.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </CopyWrap>

        {/* 소셜 아이콘 */}
        <SocialWrap $sidePadding={sidePadding}>
          {/* YouTube */}
          {social?.youtube?.href && (
            <IconBtn
              href={social.youtube.href}
              aria-label={social.youtube.label || 'YouTube'}
              target="_blank"
              rel="noreferrer noopener"
            >
              {/* 단색(white) 심볼 */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden>
                <path d="M23.5 7.2a4 4 0 0 0-2.8-2.8C18.8 4 12 4 12 4s-6.8 0-8.7.4A4 4 0 0 0 .5 7.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 4.8 4 4 0 0 0 2.8 2.8C5.2 20 12 20 12 20s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-4.8zM9.6 15.2V8.8L15.8 12l-6.2 3.2z" />
              </svg>
            </IconBtn>
          )}

          {/* Instagram */}
          {social?.instagram?.href && (
            <IconBtn
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
            </IconBtn>
          )}
        </SocialWrap>
      </Container>
    </FooterWrap>
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
