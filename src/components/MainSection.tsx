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
      <Main>
        <SwiperSection />
        <LeftAd />
        <RankingCategory />
        <PlatformCategory />
        <ReviewSection />
        <RightAd />
      </Main>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: space-around;
`;

const Main = styled.main`
  position: relative;
`;
