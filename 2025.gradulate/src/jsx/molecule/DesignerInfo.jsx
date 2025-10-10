// DesignerInfo.jsx
// 디자이너 정보 컴포넌트 (molecule)

import React from 'react';
import styled from 'styled-components';
import DesignerCard from '../atom/DesignerCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 775px;
  height: 945px;
  gap: 20px;
  margin: 140px 0 120px 77px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 810px;
  height: auto;
  gap: 76px;
`;

const Title = styled.h1`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 80px;
  font-weight: 600;
  color: #202020;
  margin: 0;
  padding: 0;
  height: 95px;
  width: auto;
`;

export default function DesignerInfo({ designers }) {
  return (
    <Container>
      <Title>Designer</Title>
      <ContentWrapper>
        {designers.map((designer, index) => (
          <DesignerCard
            key={index}
            nameKor={designer.nameKor}
            nameEn={designer.nameEn}
            part={designer.role}
            sns={designer.sns}
            eMail={designer.eMail}
            imgUrl={designer.imgUrl}
          />
        ))}
      </ContentWrapper>
    </Container>
  );
}