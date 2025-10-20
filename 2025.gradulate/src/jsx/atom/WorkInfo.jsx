// WorkInfo.jsx
// 작품 정보 컴포넌트
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { db } from '../../lib/firebase'; // 프로젝트 구조에 맞게 수정
import { doc, updateDoc, increment, setDoc, getDoc } from 'firebase/firestore';

const base = import.meta.env.BASE_URL || '/';

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 80px;
  bottom: 0px;
  left: 0;
  width: 350px;
  height: 100%;
  background-color: #121212;
  padding: 60px 40px;
  box-sizing: border-box;
  z-index: 100;
  transform: translateX(${props => (props.$open ? '0' : '-350px')});
  transition: transform 500ms ease-out;
  pointer-events: ${props => (props.$open ? 'auto' : 'none')};
  @media (max-width: 640px) {
    width: 100vw;
    height: auto;
    position: relative;
    top: 0;
    left: 0;
    padding: 20px 16px 40px 16px;
}
`;

const GapCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  @media (max-width: 640px) {
    gap: 40px;
    /* width: calc(100% - 32px); */
}
`;

const ContentCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: auto;
  gap: 48px;
  @media (max-width: 640px) {
    /* flex-direction: row; */
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
}
`;

const CloseBox = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 640px) {
    display: none;
}
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  /* align-items: center; */
  gap: 16px;
  @media (max-width: 640px) {
    width: 100%;
}
`;

const Title = styled.h1`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  margin: 0;
  padding: 0;
  line-height: 125%;
  @media (max-width: 640px) {
    font-size: 20px;
}
   @media (max-width: 393px) {
    font-size: 18px;
  }
`;

const Context = styled.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #F0F0F0;
  margin: 0;
  padding: 0;
  line-height: 150%;
  @media (max-width: 640px) {
    font-size: 13px;
}
   @media (max-width: 393px) {
    font-size: 12px;
  }
`;

const Thumbnail = styled.div`
  display: none;
  width: calc(100vw - 32px);
  height: calc((100vw - 32px) * 0.75);
  background-image: ${({ $src }) => `url("${$src}")`};
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  @media (max-width: 640px) {
    display: flex;
}
`

const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 75px;
  @media (max-width: 640px) {
    width: 100%;
    height: 38px;
}
`;

const LikeBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: auto;
  height: 32px;
  cursor: pointer;
  @media (max-width: 640px) {
    height: 20px;
}
`;

const LikeAlign = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const LikeIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: ${({ $src }) => `url("${$src}")`};
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    width: 16px;
    height: 16px;
}
`;

const LikeCount = styled.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 16px;
}
`;

const PageDown = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 12px;
  cursor: pointer;
`;

const PageDownText = styled.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
  line-height: auto;
  margin-bottom: 12px;
  @media (max-width: 640px) {
    font-size: 12px;
    margin-bottom: 5px;
}
`;

const PageDownIconBox = styled.div`
  display: flex;
  width: 20px;
  height: 75px;
  align-items: center;
  justify-content: center;
  background-image: url('${base}icons/pageDownIcon.svg');
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 640px) {
    width: 10px;
    height: 38px;
}
`;

export default function WorkInfo({
  titleKor,
  titleEng,
  context,
  isOpen = true,
  onClose,
  src,
  docId,            // ← Firestore 문서 ID (예: 0, 1, 2 … 문자열/숫자)
  collection = 'works', // ← 기본 컬렉션명
}) {
  const [likeCount, setLikeCount] = useState(0);
  const [pending, setPending] = useState(false);

  // 초기 1회 읽기 (새로고침/라우팅 진입 시)
  useEffect(() => {
    let alive = true;
    (async () => {
      if (docId === undefined || docId === null) return;
      try {
        const ref = doc(db, collection, String(docId));
        const snap = await getDoc(ref);
        if (!alive) return;
        if (snap.exists()) {
          const data = snap.data();
          setLikeCount(typeof data.like === 'number' ? data.like : 0);
        } else {
          setLikeCount(0);
        }
      } catch (err) {
        console.error('Firestore getDoc error:', err);
        if (alive) setLikeCount(0);
      }
    })();
    return () => { alive = false; };
  }, [docId, collection]);

  const refreshLike = async () => {
    try {
      const ref = doc(db, collection, String(docId));
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        setLikeCount(typeof data.like === 'number' ? data.like : 0);
      }
    } catch (e) {
      console.error('Firestore refresh error:', e);
    }
  };

   const handleLike = async () => {
     if (pending) return; 
     if (docId === undefined || docId === null) {
       console.warn('handleLike called without a valid docId');
       return;
     }
     setPending(true);
     const ref = doc(db, collection, String(docId));
     try {
      await updateDoc(ref, { like: increment(1) });
      setLikeCount((n) => n + 1);
      await refreshLike();
     } catch (e) {
       // 문서가 없을 가능성 등 예외 처리(최초 1회 생성 허용 시)
       if (e.code === 'not-found' || /No document/i.test(String(e))) {
         try {
           const snap = await getDoc(ref);
           if (!snap.exists()) {
             await setDoc(ref, { like: 1 }, { merge: true });
           } else {
             await updateDoc(ref, { like: increment(1) });
           }
           await refreshLike();
         } catch (e2) {
           console.error('Firestore like fallback error:', e2);
         }
       } else {
         console.error('Firestore like error:', e);
       }
     } finally {
       setPending(false);
     }
   };

  return (
    <Container $open={!!isOpen}>
      <GapCol>
        <ContentCol>
          <CloseBox onClick={() => { if (typeof onClose === 'function') { onClose(); } }}>
            <img src={`${base}icons/closeIcon.svg`} alt="Close Icon" />
          </CloseBox>
          <Content>
            <Thumbnail $src={src} />
            <Title>{titleKor}</Title>
            <Context>{context}</Context>
          </Content>
        </ContentCol>

        <IconRow>
          <LikeBtn onClick={handleLike} aria-disabled={pending} title={pending ? '처리 중' : '좋아요'}>
            <LikeAlign>
              <LikeIcon $src={`${base}icons/likeIcon(white).svg`} aria-label="Like icon" />
              <LikeCount>{{likeCount} || 0}</LikeCount>
            </LikeAlign>
          </LikeBtn>
          <PageDown
            onClick={() => {
              const scrollHeight = Math.max(
                document.documentElement?.scrollHeight || 0,
                document.body?.scrollHeight || 0
              );
              const maxScrollTop = scrollHeight - window.innerHeight;
              const offset = 269; // bottom에서 위로 띄울 거리(px)
              const targetTop = Math.max(0, maxScrollTop - offset);
              window.scrollTo({ top: targetTop, behavior: 'smooth' });
            }}
          >
            <PageDownText>Designer Info</PageDownText>
            <PageDownIconBox></PageDownIconBox>
          </PageDown>
        </IconRow>
      </GapCol>
    </Container>
  );
}

WorkInfo.propTypes = {
  titleKor: PropTypes.string.isRequired,
  titleEng: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  docId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  collection: PropTypes.string,
};
