"use client";

import styled from "styled-components";

export default function Search() {
  return (
    <Main>
      <Header>
        <div>현 장르</div>
        <div>검색</div>
      </Header>
      <div>
        <ContentHeader>
          <div>완결 체크</div>
          <div>
            <div>최신순</div>
            <div>인기순</div>
            <div>추천순</div>
            <div>리뷰순</div>
          </div>
        </ContentHeader>
        <ContentSection>
          <Content>
            <div>이미지</div>
            <div>내용</div>
          </Content>
        </ContentSection>
      </div>
    </Main>
  );
}

const Main = styled.main`
  width: 1111px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const ContentHeader = styled.div``;

const ContentSection = styled.section``;

const Content = styled.section``;
