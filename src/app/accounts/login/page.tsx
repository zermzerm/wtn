"use client";

import TopGenreWrapper from "@/components/common/TopGenreWrapper";
import {GENRE} from "@/constants/topList";
import AuthForm from "@/components/auth/AuthForm";
import styled from "styled-components";

export default function LoginPage() {
  return (
    <section>
      <TopGenreWrapper list={GENRE} />
      <Container>
        <AuthForm type="login" />
      </Container>
    </section>
  );
}

const Container = styled.section`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
