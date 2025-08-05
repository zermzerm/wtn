"use client";

import {GENRE} from "@/constants/topList";
import Link from "next/link";
import styled from "styled-components";

interface TopGenreProps {
  list: string[][];
}

export default function TopGenre({list}: TopGenreProps) {
  const genre = list === GENRE;
  console.log(genre);

  return (
    <Main>
      {list.map((el: string[], idx) => (
        <Article href={genre ? `/search/genre/${el[1]}` : `/ranking/${el[1]}`} key={idx}>
          {el[0]}
        </Article>
      ))}
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
