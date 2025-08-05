"use client";

import TopGenre from "@/components/TopGenre";
import {GENRE} from "@/constants/topList";
import {totalWebToon} from "@/lib/dummyData";
import Image from "next/image";
import Link from "next/link";
import {useParams} from "next/navigation";
import styled from "styled-components";

interface Webtoon {
  id: number;
  title: string;
  genre: string;
  author: string;
  star: number;
  review: number;
  img: string;
}

export default function GenrePage() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <>
      <TopGenre list={GENRE} />
      <Main>
        <Header>
          <div>{slug}</div>
          <div>검색</div>
        </Header>
        <div>
          <ContentHeader>
            <div>완결 체크</div>
            <ContentSort>
              <div>최신순</div>
              <div>인기순</div>
              <div>추천순</div>
              <div>리뷰순</div>
            </ContentSort>
          </ContentHeader>
          <ContentSection>
            <ContentWrapper>
              {totalWebToon.map((webtoon: Webtoon) => (
                <Link href={"/search/1"} key={webtoon.id}>
                  <ImageWrapper>
                    <Image src={webtoon.img} alt={webtoon.title} fill priority />
                  </ImageWrapper>
                  <Content>
                    <Genre>
                      <div>{webtoon.genre}</div>
                      <div>{webtoon.author}</div>
                    </Genre>
                    <div style={{fontSize: "15px"}}>{webtoon.title}</div>
                    <Review>
                      <div>별 이미지</div>
                      <div>{`${webtoon.star} (${webtoon.review})`}</div>
                    </Review>
                  </Content>
                </Link>
              ))}
            </ContentWrapper>
          </ContentSection>
        </div>
      </Main>
    </>
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

const ContentHeader = styled.div`
  width: 1130px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;
  color: #8f91ac;
  font-size: 12px;
  margin: 0 auto;
`;

const ContentSort = styled.div`
  display: flex;
  gap: 10px;
`;

const ContentSection = styled.section``;

const ContentWrapper = styled.section`
  width: 1150px;
  height: 400px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 10px;
  gap: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 214px;
  height: 303px;
  border-radius: 10px;
  overflow: hidden;
`;

const Genre = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`;

const Review = styled.div`
  display: flex;
  font-size: 12px;
  color: #484848;
`;
