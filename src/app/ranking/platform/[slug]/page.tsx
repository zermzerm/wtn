"use client";

import TopGenre from "@/components/TopGenre";
import {RANKING} from "@/constants/topList";
// import {useParams} from "next/navigation";
import styled from "styled-components";

export default function Platform() {
  // const params = useParams();
  // const slug = params.slug as string;

  return (
    <>
      <TopGenre list={RANKING} />
      <Main>
        <Header>
          <h2>플랫폼 BEST</h2>
          <div>
            <P>웹툰 대표 플랫폼 내의 웹툰 순위를 확인해보세요!</P>
            <P>각 플랫폼의 대표작들을 소개해드립니다.</P>
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
  padding: 25px 28px;
  border-radius: 12px;
`;

const P = styled.p`
  font-size: 14px;
  color: #484848;
  text-align: right;
`;
