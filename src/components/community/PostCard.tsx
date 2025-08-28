import Link from "next/link";
import styled from "styled-components";

interface PostProps {
  post: {
    id: number;
    postType: string;
    title: string;
    content: string;
    up: number;
    down: number;
    comment: number;
    view: number;
    name: string;
  };
}

export default function PostCard({post}: PostProps) {
  return (
    <PostWrapper href={`/community/${1}`}>
      <PostHeader>
        <PostTitle>
          <p>[{post.postType}]</p>
          <p>{post.title}</p>
        </PostTitle>
        <PostName>{post.name}</PostName>
      </PostHeader>
      <PostIcons>
        <p>{post.up}</p>
        <p>{post.down}</p>
        <p>{post.comment}</p>
        <p>{post.view}</p>
      </PostIcons>
    </PostWrapper>
  );
}

const PostWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  border-bottom: 1px solid #ededed;

  &:last-child {
    border-bottom: none;
  }
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostTitle = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
  color: 14px;
  &:hover {
    color: #23d2e2;
  }
`;

const PostName = styled.div`
  font-size: 11px;
  color: #c2c2c2;
`;

const PostIcons = styled.div`
  display: flex;
  gap: 10px;
  font-size: 11px;
  color: #c2c2c2;
`;
