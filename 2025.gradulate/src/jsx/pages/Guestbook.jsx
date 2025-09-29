//Guestbook.jsx
//방명록 페이지
import React from 'react';
import NavHeader from '../molecule/NavHeader';
import Footer from '../molecule/Footer';
import GuestbookGrid from '../organism/GuestbookGrid';
import GuestbookModal from '../organism/GuestbookModal';
import { GUESTBOOK_DATA } from '../../data/guestbook';

const font = 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif';

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
    <div style={{ background:'#121212', minHeight:'100vh' }}>
      <NavHeader />

      <main style={{ padding:'80px 40px 120px 40px' }}>
        <h1 style={{ fontFamily:font, fontWeight:700, fontSize:32, color:'#FFFFFF', textAlign:'center', margin:'20px 0 40px' }}>
          Guest Book
        </h1>

        <section style={{ display:'flex', justifyContent:'center' }}>
          {/* Removed fixed-width container so the horizontal rail can span freely.
              Wrap the grid so we can scope CSS to descendants. */}
          <div className="gb-wrap" style={{ width: '100%' }}>
            <style>{css}</style>
            <GuestbookGrid onOpenModal={()=>setOpen(true)} items={items} />
          </div>
        </section>
      </main>

      <Footer />

      <GuestbookModal
        open={open}
        onClose={()=>setOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}