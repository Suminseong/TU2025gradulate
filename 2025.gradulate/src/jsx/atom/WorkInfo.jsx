// WorkInfo.jsx
// 작품 정보 컴포넌트
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 80px;
  bottom: 0px;
  left: 0;
  width: 350px;
  height: auto;
  background-color: #121212;
  padding: 60px 40px;
  box-sizing: border-box;
  z-index: 1000;
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
    context
}) {
    return (
        <Container>
            <GapCol>
                <ContentCol>
                    <CloseBox onClick={() => { /* 닫기 기능 추후 구현 */ }}>
                        <img src="../icons/closeIcon.svg" alt="Close Icon" />
                    </CloseBox>
                    <Content>
                        <Title>{titleKor}</Title>
                        <Context>{context}</Context>
                    </Content>
                </ContentCol>

                <IconRow>
                    <LikeBtn onClick={() => { /* 좋아요 기능 추후 구현 */ }}>
                        <LikeAlign>
                            <LikeIcon src="../icons/likeIcon(white).svg" alt="Like Icon" />
                            <LikeCount>0</LikeCount>
                        </LikeAlign>
                    </LikeBtn>
                    <PageDown onClick={() => { window.scrollBy({ top: window.innerHeight, behavior: 'smooth' }); }}>
                        <PageDownText>Designer Info</PageDownText>
                        <PageDownIconBox>
                            <img src="../icons/pageDownIcon.svg" alt="Page Down Icon" />
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
};

WorkInfo.defaultProps = {
    titleKor: '작품 제목(한글)',
    titleEng: 'Work Title (English)',
    context: '이곳에 작품 설명이 들어갑니다. 작품에 대한 간단한 설명이나 소개를 작성해주세요. 최대 3줄 정도로 요약하는 것이 좋습니다.',
};
