"use client";

import TopGenreWrapper from "@/components/common/TopGenreWrapper";
import PostCard from "@/components/community/PostCard";
import {COMMUNITY} from "@/constants/topList";
import {POST} from "@/lib/dummyData";
import {useParams} from "next/navigation";
import styled from "styled-components";

export default function Community() {
  const params = useParams();
  const slug = params.slug as string;
  const title = COMMUNITY.filter((el) => el[1] === slug)[0][0];
  return (
    <>
      <TopGenreWrapper list={COMMUNITY} />
      <Main>
        <Header>
          <H>{title}</H>
          <PostButton>글쓰기</PostButton>
        </Header>
        <ContentWrapper>
          <ContentHeader>
            <div>최신순</div>
            <span>·</span>
            <div>UP많은순</div>
            <span>·</span>
            <div>조회많은순</div>
            <span>·</span>
            <div>댓글많은순</div>
          </ContentHeader>
          <PostContainer>
            {POST.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </PostContainer>
        </ContentWrapper>
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
  justify-content: center;
  align-items: center;
`;

const ContentHeader = styled.div`
  width: 1130px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 25px;
  color: #8f91ac;
  font-size: 12px;
  margin: 0 auto;
  gap: 10px;
`;

const H = styled.h2`
  color: #3e3f5e;
  font-weight: 550;
`;

const PostContainer = styled.div`
  width: 1109px;
  height: 100%;
  background-color: white;
  border-radius: 10px;
`;
