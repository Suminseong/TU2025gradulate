// CategoryNav.jsx
import React from 'react';
import ToggleBtn from '../atom/ToggleBtn';
import CategoryNavBtn from '../atom/CategoryNavBtn';
import { useEffect } from 'react';

/**
 * 카테고리 네비게이션
 */

export default function CategoryNav({ onCategoryChange, onToggleChange }) {
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

    const studentCategories = ['전체', '산업디자인공학', '미디어디자인공학'];
    const professorCategories = ['장영주', '권오재', '김 억', '김한종', '조남주', '한민섭', '홍성수', '김태균'];

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