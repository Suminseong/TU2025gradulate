// WorkInfo.jsx
// 작품 정보 컴포넌트
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  z-index: 1000;
  transform: translateX(${props => (props.$open ? '0' : '-350px')});
  transition: transform 500ms ease-out;
  pointer-events: ${props => (props.$open ? 'auto' : 'none')};
`;

const GapCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
`;

const ContentCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: auto;
  gap: 48px;
`;

const CloseBox = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h1`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  margin: 0;
  padding: 0;
  line-height: 125%;
`;

const Context = styled.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #F0F0F0;
  margin: 0;
  padding: 0;
  line-height: 150%;
`;

const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 75px;
`;

const LikeBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: auto;
  height: 32px;
  cursor: pointer;
`;

const LikeAlign = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const LikeIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const LikeCount = styled.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
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
`;

const PageDownIconBox = styled.div`
  display: flex;
  width: 20px;
  height: 75px;
  align-items: center;
  justify-content: center;
`;

export default function WorkInfo({
  titleKor,
  titleEng,
  context,
  isOpen = true,
  onClose,
}) {
  const base = import.meta.env.BASE_URL || '/';
  return (
    <Container $open={!!isOpen}>
      <GapCol>
        <ContentCol>
          <CloseBox onClick={() => { if (typeof onClose === 'function') { onClose(); } }}>
            <img src={`${base}icons/closeIcon.svg`} alt="Close Icon" />
          </CloseBox>
          <Content>
            <Title>{titleKor}</Title>
            <Context>{context}</Context>
          </Content>
        </ContentCol>

        <IconRow>
          <LikeBtn onClick={() => { /* 좋아요 기능 추후 구현 */ }}>
            <LikeAlign>
              <LikeIcon src={`${base}icons/likeIcon(white).svg`} alt="Like Icon" />
              <LikeCount>0</LikeCount>
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
            <PageDownIconBox>
              <img src={`${base}icons/pageDownIcon.svg`} alt="Page Down Icon" />
            </PageDownIconBox>
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
};
