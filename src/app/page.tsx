import CatsGallery from "@/components/CatGallery";
import FeaturedCats from "@/components/FeaturedCats";
import Hero from "@/components/Hero";
import "./page.scss";

export default async function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCats />
      <CatsGallery />
    </main>
  );
}
