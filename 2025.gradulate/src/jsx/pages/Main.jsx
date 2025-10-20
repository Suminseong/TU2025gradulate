import React from 'react';
import styled from 'styled-components';
import Hero from '../organism/Hero';
import BrandConcept from '../organism/BrandConcept';
import Gallery from '../organism/Gallery';
import ExpoWorksList from '../organism/ExpoWorksList';
import InstagramBlock from '../organism/InstagramBlock';
import VenueAccess from '../organism/VenueAccess.jsx';

const HideOnMobile = styled.div`
  @media (max-width: 640px) {
    display: none !important;
  }
`;

const Title = styled.div`
  margin: 400px auto 0 auto;
  text-align: center;
  color: #fff;
  font-family: Pretendard, system-ui;
  font-weight: 700;
  font-size: 40px;
  line-height: 64px;
  @media (max-width: 640px) {
    position: static;
    font-size: 20px;
    line-height: 1.3;
    margin: 16px 0 8px 0;
  }
`;

export default function Main() {
  // 순서만 조절하면 위치 옮기기 가능. 옮길 때 그라데이션 옵션만 체크
  const sections = [
    <Hero key="hero" />,
    <BrandConcept key="brand" />,
    <Gallery key="gallery" />,
    // <HideOnMobile key="online"><OnlineExhibition /></HideOnMobile>,
    <Title key="works-title">TU-EXPO Works</Title>,
    <ExpoWorksList key="works" />,
    <InstagramBlock key="insta" />,
    <VenueAccess key="venue" />,
  ];
  return (
    <div style={{ background: '#121212', minHeight: '100vh' }}>
      {sections}
    </div>
  );
}