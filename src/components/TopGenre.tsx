"use client";

import styled from "styled-components";

export default function TopGenre() {
  return (
    <Main>
      <Article>전체</Article>
      <Article>로맨스</Article>
      <Article>로판</Article>
      <Article>판타지</Article>
      <Article>협판</Article>
      <Article>무협</Article>
      <Article>드라마</Article>
      <Article>라이트노벨</Article>
      <Article>스포츠</Article>
      <Article>개그</Article>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  gap: 30px;
  font-size: 14px;
  color: #484848;
  padding: 10px 0 10px 0;
`;

const Article = styled.article`
  padding: 6px 16px;
  border: 3px solid transparent;
  &:hover {
    color: #23d2e2;
    cursor: pointer;
    border: 3px solid #23dee2;
    border-radius: 20px;
  }
`;
