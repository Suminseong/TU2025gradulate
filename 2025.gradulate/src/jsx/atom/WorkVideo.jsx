// WorkVideo.jsx
// 작품 상세페이지 - 비디오 컴포넌트 (atom)
// Vimeo 사용한 컴포넌트

import styled from 'styled-components';

const VideoWrapper = styled.div`
    width: 100%; // 임시값
    margin-top: 50px;
    max-width: ${props => (props.$isInfoOpen ? '100%' : '1800px')};
@media (max-width: 830px) {
    margin-top: 20px;
}
`;

const RatioBox = styled.div`
    position: relative;
    width: 100%;
    max-width: 100vw;
    padding-top: 56.25%; // 16:9 비율
`;

const Iframe = styled.iframe`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`

export default function WorkVideo({ videoId, isInfoOpen }) {
  // videoId가 숫자든 문자열이든 문자열로 변환
  const id = String(videoId || '').trim();

  // Vimeo 플레이어 URL 생성
  const src = `https://player.vimeo.com/video/${id}?badge=0&autopause=0&title=0&byline=0&portrait=0&app_id=58479`;

  return (
    <VideoWrapper $isInfoOpen={isInfoOpen}>
      <RatioBox>
        <Iframe
          src={src}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Embedded Vimeo"
        ></Iframe>
      </RatioBox>
    </VideoWrapper>
  );
}
