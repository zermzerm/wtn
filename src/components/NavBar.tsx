"use client";

import Link from "next/link";
import styled from "styled-components";

export default function NavBar() {
  return (
    <Nav>
      <Section>
        <Link href="/">ㅇㅌㄴ</Link>
        <Link href="/ranking">랭킹</Link>
        <Link href="/review">리뷰</Link>
        <Link href="/collection">컬렉션</Link>
        <Link href="/search">웹툰 찾기</Link>
        <Link href="/community">커뮤니티</Link>
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
  gap: 200px;
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
