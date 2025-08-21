import Image from "next/image";
import styled from "styled-components";

interface DataProps {
  data: {
    id: number;
    img: string;
    genre: string;
    title: string;
    star: number;
    author: string;
    description: string;
    reviewer: string;
    level: number;
    reviewCnt: number;
    date: string;
    reviewStar: number;
    reviewDescription: string;
  };
}

export default function ReviewCard({data}: DataProps) {
  return (
    <Article>
      <Section1>
        <div>
          <Image
            src={data.img}
            alt={data.title}
            width={117}
            height={167}
            style={{borderRadius: "8px"}}
          />
        </div>
        <WebToonWrapper>
          <WebToonBody>
            <WebToonContent>
              <Genre>{data.genre}</Genre>
              <Title>{data.title}</Title>
              <Star>{data.star}</Star>
            </WebToonContent>
            <Author>{data.author}</Author>
          </WebToonBody>
          <WebToonDescription>{data.description}</WebToonDescription>
        </WebToonWrapper>
      </Section1>
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #f1f1f1",
        }}
      />
      <Section2>
        <ReviewerContainer>
          <ReviewerWrapper>
            <Reviewer>{data.reviewer}</Reviewer>
            <Level>LV {data.level}</Level>
            <ReviewCnt>작성리뷰({data.reviewCnt})</ReviewCnt>
          </ReviewerWrapper>
          <Date>{data.date}</Date>
        </ReviewerContainer>
        <ReviewStar>{data.star}</ReviewStar>
        <ReviewDescription>{data.reviewDescription}</ReviewDescription>
      </Section2>
    </Article>
  );
}

const Article = styled.article``;

const Section1 = styled.section`
  width: 543px;
  height: 169px;
  background-color: white;
  border-radius: 12px 12px 0 0;
  padding: 21px;
  display: flex;
  gap: 15px;
`;

const WebToonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const WebToonBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  gap: 5px;
`;

const WebToonContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Genre = styled.p`
  font-size: 11px;
  color: #9b9b9b;
  &:hover {
    color: #23d2d2;
  }
`;

const Title = styled.p`
  font-size: 15px;
  color: #484848;
  padding-top: 5px;
`;
const Star = styled.p`
  font-size: 12px;
  color: #73848e;
`;

const Author = styled.p`
  font-size: 12px;
  color: #484848;
`;

const WebToonDescription = styled.p`
  font-size: 14px;
  color: #777777;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: pre-line;
  line-height: 23px;
`;

const Section2 = styled.section`
  width: 543px;
  max-height: 360px;
  background-color: white;
  border-radius: 0 0 12px 12px;
  padding: 21px;
`;

const ReviewerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

const ReviewerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Reviewer = styled.p`
  font-size: 14px;
  color: #484848;
  font-weight: 600;
`;

const Level = styled.div`
  font-size: 8px;
  font-weight: 600;
  color: #212529;
  background-color: #f8f8fb;
  border: 1px solid #e7e7e9;
  padding: 0 5px 0 5px;
  border-radius: 8px;
`;

const ReviewCnt = styled.p`
  font-size: 12px;
  color: #717171;
  &:hover {
    color: #23d2d2;
  }
`;

const Date = styled.p`
  font-size: 11.5px;
  color: #6c757d;
`;

const ReviewStar = styled.p``;

const ReviewDescription = styled.p`
  font-size: 14px;
  color: #777777;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  line-height: 23px;
  padding-top: 10px;
`;
