// ProjectCard.jsx
import PropTypes from 'prop-types';

// 프로젝트 카드 컴포넌트
export default function ProjectCard({ titleKor, titleEng, nameEng, view, like , href }) {
    const cardWrapperStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '445px',
        height: '385px',
        backgroundColor: '#FFFFFF'
    };

    const cardImageWrapperStyle = {
        display: 'flex',
        width: '445px',
        height: '353px',
        borderRadius: '16px'
    };

    const cardImageStyle = {
        display: 'flex',
        width: '445px',
        height: '353px',
        borderRadius: '16px',
        objectFit: 'cover',
    };

    const cardImageHoverStyle = {
        display: 'flex',
        width: '445px',
        height: '353px',
        borderRadius: '16px',
        // 그라데이션 위 #666666 0, 아래 #000000 100
        background: 'linear-gradient(180deg, rgba(102, 102, 102, 0) 0%, rgba(0, 0, 0, 0.6) 100%)',
        position: 'absolute',
        // 백그라운드 블러 강도 8px
        backdropFilter: 'blur(4px)',
        opacity: 0,
        transition: 'opacity 0.3s ease-in-out',
        cursor: 'pointer',
    };

    const cardTitleWrapperStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '22px',
        left: '20px',
        width: 'auto',
        height: '46px'
    };

    const cardMainTitleStyle = {
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        fontSize: '24px',
        fontWeight: '700',
        margin: '0',
        padding: '0',
        width: 'auto',
        color: '#FFFFFF'
    };

    const cardSubTitleStyle = {
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        fontSize: '12px',
        fontWeight: '400',
        margin: '0',
        padding: '0',
        width: 'auto',
        color: '#FFFFFF'
    };

    const cardTextWrapperStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '445px',
        height: '32px',
    };

    const cardProfileWrapperStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '4px',
        width: 'auto',
        height: '20px',
    };

    const cardNameTextStyle = {
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        fontSize: '14px',
        fontWeight: '300',
        margin: '0',
        color: '#121212'
    };

    const cardProfileImageWrapperStyle = {
        display: 'flex',
        position: 'relative',
        width: 'auto',
        height: '20px',
        gap: '-12px'
    };

    const cardProfileImageStyle = {
        display: 'flex',
        width: '20px',
        height: '20px',
        borderRadius: '50px',
        objectFit: 'cover',
        border: '1px solid #FFFFFF',
        zIndex: 3,
    };

    const secondProfileStyle = {
        marginLeft: '-12px',
        zIndex: 1,
    }

    const cardIconWrapperStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '8px',
        width: '90px',
        height: '20px',
    };

    const cardIconStyle = {
        display: 'flex',
        width: 'auto',
        height: '20px',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2px'
    };

    const cardIconTextStyle = {
        fontFamily: 'Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif',
        fontSize: '12px',
        fontWeight: '300',
        margin: '0',
        color: '#121212'
    };

    // 호버 시 opacity 1
    const handleMouseEnter = (e) => {
        const hoverDiv = e.currentTarget.querySelector('.card-hover');
        hoverDiv.style.opacity = 1;
    };
    const handleMouseLeave = (e) => {
        const hoverDiv = e.currentTarget.querySelector('.card-hover');
        hoverDiv.style.opacity = 0;
    }

    // 이 컴포넌트를 클릭 했을 때, 상세 페이지로 이동 (임시로 404로 링크)
    const handleClick = () => {
        window.location.href = href;
    };

    return (
        <div style={{ ...cardWrapperStyle }} onClick={handleClick}>
            <div style={{ ...cardImageWrapperStyle }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="card-hover" style={{ ...cardImageHoverStyle }}>
                    <div style={{ ...cardTitleWrapperStyle }}>
                        <p style={{ ...cardSubTitleStyle }}>{titleKor}</p>
                        <p style={{ ...cardMainTitleStyle }}>{titleEng}</p>
                    </div>
                </div>
                <img style={{ ...cardImageStyle }} src="../thumbnailExample.png" alt="Project" />
            </div>
            <div style={{ ...cardTextWrapperStyle }}>
                <div style={{ ...cardProfileWrapperStyle }}>
                    <div style={{ ...cardProfileImageWrapperStyle }}>
                        <img style={{ ...cardProfileImageStyle }} src="../public/김예준.jpg" alt="Profile1" />
                        <img style={{ ...cardProfileImageStyle, ...secondProfileStyle }} src="../public/김예준.jpg" alt="Profile2" />
                    </div>
                    <p style={{ ...cardNameTextStyle }}>{nameEng}</p>
                </div>
                <div style={{ ...cardIconWrapperStyle }}>
                    <div style={{ ...cardIconStyle }}>
                        <img src="../icons/likeIcon.svg" alt="LikeIcon" />
                        <p style={{ ...cardIconTextStyle }}>{like}</p>
                    </div>
                    <div style={{ ...cardIconStyle }}>
                        <img src="../icons/viewIcon.svg" alt="ViewIcon" />
                        <p style={{ ...cardIconTextStyle }}>{view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    titleKor: PropTypes.string.isRequired,
    titleEng: PropTypes.string.isRequired,
    nameEng: PropTypes.string.isRequired,
    view: PropTypes.number.isRequired,
    like: PropTypes.number.isRequired,
};

ProjectCard.defaultProps = {
    titleKor: '프로젝트 제목',
    titleEng: 'Project Title',
    nameEng: 'Author Name',
    view: 0,
    like: 0,
};
