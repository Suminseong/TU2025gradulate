import React from 'react';
import OutlineButton from '../atom/OutlineButton'; // 앞서 만든 아톰

const FONT = `'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif`;
const PAGE_SIDE = 350; // Credits.jsx 좌우 패딩 규칙을 그대로 사용

function PageContainerDark({ children }) {
  return (
    <div style={{ position: 'relative', background: '#121212' }}>
      <div style={{ paddingLeft: PAGE_SIDE, paddingRight: PAGE_SIDE }}>{children}</div>
    </div>
  );
}

function SectionHeader({ title }) {
  return (
    <div style={{ width: 289, height: 45, display: 'flex', alignItems: 'flex-end' }}>
      <div style={{
        fontFamily: FONT, fontSize: 20, fontWeight: 700, lineHeight: '22.4px', color: '#FFFFFF'
      }}>
        {title}
      </div>
    </div>
  );
}

function KVRow({ k, children, divider = true }) {
  return (
    <div
      style={{
        paddingTop: 22, paddingBottom: 40,
        borderBottom: divider ? '1px rgba(255,255,255,0.12) solid' : 'none',
        display: 'flex', gap: 20, alignItems: 'flex-start'
      }}
    >
      <div style={{ width: 135 }}>
        <div style={{
          fontFamily: FONT, fontSize: 16, fontWeight: 700, lineHeight: '22.4px', color: '#FFFFFF'
        }}>
          {k}
        </div>
      </div>
      <div style={{ width: 700, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {children}
      </div>
    </div>
  );
}

function Block({ title, children, last = false }) {
  return (
    <div style={{
      borderBottom: last ? 'none' : '1px rgba(255,255,255,0.12) solid',
      display: 'flex', gap: 20, alignItems: 'flex-start'
    }}>
      <SectionHeader title={title} />
      <div style={{ width: 900, display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
}

export default function VenueAccess() {
  return (
    <section aria-label="Venue & Access" style={{ padding:'120px 0 0 0', background:'#121212' }}>
      <PageContainerDark>
        {/* Venue Details */}
        <Block title="Venew Details">
          {/* 타이틀 라인 */}
          <div style={{
            width: 900, paddingTop: 22, paddingBottom: 40,
            borderBottom: '1px rgba(255,255,255,0.12) solid'
          }}>
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 700, color:'#FFFFFF' }}>
              잔향 : 기억의 향기
            </div>
          </div>

          <KVRow k="Term">
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>
              10. 24 - 10. 26
            </div>
          </KVRow>

          <KVRow k="Hours">
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>
              13 : 00 - 17 : 00
            </div>
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>
              Last Entry 22:22
            </div>
          </KVRow>

          <KVRow k="Closed">
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>
              Date - Date
            </div>
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>
              * daechung buyeon seolmyeong
            </div>
          </KVRow>

          <KVRow k="Website" divider={false}>
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>Hongik Art Center</div>
            <a
              href="https://artscenter.hongik.ac.kr/artcenter/index.do"
              target="_blank" rel="noreferrer"
              style={{
                fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC',
                textDecoration:'underline'
              }}
            >
              https://artscenter.hongik.ac.kr/artcenter/index.do
            </a>
          </KVRow>
        </Block>

        {/* Access */}
        <Block title="Access">
          <KVRow k="Address">
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>
              Hongik Art Center B2 Gallery
            </div>
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>
              57, Daehak-ro, Jongno-gu, Seoul
            </div>

            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC', marginTop:24 }}>
              Address in local language
            </div>
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>
              홍대 아트센터 지하 2층 전시관<br/>서울시 종로구 대학로 57
            </div>

            <div style={{ marginTop: 24 }}>
              <OutlineButton as="a" href="#" label="Map" size="sm" showArrow />
            </div>
          </KVRow>

          <KVRow k="Parking">
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>B3F ~ B6F</div>
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>
              기본 30분 3,000원 / 이후 20분당 2,000원
            </div>
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>
              이용객 주차권 지참 시 50% 할인 및 1시간 무료이용권 제공 (주차권으로만 정산 가능, 티켓정산 불가)
            </div>
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>
              주차권 배부 장소: 갤러리, 소극장 - 매표소 / 대극장 - 물품보관소, 객석 1층, 2층 메인데스크
            </div>
          </KVRow>

          <KVRow k="By Subway">
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>[1호선 종로5가역]</div>
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>
              2번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)
            </div>
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>[4호선 혜화역]</div>
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>
              3번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분) 또는 08번 마을버스 탑승 후 이화사거리 앞 하차
            </div>
          </KVRow>

          <KVRow k="By Bus" divider={false}>
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>[이화사거리(01-572) 하차]</div>
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>마을버스 종로 08번</div>
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}><br/>[현대그룹빌딩(01-218) 하차]</div>
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>102, 107, 108, 109, 162, 301, 7025</div>
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>[이화장(01-223) 하차]</div>
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, color:'#CCCCCC' }}>109, 273, 601, 2112, 7025</div>
          </KVRow>
        </Block>
      </PageContainerDark>
    </section>
  );
}
