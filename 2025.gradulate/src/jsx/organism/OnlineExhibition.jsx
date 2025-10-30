import styled from 'styled-components';
import OutlineButton from '../atom/OutlineButton';

const Section = styled.section`
  padding: 0;
`;

const Wrap = styled.div`
  position: relative; height: 1045px; overflow: hidden;
`;

const Title = styled.div`
  position: absolute; left: 0; right: 0; top: 0; text-align: center;
  color: #FFFFFF; font-family: Pretendard, system-ui; font-weight: 700; font-size: 40px; line-height: 64px;
`;

const Bg = styled.div`
  position: absolute; left: 40px; right: 40px; top: 140px; height: 905px; border-radius: 4px; overflow: hidden;
`;

const BgImg = styled.img`
  width: 100%; height: 100%; object-fit: cover;
`;

const Card = styled.div`
  position: absolute; left: 732px; top: 327px; width: 787px; height: 492px; background: #FFFCFD;
`;

const H1 = styled.div`
  position: absolute; left: 610px; top: 496px; width: 700px; text-align: center;
  color: #000; font-family: Pretendard, system-ui; font-weight: 600; font-size: 48px; line-height: 76.8px;
`;

const BtnBox = styled.div`
  position: absolute; left: 860px; top: 935px;
`;

export default function OnlineExhibition() {
  return (
    <Section aria-labelledby="online-title">
      <Wrap>
        <Title id="online-title">Online Exhibition</Title>
        <Bg>
          <BgImg src="https://placehold.co/1840x905" alt="Online Exhibition background" />
        </Bg>
        <Card aria-hidden />
        <H1>오브제 활용 인터렉티브 세션으로 교체중</H1>
        <BtnBox>
          <OutlineButton label="View More" />
        </BtnBox>
      </Wrap>
    </Section>
  );
}
