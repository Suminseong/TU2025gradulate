//Projects.jsx
//프로젝트 리스트페이지

// 필요 컴포넌트
// 정렬 컴포넌트
// 프로젝트 카드 컴포넌트

import React from 'react';
import CategoryNav from '../molecule/CategoryNav';
import ProjectCard from '../atom/ProjectCard';

const PAGE_SIDE = 40;

function PageContainer({ children }) {
    return (
        <div style={{ position: 'relative', background: '#fff' }}>
            <div style={{
                paddingLeft: PAGE_SIDE,
                paddingRight: PAGE_SIDE,
                display: 'flex',
                flexDirection: 'column',
            }}>
                {children}
            </div>
        </div>
    );
}

function ProjectsList({ project }) {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '100px',
            marginBottom: '120px',
            rowGap: '32px',
            columnGap: '14px',
            width: '100%',
        }}>
            {/* 프로젝트 카드 임의로 60개 */}
            {/* 프로젝트 링크 URL 결정 필요, 우선 임의로 /#으로 진행 */}
            {Array.from({ length: 60 }, (_, index) => (
                <ProjectCard
                    key={`project-${index}`}
                    titleKor={`프로젝트 ${index + 1}`}
                    titleEng={`Project ${index + 1}`}
                    nameEng={`Designer ${index + 1}`}
                    view={Math.floor(Math.random() * 1000)}
                    like={Math.floor(Math.random() * 100)}
                    href='work/404' // 나중에 상세 페이지 링크로 변경
                />
            ))}
        </div>
    );
};

export default function Projects() {
    
    return (
        <div style={{ position: 'relative' }}>
            <CategoryNav type="project"/>

            <PageContainer>
                <ProjectsList />
            </PageContainer>
        </div>
    );
}