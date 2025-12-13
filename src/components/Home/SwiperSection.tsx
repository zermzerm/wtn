"use client";

import {swiperDummy} from "../../../lib/dummyData";
import Image from "next/image";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {useRef} from "react";

export default function SwiperSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Main>
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (
              typeof swiper.params?.navigation === "object" &&
              swiper.params.navigation !== null
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
        style={{width: "100%", height: "100%"}}
      >
        {swiperDummy.map((slide) => (
          <SwiperSlide key={slide.id}>
            <ImageWrapper>
              <Image src={slide.img} alt="slide-image" fill priority sizes="max-width:386px" />
            </ImageWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 화살표 버튼 */}
      <ButtonContainer>
        <CustomButton ref={prevRef}>◀</CustomButton>
        <CustomButton ref={nextRef}>▶</CustomButton>
      </ButtonContainer>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
  height: 300px;
  padding: 20px 0 60px 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 10px;
`;

const CustomButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 20px;
  color: #444;
  background-color: #f8f8fb;
  transition: all 0.2s;

  &:hover {
    color: #000;
  }
`;
