import styled from "styled-components";

interface TagListProps {
  list: string[];
}

export default function Tag({list}: TagListProps) {
  return (
    <Section>
      {list.map((el, idx) => (
        <Div key={idx}>{el}</Div>
      ))}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Div = styled.div`
  color: #484848;
  font-size: 14px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  padding-bottom: 10px;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0; /* 글자 아래쪽에 위치 */
    width: 100%;
    height: 3px; /* 밑줄 두께 */
    background: #23d2e2;
    transform: translateY(8px) scaleY(0); /* 처음엔 보이지 않음 (세로축 0) */
    transform-origin: bottom; /* 밑에서 시작 */
    transition: transform 0.4s ease;
  }
  &:hover {
    font-size: 15.5px;
    font-weight: 500;
  }

  &:hover::after {
    transform: translateY(0) scaleY(1); /* 밑줄만 hover 시 채워짐 */
  }
`;
