"use client";

import SwiperSection from "@/components/Home/SwiperSection";
import RankingCategory from "@/components/Home/RankingCategory";
import PlatformCategory from "@/components/Home/PlatformCategory";
import LeftAd from "@/components/Home/LeftAd";
import RightAd from "@/components/Home/RightAd";
import ReviewSection from "@/components/common/ReviewSection";
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
