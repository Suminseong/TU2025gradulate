import React from 'react';
import GuestbookCard from '../atom/GuestbookCard';
import PhotoCard from '../atom/PhotoCard';
import AddCardButton from '../atom/AddCardButton';
import { GUESTBOOK_DATA, PHOTO_CARD } from '../../data/guestbook';

const pickPhotoIndex = (len) => {
  // 첫 칸은 + 버튼이므로 1부터 카운트한다고 보고 6~10 중 하나 삽입
  if (len < 6) return null;
  const idx = Math.floor(Math.random() * 5) + 6; // 6..10
  return Math.min(idx, len + 1); // 범위 보정
};

export default function GuestbookGrid({ onOpenModal, items }) {
  const feed = React.useMemo(() => {
    const arr = [...items];
    const idx = pickPhotoIndex(arr.length);
    if (idx) arr.splice(idx - 1, 0, { ...PHOTO_CARD, id: `photo-${Date.now()}` });
    return arr;
  }, [items]);

  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap',
      gap: 30, alignItems: 'flex-start',
    }}>
      <AddCardButton onClick={onOpenModal} />

      {feed.map((it, i) => {
        const style = { marginTop: (i % 2 === 0) ? 0 : 20 }; // 상/하/상/하
        if (it.type === 'photo') {
          return <PhotoCard key={it.id} src={it.image} style={style} />;
        }
        return (
          <GuestbookCard
            key={it.id}
            to={it.to}
            from={it.from}
            message={it.message}
            style={style}
          />
        );
      })}
    </div>
  );
}
