"use client";

import TopGenre from "@/components/TopGenre";
import {RANKING} from "@/constants/topList";
import {useParams} from "next/navigation";
import styled from "styled-components";

export default function Author() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <>
      <TopGenre list={RANKING} />
      <Main>
        <Header>
          <div>{slug}</div>
          <div>검색</div>
        </Header>
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
