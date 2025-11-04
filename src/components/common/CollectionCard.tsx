import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface CollectionCardProps {
  data: {
    id: number;
    img: string;
    title: string;
    cnt: number;
  };
}

export default function CollectionCard({data}: CollectionCardProps) {
  return (
    <Link href={`/collection/${data.id}`}>
      <div>
        <Image
          src={data.img}
          alt={data.title}
          width={260}
          height={260}
          style={{borderRadius: "8px"}}
        />
      </div>
      <CollectionContent>
        <Title>{data.title}</Title>
        <Cnt>{data.cnt}개의 웹툰</Cnt>
      </CollectionContent>
    </Link>
  );
}

const CollectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Title = styled.p`
  font-size: 15px;
  font-size: 800;
  color: #484848;
  text-align: center;
  &:hover {
    color: #23d2e2;
  }
`;

const Cnt = styled.p`
  font-size: 11px;
  color: #757c7d;
`;
