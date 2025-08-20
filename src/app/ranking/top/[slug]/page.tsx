"use client";

import Card from "@/components/Card";
import Tag from "@/components/Tag";
import TopGenre from "@/components/TopGenre";
import {RANKING, TOP_GENRE, TOTAL, YEARS} from "@/constants/topList";
import styled from "styled-components";

export default function Top() {
  return (
    <>
      <TopGenre list={RANKING} />
      <Main>
        <Header>
          <H>TOP 30</H>
          <div>
            <P>웹툰넷의 웹툰 중 가장 인기있는 웹툰이에요!</P>
            <P>여기에 있는 작품들을 먼저 보시겠어요?</P>
          </div>
        </Header>
        <div>
          <Tag list={TOP_GENRE} />
          <Tag list={YEARS} />
          <Tag list={TOTAL} />
        </div>
        <Card />
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
  align-items: center;
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
