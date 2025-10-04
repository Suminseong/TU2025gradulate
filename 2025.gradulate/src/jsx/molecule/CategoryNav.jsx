// CategoryNav.jsx
import React from 'react';
import ToggleBtn from '../atom/ToggleBtn';
import CategoryNavBtn from '../atom/CategoryNavBtn';
import Dropdown from '../molecule/Dropdown';
import { useEffect } from 'react';

/**
 * 카테고리 네비게이션
 */

// 노트북 화면으로 볼때 폰트가 많이 크다고 느껴짐
// 특히 프로젝트 페이지
// 나중에 디테일 작업때 조정할 것

export default function CategoryNav({ onCategoryChange, onToggleChange, type }) {
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
    const projectCategories = ['All Projects', 'AI & Robot', 'Edu & Kids', 'Health Care', 'IT & Tech', 'Living', 'Mobility']

    useEffect(() => {
        // 토글 상태에 따라 activeCategory 초기화
        if (isToggleActive) {
            setActiveCategory(professorCategories[0]);
        } else {
            setActiveCategory(studentCategories[0]);
        }
    }, [isToggleActive]);

    const CategoryNavContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: 'auto',
        paddingLeft: '40px',
        paddingRight: '40px',
        paddingTop: '88px',
    };

    const CategoryNavStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '60px',
    };

    // 프로젝트 카테고리 네비게이션
    // (css 문제로 카테고리를 선택할 때 살짝씩 밀리는 경향이 있음. 나중에 디테일 작업때 수정할 것)
    if (Props.type === "project") {
        return (
            <div style={{ ...CategoryNavContainerStyle }}>
                <div style={{ width: '120px', height: '100%' }}></div>
                <div style={{ ...CategoryNavStyle }}>
                    {projectCategories.map((label) => (
                        <CategoryNavBtn
                            key={label}
                            label={label}
                            active={activeProjectCategory === label}
                            onClick={() => {
                                setActiveProjectCategory(label);
                                if (onCategoryChange) onCategoryChange(label); // 부모에 알림
                            }}
                        />
                    ))}
                </div>
                <Dropdown label={"이름순"} onSelect={setActiveProjectCategory} />
            </div>
        );
    }

    if (!isToggleActive) {
        return (
            <div style={{ ...CategoryNavContainerStyle }}>
                <div style={{ width: '120px', height: '100%' }}></div>
                <div style={{ ...CategoryNavStyle }}>
                    {studentCategories.map((label) => (
                        <CategoryNavBtn
                            key={label}
                            label={label}
                            active={activeCategory === label}
                            onClick={() => {
                                setActiveCategory(label);
                                if (onCategoryChange) onCategoryChange(label); // 부모에 알림
                            }}
                        />
                    ))}
                </div>
                <ToggleBtn
                    path={isToggleActive ? 'professor' : 'student'}
                    isActive={isToggleActive}
                    onClick={handleToggle}
                />
            </div>
        );
    }

    else if (isToggleActive) {
        return (
            <div style={{ ...CategoryNavContainerStyle }}>
                <div style={{ width: '120px', height: '100%' }}></div>
                <div style={{ ...CategoryNavStyle }}>
                    {professorCategories.map((label) => (
                        <CategoryNavBtn
                            key={label}
                            label={label}
                            active={activeCategory === label}
                            onClick={() => {
                                setActiveCategory(label);
                                if (onCategoryChange) onCategoryChange(label); // 부모에 알림
                            }}
                        />
                    ))}
                </div>
                <ToggleBtn
                    path={isToggleActive ? 'professor' : 'student'}
                    isActive={isToggleActive}
                    onClick={handleToggle}
                />
            </div>
        );
    }


}