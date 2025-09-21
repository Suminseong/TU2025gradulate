//Peoples.jsx
//졸업생 페이지
import React from 'react';
import Footer from '../molecule/Footer';
import PeoplesCard from '../atom/PeoplesCard';

const PAGE_SIDE = 40;

function PageContainer({ children }) {
  return (
    <div style={{ position: 'relative', background: '#fff' }}>
      <div style={{ 
        paddingLeft: PAGE_SIDE, 
        paddingRight: PAGE_SIDE, 
        display: 'flex', 
        flexDirection: 'column', 
        }}>
          {children}
      </div>
    </div>
  );
}

function PeoplesList(){
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '100px',
            marginBottom: '120px',
            rowGap: '32px',
            columnGap: '20px',
            width: '100%',
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
                  imgSrc="../public/김예준.jpg"
                />
              ))}
        </div>

)};

export default function Peoples() {
    return (
    <div style={{ position: 'relative' }}>
      {/* 상단 전역 네비가 있다면 여기 삽입 */}

      {/* <PageContainer>
        <IntroNote text={introText} />
      </PageContainer> */}

        <PageContainer>
          <PeoplesList /> 
        </PageContainer>

      <Footer />
    </div>
  );
}
