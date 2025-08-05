"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import styled, {css, keyframes} from "styled-components";

export default function NavBar() {
  const [isHidden, setIsHidden] = useState(false);
  const [page, setPage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY === 0) setIsHidden(false);
      else if (scrollY > 400) setIsHidden(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Main $hidden={isHidden}>
      <Section>
        <StyledLink href="/" onClick={() => setPage("home")} $page={page === "home"}>
          ㅇㅌㄴ
        </StyledLink>
        <StyledLink
          href="/ranking/top/total"
          onClick={() => setPage("ranking")}
          $page={page === "ranking"}
        >
          랭킹
        </StyledLink>
        <StyledLink href="/review" onClick={() => setPage("review")} $page={page === "review"}>
          리뷰
        </StyledLink>
        <StyledLink
          href="/collection"
          onClick={() => setPage("collection")}
          $page={page === "collection"}
        >
          컬렉션
        </StyledLink>
        <StyledLink
          href="/search/genre/total"
          onClick={() => setPage("search")}
          $page={page === "search"}
        >
          웹툰 찾기
        </StyledLink>
        <StyledLink
          href="/community"
          onClick={() => setPage("community")}
          $page={page === "community"}
        >
          커뮤니티
        </StyledLink>
      </Section>
      <SearchSection>
        <p>검색</p>
        <p>로그인</p>
      </SearchSection>
    </Main>
  );
}

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Main = styled.nav<{$hidden: boolean}>`
  background-color: white;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #d8d6d6;
  gap: 250px;
  z-index: 1000;
  top: 0;
  left: 0;
  position: ${({$hidden}) => ($hidden ? "fixed" : "absolute")};

  ${({$hidden}) =>
    $hidden &&
    css`
      animation: ${slideDown} 0.4s ease forwards;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    `}
`;

const Section = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const SearchSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const StyledLink = styled(Link)<{$page: boolean}>`
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: ${({$page}) => ($page ? " #23d2e2" : "#000")};

  &:hover {
    color: #23d2e2;
  }
`;
