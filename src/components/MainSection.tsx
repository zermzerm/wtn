"use client";

import SwiperSection from "@/components/SwiperSection";
import RankingCategory from "@/components/RankingCategory";
import PlatformCategory from "@/components/PlatformCategory";
import LeftAd from "@/components/LeftAd";
import RightAd from "@/components/RightAd";
import ReviewSection from "@/components/ReviewSection";
import styled from "styled-components";

export default function MainSection() {
  return (
    <Container>
      <LeftAd />
      <main>
        <SwiperSection />
        <RankingCategory />
        <PlatformCategory />
        <ReviewSection />
      </main>
      <RightAd />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: space-around;
`;
