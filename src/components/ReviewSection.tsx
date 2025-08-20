import {recentReview} from "@/lib/dummyData";
import Image from "next/image";
import styled from "styled-components";

export default function ReviewSection() {
  return (
    <Main>
      <Title>최근 감동 리뷰</Title>
      <Section>
        {recentReview.map((review) => (
          <Content key={review.id}>
            <Image src={review.img} width={72} height={72} alt={review.name} sizes="100vw" />
            <p>{review.name}</p>
            <div>{review.star}</div>
            <div>{review.content}</div>
            <Author>
              <p>{review.title}</p>
              <p>{review.author}</p>
            </Author>
          </Content>
        ))}
      </Section>
    </Main>
  );
}

const Main = styled.main`
  max-width: 1110px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  margin-top: 90px;
`;

const Title = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: #3e3f5e;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Content = styled.div`
  width: 268px;
  height: 365px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;

const Author = styled.div`
  display: flex;
  justify-content: center;
`;
