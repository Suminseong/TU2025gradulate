import React from 'react';
import NavHeader from '../molecule/NavHeader';
import Footer from '../molecule/Footer';
import GuestbookGrid from '../organism/GuestbookGrid';
import GuestbookModal from '../organism/GuestbookModal';
import { GUESTBOOK_DATA } from '../../data/guestbook';

const font = 'Pretendard, system-ui';

export default function Guestbook() {
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState(GUESTBOOK_DATA);

  const handleSubmit = ({ to, from, message }) => {
    if (!to || !from || !message) return;
    setItems(prev => [{ id: `g-${Date.now()}`, to, from, message, type: 'text' }, ...prev]);
    setOpen(false);
  };

  return (
    <div style={{ background:'#121212', minHeight:'100vh' }}>
      <NavHeader />
      <main style={{ padding: '72px 0 120px' }}>
        <h1 style={{
          fontFamily: font, fontWeight: 700, fontSize: 32,
          color: '#FFF', textAlign: 'center', margin: '18px 0 32px'
        }}>
          Guest Book
        </h1>

        {/* 가로 레일: 폭 제한 없고, 내부에서 좌 210px 패딩 */}
        <GuestbookGrid onOpenModal={() => setOpen(true)} items={items} />
      </main>
      <Footer />
      <GuestbookModal open={open} onClose={() => setOpen(false)} onSubmit={handleSubmit} />
    </div>
  );
}
