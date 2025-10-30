// DropdownBtn.jsx
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 120px;
  height: 40px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 640px) {
   width: auto;
   height: 14px; 
  }
`;

const CateWrapper = styled(Wrapper)`
  justify-content: flex-start;
`;

const IconBox = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
  @media (max-width: 640px) {
    width: 14px;
    height: 14px;
  }
`;

const Label = styled.p`
  width: auto;
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #191919;
  margin: 0;
  @media (max-width: 1500px) {
   font-size: 16px;  
  }
  @media (max-width: 640px) {
   font-size: 13px;  
 }
`;

const CateLabel = styled(Label)`
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 640px) {
   font-size: 13px;  
  }
  @media (max-width: 375px) {
    font-size: 12px;
  }
`


export default function DropdownBtn({
    label,
    style,
    mode,
}) {
  const base = import.meta.env.BASE_URL || '/';
    const isMobile = window.matchMedia('(max-width: 640px)').matches;
    const iconSrc = isMobile
      ? `${base}icons/dropDownMobileIcon.svg`
      : `${base}icons/arrowDropdownIcon.svg`;

    if ( mode === 'category' ) {
      return (
        <CateWrapper style={style}>
          <CateLabel>{label}</CateLabel>
          <IconBox>
            <img src={`${base}icons/arrowDropdownIcon.svg`} alt="dropdownIcon" />
          </IconBox>
        </CateWrapper>
      );
    }
    else {
      return (
        <Wrapper style={style}>
          <Label>{label}</Label>
          <IconBox>
            <img src={iconSrc} alt="dropdownIcon" />
          </IconBox>
        </Wrapper>
      );
    }
}

DropdownBtn.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
};
