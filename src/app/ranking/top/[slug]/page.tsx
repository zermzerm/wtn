"use client";

import TopGenre from "@/components/TopGenre";
import {RANKING} from "@/constants/topList";
// import {useParams} from "next/navigation";
import styled from "styled-components";

export default function Top() {
  // const params = useParams();
  // const slug = params.slug as string;

  return (
    <>
      <TopGenre list={RANKING} />
      <Main>
        <Header>
          <h2>TOP 30</h2>
          <div>
            <P>웹툰넷의 웹툰 중 가장 인기있는 웹툰이에요!</P>
            <P>여기에 있는 작품들을 먼저 보시겠어요?</P>
          </div>
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
  align-items: center;
  padding: 25px 28px;
  border-radius: 12px;
`;

const P = styled.p`
  font-size: 14px;
  color: #484848;
  text-align: right;
`;
