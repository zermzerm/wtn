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
        const fill =
          rating >= currentValue ? 100 : rating + 1 > currentValue ? (rating - idx) * 100 : 0;
        return (
          <Star key={idx} onClick={() => setRating(currentValue)} $fill={fill}>
            ★
          </Star>
        );
      })}
    </div>
  );
}

const Star = styled.span<{$fill: number}>`
  cursor: pointer;
  font-size: 16px;
  background: ${({$fill}) => `linear-gradient(90deg, #ffc400 ${$fill}%, #cacaca ${$fill}%)`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
