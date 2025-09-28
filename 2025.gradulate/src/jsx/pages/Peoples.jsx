//Peoples.jsx
//졸업생 페이지
import React from 'react';
import PeoplesCard from '../atom/PeoplesCard';
import CategoryNav from '../molecule/CategoryNav';
import ProfProfile from '../atom/ProfProfile';
import studentsData from '../../data/students.json';
import professorsData from '../../data/professors.json';


const PAGE_SIDE = 40;

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

function PeoplesList({ people }) {
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
      {people.map((p, index) => (
        <PeoplesCard
          key={p.id ?? `${p.nameKor}-${index}`}
          nameKor={p.nameKor}
          nameEng={p.nameEng}
          role={p.role}
          sns={p.sns}
          eMail={p.eMail}
          imgSrc={p.imgUrl}
          imgAlt={`${p.nameKor} profile`}
        />
      ))}
    </div>

  )
};

export default function Peoples() {
  // 토글:  false=학생, true=교수
  const [isToggleActive, setIsToggleActive] = React.useState(false);

  // 현재 선택된 카테고리
  const [activeCategory, setActiveCategory] = React.useState(studentCategories[0]);

  // 토글 상태에 따라 activeCategory 초기화
  React.useEffect(() => {
    if (isToggleActive) {
      // 교수 모드: 첫 번째 교수 id로 설정
      setActiveCategory(professors[0]?.id || '');
    } else {
      setActiveCategory(studentCategories[0]); // '전체'
    }
  }, [isToggleActive]);

  // 현재 표시할 학생 리스트 계산 (교수 모드에서도 학생을 기준으로 필터링)
  const filtered = React.useMemo(() => {
    if (!isToggleActive) {
      // 학생 모드: 전체면 전부, 아니면 department 코드로 필터 (라벨/코드 호환)
      if (activeCategory === '전체') return students;
  const depCode = departmentLabelToCode[activeCategory]; // 0 또는 1
  return students.filter((p) => normalizeDepartment(p.department) === depCode);
    }
    // 교수 모드: activeCategory가 교수 id 또는 이름일 수 있으므로 id로 정규화
    const activeProfId = professors.some((pr) => pr.id === activeCategory)
      ? activeCategory
      : (professors.find((pr) => pr.nameKor === activeCategory)?.id || '');
    return students.filter((p) => p.professorId === activeProfId);
  }, [activeCategory, isToggleActive]);

  // 교수 모드일 때 선택된 교수 프로필 (id 기준)
  const selectedProfessor = React.useMemo(() => {
    if (!isToggleActive) return null;
    const prof = professors.find((pr) => pr.id === activeCategory) ||
                 professors.find((pr) => pr.nameKor === activeCategory) || null;
    return prof;
  }, [isToggleActive, activeCategory]);

  return (
    <div style={{ position: 'relative' }}>

      <CategoryNav
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
            imgSrc={selectedProfessor.imgUrl}
            imgAlt={`${selectedProfessor.nameKor} profile`}
          />
        )}
        <PeoplesList people={filtered} />
      </PageContainer>

    </div>
  );
}
