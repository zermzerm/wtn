"use client";

import AuthorCard from "@/components/ranking/author/AuthorCard";
import Tag from "@/components/common/Tag";
import {RANKING, WORK} from "@/constants/topList";
import {authorWork} from "@/lib/dummyData";
import styled from "styled-components";
import TopGenreWrapper from "@/components/common/TopGenreWrapper";

export default function Author() {
  return (
    <>
      <TopGenreWrapper list={RANKING} />
      <Main>
        <Header>
          <H>작가 BEST</H>
          <div>
            <P>많은 분들이 찾고 있는 작가를 찾아보세요!</P>
            <P>관심있는 작가분이 계신가요? 작가의 다른 작품도 한번 읽어보세요!</P>
          </div>
        </Header>
        <Tag list={WORK} />
        <CardWrapper>
          {authorWork.map((el) => (
            <AuthorCard key={el.id} data={el} />
          ))}
        </CardWrapper>
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

const P = styled.p`
  font-size: 14px;
  color: #484848;
  text-align: right;
`;

const H = styled.h2`
  color: #3e3f5e;
  font-weight: 550;
`;

const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 14px;
`;
