"use client";

import TopGenreWrapper from "@/components/common/TopGenreWrapper";
import {COMMUNITY} from "@/constants/topList";
import {POST} from "../../../../lib/dummyData";
import styled from "styled-components";

export default function Post() {
  const postData = POST[0];

  return (
    <>
      <TopGenreWrapper list={COMMUNITY} />
      <Main>
        <Header>
          <H>{postData.postType}</H>
          <PostButton>글쓰기</PostButton>
        </Header>
        <ContentContainer>
          <ContentWrapper>
            <PostContainer>
              <div>{postData.title}</div>
              <div>
                <PostIcons>
                  <p>{postData.up}</p>
                  <p>{postData.down}</p>
                  <p>{postData.comment}</p>
                </PostIcons>
                <div>{postData.name}</div>
              </div>
            </PostContainer>
            <hr
              style={{
                border: "none",
                borderTop: "1px solid #e9e7e7",
              }}
            />
            <Content>{postData.content}</Content>
            <hr
              style={{
                border: "none",
                borderTop: "1px solid #e9e7e7",
              }}
            />
            <Rating>
              {postData.up} 업버튼 다운버튼 {postData.down}
            </Rating>
          </ContentWrapper>
          <CommentWrapper>
            <Comment>dd</Comment>
            <CommentWrite>dd</CommentWrite>
          </CommentWrapper>
        </ContentContainer>
      </Main>
    </>
  );
}

const Main = styled.main`
  width: 1111px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 25px;
  padding-top: 25px;
`;

const Header = styled.header`
  width: 1053px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 25px 28px;
  border-radius: 12px;
`;

const ContentContainer = styled.div`
  width: 1109px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
`;

const Content = styled.div`
  padding: 25px 28px;
  white-space: pre-line;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 28px;
`;

const PostButton = styled.button`
  font-size: 12px;
  background-color: #23d2e2;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 12px 18px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
`;

const H = styled.h2`
  color: #3e3f5e;
  font-weight: 550;
`;

const PostContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px 28px;
`;

const PostIcons = styled.div`
  display: flex;
  gap: 10px;
  font-size: 11px;
  color: #c2c2c2;
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
`;

const CommentWrite = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
`;
