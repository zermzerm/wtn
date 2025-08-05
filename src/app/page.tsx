import Genre from "@/components/TopGenre";
import MainSection from "@/components/MainSection";
import Footer from "@/components/Footer";
import {GENRE} from "@/constants/topList";

export default function Home() {
  return (
    <main>
      <Genre list={GENRE} />
      <MainSection />
      <Footer />
    </main>
  );
}
