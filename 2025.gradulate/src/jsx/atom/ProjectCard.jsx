// ProjectCard.jsx
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 445px;
  height: 385px;
  background-color: #FFFFFF;
`;

const ImageWrap = styled.div`
  display: flex;
  width: 445px;
  height: 353px;
  border-radius: 16px;
`;

const Img = styled.img`
  display: flex;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  object-fit: cover;
`;

const HoverLayer = styled.div`
  display: flex;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(102, 102, 102, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
  position: absolute;
  backdrop-filter: blur(4px);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  bottom: 22px;
  left: 20px;
  width: auto;
  height: 46px;
`;

const TitleMain = styled.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  width: auto;
  color: #FFFFFF;
`;

const TitleSub = styled.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  width: auto;
  color: #FFFFFF;
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 445px;
  height: 32px;
`;

const ProfileRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  width: auto;
  height: 20px;
`;

const Name = styled.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 14px;
  font-weight: 300;
  margin: 0;
  color: #121212;
`;

const ProfileImgs = styled.div`
  display: flex;
  position: relative;
  width: auto;
  height: 20px;
  gap: -12px;
`;

const ProfileImg = styled.img`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  object-fit: cover;
  border: 1px solid #FFFFFF;
  z-index: ${(p) => p.$z || 3};
  margin-left: ${(p) => (p.$ml ? '-12px' : '0')};
`;

const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  width: 90px;
  height: 20px;
`;

const IconBox = styled.div`
  display: flex;
  width: auto;
  height: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

const IconText = styled.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 12px;
  font-weight: 300;
  margin: 0;
  color: #121212;
`;

export default function ProjectCard({ titleKor, titleEng, nameKor, view, like , href, src, profileImgs }) {
  const handleMouseEnter = (e) => {
    const hoverDiv = e.currentTarget.querySelector('.card-hover');
    if (hoverDiv) hoverDiv.style.opacity = 1;
  };
  const handleMouseLeave = (e) => {
    const hoverDiv = e.currentTarget.querySelector('.card-hover');
    if (hoverDiv) hoverDiv.style.opacity = 0;
  }

  const handleClick = () => {
    window.location.href = href;
  };

  return (
    <Wrap onClick={handleClick}>
      <div style={{ position: 'relative', width: '445px', height: '353px', borderRadius: '16px' }}>
        <ImageWrap onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <HoverLayer className="card-hover">
            <TitleBox>
              <TitleSub>{titleKor}</TitleSub>
              <TitleMain>{titleEng}</TitleMain>
            </TitleBox>
          </HoverLayer>
          <Img src={src} alt="Project" />
        </ImageWrap>
      </div>
      <BottomRow>
        <ProfileRow>
          <ProfileImgs>
            {profileImgs.map((imgUrl, index) => (
              <ProfileImg key={index} src={imgUrl} alt={`Profile${index + 1}`} $z={3 - index} $ml={index > 0} />
            ))}
          </ProfileImgs>
          <Name>{nameKor}</Name>
        </ProfileRow>
        <IconRow>
          <IconBox>
            <img src="../icons/likeIcon.svg" alt="LikeIcon" />
            <IconText>{like}</IconText>
          </IconBox>
          <IconBox>
            <img src="../icons/viewIcon.svg" alt="ViewIcon" />
            <IconText>{view}</IconText>
          </IconBox>
        </IconRow>
      </BottomRow>
    </Wrap>
  );
}

ProjectCard.propTypes = {
  titleKor: PropTypes.string.isRequired,
  titleEng: PropTypes.string.isRequired,
  nameEng: PropTypes.string.isRequired,
  view: PropTypes.number.isRequired,
  like: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {
  titleKor: '프로젝트 제목',
  titleEng: 'Project Title',
  nameEng: 'Author Name',
  view: 0,
  like: 0,
};
