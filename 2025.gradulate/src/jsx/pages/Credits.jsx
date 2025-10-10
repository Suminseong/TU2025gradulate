//credits.jsx
//졸준 페이지// Credit.jsx

import React from 'react';
import styled from 'styled-components';

// 공통 타이포/레이아웃 수치
const FONT = `'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif`;
const PAGE_SIDE = 350;
// vw 단위 변경 계산
const PAGE_SIDE_VW = `${(PAGE_SIDE / 1920) * 100}vw`;
const PAGE_SIDE_VW_IMG = `${((PAGE_SIDE + 414) / 1920) * 100}vw`; // 이미지 포함 시

const PageOuter = styled.div`
  position: relative; background: #fff;
`;
const PageInner = styled.div`
  padding-left: ${PAGE_SIDE_VW}; padding-right: ${PAGE_SIDE_VW};
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
  position: relative; height: 120px; display: flex; align-items: flex-end; justify-content: center;
  font-family: ${FONT}; font-size: 40px; font-weight: 700; color: #101010; line-height: 64px; margin-top: 80px;
`;
const SubTitle = styled.div`
  font-family: ${FONT}; font-size: 32px; font-weight: 600; line-height: 56px; color: #000; margin-top: 18px;
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

const IntroNoteBox = styled.div`
  max-width: 374px; font-family: ${FONT}; font-size: 16px; font-weight: 300; line-height: 25.6px; color: #000; text-align: justify; margin-top: 5px;
`;
function IntroNote({ text }) {
  return (
    <IntroNoteBox>{text}</IntroNoteBox>
  );
}

const HeroCardWrap = styled.div`
  width: 806px; height: 375px; background: #FFF4ED; margin-top: 24px; margin-left: ${PAGE_SIDE_VW_IMG}; position: absolute;
`;
const HeroCardText = styled.div`
  position: absolute; left: 136px; top: 140px; font-family: ${FONT}; font-size: 82.64px; font-weight: 500; line-height: 92.55px; color: #000;
`;
function HeroCard({ children }) {
  return (
    <HeroCardWrap>
      <HeroCardText>{children}</HeroCardText>
    </HeroCardWrap>
  );
}

const ThreeWrap = styled.div`
  display: flex; gap: 40px; margin-top: 420px; width: 1220px;
`;
const SpeechCol = styled.div`
  width: 374px; display: flex; flex-direction: column; gap: 20px;
`;
const SpeechTitle = styled.div`
  font-family: ${FONT}; font-size: 28px; font-weight: 600; line-height: 49px; color: #000;
`;
const SpeechBody = styled.div`
  font-family: ${FONT}; font-size: 16px; font-weight: 400; line-height: 21.6px; color: #000; text-align: justify;
`;
function ThreeSpeeches({ blocks }) {
  return (
    <ThreeWrap>
      {blocks.map((b) => (
        <SpeechCol key={b.title}>
          <SpeechTitle>{b.title}</SpeechTitle>
          <SpeechBody>{b.body}</SpeechBody>
        </SpeechCol>
      ))}
    </ThreeWrap>
  );
}

const CommitteeSectionWrap = styled.div`
  border-bottom: ${props => (props.$last ? 'none' : '1px #E0E0E0 solid')}; display: flex; gap: 20px; padding-bottom: 10px; margin-top: 20px; align-items: flex-start;
`;
const CommitteeHeaderWrap = styled.div`
  width: 289px; height: 45px; display: flex; align-items: flex-end;
`;
const CommitteeHeaderTitle = styled.div`
  font-family: ${FONT}; font-size: 20px; font-weight: 500; line-height: 22.4px; color: #202020;
`;
const CommitteeRowsWrap = styled.div`
  width: 900px; display: flex; flex-direction: column;
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
  padding-top: 22px; padding-bottom: 40px; border-bottom: ${props => (props.$divider ? '1px #E0E0E0 solid' : 'none')}; display: flex; gap: 20px; align-items: flex-start;
`;
const KoCol = styled.div`
  width: 135px;
`;
const Ko = styled.div`
  font-family: ${FONT}; font-size: 16px; font-weight: 300; line-height: 22.4px; color: #202020;
`;
const EnWrap = styled.div`
  display: flex; align-items: center;
`;
const En = styled.div`
  font-family: ${FONT}; font-size: 16px; font-weight: 300; line-height: 22.4px; color: #404040;
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
  margin-top: 60px;
`;
const TitleBlockText = styled.div`
  font-family: ${FONT}; font-size: 28px; font-weight: 600; color: #101010; margin-bottom: 24px;
`;

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
        { ko: '김기윤', en: 'Kim Giyun' },
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
        <TitleBlock>
          <TitleBlockText>
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