import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface DataProps {
  data: {
    id: number;
    img: string;
    name: string;
    star: number;
    review: number;
    work: number;
  };
}

export default function Card({data}: DataProps) {
  return (
    <Container href={`/author/${data.id}`}>
      <Image
        src={data.img}
        alt={data.name}
        width={80}
        height={80}
        style={{borderRadius: 100, border: "3px solid #23d2e2"}}
      />
      <Name>{data.name}</Name>
      <Star>평균평점 {data.star}</Star>
      <div>별</div>
      <Work>작품 리뷰수 ({data.review})</Work>
      <Work>작품수 ({data.work})</Work>
    </Container>
  );
}

const Container = styled(Link)`
  width: 135px;
  height: 224px;
  border-radius: 12px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

const Name = styled.p`
  font-size: 16px;
  color: #484848;
  padding-top: 15px;
`;

const Star = styled.p`
  font-size: 11px;
  color: #777777;
`;

const Work = styled.p`
  font-size: 13px;
  color: #bbbbbb;
`;
