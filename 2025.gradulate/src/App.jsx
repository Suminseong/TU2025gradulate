// App.jsx
import React, { useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation, useNavigationType, Navigate } from 'react-router-dom';

// 전역 컴포넌트
import NavHeader, { NAV_HEADER_MODES } from './jsx/molecule/NavHeader';
import Footer from './jsx/molecule/Footer';
import CustomScrollbar from './jsx/atom/CustomScrollbar';

// 페이지
import Credit from './jsx/pages/Credits';
import Peoples from './jsx/pages/Peoples';
import Projects from './jsx/pages/Projects';
import MainPage from './jsx/pages/Main';
import Guestbook from './jsx/pages/Guestbook';
import Work from './jsx/pages/Work';
import Showroom from './jsx/pages/Showroom';

// -------- 유틸: 라우트 변경 시 스크롤/포커스 처리 --------
function ScrollAndFocusRestore() {
  const location = useLocation();
  React.useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const el = document.getElementById('main');
    if (el) el.focus({ preventScroll: true });
  }, [location]);
  return null;
}

// -------- 레이아웃(전역 헤더/푸터, 본문 아웃렛) --------
function Layout({ headerMode, setHeaderMode }) {
  // 네비 항목
  const NAV_ITEMS = useMemo(
    () => [
      { key: 'projects', label: 'PROJECTS', href: `${import.meta.env.BASE_URL}projects/` },
      { key: 'peoples', label: 'PEOPLES', href: `${import.meta.env.BASE_URL}peoples/` },
      { key: 'showroom', label: 'SHOWROOM', href: `${import.meta.env.BASE_URL}showroom/` },
      { key: 'guestbook', label: 'GUESTBOOK', href: `${import.meta.env.BASE_URL}guestbook/` },
      { key: 'credits', label: 'CREDITS', href: `${import.meta.env.BASE_URL}credits/` },
    ],
    []
  );

  // 현재 경로로 activeKey 계산 (단순 매핑)
  const location = useLocation();
  const activeKey = useMemo(() => {
    const p = location.pathname.replace(/^\/+/, '');
    if (!p) return undefined;
    const head = p.split('/')[0];
    return ['projects', 'peoples', 'showroom', 'guestbook', 'credits'].includes(head) ? head : undefined;
  }, [location.pathname]);

  const hideFooter = activeKey === 'showroom';

  return (
    <>
      <NavHeader
        items={NAV_ITEMS}
        activeKey={activeKey}
        mode={headerMode}         // 외부 제어 모드
        autoOnScroll={headerMode === NAV_HEADER_MODES.GRADIENT_DARK || headerMode === NAV_HEADER_MODES.DARK} // gradient일 때만 스크롤 전환
        scrollThreshold={8}
        sticky
        overlay={headerMode === NAV_HEADER_MODES.GRADIENT_DARK || headerMode === NAV_HEADER_MODES.DARK}
        maxWidth={1280}
        onModeChange={setHeaderMode}
      />

      {/* 본문: 키보드 포커스 목적의 main */}
      <main
        id="main"
        tabIndex={-1}
        style={{
          outline: 'none',
          width: '100vw',
          boxSizing: 'border-box',
          padding: 0,
        }}
      >
        <Outlet />
      </main>
      {!hideFooter && (
        <Footer
          title="잔향 : 기억의 향기"
          nav={[
            { label: 'PROJECTS', href: `${import.meta.env.BASE_URL}projects/` },
            { label: 'PEOPLES', href: `${import.meta.env.BASE_URL}peoples/` },
            { label: 'SHOWROOM', href: `${import.meta.env.BASE_URL}showroom/` },
            { label: 'GUESTBOOK', href: `${import.meta.env.BASE_URL}guestbook/` },
            { label: 'CREDITS', href: `${import.meta.env.BASE_URL}credits/` },
          ]}
          copyright={[
            'ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.',
            'TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION',
          ]}
          social={{
            youtube: { href: 'https://www.youtube.com/@tukgrad2025', label: 'YouTube' },
            instagram: { href: 'https://www.instagram.com/tukd_grad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
          }}
          sidePadding={350}
          maxWidth={1220}
        />
      )}

      {/* show custom scrollbar except on showroom */}
      {activeKey !== 'showroom' && <CustomScrollbar />}
    </>
  );
}


// -------- 라우트 진입/이탈 시 헤더 모드 제어 래퍼 --------
function CreditsWithHeaderMode({ setHeaderMode }) {
  React.useLayoutEffect(() => {
    setHeaderMode(NAV_HEADER_MODES.GRADIENT);
  }, [setHeaderMode]);
  return <Credit />;
}

function PeoplesWithHeaderMode({ setHeaderMode }) {
  React.useLayoutEffect(() => {
    setHeaderMode(NAV_HEADER_MODES.GRADIENT);
  }, [setHeaderMode]);
  return <Peoples />;
}

function ProjectsWithHeaderMode({ setHeaderMode }) {
  React.useLayoutEffect(() => {
    setHeaderMode(NAV_HEADER_MODES.GRADIENT);
  }, [setHeaderMode]);
  return <Projects />;
}

function MainWithHeaderMode({ setHeaderMode }) {
  React.useLayoutEffect(() => {
    setHeaderMode(NAV_HEADER_MODES.GRADIENT_DARK);
  }, [setHeaderMode]);
  return <MainPage />;
}

function GuestbookWithHeaderMode({ setHeaderMode }) {
  React.useLayoutEffect(() => {
    setHeaderMode(NAV_HEADER_MODES.DARK);
  }, [setHeaderMode]);
  return <Guestbook />;
}

function WorkWithHeaderMode({ setHeaderMode }) {
  React.useLayoutEffect(() => {
    setHeaderMode(NAV_HEADER_MODES.LIGHT);
  }, [setHeaderMode]);
  return <Work />;
}

function ShowroomWithHeaderMode({ setHeaderMode }) {
  React.useLayoutEffect(() => {
    setHeaderMode(NAV_HEADER_MODES.DARK);
  }, [setHeaderMode]);
  return <Showroom />;
}

// -------- 루트(App) --------
export default function App() {
  // 헤더 배경 모드 전역 상태
  const [headerMode, setHeaderMode] = useState(NAV_HEADER_MODES.GRADIENT);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollAndFocusRestore />
      <Routes>
        {/* 공통 레이아웃 */}
        <Route element={<Layout headerMode={headerMode} setHeaderMode={setHeaderMode} />}>
          {/* 개별 페이지 — 필요 시 라우트 진입 시 헤더 모드를 고정하고 싶다면, 각 컴포넌트에서 setHeaderMode 호출 */}
          <Route index element={<MainWithHeaderMode setHeaderMode={setHeaderMode} />} />

          <Route path="projects/" element={<ProjectsWithHeaderMode setHeaderMode={setHeaderMode} />} />
          <Route path="peoples/" element={<PeoplesWithHeaderMode setHeaderMode={setHeaderMode} />} />
          <Route path="guestbook/" element={<GuestbookWithHeaderMode setHeaderMode={setHeaderMode} />} />
          <Route path="work/:pid" element={<WorkWithHeaderMode setHeaderMode={setHeaderMode} />} />
          <Route path="credits/" element={<CreditsWithHeaderMode setHeaderMode={setHeaderMode} />} />
          <Route path="showroom/" element={<ShowroomWithHeaderMode setHeaderMode={setHeaderMode} />} />

          {/* 404: 알 수 없는 경로는 홈으로 리다이렉트 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// If this file is used as the entry, mount the app into #root so index.html shows something.
import { createRoot } from 'react-dom/client';

const _root = typeof document !== 'undefined' ? document.getElementById('root') : null;
if (_root) {
  createRoot(_root).render(<App />);
}
