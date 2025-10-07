//Works.jsx
//작품 상세페이지

import React from 'react';
import WorkInfo from '../atom/WorkInfo';
import DesignerInfo from '../molecule/DesignerInfo';
import { useParams } from 'react-router-dom';
import projectsData from '../../data/projects.json';
import studentsData from '../../data/students.json';

const PAGE_SIDE = 40;

const Img = ({ src, alt }) => (<img src={src} alt={alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />);

const LETTER_TO_CAT = {
    'A': 'c0', // AI & Robot
    'E': 'c1', // Edu & Kids
    'H': 'c2', // Health Care
    'I': 'c3', // IT & Tech
    'L': 'c4', // Living
    'M': 'c5', // Mobility
}


// 1920에서는 괜찮은데 줄어들면 이미지가 너무 작아짐
// 해당 문제 해결해야함
function PageContainer({ children }) {
    return (
        <div style={{ position: 'relative', background: '#fff' }}>
            <div style={{
                paddingLeft: '350px',
                paddingRight: PAGE_SIDE,
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh'
            }}>
                {children}
            </div>
        </div>
    );
}



export default function Work() {
    // 워크 페이지 헤더가 그라데이션이 아닌 흰색 배경으로 고정되어야 함
    // → NavHeaderMode를 변경해서 적용해야하는데 지금 적용이 안되는 상태임 나중에 Nav 손봐야함
    const { pid } = useParams();
    const match = (pid || '').toUpperCase().match(/^([A-Z])(\d{3})$/);

    let project = null;
    if (match) {
        const [, letter, numStr] = match;
        const category = LETTER_TO_CAT[letter] || null;
        const projectIndex = Math.max(0, parseInt(numStr, 10) - 1); // 1-based to 0-based

        project = projectsData.find(
            p => p.projectNum === projectIndex && (!category || p.category === category)
        );
        if (!project) project = projectsData.find(p => p.projectNum == projectIndex); // 카테고리 무시하고 번호만 맞는거 찾기
    }

    if (!project) {
        return (
            <div style={{ position: 'relative' }}>
                <PageContainer>
                    <WorkInfo
                        titleKor="작품 제목(한글)"
                        titleEng="Work Title (English)"
                        context="이곳은 작품 설명이 들어가는 영역입니다. 작품에 대한 상세한 설명이나 배경, 제작 과정 등을 기술할 수 있습니다. 이 텍스트는 예시로 작성된 내용이며, 실제 작품 설명으로 대체되어야 합니다."
                    />
                    <Img src="https://placehold.co/1530x4000" alt="featured" />
                    <DesignerInfo>  </DesignerInfo>
                </PageContainer>
            </div>
        );
    }

    // 프로젝트에 참여한 디자이너 목록
    // 개인작일때는 1명, 팀작일 때는 2명
    // students.json에서 정보를 찾아서 이름, role, sns, email, imgUrl을 전달
    const designers = (project.members || []).map(memberId => {
        const student = studentsData.find(s => s.num === memberId);
        return student ? {
            nameKor: student.nameKor,
            nameEng: student.nameEng,
            role: student.role || 'Designer',
            sns: student.sns || '-',
            eMail: student.eMail || '',
            imgUrl: student.imgUrl || '../public/김예준.jpg', // 기본 이미지
        } : null;
    }).filter(Boolean);

    // 프로젝트 대표 디자이너 이름 (프로젝트 카드에 표시하기 위함)
    const designerName = designers.length > 0 ? designers[0].nameEng : 'Unknown Designer';


    const CAT_CODE_TO_LETTER = {
        'c0': 'A',
        'c1': 'E',
        'c2': 'H',
        'c3': 'I',
        'c4': 'L',
        'c5': 'M',
    }
    const catLetter = CAT_CODE_TO_LETTER[project.category] || 'A'
    const num3 = String(project.projectNum ?? project.num).padStart(3, '0');

    const basePath = `../public/projects/${project.projectNum}`
    const galleryCount = Number(project.galleryCount || 0);
    const galleryImages = Array.from({ length: galleryCount }, (_, idx) => `${basePath}/gallery/${idx}.jpg`);
    return (
        <div style={{ position: 'relative' }}>
            <PageContainer>
                <WorkInfo
                    titleKor={project.titleKor}
                    titleEng={project.titleEng}
                    context={project.description || 'null'}
                />

                {galleryImages.length > 0 ? (
                    galleryImages.map((src, i) => (
                        <Img style={{minHeight : '100vh'}} key={i} src={src} alt={`project-${catLetter}${num3}-img-${i + 1}`} />
                    ))
                ) : (
                    <Img src="../public/thumbnailExample.png" alt={`project-${catLetter}${num3}-placeholder`} />
                )}

                <DesignerInfo
                    designers={designers}
                />
            </PageContainer>
        </div>
    );
}