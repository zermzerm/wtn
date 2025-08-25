import {useState} from "react";
import styled from "styled-components";

interface StarProps {
  star: number;
}

export default function StarRating({star}: StarProps) {
  const [rating, setRating] = useState(star);

  return (
    <div>
      {[...Array(5)].map((el, idx) => {
        const currentValue = idx + 1;
        return (
          <Star
            key={idx}
            onClick={() => setRating(currentValue)}
            $color={star >= currentValue ? true : false}
          >
            ★
          </Star>
        );
      })}
    </div>
  );
}

const Star = styled.span<{$color: boolean}>`
  cursor: pointer;
  color: ${({$color}) => ($color ? "#000000" : "#ffffff")};
`;
