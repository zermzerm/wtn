import styled from "styled-components";

export default function RightAd() {
  return (
    <LeftAdMain>
      <div>광고창</div>
    </LeftAdMain>
  );
}

const LeftAdMain = styled.main`
  width: 300px;
  height: 500px;
  position: fixed;
  right: 30px;
  top: 250px;
  border: 1px solid black;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1840px) {
    display: none;
  }
`;
