"use client";

import {useParams} from "next/navigation";

export default function Author() {
  const params = useParams();
  const slug = params.slug as string;
  return <div>{slug}번 작가페이지</div>;
}
