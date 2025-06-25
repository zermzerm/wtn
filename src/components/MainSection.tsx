"use client";

import SwiperSection from "@/components/SwiperSection";
import RankingCategory from "@/components/RankingCategory";
import styled from "styled-components";
import PlatformCategory from "@/components/PlatformCategory";

export default function MainSection() {
  return (
    <main>
      <SwiperSection />
      <RankingCategory />
      <PlatformCategory />
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
