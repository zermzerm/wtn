"use client";

import TopGenre from "@/components/common/TopGenre";
import {Suspense} from "react";

interface TopGenreProps {
  list: string[][];
}

export default function TopGenreWrapper(props: TopGenreProps) {
  return (
    <Suspense fallback={null}>
      <TopGenre {...props} />
    </Suspense>
  );
}
