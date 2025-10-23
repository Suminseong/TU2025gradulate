//credits.jsx
//졸준 페이지// Credit.jsx

import React from 'react';
import styled from 'styled-components';

// 공통 타이포/레이아웃 수치
const FONT = `'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif`;

const PageOuter = styled.div`
  position: relative; background: #fff;
`;
const PageInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
function PageContainer({ children }) {
  return (
    <PageOuter>
      <PageInner>{children}</PageInner>
    </PageOuter>
  );
}

// 마이 띵킹
// 재사용할 일 없는 컴포넌트들이 너무 많은지라 그냥 파일 내에서 작성함
// (사실상 이 페이지 전용 컴포넌트들)

const HeaderBig = styled.div`
  position: relative; height: 52px; display: flex; align-items: flex-end; justify-content: center; line-height: 52px;
  font-family: ${FONT}; font-size: 40px; font-weight: 700; color: #101010; line-height: 64px; margin-top: 88px;
  @media (max-width: 640px) {
    height: 21px;
    line-height: 21px;
    margin-top: 4px;
    font-size: 18px;
  }
`;
const SubTitle = styled.div`
  font-family: ${FONT}; font-size: 32px; font-weight: 600; line-height: 56px; color: #000; margin-top: 72px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 1220px;
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 11px;
    margin-top: 24px;
    width: calc(100vw - 32px);
    margin-bottom: 8px;
  }
`;
function HeroHeader() {
  return (
    <>
      {/* 상단 큰 타이틀 */}
      <HeaderBig>CREDITS</HeaderBig>
      {/* 좌측 서브타이틀 */}
      <SubTitle>잔향 : 기억의 향기</SubTitle>
    </>
  );
}

const IntroNoteBox = styled.p`
  max-width: 374px;
  font-family: ${FONT};
  font-size: 16px;
  font-weight: 300;
  line-height: 140%;
  color: #000;
  text-align: justify;
  top: 0;
  margin: 0;
  @media (max-width: 640px) {
    font-size: 10px;
    max-width: calc(100vw - 32px);
    margin-top: 8px;
  }
`;

const IntroWrapBox = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  overflow: visible;
  padding-top: 20px;
    @media (max-width: 640px) {
    padding-top: 0px;
  }
`;

const IntroWrapBoxTopLine = styled.div`
  position: absolute;
  right: 0;
  top: 0px;
  width: 100vw;
  height: 1px;
  background-color: #E0E0E0;
  margin-bottom: 12px;
  z-index: 20;
    @media (max-width: 640px) {
      top: 0px;
  }
`;

const IntroWrapBoxTopLineVW = styled.div`
  position: absolute;
  right: 0;
  top: 89px;
  width: 100vw;
  height: 1px;
  background-color: #E0E0E0;
  margin-bottom: 12px;
  z-index: 20;
    @media (max-width: 640px) {
      top: 44px;
  }
`;

const IntroWrapBoxLeftLine = styled.div`
  position: absolute;
  left: -20px;
  top: 0;
  width: 1px;
  height: 100%;
  background-color: #E0E0E0;
  margin-right: 12px;
  z-index: 20;
    @media (max-width: 640px) {
      left: -8px;
  }
`;

const IntroWrapBoxLeftLineVH = styled.div`
  position: absolute;
  left: -20px;
  top: 0;
  width: 1px;
  height: 100vh;
  background-color: #E0E0E0;
  margin-right: 12px;
  z-index: 20;
  @media (max-width: 640px) {
    left: -8px;
    height: 200vh;
  }
`;

function IntroNote({ text }) {
  return (
    <IntroWrapBox>
      <IntroWrapBoxLeftLineVH />
      <IntroWrapBoxTopLine />
      <IntroNoteBox dangerouslySetInnerHTML={{ __html: text }} />
    </IntroWrapBox>
  );
}

const IntroWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 46px;
  overflow: visible;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`

const HeroCardWrap = styled.div`
  width: 800px; height: 450px; background: url('interviewThumb.png'); background-size:cover; position: relative; z-index: 30;
  @media (max-width: 640px) {
    width: 100vw;
    height: calc(100vw * 0.5625); /* 16:9 비율 유지 */
  }
`;
const HeroCardText = styled.div`
  position: absolute;
  left: 136px;
  top: 50%;
  transform: translateY(-50%);
  font-family: ${FONT};
  font-size: 82.64px;
  font-weight: 400;
  line-height: 92.55px;
  color: #000;
  @media (max-width: 640px) {
    font-size: 36px;
  }
`;
function HeroCard({ children }) {
  return (
    <HeroCardWrap>
      <HeroCardText>{children}</HeroCardText>
    </HeroCardWrap>
  );
}

const ThreeWrap = styled.div`
  display: flex; gap: 40px; margin-top: 44px; width: 1220px; position: relative;
  @media (max-width: 640px) {
    // flex 위쪽에 2개, 아래에 1개 배치되게 해주고, 아래 배치된거는 위쪽 2개의 길이만큼 맞춰주게 해주세요
    width: 100%;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 24px;
  }
`;
const SpeechCol = styled.div`
  width: 374px; display: flex; flex-direction: column; gap: 40px;
    @media (max-width: 640px) {
      width: 100%;
      gap: 16px;
      padding: 0px 16px;
  }
`;
const SpeechTitle = styled.div`
  font-family: ${FONT}; font-size: 28px; font-weight: 600; line-height: 20px; color: #000; margin: 0;
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 10px;
  }
`;
const SpeechBody = styled.p`
  font-family: ${FONT}; font-size: 16px; font-weight: 400; line-height: 150%; color: #404040; text-align: justify; margin: 0;
  @media (max-width: 640px) {
    font-size: 10px;
  }
`;
function ThreeSpeeches({ blocks }) {
  return (
    <ThreeWrap>
      <IntroWrapBoxLeftLineVH />
      {blocks.map((b) => (
        <SpeechCol key={b.title}>
          <SpeechTitle>{b.title}</SpeechTitle>
          <SpeechBody dangerouslySetInnerHTML={{ __html: b.body }} />
        </SpeechCol>
      ))}
    </ThreeWrap>
  );
}

const CommitteeSectionWrap = styled.div`
  border-bottom: ${props => (props.$last ? 'none' : '1px #E0E0E0 solid')};
  display: flex;
  gap: 20px;
  padding-bottom: 10px;
  margin-top: 20px;
  align-items: flex-start;
  @media (max-width: 640px) {
    margin-top: 0px;
    gap: 18px;
    padding-bottom: 0px;
  }
`;
const CommitteeHeaderWrap = styled.div`
  width: 289px;
  height: 45px;
  display: flex;
  align-items: flex-end;
  @media (max-width: 640px) {
    height: auto;
    width: 88px;
    margin-top: 12px;
  }
`;
const CommitteeHeaderTitle = styled.div`
  font-family: ${FONT}; font-size: 20px;
  font-weight: 500;
  line-height: 22.4px;
  color: #202020;
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 14px;
  }
`;
const CommitteeRowsWrap = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
  }
`;
function CommitteeSection({ title, rows, last = false }) {
  return (
    <CommitteeSectionWrap $last={last}>
      <CommitteeHeaderWrap>
        <CommitteeHeaderTitle>{title}</CommitteeHeaderTitle>
      </CommitteeHeaderWrap>
      <CommitteeRowsWrap>
        {rows.map((r, i) => (
          <CommitteeRow
            key={r.ko + r.en + i}
            ko={r.ko}
            en={r.en}
            divider={rows.length > 1 && i !== rows.length - 1}
          />
        ))}
      </CommitteeRowsWrap>
    </CommitteeSectionWrap>
  );
}

const CommitteeRowWrap = styled.div`
  padding-top: 22px;
  padding-bottom: 40px;
  border-bottom: ${props => (props.$divider ? '1px #E0E0E0 solid' : 'none')};
  display: flex;
  gap: 20px;
  align-items: flex-start;
  @media (max-width: 640px) {
    padding-top: 12px;
    padding-bottom: 18px;
    gap: 0px;
  }
`;
const KoCol = styled.div`
  width: 135px;
  @media (max-width: 640px) {
    width: 66px;
  }
`;
const Ko = styled.div`
  font-family: ${FONT};
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px; 
  color: #202020;
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 14px;
  }
`;
const EnWrap = styled.div`
  display: flex; align-items: center;
`;
const En = styled.div`
  font-family: ${FONT};
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px;
  color: #404040;
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

function CommitteeRow({ ko, en, divider = false }) {
  return (
    <CommitteeRowWrap $divider={divider}>
      <KoCol>
        <Ko>{ko}</Ko>
      </KoCol>
      <EnWrap>
        <En>{en}</En>
      </EnWrap>
    </CommitteeRowWrap>
  );
}

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 60px;
  margin-bottom: 100px;
  min-width: 1220px;
  @media (max-width: 640px) {
    margin-top: 80px;
    margin-bottom: 40px;
    width: calc(100vw - 32px);
    display: flex;
    flex-direction: column;
    min-width: unset;
  }
`;
const TitleBlockText = styled.div`
  display: flex;
  position: relative;
  font-family: ${FONT};
  font-size: 28px;
  font-weight: 600;
  color: #101010;
  margin-bottom: 45px;
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 18px;
    text-overflow: ellipsis;
    margin-bottom: 20px;
  }
`;

export default function Credit() {
  const introText =
    '안녕하세요, 제20회 졸업전시준비위원회입니다. <br/><br/>한국공학대학교 디자인공학부 제20회 졸업전시 <잔향>은 지난 시간 동안의 도전과 성장을 작품으로 담아내는 자리입니다. 이번 전시는 단순히 결과물을 나열하는 데 그치지 않고, 각자의 창작 과정 속에서 남겨진 고민과 흔적을 함께 나누고자 기획되었습니다. <br/><br/><잔향>이라는 주제는 작품이 지닌 감각과 정서가 관람자의 마음에 은은히 스며들어, 시간이 지나도 다시 떠오르는 기억으로 남기를 바라는 마음을 담고 있습니다. 학생들이 걸어온 수많은 순간과 열정이 응축된 이번 전시가, 누군가의 영감으로 다시 피어나길 희망합니다. 100명의 학생들이 모여 만들어 낸 이 전시는 그 어느 때보다 크고 도전적인 시도였습니다. 서로의 열정이 모여 이루어진 결과물이기에, 그 의미 또한 더욱 특별합니다.<br/><br/> 이번 전시가 졸업생들에게는 새로운 출발을 알리는 이정표로, 관람객에게는 오래도록 마음속에 머무는 "기억의 향기"로 남기를 바랍니다.';

  const speeches = [
    { title: '학부장의 말씀', body: '스무 번째를 맞이하는 디자인공학부 졸업작품전시회를 진심으로 축하드립니다.<br/>이번 전시회에는 총 100명의 학생들이 개인 혹은 팀을 이루어, 산업디자인공학전공 47개 작품과 미디어디자인공학전공 30개 작품을 선보입니다. 이번 전시회는 단순히 결과물을 보여주는 자리를 넘어, 지난 4년간의 땀과 열정, 수많은 고민과 성장이 맺은 값진 결실이자, 새로운 출발을 알리는 뜻깊은 순간입니다.<br/>오늘날 우리는 인공지능, 스마트 기술, 친환경 소재 등 급속히 변화하는 기술 환경 속에서 전례 없는 전환의 시대를 맞이하고 있습니다.<br/>이러한 가운데에 디자이너는 우리의 생활에서 여러 불편한 요소를 찾아내고 이를 창의적이며 책임감 있게 해결할 수 있는 융합형 인재로서 그 역할이 더욱 중요해지고 있습니다.<br/>우리 디자인공학부 학생들은 이러한 변화에 능동적으로 대응하며, 사용자 중심의 사고, 미적 감각, 기술적 이해를 균형 있게 갖춘 디자이너로 성장해 왔습니다. 이번 전시의 모든 작품에는 치열한 탐구와 관찰, 반복된 시도와 실패, 그리고 그 너머의 성장이 고스란히 담겨 있습니다. 그 귀중한 과정을 진심으로 응원하며, 우리 학생들이 디자인을 통해 사회에 공헌하고 세상에 긍정적인 변화를 이끄는 창의적이고 따뜻한 디자이너로 거듭나기를 바랍니다.<br/>앞으로 변화와 도전의 흐름 속에서도 흔들림 없이 자신이 옳다고 믿는 방향으로 꿋꿋하게 나아가며, 사회 곳곳에서 중심적인 역할을 수행하는 당당한 디자이너로 성장하길 기대합니다. 그리고 언제 어디서든 한국공학대학교 디자인공학부의 이름을 빛내는 자랑스러운 동문으로 기억되길 바랍니다.<br/>마지막으로, 소중한 인재들의 성장을 위해 아낌없는 지도와 격려를 보내주신 교수님들께 깊은 감사의 말씀을 전합니다. 또한, 묵묵히 곁에서 자녀를 응원해주신 학부모님들께도 진심 어린 감사의 인사를 드립니다. 감사합니다.' },
    { title: '학과 소개', body: '한국공학대학교 디자인공학부는 창의적인 디자인 발상법과 공학적 마인드의 통합적 접근법을 추구하는 시대로 바뀜에 따라 단순히 심미적 역할에만 머물렀던 디자인 개념에서 확장하여 4차 산업혁명 기술 분야를 선도하고자 하는 비전을 담고 있는 실무 중심의 융합형 학부입니다.<br/>디자인공학부는 디자인 기반의 창의적 아이디어와 HW/SW 융합 기술 개발 능력을 통해 기업을 혁신할 수 있는 인재 양성을 목표로 하고 있습니다.' },
    // { title: '졸전담당교수 말씀', body: '내용 작성' }, 교수님 말씀이 없으시기 때문에 학과 소개 임시 변경, 추후 확정 될 수 있음
    { title: '웹사이트팀 제작 후기', body: '안녕하세요 제20회 졸업전시위원회의 웹사이트 기획부터 디자인, 그리고 구현까지 담당한 웹사이트 팀 성수민, 김예준입니다. 25년 5월부터 웹사이트 컨셉이 정해진 이래 150일에 걸쳐 디자인 및 개발한 사이트가 이렇게 성공적으로 완성되어 무척 감격스러운 마음입니다.특히 저희 웹사이트 팀은 한국공학대학교 디자인학과 졸업전시위원회 최초로 공식 신설된 팀으로, 졸업전시를 위한 웹사이트 기획과 디자인, 구현과 배포를 졸업전시위원회의 공식 팀으로써 성공적으로 마무리 할 수 있음이 더더욱 뜻깊게 다가옵니다.저희 웹사이트는 디자인과 더불어 사용자경험, 데이터 관리, 개발 방식등 4년동안 걸어왔던 한국공학대학교 미디어디자인학과에서 배웠던 지식들을 최대한 활용하여 사소한 문제라도 같이 고민하고, 해결 방법을 강구하며 쌓아올린 결과물입니다. 저희가 걸어온 이 길에서 가장 힘들었지만, 그와 함께 걸어온 발자국이 틀리지 않았다는 것을 두 눈으로 볼 수 있어 기쁠따름입니다.앞으로 걸어나갈 길고 긴 길에서 미지라는 두려움 보단 지금까지의 경험으로 나아갈 수 있는 용기를 얻을 수 있는 이 순간이, ‘잔향’ 졸업전시와 함께 할 수 있어서 영광이었습니다. 24년 12월부터 25년 10월까지 10개월의 긴 시간동안 고생하신 20대 졸업전시위원회 구성원 모두 고생많으셨습니다.' },
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
        { ko: '진효민', en: 'Jin Hyomin' },
        { ko: '정민호', en: 'Jung Minho' },
      ],
    },
    {
      title: '기획',
      rows: [
        { ko: '문나라', en: 'Moon Nara' },  
        { ko: '차소이', en: 'Cha Soyi' },
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
        { ko: '구인회', en: 'Koo Inhoe' },
        { ko: '김기윤', en: 'Kim Giyun' },
        { ko: '박혜성', en: 'Park Hyeseong' },
        { ko: '석동현', en: 'Suk Donghyun' },
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
        // { ko: '고명현', en: 'Go Myeonghyeon' },
      ],
      last: true,
    },
  ];

  return (
    <div style={{ position: 'relative' }}>
      {/* 상단 전역 네비가 있다면 여기 삽입 */}

      <PageContainer>
        <HeroHeader />
        <IntroWrap>
          <IntroNote text={introText} />
          <HeroCard></HeroCard>
        </IntroWrap>
      </PageContainer>



      <PageContainer>
        <ThreeSpeeches blocks={speeches} />

        {/* 위원회 표 */}
        <TitleBlock>
          <IntroWrapBoxLeftLine />
          <TitleBlockText>
            <IntroWrapBoxTopLineVW />
            2025 잔향<br />제 20대 졸업전시위원회
          </TitleBlockText>

          {committee.map((sec) => (
            <CommitteeSection
              key={sec.title}
              title={sec.title}
              rows={sec.rows}
              last={!!sec.last}
            />
          ))}
        </TitleBlock>
      </PageContainer>
    </div>
  );
}