//Peoples.jsx
//졸업생 페이지
import React from 'react';
import styled from 'styled-components';
import PeoplesCard from '../atom/PeoplesCard';
import CategoryNav from '../molecule/CategoryNav';
import ProfProfile from '../atom/ProfProfile';
import studentsData from '../../data/students.json';
import professorsData from '../../data/professors.json';
import projectsData from '../../data/projects.json';

import { useNavigate } from 'react-router-dom';

const PAGE_SIDE = 40;

// public/ 경로용 유틸: '../image/0/portrait.jpg' 또는 '/image/0/portrait.jpg' 등을 BASE_URL을 고려하여 정규화
function publicUrl(path) {
  if (!path) return path;
  const base = import.meta.env.BASE_URL || '/';
  // 이미 절대 URL이면 그대로
  if (/^https?:\/\//i.test(path)) return path;
  // '../image/...' 같은 상대 경로 정리
  const normalized = path.replace(/^\.\.\//, '').replace(/^\//, '');
  return base + normalized;
}

const CAT_CODE_TO_LETTER = {
  'c0': 'A',
  'c1': 'E',
  'c2': 'H',
  'c3': 'I',
  'c4': 'L',
  'c5': 'M',
};

// 학과(부서) 배열 (상수) - UI 라벨
const studentCategories = ['전체', '산업디자인공학', '미디어디자인공학'];

// 학과 라벨 → 코드 매핑 (실제 데이터는 코드값 사용: IND/MED 또는 0/1)
// 최신 스키마: IND=0, MED=1
const departmentLabelToCode = {
  '산업디자인공학': 0,
  '미디어디자인공학': 1,
};

// 호환성: 문자열 코드(IND/MED)나 숫자(0/1) 모두 지원하도록 정규화
const normalizeDepartment = (dep) => {
  if (dep === 'IND' || dep === 0 || dep === '0') return 0;
  if (dep === 'MED' || dep === 1 || dep === '1') return 1;
  return dep;
};

// 실제 데이터(JSON)
const students = studentsData;
const professors = professorsData;

// Professor
// id: string
// nameKor: string
// nameEng: string
// rank: 'PROFESSOR'
// email: string
// education?: string
// field?: string
// imgUrl: string

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

const Grid = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center; 
  margin-top: 100px; 
  margin-bottom: 120px; 
  row-gap: 32px; 
  column-gap: 14px; 
  width: 100%;
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

const LinkWrap = styled.div`
  text-decoration: none; cursor: pointer;
`;
const Relative = styled.div`position: relative;`;

function PeoplesList({ people }) {
  const navigate = useNavigate();
  return (
    <Grid>
      {people.map((p, index) => {
        const key = p.id ?? p.studentId ?? `${p.nameKor}-${index}`;
        const hasProjectInfo = typeof p.projectNum === 'number' && p.category;
        const pidIndex = hasProjectInfo ? (p.projectNum + 1) : null; // 0-based to 1-based
        const pid = hasProjectInfo
          ? `${(CAT_CODE_TO_LETTER[p.category] || 'A')}${String(pidIndex).padStart(3, '0')}`
          : null;

        const card = (
          <PeoplesCard
            key={key}
            nameKor={p.nameKor}
            nameEng={p.nameEng}
            role={p.role}
            sns={p.sns || '-'} // sns가 없을 때 '-'로 표시
            eMail={p.eMail}
            imgSrc={publicUrl(p.imgUrl)}
            imgAlt={`${p.nameKor} profile`}
          />
        );

        // 링크로 이동 가능한 경우에만 Link로 감쌉니다.
        return hasProjectInfo ? (
          <LinkWrap
            key={`link-${key}`}
            role="link"
            tabIndex={0}
            onClick={() => navigate(`/work/${pid}`)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') navigate(`/work/${pid}`);
            }}
            aria-label={`${p.nameKor} 작품 보기 (${pid})`}
          >
            {card}
          </LinkWrap>
        ) : (
          card
        );
      })}
    </Grid>
  )
};

export default function Peoples() {
  // 토글:  false=학생, true=교수
  const [isToggleActive, setIsToggleActive] = React.useState(false);

  // 현재 선택된 카테고리
  const [activeCategory, setActiveCategory] = React.useState(studentCategories[0]);

  const memberToProject = React.useMemo(() => {
    const map = new Map();
    (projectsData || []).forEach((prj) => {
      (prj.members || []).forEach((memberId) => {
        if (!map.has(memberId)) map.set(memberId, prj);
      });
    });
    return map;
  }, []);

  // 토글 상태에 따라 activeCategory 초기화
  React.useEffect(() => {
    if (isToggleActive) {
      // 교수 모드: 첫 번째 교수 id로 설정
      setActiveCategory(professors[0]?.id || '');
    } else {
      setActiveCategory(studentCategories[0]); // '전체'
    }
  }, [isToggleActive]);

  // 현재 표시할 학생 리스트 계산 (교수 모드에서 학생을 기준으로 필터링 + 썸네일 교체)
  const filtered = React.useMemo(() => {
    if (!isToggleActive) {
      // 학생 모드: 전체면 전부, 아니면 department 코드로 필터 (라벨/코드 호환)
      if (activeCategory === '전체') return students;
      let depCode = departmentLabelToCode[activeCategory]; // 우선 라벨 시도
      if (depCode === undefined) depCode = normalizeDepartment(activeCategory); // 코드(IND/MED/0/1)도 허용
      return students.filter((p) => normalizeDepartment(p.department) === depCode);
    }
    // 교수 모드: activeCategory가 교수 id 또는 이름일 수 있으므로 id로 정규화
    const activeProfId = professors.some((pr) => pr.id === activeCategory)
      ? activeCategory
      : (professors.find((pr) => pr.nameKor === activeCategory)?.id || '');

    return students
      .filter((p) => p.professorId === activeProfId)
      .map((p) => {
        let prj = memberToProject.get(p.num);
        if (!prj) {
          prj = (projectsData || []).find((x) => x.category === p.category && x.projectNum === p.projectNum) || null;
        }

        const thumbPath = prj ? `/projects/${prj.projectNum}/thumb.jpg` : "/thumbnailExample.png"; // 추후 절대 경로 바뀔 시 수정
        return {
          ...p,
          imgUrl: thumbPath, // 교수 모드면 썸네일로 교체
        };
      });
  }, [activeCategory, isToggleActive, memberToProject]);

  // 교수 모드일 때 선택된 교수 프로필 (id 기준)
  // 교수 모드일 떄, 학생들의 이미지가 작품 썸네일로 변경되게 제작 해야함
  const selectedProfessor = React.useMemo(() => {
    if (!isToggleActive) return null;
    const prof = professors.find((pr) => pr.id === activeCategory) ||
      professors.find((pr) => pr.nameKor === activeCategory) || null;
    return prof;
  }, [isToggleActive, activeCategory]);

  return (
    <Relative>
      <PageInfo>Peoples</PageInfo>
      <CategoryNav
        type="people"
        onCategoryChange={setActiveCategory}
        onToggleChange={setIsToggleActive}
      />

      <PageContainer>
        {isToggleActive && selectedProfessor && (
          <ProfProfile
            nameKor={selectedProfessor.nameKor}
            rank={selectedProfessor.rank || '교수'}
            eMail={selectedProfessor.email}
            education={selectedProfessor.education}
            field={selectedProfessor.field}
            imgSrc={publicUrl(selectedProfessor.imgUrl)}
            imgAlt={`${selectedProfessor.nameKor} profile`}
          />
        )}
        {/* 교수 프로필이 나왔을때 학생 리스트의 썸네일 변경 */}
        <PeoplesList people={filtered} />
      </PageContainer>
    </Relative>
  );
}
