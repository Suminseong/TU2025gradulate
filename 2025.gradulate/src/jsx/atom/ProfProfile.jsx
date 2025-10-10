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
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 20px;
  width: 983px;
  height: auto;
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
`;

const Label = styled.p`
  font-weight: 500;
  margin: 0;
  font-size: 20px;
  line-height: 22.4px;
  color: #606060;
  width: 135px;
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
            <Label>학력</Label>
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
  imgSrc: 'https://via.placeholder.com/240x332.png?text=Profile+Image',
  imgAlt: '홍길동 교수의 프로필 이미지',
};
