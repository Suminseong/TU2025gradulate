//Peoples.jsx
//졸업생 페이지
import React from 'react';
import PeoplesCard from '../atom/PeoplesCard';
import CategoryNav from '../molecule/CategoryNav';
import ProfProfile from '../atom/ProfProfile';


const PAGE_SIDE = 40;

// 학과(부서) 배열 (상수)
const studentCategories = ['전체', '산업디자인공학', '미디어디자인공학'];
const professorCategories = ['장영주', '권오재', '김 억', '김한종', '조남주', '한민섭', '홍성수', '김태균'];

// 임시 더미 데이터
const students = [
  {
    nameKor: '고명현',
    nameEng: 'GO MYUNGHYUN',
    role: 'UI/UX DESIGNER',
    department: '미디어디자인공학',
    professor: '김한종',
    sns: [
      { platform: 'instagram', url: 'https://instagram.com' },
    ],
    eMail: 'go.myunghyun@example.com',
    imgSrc: '../image/1/portrait.jpg',
    imgAlt: 'Go Myunghyun profile',
  },
  {
    nameKor: '김예준',
    nameEng: 'KIM YEAHJUN',
    role: 'UI/UX DESIGNER',
    department: '미디어디자인공학',
    professor: '권오재',
    sns: [{ platform: 'instagram', url: 'https://instagram.com' }],
    eMail: 'kim.yeahjun@example.com',
    imgSrc: '../image/15/portrait.jpg',
    imgAlt: 'Kim Yeahjun profile',
  },
];

const professors = [
  {
    nameKor: '장영주',
    nameEng: 'JANG YOUNGJOO',
    role: 'PROFESSOR',
    professor: '장영주',
    education: 'Ph.D. in Design, XYZ University',
    field: 'UX/UI Design',
    sns: [],
    eMail: 'jang.youngjoo@example.com',
    imgSrc: '../public/김예준.jpg',
    imgAlt: 'Professor Jang profile',
  },
  {
    nameKor: '권오재',
    nameEng: 'KWON OHJAE',
    role: 'PROFESSOR',
    professor: '권오재',
    education: 'Ph.D. in Design, XYZ University',
    field: 'Industrial Design',
    sns: [],
    eMail: 'kwon.ohjae@example.com',
    imgSrc: '../public/김예준.jpg',
    imgAlt: 'Professor Kwon profile',
  },
  {
    nameKor: '김한종',
    nameEng: 'KIM HANJONG',
    role: 'PROFESSOR',
    professor: '김한종',
    education: 'Ph.D. in Design, XYZ University',
    field: 'Industrial Design',
    sns: [],
    eMail: 'kim.hanjong@example.com',
    imgSrc: '../public/김예준.jpg',
    imgAlt: 'Professor Kim profile',
  },
];

// 데이터 모델 제안 

// Student
// id: string
// nameKor: string
// nameEng: string
// role: 'DESIGNER'
// department: 'IND' | 'MED' // 화면에서는 ‘산업디자인공학’, ‘미디어디자인공학’으로 표시
// professorId: string // 외래키
// sns: Array<{ platform: string; url: string }>
// email: string
// imgUrl: string

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
          key={`${p.nameKor}-${index}`}
          nameKor={p.nameKor}
          nameEng={p.nameEng}
          role={p.role}
          sns={p.sns}
          eMail={p.eMail}
          imgSrc={p.imgSrc}
          imgAlt={p.imgAlt}
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
      setActiveCategory(professorCategories[0]); // 예: '장영주'
    } else {
      setActiveCategory(studentCategories[0]); // '전체'
    }
  }, [isToggleActive]);

  // 현재 표시할 학생 리스트 계산 (교수 모드에서도 학생을 기준으로 필터링)
  const filtered = React.useMemo(() => {
    if (!isToggleActive) {
      // 학생 모드: 전체면 전부, 아니면 department로 필터
      if (activeCategory === '전체') return students;
      return students.filter((p) => p.department === activeCategory);
    }
    // 교수 모드: 선택한 교수 이름에 속한 학생만 필터
    return students.filter((p) => p.professor === activeCategory);
  }, [activeCategory, isToggleActive]);

  // 교수 모드일 때 선택된 교수 프로필
  const selectedProfessor = React.useMemo(() => {
    if (!isToggleActive) return null;
    return professors.find((p) => p.professor === activeCategory) || null;
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
            rank={selectedProfessor.role === 'PROFESSOR' ? '교수' : selectedProfessor.role}
            eMail={selectedProfessor.eMail}
            education={selectedProfessor.education}
            field={selectedProfessor.field}
            imgSrc={selectedProfessor.imgSrc}
            imgAlt={selectedProfessor.imgAlt}
          />
        )}
        <PeoplesList people={filtered} />
      </PageContainer>

    </div>
  );
}
