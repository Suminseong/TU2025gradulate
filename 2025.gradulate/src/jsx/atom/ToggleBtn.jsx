// ToggleBtn.jsx
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: 120px;
  height: 40px;
  border-radius: 20px;
  background-color: #F0F0F0;
  cursor: pointer;
  padding: 2px;
  position: relative;
  @media (max-width: 1600px) {
    width: 100px;
    height: 34px;
  }
  @media (max-width: 640px) {
    width: 56px;
    height: auto;  
    border-radius: 10px;
    padding: 1px;
 }
`;

const ActiveBtn = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  transition: left 0.3s ease-in-out;
  width: 56px;
  height: 36px;
  border-radius: 18px;
  background-color: #0e0e0e;
  z-index: 1;
  left: ${(p) => (p.$active ? '4px' : '64px')};
  @media (max-width: 1600px) {
    width: 48px;
    height: 30px;
    left: ${(p) => (p.$active ? '4px' : '52px')};  
  }
  @media (max-width: 640px) {
    width: 28px;
    height: 18px;
    left: ${(p) => (p.$active ? '1px' : '31px')};  
 }
`;


const TextProf = styled.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  line-height: 16px;
  color: #Fafafa;
  z-index: 2;
  transition: left 0.3s ease-in-out;
  margin-left: 16px;
  color: ${(p) => (p.$active ? '#Fafafa' : '#909090')};
  font-weight: ${(p) => (p.$active ? '700' : '400')};
  @media (max-width: 1600px) {
    font-size: 14px;
  }
  @media (max-width: 640px) {
    font-size: 8px;
    margin-left: 8px;
  }
`;

const TextStudent = styled(TextProf)`
  margin-left: 32px;
  color: ${(p) => (p.$active ? '#909090' : '#Fafafa')};
  font-weight: ${(p) => (p.$active ? '400' : '700')};
  @media (max-width: 1600px) {
    font-size: 14px;
    margin-left: 22px;
  }
  @media (max-width: 640px) {
    font-size: 8px;
    margin-left: 16px;
  }
`;

export default function ToggleBtn({
    path = 'student',
    isActive = false,
    onClick,
}) {
    return (
        <Container onClick={onClick}>
            <TextProf $active={isActive}>교수</TextProf>
            <TextStudent $active={isActive}>학생</TextStudent>
            <ActiveBtn $active={isActive} />
        </Container>
    );
}

ToggleBtn.propTypes = {
    path: PropTypes.oneOf(['student', 'professor']),
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
};
