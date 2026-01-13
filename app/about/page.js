import CafeStorySection from "@/components/CafeStorySection";
import HomeFooter from "@/components/HomeFooter";
import LifeAtBrewBite from "@/components/LifeAtBrewBite";
import MissionAndVisionSection from "@/components/MissionAndVisionSection";

function page() {
  return (
    <div className=" mx-auto px-6 ">
      <CafeStorySection />
      <LifeAtBrewBite />
      <MissionAndVisionSection />
      <HomeFooter />
    </div>
  );
}

export default page;
