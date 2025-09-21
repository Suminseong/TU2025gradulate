//Peoples.jsx
//졸업생 페이지
import React from 'react';
import Footer from '../molecule/Footer';
import PeoplesCard from '../atom/PeoplesCard';

// 공통 타이포/레이아웃 수치
const FONT = `'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif`;
const PAGE_SIDE = 350;

function PageContainer({ children }) {
  return (
    <div style={{ position: 'relative', background: '#fff' }}>
      <div style={{ paddingLeft: PAGE_SIDE, paddingRight: PAGE_SIDE }}>{children}</div>
    </div>
  );
}

function PoeplesList(){
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            justifyContent: 'flex-start',
            marginTop: '100px',
            marginBottom: '120px',
        }}>
           {/* peples card 컴포넌트를 임시로 30개 만들어서 넣음 */}
              {Array.from({ length: 30 }).map((_, index) => (
                <PeoplesCard
                  key={index}
                  nameKor="홍길동"
                  nameEng="HONG GILDONG"
                  role="DESIGNER"
                  sns={{ instagram: 'https://instagram.com', linkedin: 'https://linkedin.com' }}
                  eMail="hong.gil.dong@example.com"
                />
              ))}
        </div>

)};

return (
    <div style={{ position: 'relative' }}>
      {/* 상단 전역 네비가 있다면 여기 삽입 */}

      <PageContainer>
        <HeroHeader />
        <IntroNote text={introText} />
      </PageContainer>

      <PageContainer>
        <PoeplesList />
      </PageContainer>

      <Footer />
    </div>
  );