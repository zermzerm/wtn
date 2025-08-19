"use client";

import Card from "@/components/Card";
import TopGenre from "@/components/TopGenre";
import {GENRE} from "@/constants/topList";
import {useParams} from "next/navigation";
import styled from "styled-components";

export default function GenrePage() {
  const params = useParams();
  const slug = params.slug as string;
  const title = GENRE.filter((el) => el[1] === slug)[0][0];
  return (
    <>
      <TopGenre list={GENRE} />
      <Main>
        <Header>
          <h2>{title}</h2>
          <div>검색</div>
        </Header>
        <div>
          <ContentHeader>
            <div>완결 체크</div>
            <ContentSort>
              <div>최신순</div>
              <div>인기순</div>
              <div>추천순</div>
              <div>리뷰순</div>
            </ContentSort>
          </ContentHeader>
          <Card />
        </div>
      </Main>
    </>
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
  justify-content: space-between;
  padding-bottom: 25px;
  color: #8f91ac;
  font-size: 12px;
  margin: 0 auto;
`;

const ContentSort = styled.div`
  display: flex;
  gap: 10px;
`;
