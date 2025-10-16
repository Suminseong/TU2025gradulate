//Works.jsx
//작품 상세페이지

import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../../lib/firebase';
import { doc, updateDoc, increment, setDoc, getDoc } from 'firebase/firestore';

import WorkInfo from '../atom/WorkInfo';
import DesignerInfo from '../molecule/DesignerInfo';
import WorkVideo from '../atom/WorkVideo';
import WorkInfoOpen from '../atom/WorkInfoOpen';

import projectsData from '../../data/projects.json';
import studentsData from '../../data/students.json';


const PAGE_SIDE = 40;

// public/ 경로 정규화 유틸 (BASE_URL 대응)
function publicUrl(path) {
  if (!path) return path;
  const base = import.meta.env.BASE_URL || '/';
  if (/^https?:\/\//i.test(path)) return path; // 외부 URL 그대로
  const normalized = String(path).replace(/^\.\.\//, '').replace(/^\//, '');
  return base + normalized;
}

// styled-components: 값 그대로 재현
const ImgSC = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  image-rendering: -webkit-optimize-contrast;
  @media (max-width: 640px) {
    min-width: 100vw;
}
`;
// 기존 사용처(<Img style={{ minHeight:'100vh' }} ... />) 대응 위해 동일한 컴포넌트명 유지
const Img = (props) => <ImgSC loading="lazy" {...props} />;

const PageOuter = styled.div`
  display: flex;
  position: relative;
  background: #fff;
  width: 100%;
  @media (max-width: 640px) {
    flex-direction: column;
}
`;
const PageInner = styled.div`
  padding-right: ${PAGE_SIDE}px;
  padding-left: ${props => (props.$isInfoOpen ? 0 : PAGE_SIDE)}px;
  flex: 1 1 auto;
  width: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* transition: all 500ms ease; */
  @media (max-width: 640px) {
    padding: 0
}
`;

const PageInfo = styled.div`
  display: ${props => (props.$visible ? 'flex' : 'none')};
  position: sticky;
  /* transform: translateX(-350px); */
  top: 80px;
  left: 0;
  width: 350px;
  height: calc(100vh - 80px);
  @media (max-width: 640px) {
    display: flex;
    position: relative;
    width: 100vw;
    height: auto;
    top: 0;
    left: 0;
    padding: 0;
}
`;

const Relative = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

const LETTER_TO_CAT = {
  'A': 'c0', // AI & Robot
  'E': 'c1', // Edu & Kids
  'H': 'c2', // Health Care
  'I': 'c3', // IT & Tech
  'L': 'c4', // Living
  'M': 'c5', // Mobility
};

// 1920에서는 괜찮은데 줄어들면 이미지가 너무 작아짐
// 해당 문제 해결해야함

export default function Work() {
  // 워크 페이지 헤더가 그라데이션이 아닌 흰색 배경으로 고정되어야 함
  // → NavHeaderMode를 변경해서 적용해야하는데 지금 적용이 안되는 상태임 나중에 Nav 손봐야함
  const { pid } = useParams();
  const match = (pid || '').toUpperCase().match(/^([A-Z])(\d{3})$/);
  const [isInfoOpen, setIsInfoOpen] = useState(true);
  const [isInfoVisible, setIsInfoVisible] = useState(true); // 추후 필요시 사용

  const handleClose = () => {
    setIsInfoOpen(false);
    setTimeout(() => {
      setIsInfoVisible(false);
    }, 500); // 애니메이션 시간과 동일하게 설정
  }

  const handleOpen = () => {
    setIsInfoVisible(true);
    setTimeout(() => {
      setIsInfoOpen(true);
    }, 0); // 다음 이벤트 루프에서 열기
  }

  let project = null;
  if (match) {
    const [, letter, numStr] = match;
    const category = LETTER_TO_CAT[letter] || null;
    const projectIndex = Math.max(0, parseInt(numStr, 10) - 1); // 1-based to 0-based

    project = projectsData.find(
      (p) => p.projectNum === projectIndex && (!category || p.category === category)
    );
    if (!project) project = projectsData.find((p) => p.projectNum == projectIndex); // 카테고리 무시하고 번호만 맞는거 찾기
  }

  if (!project) {
    return (
      <Relative>
        <PageContainer>
          <WorkInfo
            titleKor="작품 제목(한글)"
            titleEng="Work Title (English)"
            context="이곳은 작품 설명이 들어가는 영역입니다. 작품에 대한 상세한 설명이나 배경, 제작 과정 등을 기술할 수 있습니다. 이 텍스트는 예시로 작성된 내용이며, 실제 작품 설명으로 대체되어야 합니다."
            isOpen={isInfoOpen}
            onClose={() => setIsInfoOpen(false)}
            docId={0}
          />
          <Img src="https://placehold.co/1530x4000" alt="featured" />
          <DesignerInfo>  </DesignerInfo>
        </PageContainer>
      </Relative>
    );
  }

  // 프로젝트에 참여한 디자이너 목록
  // 개인작일때는 1명, 팀작일 때는 2명
  // students.json에서 정보를 찾아서 이름, role, sns, email, imgUrl을 전달
  const designers = (project.members || [])
    .map((memberId) => {
      const student = studentsData.find((s) => s.num === memberId);
      return student
        ? {
          nameKor: student.nameKor,
          nameEng: student.nameEng,
          role: student.role || 'Designer',
          sns: student.sns || '-',
          eMail: student.eMail || '',
          imgUrl: publicUrl(student.imgUrl || '/김예준.jpg'), // 기본 이미지 포함 정규화
        }
        : null;
    })
    .filter(Boolean);

  const CAT_CODE_TO_LETTER = {
    c0: 'A',
    c1: 'E',
    c2: 'H',
    c3: 'I',
    c4: 'L',
    c5: 'M',
  };
  const catLetter = CAT_CODE_TO_LETTER[project.category] || 'A';
  const resolvedProjectId = project.projectNum ?? project.num;
  const num3 = String(resolvedProjectId).padStart(3, '0');

  const basePath = `/projects/${resolvedProjectId}`; // 추후 절대 경로 바뀔 시 수정
  const galleryCount = Number(project.galleryCount || 0);
  const galleryImages = Array.from(
    { length: galleryCount },
    (_, idx) => publicUrl(`${basePath}/gallery/${idx}.jpg`)
  );

  // Increment view count on page load
  useEffect(() => {
    const id = project?.projectNum ?? project?.num;
    if (id === undefined || id === null) return;
    const collection = 'works';
    const ref = doc(db, collection, String(id));
    (async () => {
      try {
        await updateDoc(ref, { view: increment(1) });
      } catch (e) {
        if (e.code === 'not-found' || /No document/i.test(String(e))) {
          try {
            const snap = await getDoc(ref);
            if (!snap.exists()) {
              await setDoc(ref, { view: 1 }, { merge: true });
            } else {
              await updateDoc(ref, { view: increment(1) });
            }
          } catch (e2) {
            console.error('Firestore view fallback error:', e2);
          }
        } else {
          console.error('Firestore view error:', e);
        }
      }
    })();
  }, [project?.projectNum, project?.num]);

  return (
    <Relative>
      <PageOuter>
        <WorkInfoOpen isOpen={isInfoOpen} onClick={handleOpen} />
        <PageInfo $visible={isInfoVisible}>
          <WorkInfo
            titleKor={project.titleKor}
            titleEng={project.titleEng}
            context={project.description || 'null'}
            isOpen={isInfoOpen}
            onClose={handleClose}
            src={publicUrl(`/projects/${resolvedProjectId}/thumb.jpg`)}
            docId={resolvedProjectId}
          />
        </PageInfo>

        <PageInner $isInfoOpen={isInfoOpen}>
          {galleryImages.length > 0 ? (
            galleryImages.map((src, i) => (
              <Img
                key={i}
                src={src}
                alt={`project-${catLetter}${num3}-img-${i + 1}`}
              />
            ))
          ) : (
            <Img
              src={publicUrl('/thumbnailExample.png')}
              alt={`project-${catLetter}${num3}-placeholder`}
            />
          )}

          <WorkVideo videoId={project.videoId} />

          <DesignerInfo designers={designers} />
        </PageInner>
      </PageOuter>
    </Relative>
  );
}