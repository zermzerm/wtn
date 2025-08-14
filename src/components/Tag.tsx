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
  &:hover {
    font-size: 15.5px;
    font-weight: 500;
  }
`;
