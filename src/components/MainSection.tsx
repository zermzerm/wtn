"use client";

import SwiperSection from "@/components/SwiperSection";
import TopTen from "@/components/TopTen";
import styled from "styled-components";

export default function MainSection() {
  return (
    <main>
      <SwiperSection />
      <TopTen />
      <P>메인이다</P>
      <P>메인이다</P>
      <P>메인이다</P>
      <P>메인이다</P>
      <P>메인이다</P>
      <P>메인이다</P>
      <P>메인이다</P>
      <P>메인이다</P>
      <P>메인이다</P>
      <P>메인이다</P>
      <P>메인이다</P>
      <P>메인이다</P>
      <P>메인이다</P>
      <P>메인이다</P>
    </main>
  );
}

const P = styled.p`
  color: red;
`;
