// DesignerInfo.jsx
// 디자이너 정보 컴포넌트 (molecule)

import styled from 'styled-components';
import DesignerCard from '../atom/DesignerCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 775px;
  height: auto;
  min-height: 700px;
  gap: 20px;
  margin: 140px 0 120px 77px;
  @media (max-width: 1300px) {
    width: auto;
    height: auto;
    margin: 100px 0px 120px 16px;
  }
  @media (max-width: 1100px) {
    min-height: 500px;
  }
  @media (max-width: 830px) {
    width: calc(100vw - 32px);
    min-height: 400px;
    margin: 100px 0px 100px 16px;
}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 810px;
  height: auto;
  gap: 76px;
  @media (max-width: 1300px) {
    width: auto;
  }
  @media (max-width: 830px) {
    width: 100%;
    gap: 21px;
}
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
  @media (max-width: 1300px) {
    font-size: 48px;
    height: 58px;
  }
  @media (max-width: 1100px) {
    font-size: 40px;
    height: 48px;
  }
  @media (max-width: 830px) {
    font-size: 32px;
    height: 38px;
}
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
            nameEng={designer.nameEng}
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