//Projects.jsx
//프로젝트 리스트페이지

// 프로젝트 카드 프로필 -> 카테고리 이미지로 변경 고려

import React from 'react';
import styled from 'styled-components';
import CategoryNav from '../molecule/CategoryNav';
import ProjectCard from '../atom/ProjectCard';
import projectsData from '../../data/projects.json';
import studentsData from '../../data/students.json';
import { db } from '../../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

const PAGE_SIDE = 40;

// public/ 경로 정규화 유틸 (BASE_URL 대응)
function publicUrl(path) {
  if (!path) return path;
  const base = import.meta.env.BASE_URL || '/';
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.replace(/^\.\.\//, '').replace(/^\//, '');
  return base + normalized;
}

// === styled-components (값 동일) ===
const PageOuter = styled.div`
  position: relative; background: #fff;
`;
const PageInner = styled.div`
  padding-left: ${PAGE_SIDE}px; padding-right: ${PAGE_SIDE}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;
function PageContainer({ children }) {
  return (
    <PageOuter>
      <PageInner>{children}</PageInner>
    </PageOuter>
  );
}

const Relative = styled.div`
  position: relative;
  min-height: calc(100vh - 200px);
`;

const Grid = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center; 
  margin-top: 100px; 
  margin-bottom: 120px; 
  row-gap: 32px; 
  column-gap: 14px; 
  width: 100%;
  flex-basis: 50%;
  /* display: grid;
  grid-auto-flow: row;
  grid-template-rows: repeat(2, 1fr);
  grid-auto-columns: repeat(2, auto);
  row-gap: 32px;
  column-gap: 14px; */
  
  @media (max-width: 640px) {
    margin-top: 20px;
    margin-bottom: 60px;
    row-gap: 18px;  
    width: 393px;
 }
`;

const PageInfo = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 21px;
  font-family: 'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  color: #000000;
  margin-top: 4px;
  @media (max-width: 640px) {
    display: flex;
  }
`;
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

function getMemebersNameText(project) {
  return project.members
    .map((memberId) => {
      const student = students.find((s) => s.num === memberId);
      return student ? student.nameKor : '';
    })
    .filter(Boolean)
    .join(', ');
}

function getMemebersImgUrls(project) {
  return project.members
    .map((memberId) => {
      const student = students.find((s) => s.num === memberId);
      return student ? publicUrl(student.imgUrl) : '';
    })
    .filter(Boolean);
}

function ProjectsList({ list, statsById }) {
  const CAT_CODE_TO_LETTER = {
    'c0': 'A',
    'c1': 'E',
    'c2': 'H',
    'c3': 'I',
    'c4': 'L',
    'c5': 'M',
  };

  return (
    <Grid>
  {list.map((project, index) => {
        const designerName = getMemebersNameText(project);
        const desingerImgUrls = getMemebersImgUrls(project);
        const num3 = String(project.projectNum + 1).padStart(3, '0');
        const catLetter = CAT_CODE_TO_LETTER[project.category] || 'A';
        const slug = `${catLetter}${num3}`; // ex: A001, E023
        const resolvedProjectId = project.projectNum ?? project.num;

        return (
          <ProjectCard
            key={index}
            titleKor={project.titleKor}
            titleEng={project.titleEng}
            src={publicUrl(`/projects/${project.projectNum}/thumb.jpg`)} // BASE_URL 대응
            nameKor={designerName}
            profileImgs={desingerImgUrls}
            docId={resolvedProjectId}
            href={`/work/${slug}`}
            like={statsById[String(resolvedProjectId)]?.like ?? 0}
            view={statsById[String(resolvedProjectId)]?.view ?? 0}
          />
        );
      })}
    </Grid>
  );
}

export default function Projects() {
  const [selectedCategoryLabel, setSelectedCategoryLabel] = React.useState('All Projects');
  const [sortLabel, setSortLabel] = React.useState('이름순');
  const [statsById, setStatsById] = React.useState({}); // { '0': { like, view }, ... }

  // Load like/view counts once
  React.useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const snap = await getDocs(collection(db, 'works'));
        if (!alive) return;
        const map = {};
        snap.forEach((docSnap) => {
          const data = docSnap.data() || {};
          map[String(docSnap.id)] = {
            like: typeof data.like === 'number' ? data.like : 0,
            view: typeof data.view === 'number' ? data.view : 0,
          };
        });
        setStatsById(map);
      } catch (e) {
        console.error('Failed to load works stats:', e);
      }
    })();
    return () => { alive = false; };
  }, []);

  // 라벨을 코드로 변환하여 필터링
  const filteredProjects = React.useMemo(() => {
    const code = PROJECT_CATEGORY_MAP[selectedCategoryLabel] || null;
    if (!code) return projects; // 'All Projects'인 경우 전체 반환
    return projects.filter((project) => project.category === code);
  }, [selectedCategoryLabel]);

  // 프로젝트 정렬 로직 (드롭다운)
  const sortedProjects = React.useMemo(() => {
    const list = [...filteredProjects];
    switch (sortLabel) {
      case '이름순':
        list.sort((a, b) => getMemebersNameText(a).localeCompare(getMemebersNameText(b), 'ko'));
        break;
      case '좋아요순':
        list.sort((a, b) => {
          const aId = String(a.projectNum ?? a.num);
          const bId = String(b.projectNum ?? b.num);
          const aLike = statsById[aId]?.like ?? 0;
          const bLike = statsById[bId]?.like ?? 0;
          return bLike - aLike;
        });
        break;
      case '조회수순':
        list.sort((a, b) => {
          const aId = String(a.projectNum ?? a.num);
          const bId = String(b.projectNum ?? b.num);
          const aView = statsById[aId]?.view ?? 0;
          const bView = statsById[bId]?.view ?? 0;
          return bView - aView;
        });
        break;
      case '팀작우선':
        list.sort((a, b) => (b.members.length > 1) - (a.members.length > 1));
        break;
      case '개인작우선':
        list.sort((a, b) => (a.members.length > 1) - (b.members.length > 1));
        break;
      default:
        break;
    }
    return list;
  }, [filteredProjects, sortLabel, statsById]);

  return (
    <Relative>
      <PageInfo>Projects</PageInfo>
      <CategoryNav
        type="project"
        onCategoryChange={setSelectedCategoryLabel}
        onSortChange={setSortLabel}
        sortLabel={sortLabel}
      />

      <PageContainer>
        <ProjectsList list={sortedProjects} statsById={statsById} />
      </PageContainer>
    </Relative>
  );
}