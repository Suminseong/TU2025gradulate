// ProjectCard.jsx
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

const CardWrap = styled.div`
  position: relative;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;  
 }
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 445px;
  height: 385px;
  background-color: #FFFFFF;
  @media (max-width: 640px) {
    width: 173px;
    height: 151px;
 }
`;

const ImageWrap = styled.div`
  display: flex;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;
  }
`;

const Img = styled.img`
  display: flex;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  object-fit: cover;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;  
 }
`;

const HoverLayer = styled.div`
  display: flex;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(102, 102, 102, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
  position: absolute;
  backdrop-filter: blur(4px);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;
    opacity: 1;
    backdrop-filter: none;
    background: linear-gradient(180deg, rgba(102, 102, 102, 0) 60%, rgba(0, 0, 0, 0.6) 100%);
  }
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
  @media (max-width: 640px) {
   bottom: 4px;
   left: 12px;
 }
`;

const TitleMain = styled.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  width: auto;
  color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 12px;
  }
`;

const TitleSub = styled.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  width: auto;
  color: #FFFFFF;
  @media (max-width: 640px) {
    font-size: 6px;
  }
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 445px;
  height: 32px;
  @media (max-width: 640px) {
    width: 173px;
    height: 14px;
    padding-top: 4px;
 }
`;

const ProfileRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  width: auto;
  height: 20px;
  @media (max-width: 640px) {
    width: auto;
    height: 12px;  
 }
`;

const Name = styled.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 14px;
  font-weight: 300;
  margin: 0;
  color: #121212;
  @media (max-width: 640px) {
    font-size: 10px;  
 }
`;

const ProfileImgs = styled.div`
  display: flex;
  position: relative;
  width: auto;
  height: 20px;
  gap: -12px;
  @media (max-width: 640px) {
    height: 12px;  
 }
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
  @media (max-width: 640px) {
    width: 12px;
    height: 12px;
    margin-left: ${(p) => (p.$ml ? '-8px' : '0')};  
 }
`;

const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  width: 90px;
  height: 20px;
  @media (max-width: 640px) {
    width: 34px;
    height: 12px;
    gap: 4px;  
 }
`;

const IconBox = styled.div`
  display: flex;
  width: auto;
  height: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2px;
  @media (max-width: 640px) {
    height: 12px;
 }
`;

const Icon = styled.div`
  width: 16px;
  height: 16px;
  background-image: url(${(p) => p.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media (max-width: 640px) {
    width: 8px;
    height: 8px;  
 }
`

const IconText = styled.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 12px;
  font-weight: 300;
  margin: 0;
  color: #121212;
  @media (max-width: 640px) {
    font-size: 8px;
 }
`;

function formatCount(n) {
  return typeof n === 'number' && n > 999 ? '999+' : n;
}

export default function ProjectCard({ titleKor, titleEng, nameKor, view, like, href, src, profileImgs, docId }) {
  const likeCount = typeof like === 'number' ? like : 0;
  const viewCount = typeof view === 'number' ? view : 0;
  const handleMouseEnter = (e) => {
    const hoverDiv = e.currentTarget.querySelector('.card-hover');
    if (hoverDiv) hoverDiv.style.opacity = 1;
  };
  const handleMouseLeave = (e) => {
    const hoverDiv = e.currentTarget.querySelector('.card-hover');
    if (hoverDiv) hoverDiv.style.opacity = 0;
  }

  // public 아이콘 경로 정규화 (BASE_URL)
  const base = import.meta.env.BASE_URL || '/';

  const isExternal = /^https?:\/\//i.test(href);

  const CardInner = (
    <>
      <CardWrap>
        <ImageWrap onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <HoverLayer className="card-hover">
            <TitleBox>
              <TitleSub>{titleKor}</TitleSub>
              <TitleMain>{titleEng}</TitleMain>
            </TitleBox>
          </HoverLayer>
          <Img src={src} alt="Project" />
        </ImageWrap>
      </CardWrap>
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
            <Icon src={`${base}icons/likeIcon.svg`} />
            <IconText>{formatCount(likeCount)}</IconText>
          </IconBox>
          <IconBox>
            <Icon src={`${base}icons/viewIcon.svg`} />
            <IconText>{formatCount(viewCount)}</IconText>
          </IconBox>
        </IconRow>
      </BottomRow>
    </>
  );

  return isExternal ? (
    <Wrap as="a" href={href} style={{ textDecoration: 'none' }}>
      {CardInner}
    </Wrap>
  ) : (
    <Wrap as={Link} to={href.startsWith('/') ? href : `/${href}`} style={{ textDecoration: 'none' }}>
      {CardInner}
    </Wrap>
  );
}

ProjectCard.propTypes = {
  titleKor: PropTypes.string.isRequired,
  titleEng: PropTypes.string.isRequired,
  nameKor: PropTypes.string.isRequired,
  view: PropTypes.number,
  like: PropTypes.number,
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  profileImgs: PropTypes.arrayOf(PropTypes.string).isRequired,
  docId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  collection: PropTypes.string,
};

ProjectCard.defaultProps = {
  titleKor: '프로젝트 제목',
  titleEng: 'Project Title',
  nameKor: 'Author Name',
  view: 0,
  like: 0,
  collection: 'works',
};
