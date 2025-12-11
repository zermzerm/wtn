"use client";

import CollectionCard from "@/components/common/CollectionCard";
import TopGenreWrapper from "@/components/common/TopGenreWrapper";
import {GENRE} from "@/constants/topList";
import {collectionData} from "@/lib/dummyData";
import styled from "styled-components";

export default function Collection() {
  return (
    <div>
      <TopGenreWrapper list={GENRE} />
      <Main>
        <Header>
          <H>타이틀</H>
          <div>검색</div>
        </Header>
        <ContentHeader>
          <Array>완결 체크</Array>
          <Array>최신순</Array>
          <Array>인기순</Array>
          <Array>추천순</Array>
          <Array>리뷰순</Array>
        </ContentHeader>
        <CollectionCardWrapper>
          {collectionData.map((collection) => (
            <CollectionCard data={collection} key={collection.id} />
          ))}
        </CollectionCardWrapper>
      </Main>
    </div>
  );
}

const Main = styled.main`
  width: 1111px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 25px;
  padding-top: 25px;
`;

const Header = styled.header`
  width: 1100px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 25px 28px;
  border-radius: 12px;
`;

const ContentHeader = styled.div`
  width: 1130px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #8f91ac;
  font-size: 12px;
  margin: 0 auto;
`;

const Array = styled.p`
  &:hover {
    color: #23d2e2;
  }
`;

const H = styled.h2`
  color: #3e3f5e;
  font-weight: 550;
`;

const CollectionCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;
