// Projects.jsx
// 프로젝트 리스트페이지

// 프로젝트 카드 프로필 -> 카테고리 이미지로 변경 고려

import React from 'react';
import styled from 'styled-components';
import CategoryNav from '../molecule/CategoryNav';
import ProjectCard from '../atom/ProjectCard';
import projectsData from '../../data/projects.json';
import studentsData from '../../data/students.json';
import { db } from '../../lib/firebase';
import {
  collection,
  getDocs,
  writeBatch,
  doc,
  setDoc,
  serverTimestamp,
} from 'firebase/firestore';

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
  
  @media (max-width: 640px) {
    margin-top: 20px;
    margin-bottom: 60px;
    row-gap: 18px;  
 }
`;

const PageInfo = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: 'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  color: #000000;
  margin-top: 4px;
  @media (max-width: 1450px) {
    display: flex;
    font-size: 24px;
  }
  @media (max-width: 640px) {
    font-size: 21px;
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
            src={publicUrl(`/projects/${project.projectNum}/thumb.jpg`)} // NOTE: png fallback은 별도 처리 필요
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

// ===== 1회용 시드 데이터 =====
const SEED_COLLECTION = 'work'; // 요청 사양: collection=work
const SEED_FLAG = '__seed_work_v1';
const SEED_DOCS = [
  {"id":"0","like":321,"view":310},
  {"id":"1","view":32,"like":94},
  {"id":"10","view":30,"like":239},
  {"id":"11","like":5,"view":26},
  {"id":"12","view":10,"like":0},
  {"id":"13","view":30,"like":8},
  {"id":"14","like":25,"view":92},
  {"id":"15","like":0,"view":11},
  {"id":"16","like":35,"view":50},
  {"id":"17","view":38,"like":7},
  {"id":"18","view":8,"like":4},
  {"id":"19","view":12,"like":0},
  {"id":"2","view":25,"like":0},
  {"id":"20","view":12,"like":2},
  {"id":"21","like":8,"view":17},
  {"id":"22","like":4,"view":43},
  {"id":"23","like":0,"view":15},
  {"id":"24","like":152,"view":262},
  {"id":"25","view":36,"like":200},
  {"id":"26","like":183,"view":79},
  {"id":"27","view":630,"like":703},
  {"id":"28","view":43,"like":5},
  {"id":"29","view":24,"like":2},
  {"id":"3","like":30,"view":32},
  {"id":"30","like":139,"view":49},
  {"id":"31","like":0,"view":16},
  {"id":"32","view":22,"like":172},
  {"id":"33","like":6,"view":35},
  {"id":"34","like":220,"view":52},
  {"id":"35","like":0,"view":24},
  {"id":"36","view":42,"like":7},
  {"id":"37","view":17,"like":133},
  {"id":"38","like":5,"view":71},
  {"id":"39","view":29,"like":50},
  {"id":"4","like":177,"view":13},
  {"id":"40","view":33,"like":14},
  {"id":"41","like":0,"view":12},
  {"id":"42","like":3,"view":10},
  {"id":"43","like":177,"view":40},
  {"id":"44","like":0,"view":22},
  {"id":"45","view":55,"like":0},
  {"id":"46","like":215,"view":59},
  {"id":"47","view":29,"like":204},
  {"id":"48","view":41,"like":57},
  {"id":"49","like":91,"view":48},
  {"id":"5","view":23,"like":5},
  {"id":"50","view":41,"like":206},
  {"id":"51","view":36,"like":0},
  {"id":"52","like":20,"view":64},
  {"id":"53","like":31,"view":35},
  {"id":"54","like":67,"view":34},
  {"id":"55","view":16,"like":0},
  {"id":"56","like":0,"view":10},
  {"id":"57","view":54,"like":12},
  {"id":"58","like":0,"view":18},
  {"id":"59","view":26,"like":0},
  {"id":"6","view":17,"like":24},
  {"id":"60","like":150,"view":12},
  {"id":"61","like":0,"view":20},
  {"id":"62","view":13,"like":0},
  {"id":"63","like":0,"view":23},
  {"id":"64","view":33,"like":5},
  {"id":"65","view":59,"like":4},
  {"id":"66","view":138,"like":201},
  {"id":"67","like":90,"view":24},
  {"id":"68","view":33,"like":208},
  {"id":"69","view":58,"like":83},
  {"id":"7","view":35,"like":4},
  {"id":"70","like":0,"view":32},
  {"id":"71","view":54,"like":17},
  {"id":"72","like":0,"view":15},
  {"id":"73","like":41,"view":29},
  {"id":"74","view":28,"like":0},
  {"id":"75","like":44,"view":57},
  {"id":"76","view":13,"like":2},
  {"id":"8","like":0,"view":14},
  {"id":"9","view":77,"like":218}
];

export default function Projects() {
  const [selectedCategoryLabel, setSelectedCategoryLabel] = React.useState('All Projects');
  const [sortLabel, setSortLabel] = React.useState('이름순');
  const [statsById, setStatsById] = React.useState({}); // { '0': { like, view }, ... }

  // ===== 1) 1회용 시드 쓰기(useEffect 한 번) =====
  React.useEffect(() => {
    let alive = true;
    (async () => {
      try {
        if (localStorage.getItem(SEED_FLAG)) return; // 이미 시드 수행됨
        // 배치 쓰기 (500개 이하라 single batch 가능하지만 안정적으로 chunk)
        const chunkSize = 500;
        for (let i = 0; i < SEED_DOCS.length; i += chunkSize) {
          const slice = SEED_DOCS.slice(i, i + chunkSize);
          const batch = writeBatch(db);
          for (const item of slice) {
            const id = String(item.id);
            const payload = {
              like: Number.isFinite(+item.like) ? +item.like : 0,
              view: Number.isFinite(+item.view) ? +item.view : 0,
              updatedAt: serverTimestamp(),
            };
            batch.set(doc(db, SEED_COLLECTION, id), payload, { merge: true });
          }
          await batch.commit();
        }
        if (!alive) return;
        localStorage.setItem(SEED_FLAG, '1');
        console.log('[Firestore] 시드 완료:', SEED_COLLECTION, SEED_DOCS.length);
      } catch (err) {
        console.error('[Firestore] 시드 실패:', err);
      }
    })();
    return () => { alive = false; };
  }, []);

  // ===== 2) like/view 불러오기 (work → 없으면 works) =====
  React.useEffect(() => {
    let alive = true;
    (async () => {
      try {
        // 우선 work 시도
        let snap = await getDocs(collection(db, 'work'));
        if (snap.empty) {
          // 비어있으면 기존 코드 호환: works 재시도
          snap = await getDocs(collection(db, 'works'));
        }

        const worksJson = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        console.log('[Firestore] works json:\n', JSON.stringify(worksJson, null, 2));
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
