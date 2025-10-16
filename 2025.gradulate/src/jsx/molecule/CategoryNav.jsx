// CategoryNav.jsx
import React, { useEffect } from 'react';
import styled from 'styled-components';
import ToggleBtn from '../atom/ToggleBtn';
import CategoryNavBtn from '../atom/CategoryNavBtn';
import Dropdown from '../molecule/Dropdown';
import DropdownCate from '../molecule/DropdownCate';

/**
 * 카테고리 네비게이션 (molecule)
 * - 값/레이아웃 동일 유지
 * - 미디어쿼리 없음 (추후 추가 예정)
 * - 로직/props 변경 없음
 */

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 88px;
  @media (max-width: 640px) {
    height: auto;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
  }
`;

const Spacer = styled.div`
  width: 120px;
  height: 100%;
  @media (max-width: 640px) {
    display: none;
  }
`;

const NavRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  @media (max-width: 640px) {
    display: none;
  }
`;

const NavRowMobile = styled.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
    width: auto;
  }
`;

export default function CategoryNav({ onCategoryChange, onToggleChange, type, onSortChange, sortLabel }) {
  const Props = { onCategoryChange, onToggleChange, type };
  const [isToggleActive, setIsToggleActive] = React.useState(false);
  const handleToggle = () =>
    setIsToggleActive((prev) => {
      const next = !prev;
      if (onToggleChange) {
        onToggleChange(next); // 부모에게 상태 변경 알림
      }
      return next;
    });

  const [activeCategory, setActiveCategory] = React.useState('전체');
  const [activeProjectCategory, setActiveProjectCategory] = React.useState('All Projects');

  const studentCategories = ['전체', '산업디자인공학', '미디어디자인공학'];
  const professorCategories = ['장영주', '권오재', '김 억', '김한종', '조남주', '한민섭', '홍성수', '김태균'];
  const projectCategories = ['All Projects', 'AI & Robot', 'Edu & Kids', 'Health Care', 'IT & Tech', 'Living', 'Mobility'];

  // 드롭다운 정렬 상태
  const SORT_OPTIONS = ['이름순', '좋아요순', '조회수순', '팀작우선', '개인작우선'];
  const [internalSortLabel, setInternalSortLabel] = React.useState('이름순');
  const currentSortLabel = sortLabel || internalSortLabel;
  const hadleSortSelect = (label) => {
    setInternalSortLabel(label);
    if (onSortChange) onSortChange(label);
  };

  useEffect(() => {
    // 토글 상태에 따라 activeCategory 초기화
    if (isToggleActive) {
      setActiveCategory(professorCategories[0]);
    } else {
      setActiveCategory(studentCategories[0]);
    }
  }, [isToggleActive]);

  // 프로젝트 카테고리 네비게이션
  // (css 문제로 카테고리를 선택할 때 살짝씩 밀리는 경향이 있음. 나중에 디테일 작업때 수정할 것)
  if (Props.type === 'project') {
    return (
      <Container>
        <Spacer />
        <NavRow>
          {projectCategories.map((label) => (
            <CategoryNavBtn
              key={label}
              label={label}
              href={`#${label.replace(/\s+/g, '-').toLowerCase()}`} // 공백을 하이픈으로 바꾸고 소문자로 변환
              active={activeProjectCategory === label}
              onClick={() => {
                setActiveProjectCategory(label);
                if (onCategoryChange) onCategoryChange(label); // 부모에 알림
              }}
            />
          ))}
        </NavRow>
        {/* 모바일 네비게이션 */}
        <NavRowMobile>
          <DropdownCate mode="category" label={activeProjectCategory} options={projectCategories} onSelect={(label) => {
            setActiveProjectCategory(label);
            if (onCategoryChange) onCategoryChange(label); // 부모에 알림
          }} />
        </NavRowMobile>
        <Dropdown label={currentSortLabel} options={SORT_OPTIONS} onSelect={hadleSortSelect} />
      </Container>
    );
  }

  if (!isToggleActive) {
    return (
      <Container>
        <Spacer />
        <NavRow>
          {studentCategories.map((label) => (
            <CategoryNavBtn
              key={label}
              label={label}
              href={`#${label.replace(/\s+/g, '-').toLowerCase()}`} // 공백을 하이픈으로 바꾸고 소문자로 변환
              active={activeCategory === label}
              onClick={() => {
                setActiveCategory(label);
                if (onCategoryChange) onCategoryChange(label); // 부모에 알림
              }}
            />
          ))}
        </NavRow>
        {/* 모바일 네비게이션 */}
        <NavRowMobile>
          <DropdownCate mode="category" label={activeCategory} options={studentCategories} onSelect={(label) => {
            setActiveCategory(label);
            if (onCategoryChange) onCategoryChange(label); // 부모에 알림
          }} />
        </NavRowMobile>
        <ToggleBtn path={isToggleActive ? 'professor' : 'student'} isActive={isToggleActive} onClick={handleToggle} />
      </Container>
    );
  }

  return (
    <Container>
      <Spacer />
      <NavRow>
        {professorCategories.map((label) => (
          <CategoryNavBtn
            key={label}
            label={label}
            href={`#${label.replace(/\s+/g, '-').toLowerCase()}`} // 공백을 하이픈으로 바꾸고 소문자로 변환
            active={activeCategory === label}
            onClick={() => {
              setActiveCategory(label);
              if (onCategoryChange) onCategoryChange(label); // 부모에 알림
            }}
          />
        ))}
      </NavRow>
      {/* 모바일 네비게이션 */}
      <NavRowMobile>
        <DropdownCate mode="category" label={activeCategory} options={professorCategories} onSelect={(label) => {
          setActiveCategory(label);
          if (onCategoryChange) onCategoryChange(label); // 부모에 알림
        }} />
      </NavRowMobile>
      <ToggleBtn path={isToggleActive ? 'professor' : 'student'} isActive={isToggleActive} onClick={handleToggle} />
    </Container>
  );
}