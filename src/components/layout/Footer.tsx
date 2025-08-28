"use client";

import styled from "styled-components";

export default function Footer() {
  return (
    <Main>
      <Container>
        <Section1>
          <Title>웹툰 리뷰 플랫폼 - 웹툰넷</Title>
          <div>
            <Content>지금 웹툰을 리뷰하고,</Content>
            <Content>내 취향에 딱 맞는 웹툰을 추천받아 보세요!</Content>
          </div>
        </Section1>
        <div>
          <Title>장르</Title>
        </div>
        <div>
          <Title>기타</Title>
        </div>
        <div>
          <Title>계정</Title>
        </div>
      </Container>
      <CopyRights>© 웹툰 리뷰 플랫폼, 웹툰넷, 웹툰 네트워크 . All Rights Reserved.</CopyRights>
    </Main>
  );
}

const Main = styled.main`
  height: 300px;
  background-color: #eff1f4;
  margin-top: 60px;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const Section1 = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Content = styled.p`
  font-size: 14px;
  color: #777777;
`;

const Title = styled.p`
  font-size: 14px;
  color: #484848;
  padding-bottom: 20px;
`;

const CopyRights = styled.p`
  font-size: 13px;
  color: #484848;
`;
