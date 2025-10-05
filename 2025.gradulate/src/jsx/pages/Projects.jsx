//Projects.jsx
//프로젝트 리스트페이지

import React from 'react';
import CategoryNav from '../molecule/CategoryNav';
import ProjectCard from '../atom/ProjectCard';
import projectsData from '../../data/projects.json';
import studentsData from '../../data/students.json';

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

// 프로젝트 데이터
const projects = projectsData;
const students = studentsData;

// [GPT] 프로젝트 카테고리 라벨 ↔ 코드 매핑
const PROJECT_CATEGORY_MAP = {
    'All Projects': null,
    'AI & Robot': 'c0',
    'Edu & Kids': 'c1',
    'Health Care': 'c2',
    'IT & Tech': 'c3',
    'Living': 'c4',
    'Mobility': 'c5',
};


function ProjectsList({ list }) {
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
            {list.map((project, index) => {
                // 프로젝트의 멤버로 학생 데이터에서 이름 찾기
                const members = project.members.map(memberId => {
                    const student = students.find(student => student.num === memberId);
                    return student ? student.nameKor : 'null';
                });

                const designerName = members.join(', '); // 멤버 이름들을 쉼표로 구분하여 연결

                return (
                    <ProjectCard
                        key={index}
                        titleKor={project.titleKor}
                        titleEng={project.titleEng}
                        nameEng={designerName}
                        view={project.view}
                        like={project.like}
                        href='work' // 나중에 상세 페이지 링크로 변경
                    />
                );
            })}
        </div>
    );
};

export default function Projects() {
    const [selectedCategoryLabel, setSelectedCategoryLabel] = React.useState('All Projects');

    // 라벨을 코드로 변환하여 필터링
    const filteredProjects = React.useMemo(() => {
        const code = PROJECT_CATEGORY_MAP[selectedCategoryLabel] || null;
        if (!code) return projects; // 'All Projects'인 경우 전체 반환
        return projects.filter(project => project.category === code);
    }, [selectedCategoryLabel]);

    return (
        <div style={{ position: 'relative' }}>
            <CategoryNav
                type="project"
                onCategoryChange={setSelectedCategoryLabel}
            />

            <PageContainer>
                <ProjectsList list={filteredProjects} />
            </PageContainer>
        </div>
    );
}