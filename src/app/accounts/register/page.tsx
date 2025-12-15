"use client";

import TopGenreWrapper from "@/components/common/TopGenreWrapper";
import {GENRE} from "@/constants/topList";
import AuthForm from "@/components/auth/AuthForm";
import styled from "styled-components";

export default function RegisterPage() {
  return (
    <section>
      <TopGenreWrapper list={GENRE} />
      <Container>
        <AuthForm type="register" />
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
