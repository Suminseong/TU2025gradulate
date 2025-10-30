// ProfProfile.jsx
import PropTypes from 'prop-types';
import styled from 'styled-components';

// 교수 프로필 카드 (atom)
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 100px;
  @media (max-width: 640px) {
    margin-top: 20px;   
 }
`;

const ProfileRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
  width: auto;
  height: auto;
  margin-top: 20px;
  @media (max-width: 640px) {
    margin-top: 0;  
    gap: 16px;
 }
`;

const ProfileImg = styled.img`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 240px;
  height: 332px;
  border: 1px solid #d0d0d0;
  object-fit: cover;
  @media (max-width: 1600px) {
    width: 200px;
    height: 276px;
  }
  @media (max-width: 1200px) {
    width: 180px;
    height: 252px;
  }
  @media (max-width: 640px) {
    width: 78px;
    height: 108px;
 }
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 20px;
  width: 983px;
  height: auto;
  @media (max-width: 1600px) {
    width: 680px;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 640px) {
    width: 100%;  
    margin: 0 16px;
 }
`;

const NameKor = styled.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 28px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: auto;
  height: 32px;
  color: #212121;
  margin: 0 0 12px 0;
  @media (max-width: 1600px) {
    font-size: 24px;
  }
  @media (max-width: 640px) {
    font-size: 18px;
 }
   @media (max-width: 393px) {
    font-size: 16px;
  }
`;

const Row = styled.div`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: auto;
  padding: 22px 0 40px 0;
  margin: 0;
  border-top: 1px solid #e0e0e0;
  @media (max-width: 640px) {
    padding: 6px 0 12px 0;
 }
  @media (max-width: 393px) {
    padding: 4px 0 8px 0;
  }
`;

const Label = styled.p`
  font-weight: 500;
  margin: 0;
  font-size: 20px;
  line-height: 22.4px;
  color: #606060;
  width: 135px;
  @media (max-width: 1600px) {
    font-size: 16px;
    width: 110px;
  }
  @media (max-width: 640px) {
    font-size: 10px;
    width: 75px;
 }
  @media (max-width: 393px) {
    font-size: 8px;
    width: 60px;
  }
`;

const ValueCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
`;

const Value = styled.p`
  font-weight: 300;
  margin: 0;
  font-size: 16px;
  line-height: 22.4px;
  color: #000000;
  @media (max-width: 1600px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media (max-width: 640px) {
    font-size: 10px;
    line-height: 18px;
 }
   @media (max-width: 393px) {
    font-size: 8px;
    line-height: 14px;
  }
`;

export default function ProfProfile({ nameKor, rank, eMail, education, field, imgSrc, imgAlt }) {
  const renderNumbered = (val) => {
    if (Array.isArray(val)) {
      return (
        <ValueCol>
          {val.map((item, idx) => (
            <Value key={idx}>{item}</Value>
          ))}
        </ValueCol>
      );
    }
    if (typeof val === 'string' && val) {
      return (
        <ValueCol>
          <Value>{val}</Value>
        </ValueCol>
      );
    }
    return null;
  };

  return (
    <Wrapper>
      <ProfileRow>
        <ProfileImg src={imgSrc} alt={imgAlt} />
        <TextWrap>
          <NameKor>{nameKor}</NameKor>
          <Row>
            <Label>직위(직급)</Label>
            <Value>{rank}</Value>
          </Row>
          <Row>
            <Label>이메일</Label>
            <Value>{eMail}</Value>
          </Row>
          <Row>
            <Label>약력</Label>
            {renderNumbered(education)}
          </Row>
          <Row>
            <Label>전문 분야</Label>
            {renderNumbered(field)}
          </Row>
        </TextWrap>
      </ProfileRow>
    </Wrapper>
  );
}

ProfProfile.propTypes = {
  nameKor: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  eMail: PropTypes.string.isRequired,
  education: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  field: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

ProfProfile.defaultProps = {
  nameKor: '홍길동',
  rank: '교수',
  eMail: 'honggildong@example.com',
  education: [],
  field: [],
  imgSrc: `${import.meta.env.BASE_URL}thumbnailExample.png`,
  imgAlt: '홍길동 교수의 프로필 이미지',
};