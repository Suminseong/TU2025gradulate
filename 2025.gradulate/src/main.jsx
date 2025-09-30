// // App.jsx
// import React, { useMemo, useState } from 'react';
// import { BrowserRouter, Routes, Route, NavLink, Outlet, useLocation, useNavigationType } from 'react-router-dom';

// // 전역 컴포넌트
// import NavHeader, { NAV_HEADER_MODES } from '../src/jsx/molecule/NavHeader';
// import Footer from '../src/jsx/molecule/Footer';

// // 페이지
// import Credit from '../src/jsx/pages/Credits';
// import Peoples from '../src/jsx/pages/Peoples';
// import Guestbook from '../src/jsx/pages/Guestbook';

// // -------- 유틸: 라우트 변경 시 스크롤/포커스 처리 --------
// function ScrollAndFocusRestore() {
//   const location = useLocation();
//   const navType = useNavigationType(); // POP, PUSH, REPLACE

//   React.useEffect(() => {
//     // 뒤로가기(POP)는 브라우저 기본 동작을 존중하고, 그 외는 상단으로
//     if (navType !== 'POP') window.scrollTo({ top: 0, behavior: 'instant' });
//     // 메인 영역으로 포커스 이동(접근성)
//     const el = document.getElementById('main');
//     if (el) el.focus({ preventScroll: true });
//   }, [location, navType]);

//   return null;
// }

// // -------- 레이아웃(전역 헤더/푸터, 본문 아웃렛) --------
// function Layout({ headerMode, setHeaderMode }) {
//   // 네비 항목
//   const NAV_ITEMS = useMemo(
//     () => [
//       { key: 'projects', label: 'PROJECTS', href: '/projects' },
//       { key: 'peoples',  label: 'PEOPLES',  href: '/peoples'  },
//       { key: 'showroom', label: 'SHOWROOM', href: '/showroom' },
//       { key: 'guestbook',label: 'GUESTBOOK',href: '/guestbook'},
//       { key: 'credits',  label: 'CREDITS',  href: '/credits'  },
//     ],
//     []
//   );

//   // 현재 경로로 activeKey 계산 (단순 매핑)
//   const location = useLocation();
//   const activeKey = useMemo(() => {
//     const p = location.pathname.replace(/^\/+/, '');
//     if (!p) return undefined;
//     const head = p.split('/')[0];
//     return ['projects','peoples','showroom','guestbook','credits'].includes(head) ? head : undefined;
//   }, [location.pathname]);

//   return (
//     <>
//       <NavHeader
//         items={NAV_ITEMS}
//         activeKey={activeKey}
//         mode={headerMode}         // 외부 제어 모드
//         autoOnScroll={headerMode === NAV_HEADER_MODES.GRADIENT} // gradient일 때만 스크롤 전환
//         scrollThreshold={8}
//         sticky
//         maxWidth={1280}
//         onModeChange={setHeaderMode}
//       />

//       {/* 본문: 키보드 포커스 목적의 main */}
//       <main id="main" tabIndex={-1} style={{ outline: 'none' }}>
//         <Outlet />
//       </main>

//       <Footer
//         title="잔향 : 기억의 향기"
//         nav={[
//           { label: 'PROJECTS', href: '/projects' },
//           { label: 'PEOPLES', href: '/peoples' },
//           { label: 'SHOWROOM', href: '/showroom' },
//           { label: 'GUESTBOOK', href: '/guestbook' },
//           { label: 'CREDITS', href: '/credits' },
//         ]}
//         copyright={[
//           'ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.',
//           'TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION',
//         ]}
//         social={{
//           youtube: { href: 'https://youtube.com/', label: 'YouTube' },
//           instagram:{ href: 'https://instagram.com/', label: 'Instagram' },
//         }}
//         sidePadding={350}
//         maxWidth={1220}
//       />
//     </>
//   );
// }

// // -------- 라우트용 페이지 플레이스홀더(간단) --------
// function PageShell({ title }) {
//   return (
//     <div style={{ minHeight: '60vh', padding: '80px 350px' }}>
//       <h1 style={{ margin: 0, fontFamily: 'Pretendard, system-ui', fontWeight: 700, fontSize: 32 }}>{title}</h1>
//       <p style={{ marginTop: 16, color: '#555', fontFamily: 'Pretendard, system-ui' }}>
//         이 페이지는 플레이스홀더입니다.
//       </p>
//       <div style={{ marginTop: 24 }}>
//         <NavLink to="/credits">크레딧 페이지 보기 →</NavLink>
//       </div>
//     </div>
//   );
// }

// // -------- 루트(App) --------
// export default function App() {
//   // 헤더 배경 모드 전역 상태
//   const [headerMode, setHeaderMode] = useState(NAV_HEADER_MODES.GRADIENT);

//   // -------- 라우트 진입/이탈 시 헤더 모드 제어 래퍼 --------
// function CreditsWithHeaderMode({ setHeaderMode }) {
//   // 진입 시 gradient로(스크롤 반응), 이탈 시 원복할 필요는 없음(다음 라우트가 자체 제어)
//   React.useEffect(() => {
//     setHeaderMode(NAV_HEADER_MODES.GRADIENT);
//   }, [setHeaderMode]);

//   return <Credit />;
// }

// // -------- 라우트 진입/이탈 시 헤더 모드 제어 래퍼 --------
// function PeoplesWithHeaderMode({ setHeaderMode }) {
//   // 진입 시 gradient로(스크롤 반응), 이탈 시 원복할 필요는 없음(다음 라우트가 자체 제어)
//   React.useEffect(() => {
//     setHeaderMode(NAV_HEADER_MODES.GRADIENT);
//   }, [setHeaderMode]);

//   return <Peoples />;
// }

// function GuestbookWithHeaderMode({ setHeaderMode }) {
//   React.useEffect(() => {
//     setHeaderMode(NAV_HEADER_MODES.GRADIENT);
//   }, [setHeaderMode]);

//   return <Guestbook />;
// }


//   return (
//     <BrowserRouter>
//       <ScrollAndFocusRestore />
//       <Routes>
//         {/* 공통 레이아웃 */}
//         <Route element={<Layout headerMode={headerMode} setHeaderMode={setHeaderMode} />}>
//           {/* 개별 페이지 — 필요 시 라우트 진입 시 헤더 모드를 고정하고 싶다면, 각 컴포넌트에서 setHeaderMode 호출 */}
//           <Route index element={<PageShell title="HOME" />} />

//           <Route path="projects" element={<PageShell title="PROJECTS" />} />
//           {/* peoples 페이지 : 스크롤 상단에서는 그라데이션 유지 */}
//           <Route
//             path="peoples"
//             element={
//               <PeoplesWithHeaderMode
//                 setHeaderMode={setHeaderMode}
//               />
//             }
//           />
//           <Route path="showroom" element={<PageShell title="SHOWROOM" />} />
//           <Route path="guestbook" element={<GuestbookWithHeaderMode setHeaderMode={setHeaderMode} />} />

//           {/* 크레딧 페이지: 스크롤 상단에서는 그라데이션 유지 */}
//           <Route
//             path="credits"
//             element={
//               <CreditsWithHeaderMode
//                 setHeaderMode={setHeaderMode}
//               />
//             }
//           />

//           {/* 404 */}
//           <Route path="*" element={<PageShell title="404 NOT FOUND" />} />
//         </Route>
//       </Routes>
//       \
      
//     </BrowserRouter>
//   );
// }


// // If this file is used as the entry, mount the app into #root so index.html shows something.
// import { createRoot } from 'react-dom/client';

// const _rootElement = typeof document !== 'undefined' ? document.getElementById('root') : null;
// if (_rootElement) {
//   createRoot(_rootElement).render(<App />);
// }

// // If this file is used as the entry (index.html -> ./src/Main.jsx), mount the app.
// import { createRoot } from 'react-dom/client';

// const _rootEl = typeof document !== 'undefined' ? document.getElementById('root') : null;
// if (_rootEl) {
//   createRoot(_rootEl).render(<App />);
// }
