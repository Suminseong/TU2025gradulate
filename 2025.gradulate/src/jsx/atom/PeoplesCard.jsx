// PeoplesCard.jsx
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  letter-spacing: 0.24px;
  color: #202020;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  cursor: pointer;
  width: 445px;
  height: 393px;
  border-radius: 16px;
  overflow: hidden;
`;

const ImgBox = styled.div`
  position: relative;
  width: 55%;
  height: 100%;
  flex: 0 0 auto;
`;

const Img = styled.img`
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex: 0 0 auto;
  z-index: 1;
  border: none;
  margin: 0;
  padding: 0;
`;

const Gradient = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #f6f6f6 100%);
  z-index: 2;
  width: 20%;
`;

const Content = styled.div`
  width: 45%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 2;
  font-size: 13px;
  font-weight: 400;
  background: #f6f6f6;
  right: 0;
  padding: 50px 0 50px 15px;
`;

const TextCol = styled.div`
  margin: 0;
  padding: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export default function PeoplesCard({
    nameKor,
    nameEng,
    role,
    sns,
    eMail,
    imgSrc,
    imgAlt,
}) {
    return (
    <Card>
        <ImgBox>
            <Img src={imgSrc} alt={imgAlt} />
            <Gradient />
        </ImgBox>
        <Content>
            <TextCol style={{ top: '50px' }}>
                <h1 style={{fontSize: '28px', fontWeight: '700', margin: '0'}}>{nameKor}</h1>
                <p style={{margin: '0'}}>{nameEng}</p>
            </TextCol>
            <TextCol>
                <p style={{margin: '0'}}>{role}</p>
                {Array.isArray(sns) && sns.length > 0 ? (
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '4px 0 0 0' }}>
                        {sns.map((item, idx) => (
                            <a
                                key={`${item.platform}-${idx}`}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', color: 'inherit', wordBreak: 'break-all' }}
                                aria-label={`${nameKor} ${item.platform}`}
                            >
                                {item.url}
                            </a>
                        ))}
                    </div>
                ) : null}
                <p style={{margin: '0'}}>{eMail ? (<a style={{textDecoration: 'none', color: 'inherit'}} href={`mailto:${eMail}`}>{eMail}</a>) : null}</p>
            </TextCol>
        </Content>
    </Card>
  );
}

PeoplesCard.defaultProps = {
    sns: [],
};

PeoplesCard.propTypes = {
    nameKor: PropTypes.string.isRequired,
    nameEng: PropTypes.string,
    role: PropTypes.string,
    sns: PropTypes.arrayOf(
        PropTypes.shape({
            platform: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ),
    eMail: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
};
