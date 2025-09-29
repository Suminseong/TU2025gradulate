import React from 'react';
import Hero from '../organism/Hero';
import BrandConcept from '../organism/BrandConcept';
import Gallery from '../organism/Gallery';
import OnlineExhibition from '../organism/OnlineExhibition.jsx';
import ExpoWorksList from '../organism/ExpoWorksList';
import InstagramBlock from '../organism/InstagramBlock';
import VenueAccess from '../organism/VenueAccess.jsx';

export default function Main() {
  // 순서만 조절하면 위치 옮기기 가능. 옮길 때 그라데이션 옵션만 체크
  const sections = [
    <Hero key="hero" />,
    <BrandConcept key="brand" />,
    <Gallery key="gallery" />,
    <OnlineExhibition key="online" />,
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