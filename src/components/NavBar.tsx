"use client";

import Link from "next/link";
import styled from "styled-components";

export default function NavBar() {
  return (
    <Nav>
      <Section>
        <StyledLink href="/">ㅇㅌㄴ</StyledLink>
        <StyledLink href="/ranking">랭킹</StyledLink>
        <StyledLink href="/review">리뷰</StyledLink>
        <StyledLink href="/collection">컬렉션</StyledLink>
        <StyledLink href="/search">웹툰 찾기</StyledLink>
        <StyledLink href="/community">커뮤니티</StyledLink>
      </Section>
      <SearchSection>
        <p>검색</p>
        <p>로그인</p>
      </SearchSection>
    </Nav>
  );
}

const Nav = styled.nav`
  background-color: white;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #d8d6d6;
  gap: 250px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
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

const StyledLink = styled(Link)`
  font-size: 18px;
  font-weight: 800;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #23d2e2;
  }
`;
