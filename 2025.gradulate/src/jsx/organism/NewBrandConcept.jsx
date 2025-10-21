// 브랜드 컨셉 리뉴얼
import React from 'react';
import styled from 'styled-components';

const base = import.meta.env.BASE_URL || '/';

const Container = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    background-color: #FFF;
    padding: 150px 0;
`;

const ConceptContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    gap: 200px;
`

const ConceptCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
    width: 1150px;
    margin: 0 145px;
`;

const TitleCol = styled.div`
    display: flex;
    font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
    font-size: 32px;
    font-weight: 600;
    color: #000;

`

const ContextCol = styled.div`
    display: flex;
    font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    width: 597px;
    color: #202020;
`

const ContextColColumn = styled(ContextCol)`
    flex-direction: column;
    width: 1150px;
`

const ImageCol = styled.img`
    width: auto;
    height: auto;
`

const RowCol = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
`;

const ColumnCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 36px;
    width: 100%;
`;

export default function NewBrandConcept({

}) {
    const concepts = [
        {
            title: `잔향 : 기억의 향기`,
            context: `우리는 살아가며 수많은 순간들을 스쳐 지나간다.
                        그 순간들은 이내 사라지는 듯하지만, 마음속 깊이 은은히 스며들어 기억이 되고, 결국엔 우리 존재의 한 조각이 된다.

                        <잔향> 전시는 작품이 남긴 향이 관람객에게 스며들어 시간이 지나도 떠오를
                        수 있는 ‘기억의 향기’를 남기고자 한다. 단순한 결과물의 나열이 아닌, 창작의 과정과 고민이 축적된 흔적들이 이 공간에 머무는 이들의 감각과 감정 속에 잔잔히 머물기를 바란다.

                        전시를 마주한 순간이 훗날, 불현듯 떠오르는 영감으로 다시 피어나기를.
                        우리의 잔향이 누군가의 기억 속에서 오래도록 머물 수 있기를 바랍니다.`
        },
        {
            title: `기억을 통한 향 추출`,
            context: `기억은 손에 잡히지 않지만 우리 안에 깊이 스며들어 감각의 결로 남습니다. 이 기억은 사라지지 않고 다시 응축되어, 마치 맡을 수 있는 '향’ 으로 추출되듯 되살아납니다.

                하나의 향이 탑·미들·베이스 노트로 이루어지듯, 기억 또한 여러 겹의 경험과 감정으로 구성됩니다. 작품을 마주한 첫 순간의 인상과 그 당시에 겪은 감정, 그리고 시간이 흐른 뒤 불현듯 되살아나는 여운이 서로 다른 노트를 이루어 층위를 만듭니다. <잔향> 전시는 이러한 기억의 향을 여섯 개의 주제로 응축하여 감각적으로 제시합니다.

                학생들이 쌓아온 고민과 탐구의 시간, 하나의 작품을 완성하기 위한 노력한 과정은 AI&ROBOT, EDUCATION&KIDS, HEALTH CARE, IT& TECH, LIVING, MOBILITY라는 여섯 가지 향으로 드러납니다. 각각 독립된 향은 노트처럼 뚜렷한 개성을 지니면서도 함께 어우러져 전체적인 조화를 완성합니다.`
        },
        {
            title: `잔향의 형`,
            context: `세 갈래로 뻗어 나가는 유기적인 곡선은 꽃잎의 형상을 닮아, 작품 속에서 향이 피어오르고 퍼져나가는 순간을 담았습니다. 곡선들이 서로 교차하며 만들어내는 흐름은 창작의 과정에서 이어지는 영감과 감정을 나타내고, 그 중심에 놓인 물방울은 남겨진 향과 기억의 매개체를 의미합니다. 이는 전시를 통해 스며든 감각과 감정이 시간이 지나도 서서히 피어오르는 잔향으로 남기를 바라는 의지를 담고 있습니다.`
        }
    ]

    return (
        <Container>
            <ConceptContainer>
                <ConceptCol>
                    <TitleCol>{concepts[0].title}</TitleCol>
                    <RowCol>
                        <ContextCol>{concepts[0].context}</ContextCol>
                        <ImageCol src={`${base}brand-concept-logo.png`}></ImageCol>
                    </RowCol>
                </ConceptCol>
                <ConceptCol>
                    <TitleCol>{concepts[1].title}</TitleCol>
                    <RowCol>
                        <ContextCol>{concepts[1].context}</ContextCol>
                        <ImageCol src={`${base}brand-category.png`}></ImageCol>
                    </RowCol>
                </ConceptCol>
                <ConceptCol>
                    <ColumnCol>
                        <TitleCol>{concepts[2].title}</TitleCol>
                        <ContextColColumn>{concepts[2].context}</ContextColColumn>
                    </ColumnCol>
                    <ImageCol src={`${base}brand-variation.png`}></ImageCol>
                </ConceptCol>
            </ConceptContainer>
        </Container>
    )
}