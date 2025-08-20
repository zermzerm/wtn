import Genre from "@/components/TopGenre";
import MainSection from "@/components/MainSection";
import {GENRE} from "@/constants/topList";

export default function Home() {
  return (
    <main>
      <Genre list={GENRE} />
      <MainSection />
    </main>
  );
}
