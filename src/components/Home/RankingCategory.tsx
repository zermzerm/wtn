import StarRating from "@/components/common/StarRating";
import {reviewTop, totalTop} from "@/lib/dummyData";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
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

export default function RankingCategory() {
  const [current, setCurrent] = useState<Webtoon[]>(reviewTop);
  const [selected, setSelected] = useState<"review" | "total">("review");

  return (
    <Main>
      <Nav>
        <ClickDiv
          onClick={() => {
            setCurrent(reviewTop);
            setSelected("review");
          }}
          $active={selected === "review"}
        >
          리뷰순
        </ClickDiv>
        <ClickDiv
          onClick={() => {
            setCurrent(totalTop);
            setSelected("total");
          }}
          $active={selected === "total"}
        >
          인기순
        </ClickDiv>
      </Nav>
      <Container>
        {current.map((webtoon: Webtoon) => (
          <Link href={"/search/1"} key={webtoon.id}>
            <ImageWrapper>
              <Image
                src={webtoon.img}
                alt={webtoon.title}
                fill
                priority
                sizes="max-width : 214px"
              />
            </ImageWrapper>
            <ContentWrapper>
              <Genre>
                <div>{webtoon.genre}</div>
                <div>{webtoon.author}</div>
              </Genre>
              <div style={{fontSize: "15px"}}>{webtoon.title}</div>
              <Review>
                <div>
                  <StarRating star={webtoon.star} />
                </div>
                <div>{`${webtoon.star} (${webtoon.review})`}</div>
              </Review>
            </ContentWrapper>
          </Link>
        ))}
      </Container>
      <MoreButton>
        <MoreDiv>더보기</MoreDiv>
      </MoreButton>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 0 60px 0;
`;

const MoreButton = styled.a`
  display: flex;
  justify-content: center;
`;

const MoreDiv = styled.div`
  font-size: 12px;
  font-weight: 600;
  background-color: #fff;
  border-radius: 20px;
  padding: 12px 18px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #23d2e2;
    color: #fff;
  }
`;

const ClickDiv = styled.div<{$active: boolean}>`
  font-weight: ${({$active}) => ($active ? "bold" : "normal")};
  text-decoration: ${({$active}) => ($active ? "underline" : "none")};
  text-underline-offset: 10px;
  text-decoration-color: #23d2e2;
  text-decoration-thickness: 3px;
  &:hover {
    cursor: pointer;
    color: #23d2e2;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 214px;
  height: 303px;
  border-radius: 10px;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Genre = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`;

const Review = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #484848;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
