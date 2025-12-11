"use client";

import Card from "@/components/common/Card";
import TopGenreWrapper from "@/components/common/TopGenreWrapper";
import {GENRE} from "@/constants/topList";
import {useParams} from "next/navigation";
import styled from "styled-components";

export default function GenrePage() {
  const params = useParams();
  const slug = params.slug as string;
  const title = GENRE.filter((el) => el[1] === slug)[0][0];
  return (
    <>
      <TopGenreWrapper list={GENRE} />
      <Main>
        <Header>
          <H>{title}</H>
          <div>검색</div>
        </Header>
        <div>
          <ContentHeader>
            <div>완결 체크</div>
            <ContentSort>
              <div>최신순</div>
              <span>·</span>
              <div>인기순</div>
              <span>·</span>
              <div>추천순</div>
              <span>·</span>
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
  width: 1053px;
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

const H = styled.h2`
  color: #3e3f5e;
  font-weight: 550;
`;
