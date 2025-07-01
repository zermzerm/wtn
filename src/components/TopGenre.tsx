"use client";

import Link from "next/link";
import styled from "styled-components";

export default function TopGenre() {
  return (
    <Main>
      <Article href="/search/genre/total">전체</Article>
      <Article href="/search/genre/romance">로맨스</Article>
      <Article href="/search/genre/romance-fantasy">로판</Article>
      <Article href="/search/genre/fantasy">판타지</Article>
      <Article href="/search/genre/contemporary-fantasy">협판</Article>
      <Article href="/search/genre/martial-art">무협</Article>
      <Article href="/search/genre/drama">드라마</Article>
      <Article href="/search/genre/light-novel">라이트노벨</Article>
      <Article href="/search/genre/sprots">스포츠</Article>
      <Article href="/search/genre/gag">개그</Article>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  gap: 30px;
  font-size: 14px;
  color: #484848;
  padding: 5px 0 5px 0;
  background-color: white;
`;

const Article = styled(Link)`
  padding: 6px 16px;
  border: 3px solid transparent;
  &:hover {
    color: #23d2e2;
    cursor: pointer;
    border: 3px solid #23dee2;
    border-radius: 20px;
  }
`;
