"use client";

import {useParams} from "next/navigation";

export default function Author() {
  const params = useParams();
  const id = params.id as string;
  return <div>{id}번 작가페이지</div>;
}
