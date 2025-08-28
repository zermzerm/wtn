import styled from "styled-components";

export default function RightAd() {
  return (
    <Main>
      <div>광고창</div>
    </Main>
  );
}

const Main = styled.main`
  position: absolute;
  right: 30px;
  top: 0;
  width: 300px;
  height: 500px;
  border: 1px solid #b2b1b1;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 450px;

  @media only screen and (max-width: 1840px) {
    display: none;
  }
`;
