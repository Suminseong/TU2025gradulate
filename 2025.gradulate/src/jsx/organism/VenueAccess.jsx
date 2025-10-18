import React from 'react';
import styled from 'styled-components';
import OutlineButton from '../atom/OutlineButton'; // 앞서 만든 아톰

const FONT = `'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif`;
const PAGE_SIDE = 350; // Credits.jsx 좌우 패딩 규칙을 그대로 사용

const Section = styled.section`
  padding: 120px 0 0 0; background: #121212;
`;

const PageOuter = styled.div`
  position: relative; background: #121212;
`;
const PageInner = styled.div`
  /* padding-left: ${PAGE_SIDE}px; padding-right: ${PAGE_SIDE}px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 40px 200px 40px;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;
    width: 100vw;
    box-sizing: border-box;
    gap: 40px
  }
`;
const PageContainerDark = ({ children }) => (
  <PageOuter>
    <PageInner>{children}</PageInner>
  </PageOuter>
);

const HeaderWrap = styled.div`
  width: 289px; height: 45px; display: flex; align-items: flex-end;
`;
const HeaderTitle = styled.div`
  font-family: ${FONT}; font-size: 20px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;

  @media (max-width: 640px) {
    font-size: 16px;
}
`;
function SectionHeader({ title }) {
  return (
    <HeaderWrap>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderWrap>
  );
}

const BlockWrap = styled.div`
  border-bottom: ${props => (props.$last ? 'none' : '1px rgba(255,255,255,0.12) solid')};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
    padding: 0;
    width: 100%;
  }
`;

const RowWrap = styled.div`
  padding-top: 22px; padding-bottom: 40px;
  border-bottom: ${props => (props.$divider ? '1px rgba(255,255,255,0.12) solid' : 'none')};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
    padding: 16px 0 20px 0;
  }
`;
const KeyCol = styled.div`
  width: 135px;
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const KeyLabel = styled.div`
  font-family: ${FONT}; font-size: 16px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`;
const ValCol = styled.div`
  width: 700px; display: flex; flex-direction: column; gap: 10px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 6px;
  }
`;
function KVRow({ k, children, divider = true }) {
  return (
    <RowWrap $divider={divider}>
      <KeyCol>
        <KeyLabel>{k}</KeyLabel>
      </KeyCol>
      <ValCol>{children}</ValCol>
    </RowWrap>
  );
}

const BlockInner = styled.div`
  width: 900px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
`;
function Block({ title, children, last = false }) {
  return (
    <BlockWrap $last={last}>
      <SectionHeader title={title} />
      <BlockInner>{children}</BlockInner>
    </BlockWrap>
  );
}

const TitleLine = styled.div`
  width: 900px; padding-top: 22px; padding-bottom: 40px; border-bottom: 1px rgba(255,255,255,0.12) solid;
  @media (max-width: 640px) {
    width: 100%;
    padding: 12px 0px 20px 0px;
    box-sizing: border-box;
  }
`;
const TitleLineText = styled.div`
  font-family: ${FONT}; font-size: 16px; font-weight: 700; color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 14px;
}
`;

const BodyText = styled.div`
  font-family: ${FONT}; font-size: 16px; font-weight: 300; color: #CCCCCC; letter-spacing: 0px;
  @media (max-width: 640px) {
    font-size: 13px;
}
`;
const BodyTextMedium = styled(BodyText)`
  font-weight: 500;
`;
const BodyTextSmall = styled(BodyText)`
  font-size: 13px;
`;

const BodyTextMT24 = styled(BodyText)`
  margin-top: 24px;
`;
const LinkText = styled.a`
  font-family: ${FONT}; font-size: 16px; font-weight: 300; color: #CCCCCC; text-decoration: underline;
  @media (max-width: 640px) {
    font-size: 13px;
}
`;

export default function VenueAccess() {
  return (
    <Section aria-label="Venue & Access">
      <PageContainerDark>
        {/* Venue Details */}
        <Block title="Venew Details">
          <TitleLine>
            <TitleLineText>잔향 : 기억의 향기</TitleLineText>
          </TitleLine>

          <KVRow k="Term">
            <BodyText>2025.&nbsp;10.&nbsp;24.&nbsp;FRI - 10.&nbsp;26.&nbsp;SUN</BodyText>
          </KVRow>

          <KVRow k="Hours">
            <BodyText>10.24.FRI &nbsp;&nbsp;13:00 ~ 17:30 (OPENING 16:00~)</BodyText>
            <BodyText>10.25.SAT ~ 10.26.SUN  &nbsp;&nbsp;10:00 ~ 17:30</BodyText>
          </KVRow>

          <KVRow k="Schedule">
            <BodyTextMedium>10.24.FRI</BodyTextMedium>
            <BodyText>13:00&nbsp;&nbsp;&nbsp;&nbsp;자유관람</BodyText>
            <BodyText>15:00&nbsp;&nbsp;&nbsp;&nbsp;졸업생 홈커밍 행사</BodyText>
            <BodyText>16:00&nbsp;&nbsp;&nbsp;&nbsp;개회식</BodyText>
            <BodyText>16:20&nbsp;&nbsp;&nbsp;&nbsp;졸업작품 우수작 시상</BodyText>
            <BodyText>16:30&nbsp;&nbsp;&nbsp;&nbsp;자유관람</BodyText>

            <BodyTextMedium><br />10.25.SAT</BodyTextMedium>
            <BodyText>10:00&nbsp;&nbsp;&nbsp;&nbsp;자유관람</BodyText>
            <BodyText>13:00&nbsp;&nbsp;&nbsp;&nbsp;취·창업 커리어 캠프</BodyText>

            <BodyTextMedium><br />10.26.SUN</BodyTextMedium>
            <BodyText>10:00&nbsp;&nbsp;&nbsp;&nbsp;자유관람</BodyText>
          </KVRow>

          <KVRow k="Website" divider={false}>
            <BodyText>Hongik Art Center</BodyText>
            <LinkText
              href="https://artscenter.hongik.ac.kr/artcenter/index.do"
              target="_blank" rel="noreferrer"
            >
              https://artscenter.hongik.ac.kr/artcenter/index.do
            </LinkText>
          </KVRow>
        </Block>

        {/* Access */}
        <Block title="Access">
          <KVRow k="Address">
            <BodyText>
              홍대 아트센터 지하 2층 전시관 3<br />서울시 종로구 대학로 57
            </BodyText>

            <BodyText>Hongik Art Center B2 Gallery 3<br />57, Daehak-ro, Jongno-gu, Seoul</BodyText>

            <div style={{ marginTop: 24 }}>
              <OutlineButton as="a" href="https://maps.app.goo.gl/qc99M9bDqyBTcmx79" label="Map" size="sm" showArrow />
            </div>
          </KVRow>

          <KVRow k="Parking">
            <BodyText>B3F ~ B6F</BodyText>

            <BodyText><br />기본 30분 3,000원 / 이후 20분당 2,000원</BodyText>
            <BodyText>이용객 주차권 지참 시 50% 할인 및 1시간 무료이용권 제공</BodyText>
            <BodyTextMedium>(주차권으로만 정산 가능, 티켓정산 불가)</BodyTextMedium>
            <BodyTextSmall>주차권 배부 장소: B2 갤러리 3, 전시장 입구 인포데스크</BodyTextSmall>
          </KVRow>

          <KVRow k="By Subway">
            <BodyText>[1호선 종로5가역]</BodyText>
            <BodyText>2번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)</BodyText>

            <BodyText><br />[4호선 혜화역]</BodyText>
            <BodyText>3번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)</BodyText>
            <BodyText>또는 08번 마을버스 탑승 후 이화사거리 앞 하차</BodyText>
          </KVRow>

          <KVRow k="By Bus" divider={false}>
            <BodyText>[이화사거리(01-572) 하차]</BodyText>
            <BodyText>마을버스 종로 08번</BodyText>

            <BodyText><br />[현대그룹빌딩(01-218) 하차]</BodyText>
            <BodyText>102, 107, 108, 109, 162, 301, 7025</BodyText>

            <BodyText><br />[이화장(01-223) 하차]</BodyText>
            <BodyText>109, 273, 601, 2112, 7025</BodyText>
          </KVRow>
        </Block>
      </PageContainerDark>
    </Section>
  );
}
