"use client";

import TopGenre from "@/components/TopGenre";
import {REVIEW} from "@/constants/topList";
import styled from "styled-components";

export default function Review() {
  return (
    <div>
      <TopGenre list={REVIEW} />
      <Main>
        <Header>
          <h2>최신 리뷰</h2>
          <div>
            <P>최근에 작성된 리뷰를 확인해보세요!</P>
            <P>의외로 재밌는 작품을 찾으실지도 몰라요!</P>
          </div>
        </Header>
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

const P = styled.p`
  font-size: 14px;
  color: #484848;
  text-align: right;
`;
