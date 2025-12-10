"use client";

import Link from "next/link";
import styled from "styled-components";

export default function NotFound() {
  return (
    <Section>
      <h1>404 - 페이지를 찾을 수 없습니다.</h1>
      <P>죄송합니다. 요청하신 페이지가 존재하지 않습니다.</P>
      <StyledLink href="/">홈으로 돌아가기</StyledLink>
    </Section>
  );
}

const Section = styled.section`
  padding: 200px 0 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  padding: 30px 0 50px 0;
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  &:hover {
    color: #23d2e2;
  }
`;
