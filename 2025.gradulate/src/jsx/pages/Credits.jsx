//credits.jsx
//졸준 페이지// Credit.jsx
import React from 'react';
import Footer from '../molecule/Footer';

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

// 마이 띵킹
// 재사용할 일 없는 컴포넌트들이 너무 많은지라 그냥 파일 내에서 작성함
// (사실상 이 페이지 전용 컴포넌트들)

function HeroHeader() {
  return (
    <>
      {/* 상단 큰 타이틀 */}
      <div
        style={{
          position: 'relative',
          height: 120,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          fontFamily: FONT,
          fontSize: 40,
          fontWeight: 700,
          color: '#101010',
          lineHeight: '64px',
          marginTop: 80,
        }}
      >
        CREDITS
      </div>

      {/* 좌측 서브타이틀 */}
      <div
        style={{
          fontFamily: FONT,
          fontSize: 32,
          fontWeight: 600,
          lineHeight: '56px',
          color: '#000',
          marginTop: 18,
        }}
      >
        잔향 : 기억의 향기
      </div>
    </>
  );
}

function IntroNote({ text }) {
  return (
    <div
      style={{
        maxWidth: 374,
        fontFamily: FONT,
        fontSize: 16,
        fontWeight: 300,
        lineHeight: '25.6px',
        color: '#000',
        textAlign: 'justify',
        marginTop: 5,
      }}
    >
      {text}
    </div>
  );
}

function HeroCard({ children }) {
  return (
    <div
      style={{
        width: 806,
        height: 375,
        background: '#FFF4ED',
        marginTop: 24,
        marginLeft: PAGE_SIDE + 414, // 좌측 텍스트와 간격 맞추기(시안 비율에 준함)
        position: 'absolute',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 136,
          top: 140,
          fontFamily: FONT,
          fontSize: 82.64,
          fontWeight: 500,
          lineHeight: '92.55px',
          color: '#000',
        }}
      >
        {children}
      </div>
    </div>
  );
}

function ThreeSpeeches({ blocks }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 40,
        marginTop: 420, // 히어로 카드 아래로
        width: 1220,
      }}
    >
      {blocks.map((b) => (
        <div
          key={b.title}
          style={{
            width: 374,
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 28,
              fontWeight: 600,
              lineHeight: '49px',
              color: '#000',
            }}
          >
            {b.title}
          </div>
          <div
            style={{
              fontFamily: FONT,
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '21.6px',
              color: '#000',
              textAlign: 'justify',
            }}
          >
            {b.body}
          </div>
        </div>
      ))}
    </div>
  );
}

function CommitteeSection({ title, rows, last = false }) {
  return (
    <div
      style={{
        borderBottom: last ? 'none' : '1px #E0E0E0 solid',
        display: 'flex',
        gap: 20,
        paddingBottom: 10,
        marginTop: 20,
        alignItems: 'flex-start',
      }}
    >
      <div style={{ width: 289, height: 45, display: 'flex', alignItems: 'flex-end' }}>
        <div
          style={{
            fontFamily: FONT,
            fontSize: 20,
            fontWeight: 500,
            lineHeight: '22.4px',
            color: '#202020',
          }}
        >
          {title}
        </div>
      </div>

      <div style={{ width: 900, display: 'flex', flexDirection: 'column' }}>
        {rows.map((r, i) => (
          <CommitteeRow key={r.ko + r.en + i} ko={r.ko} en={r.en} divider={i === 0 && rows.length > 1} />
        ))}
      </div>
    </div>
  );
}

function CommitteeRow({ ko, en, divider = false }) {
  return (
    <div
      style={{
        paddingTop: 22,
        paddingBottom: 40,
        borderBottom: divider ? '1px #E0E0E0 solid' : 'none',
        display: 'flex',
        gap: 20,
        alignItems: 'flex-start',
      }}
    >
      <div style={{ width: 135 }}>
        <div
          style={{
            fontFamily: FONT,
            fontSize: 16,
            fontWeight: 300,
            lineHeight: '22.4px',
            color: '#202020',
          }}
        >
          {ko}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            fontFamily: FONT,
            fontSize: 16,
            fontWeight: 300,
            lineHeight: '22.4px',
            color: '#404040',
          }}
        >
          {en}
        </div>
      </div>
    </div>
  );
}

export default function Credit() {
  const introText =
    '안녕하세요. 제 20대 졸업준비위원회입니다. 그리고 이후에는 적당히 졸준위의 생각과 고생에 대한 감상을 종합해…';

  const speeches = [
    { title: '학부장의 말씀', body: '아아 잠시 학부장의 말이 있겠습니다…' },
    { title: '졸전담당교수 말씀', body: '아아 잠시 졸전 담당교수님의 말씀이 있겠습니다…' },
    { title: '웹사이트팀 제작 후기', body: '이제 자러 갑니다 이제 자러 갑니다…' },
  ];

  // 위원회 데이터(예시)
  const committee = [
    { title: '위원장', rows: [{ ko: '홍승재', en: 'Hong Seungjae' }] },
    {
      title: '부위원장',
      rows: [{ ko: '김예린', en: 'Kim Yerin' }],
    },
    {
      title: '총무',
      rows: [
        { ko: '진효민', en: 'Jin HYOMIN' },
        { ko: '정민호', en: 'Jeong Minho' },
      ],
    },
    {
      title: '기획',
      rows: [
        { ko: '차소이', en: 'Cha Soi' },
        { ko: '문나라', en: 'Mun Nara' },
        { ko: '한채원', en: 'Han Chaewon' },
      ],
    },
    {
      title: '홍보',
      rows: [
        { ko: '이채원', en: 'Lee Chaewon' },
        { ko: '남가림', en: 'Nam Garim' },
      ],
    },
    {
      title: '디자인',
      rows: [
        { ko: '구인회', en: 'Gu Inhoe' },
        { ko: '박혜성', en: 'Bak Hyeseong' },
        { ko: '석동현', en: 'Seok Donghyoen' },
      ],
    },
    {
      title: '웹사이트',
      rows: [
        { ko: '성수민', en: 'Seong Sumin' },
        { ko: '김예준', en: 'Kim Yejun' },
      ],
    },
    {
      title: 'Special Thanks',
      rows: [
        { ko: '김한종 교수', en: 'Prof. Kim Hanjong' },
        { ko: '고명현', en: 'Go MyeongHyeon' },
      ],
      last: true,
    },
  ];

  return (
    <div style={{ position: 'relative' }}>
      {/* 상단 전역 네비가 있다면 여기 삽입 */}

      <PageContainer>
        <HeroHeader />
        <IntroNote text={introText} />
      </PageContainer>

      <HeroCard>단체사진? 몰루?</HeroCard>

      <PageContainer>
        <ThreeSpeeches blocks={speeches} />

        {/* 위원회 표 */}
        <div style={{ marginTop: 60 }}>
          <div
            style={{
              fontFamily: FONT,
              fontSize: 28,
              fontWeight: 600,
              color: '#101010',
              marginBottom: 24,
            }}
          >
            2025 잔향<br />제 20대 졸업전시위원회
          </div>

          {committee.map((sec) => (
            <CommitteeSection
              key={sec.title}
              title={sec.title}
              rows={sec.rows}
              last={!!sec.last}
            />
          ))}
        </div>
      </PageContainer>

      <Footer />
    </div>
  );
}
