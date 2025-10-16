//Guestbook.jsx
//방명록 페이지
import React from 'react';
import styled from 'styled-components';
import NavHeader from '../molecule/NavHeader';
import Footer from '../molecule/Footer';
import GuestbookGrid from '../organism/GuestbookGrid';
import GuestbookModal from '../organism/GuestbookModal';
// Firestore 연동
import { db } from '../../../firebase';
import {
  collection,
  getDocs,
  orderBy,
  query,
  setDoc,
  doc,
} from 'firebase/firestore';

const font = 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif';

// page wrappers
const Page = styled.div`
  background: #121212; min-height: 100vh;
`;
const Main = styled.main`
  padding: 80px 40px 120px 40px;
  @media (max-width: 640px) {
    padding: 40px 0 80px 0;
  }
`;
const Title = styled.h1`
  font-family: ${font}; font-weight: 700; font-size: 32px; color: #FFFFFF; text-align: center; margin: 20px 0 40px;
  @media (max-width: 640px) {
    font-size: 20px; margin: 0 0 16px;
  }
`;
const Section = styled.section`
  display: flex; justify-content: center;
  @media (max-width: 640px) {
    justify-content: stretch;
  }
`;
const Wrap = styled.div`
  width: 100%;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

export default function Guestbook() {
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState([]);

  // Firestore에서 게스트북 데이터 가져오기 (한 번만 읽음)
  React.useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const q = query(collection(db, 'guest'), orderBy('time', 'desc'));
        const snap = await getDocs(q);
        if (!alive) return;
        const next = [];
        snap.forEach((d) => {
          const data = d.data();
          next.push({
            id: d.id,
            to: data.to || '',
            from: data.from || '',
            message: data.message || '',
            type: 'text',
          });
        });
        setItems(next);
      } catch (e) {
        console.error('Failed to load guestbook items:', e);
      }
    })();
    return () => { alive = false; };
  }, []);

  const handleSubmit = async ({ to, from, message }) => {
    try {
      // 문서 id는 ms 단위 unix 시간 문자열
      const id = String(Date.now());
      await setDoc(doc(collection(db, 'guest'), id), {
        to: to || '',
        from: from || '',
        message: message || '',
        time: id,
      });
      // 한 번 더 읽어서 최신화 (onSnapshot 대신)
      try {
        const q = query(collection(db, 'guest'), orderBy('time', 'desc'));
        const snap = await getDocs(q);
        const next = [];
        snap.forEach((d) => {
          const data = d.data();
          next.push({
            id: d.id,
            to: data.to || '',
            from: data.from || '',
            message: data.message || '',
            type: 'text',
          });
        });
        setItems(next);
      } catch (e) {
        console.error('Failed to reload guestbook items after submit:', e);
      }
      // onSnapshot을 통해 자동 갱신되므로 로컬 state 조작 불필요
      setOpen(false);
    } catch (e) {
      console.error('Failed to submit guest message:', e);
      // 낙관적 UI가 필요하면 여기서 setItems로 임시 추가 가능
    }
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