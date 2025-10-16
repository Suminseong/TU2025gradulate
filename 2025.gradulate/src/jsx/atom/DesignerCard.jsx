// DesignerCard.jsx
// 디자이너 카드 컴포넌트

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  letter-spacing: 0.24px;
  color: #202020;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  width: auto;
  height: 387px;
  gap: 40px;
  @media (max-width: 640px) {
    height: 231px;
    gap: 16px;
}
`;

const ImageContainer = styled.div`
  display: flex;
  width: 290px;
  height: 387px;
  border-radius: 4px;
  @media (max-width: 640px) {
    width: 173px;
    height: 231px;
    border-radius: 4px;
}
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  display: block;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 8px);
  width: auto;
  @media (max-width: 640px) {
    height: 100%;
}
`;

const NameWrapper = styled.div`
  display: flex;
  height: auto;
  padding: 0;
  margin: 0;
  flex-direction: column;
  gap: 0px;
`;

const NameKor = styled.h1`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 42px;
  font-weight: 700;
  line-height: auto;
  color: #202020;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 20px;
}
`;

const NameEng = styled.h2`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: auto;
  color: #202020;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 8px;
}
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 84px;
  @media (max-width: 640px) {
    height: 38px;
}
`;

const InfoTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90px;
  height: 84px;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    width: 38px;
    height: 38px;
}
`;

const InfoTitle = styled.h3`
  display: flex;
  height: 20px;
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 19.2px;
  color: #404040;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 8px;
    line-height: 7.68px;
}
`;

const InfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: auto;
  height: 84px;
  line-height: 19.2px;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    height: 38px;
}
`;

const InfoText = styled.p`
  display: flex;
  height: 20px;
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #202020;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 8px;
    line-height: 7.68px;
}
`;

export default function DesignerCard({
    nameKor,
    nameEng,
    part,
    sns,
    eMail,
    imgUrl,
    imgAlt,
}) {
    return (
        <Card>
            <ImageContainer>
                <Img src={imgUrl} alt={imgAlt} />
            </ImageContainer>
            <ContentWrapper>
                <NameWrapper>
                    <NameKor>{nameKor}</NameKor>
                    <NameEng>{nameEng}</NameEng>
                </NameWrapper>
                <InfoWrapper>
                    <InfoTitleWrapper>
                        <InfoTitle>Part</InfoTitle>
                        <InfoTitle>SNS</InfoTitle>
                        <InfoTitle>E-mail</InfoTitle>
                    </InfoTitleWrapper>
                    <InfoTextWrapper>
                        <InfoText>{part}</InfoText>
                        <InfoText>{sns}</InfoText>
                        <InfoText>{eMail}</InfoText>
                    </InfoTextWrapper>
                </InfoWrapper>
            </ContentWrapper>
        </Card>
    );
}

DesignerCard.propTypes = {
    nameKor: PropTypes.string.isRequired,
    nameEng: PropTypes.string.isRequired,
    part: PropTypes.string,
    sns: PropTypes.string,
    eMail: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
};

DesignerCard.defaultProps = {
    sns: 'N/A',
    eMail: 'N/A',
};