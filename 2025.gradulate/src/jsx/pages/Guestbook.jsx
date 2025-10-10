//Guestbook.jsx
//방명록 페이지
// GPT: styled-components 변환 (스타일 값/로직 불변)
import React from 'react';
import styled from 'styled-components';
import NavHeader from '../molecule/NavHeader';
import Footer from '../molecule/Footer';
import GuestbookGrid from '../organism/GuestbookGrid';
import GuestbookModal from '../organism/GuestbookModal';
import { GUESTBOOK_DATA } from '../../data/guestbook';

const font = 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif';

// page wrappers
const Page = styled.div`
  background: #121212; min-height: 100vh;
`;
const Main = styled.main`
  padding: 80px 40px 120px 40px;
`;
const Title = styled.h1`
  font-family: ${font}; font-weight: 700; font-size: 32px; color: #FFFFFF; text-align: center; margin: 20px 0 40px;
`;
const Section = styled.section`
  display: flex; justify-content: center;
`;
const Wrap = styled.div`
  width: 100%;
`;

export default function Guestbook() {
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState(GUESTBOOK_DATA);

  const handleSubmit = ({ to, from, message }) => {
    const newItem = {
      id: `g-${Date.now()}`,
      to, from, message,
      type: 'text',
    };
    // “+” 뒤에 바로 끼워 넣기: 리스트 최상단에 보이게
    setItems((prev) => [newItem, ...prev]);
    setOpen(false);
  };

  const css = `
    .gb-wrap *::-webkit-scrollbar { display: none; }
    .gb-wrap * { scrollbar-width: none; -ms-overflow-style: none; }
    .gb-wrap article img { width: 100% !important; height: 100% !important; object-fit: cover !important; display: block !important; }
  `;

  return (
    <Page>
      {/* 상단/하단 네비는 페이지 컴포넌트 외부에서 통합될 수 있어, 여기선 기존 구조 유지 */}

      <Main>
        <Title>Guest Book</Title>

        <Section>
          {/* Removed fixed-width container so the horizontal rail can span freely.
              Wrap the grid so we can scope CSS to descendants. */}
          <Wrap className="gb-wrap">
            <style>{css}</style>
            <GuestbookGrid onOpenModal={()=>setOpen(true)} items={items} />
          </Wrap>
        </Section>
      </Main>

      <GuestbookModal
        open={open}
        onClose={()=>setOpen(false)}
        onSubmit={handleSubmit}
      />
    </Page>
  );
}