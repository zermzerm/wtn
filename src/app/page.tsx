import TopGenreWrapper from "@/components/common/TopGenreWrapper";
import MainSection from "@/components/Home/MainSection";
import {GENRE} from "@/constants/topList";

export default function Home() {
  return (
    <main>
      <TopGenreWrapper list={GENRE} />
      <MainSection />
    </main>
  );
}
