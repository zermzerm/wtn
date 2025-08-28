import Genre from "@/components/common/TopGenre";
import MainSection from "@/components/Home/MainSection";
import {GENRE} from "@/constants/topList";

export default function Home() {
  return (
    <main>
      <Genre list={GENRE} />
      <MainSection />
    </main>
  );
}
