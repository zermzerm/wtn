"use client";

import StarRating from "@/components/StarRating";
import TopGenre from "@/components/TopGenre";
import {GENRE} from "@/constants/topList";
import {series} from "@/lib/dummyData";
import Image from "next/image";
import styled from "styled-components";

export default function Series() {
  return (
    <>
      <TopGenre list={GENRE} />
      <Main>
        <Content>
          <div>
            <Image src={series.img} width={256} height={346} alt={series.title} />
          </div>
          <Header>
            <GenreContainer>
              <GenreSection>
                <Genre>{series.genre}</Genre>
                <Author>{series.author}</Author>
              </GenreSection>
              <Title>{series.title}</Title>
              <Status>{series.status}</Status>
            </GenreContainer>
            <hr
              style={{
                border: "none",
                borderTop: "1px solid #e9e7e7",
              }}
            />
            <Description>{series.description}</Description>
          </Header>
        </Content>
        <ReviewSection>
          <Review>
            <div>평점</div>
            <div>
              <StarRating star={series.star} />
            </div>
            <div>{series.star}</div>
            <div>({series.review}명)</div>
          </Review>
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #e9e7e7",
            }}
          />
          <Star>
            <StarRating star={0} />
          </Star>
        </ReviewSection>
      </Main>
    </>
  );
}

const Main = styled.main`
  max-width: 1000px;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 20px auto;
`;

const Content = styled.section`
  width: 256px;
  background-color: white;
  padding: 15px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  gap: 10px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const GenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const GenreSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Genre = styled.p`
  font-size: 11px;
  color: #484848;
`;

const Author = styled.p`
  font-size: 12px;
  color: #484848;
`;

const Status = styled.div`
  width: 35px;
  padding: 2px;
  color: #fff;
  background-color: #17aebb;
  border-radius: 5px;
  font-size: 12px;
  display: flex;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 20px;
  color: #222222;
  font-weight: 600;
`;

const Description = styled.div`
  font-size: 14px;
  color: #777777;
`;

const ReviewSection = styled.section`
  background-color: white;
  height: 100%;

  border-radius: 12px;
  flex: 2 1 400px;
`;

const Review = styled.div`
  padding: 15px;
  display: flex;
  gap: 10px;
`;

const Star = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px 28px;
`;
