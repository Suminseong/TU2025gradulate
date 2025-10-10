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
`;

const Text = styled.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  line-height: 24px;
  color: #Fafafa;
  z-index: 2;
  transition: left 0.3s ease-in-out;
`;

export default function ToggleBtn({
    path = 'student',
    isActive = false,
    onClick,
}) {
    return (
        <Container onClick={onClick}>
            <Text style={{ marginLeft: '16px', color: isActive ? '#Fafafa' : '#909090', fontWeight: isActive ? '700' : '400'}}>교수</Text>
            <Text style={{ marginLeft: '32px', color: isActive ? '#909090' : '#Fafafa', fontWeight: isActive ? '400' : '700'}}>학생</Text>
            <ActiveBtn $active={isActive} />
        </Container>
    );
}

ToggleBtn.propTypes = {
    path: PropTypes.oneOf(['student', 'professor']),
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
};
