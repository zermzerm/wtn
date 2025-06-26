"use client";

import SwiperSection from "@/components/SwiperSection";
import RankingCategory from "@/components/RankingCategory";
import PlatformCategory from "@/components/PlatformCategory";
import LeftAd from "@/components/LeftAd";
import RightAd from "@/components/RightAd";
import ReviewSection from "@/components/ReviewSection";

export default function MainSection() {
  return (
    <>
      <LeftAd />
      <RightAd />
      <main>
        <SwiperSection />
        <RankingCategory />
        <PlatformCategory />
        <ReviewSection />
      </main>
    </>
  );
}
