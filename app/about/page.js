import CafeStorySection from "@/components/CafeStorySection";
import HomeFooter from "@/components/HomeFooter";
import LifeAtBrewBite from "@/components/LifeAtBrewBite";
import MissionAndVisionSection from "@/components/MissionAndVisionSection";

export default function AboutPage() {
  return (
    <div className=" mx-auto px-6 ">
      <CafeStorySection />
      <LifeAtBrewBite />
      <MissionAndVisionSection />
      <HomeFooter />
    </div>
  );
}
