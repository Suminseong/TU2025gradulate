// WorkInfo.jsx
// 작품 정보 컴포넌트
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  z-index: 1000;
  transform: translateX(${props => (props.$open ? '0' : '-350px')});
  transition: transform 500ms ease-out;
  pointer-events: ${props => (props.$open ? 'auto' : 'none')};
  @media (max-width: 640px) {
    width: 100vw;
    height: auto;
    position: relative;
    top: 0;
    left: 0;
    padding: 40px 16px;
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
}
`;

const ContentCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: auto;
  gap: 48px;
  @media (max-width: 640px) {
    flex-direction: row;
    width: auto;
    gap: 16px;
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
  gap: 16px;
  @media (max-width: 640px) {
    width: auto;
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
`;

const Thumbnail = styled.div`
  display: none;
  width: 172px;
  height: 240px;
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
    width: auto;
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
}) {

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
          <Thumbnail $src={src} />
        </ContentCol>

        <IconRow>
          <LikeBtn onClick={() => { /* 좋아요 기능 추후 구현 */ }}>
            <LikeAlign>
              <LikeIcon $src={`${base}icons/likeIcon(white).svg`} aria-label="Like icon" />
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
};
