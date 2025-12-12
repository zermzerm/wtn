"use client";

import {GENRE, RANKING, REVIEW} from "@/constants/topList";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
// import {useState} from "react";
import styled from "styled-components";

interface TopGenreProps {
  list: string[][];
}

export default function TopGenre({list}: TopGenreProps) {
  const genre = JSON.stringify(list) === JSON.stringify(GENRE);
  // const [page, setPage] = useState(list[0][0]);
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") || list[0][0];
  return (
    <Main>
      {list.map((el: string[], idx) => {
        // console.log(page, el[0]);
        return (
          <Article
            href={
              genre
                ? `/search/genre/${el[1]}?page=${el[0]}`
                : list === RANKING
                ? `/ranking/${el[1]}?page=${el[0]}`
                : list === REVIEW
                ? `/review/${el[1]}?page=${el[0]}`
                : `/community/topics/${el[1]}?page=${el[0]}`
            }
            key={idx}
            // onClick={() => setPage(el[0])}
            $page={currentPage === el[0]}
          >
            {el[0]}
          </Article>
        );
      })}
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

const Article = styled(Link)<{$page: boolean}>`
  padding: 6px 16px;
  border: 3px solid transparent;
  &:hover {
    color: #23d2e2;
    cursor: pointer;
    border: 3px solid #23dee2;
    border-radius: 20px;
  }
  ${({$page}) =>
    $page &&
    `
    color: #23d2e2;
    cursor: pointer;
    border: 3px solid #23d2e2;
    border-radius: 20px;
`}
`;
