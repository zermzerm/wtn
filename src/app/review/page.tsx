"use client";

import ReviewCard from "@/components/review/ReviewCard";
import Tag from "@/components/common/Tag";
import {REVIEW, TOP_REVIEW_GENRE} from "@/constants/topList";
import {reviewData} from "@/lib/dummyData";
import styled from "styled-components";
import TopGenreWrapper from "@/components/common/TopGenreWrapper";

export default function Review() {
  return (
    <div>
      <TopGenreWrapper list={REVIEW} />
      <Main>
        <Header>
          <H>최신리뷰</H>
          <div>
            <P>최근에 작성된 리뷰를 확인해보세요!</P>
            <P>의외로 재밌는 작품을 찾으실지도 몰라요!</P>
          </div>
        </Header>
        <Tag list={TOP_REVIEW_GENRE} />
        <ReviewContainer>
          {reviewData.map((review) => (
            <ReviewCard data={review} key={review.id} />
          ))}
        </ReviewContainer>
      </Main>
    </div>
  );
}

const Main = styled.main`
  width: 1111px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 25px;
  padding-top: 25px;
`;

const Header = styled.header`
  width: 1100px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 25px 28px;
  border-radius: 12px;
`;

const P = styled.p`
  font-size: 14px;
  color: #484848;
  text-align: right;
`;

const H = styled.h2`
  color: #3e3f5e;
  font-weight: 550;
`;

const ReviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-bottom: 20px;
`;
