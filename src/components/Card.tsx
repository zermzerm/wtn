import styled from "styled-components";
import {totalWebToon} from "@/lib/dummyData";
import Image from "next/image";
import Link from "next/link";

interface Webtoon {
  id: number;
  title: string;
  genre: string;
  author: string;
  star: number;
  review: number;
  img: string;
}

export default function Card({collection = false}) {
  return (
    <ContentWrapper $collection={collection}>
      {totalWebToon.map((webtoon: Webtoon) => (
        <Link href={"/search/1"} key={webtoon.id}>
          <ImageWrapper $collection={collection}>
            <Image src={webtoon.img} alt={webtoon.title} fill priority sizes="max-width:214px" />
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
  );
}

const ContentWrapper = styled.section<{$collection: boolean}>`
  width: ${({$collection}) => ($collection ? "1100px" : "1150px")};
  height: 100%;
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

const ImageWrapper = styled.div<{$collection: boolean}>`
  position: relative;
  width: ${({$collection}) => ($collection ? "196px" : "214px")};
  height: ${({$collection}) => ($collection ? "278px" : "303px")};
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
