import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import TechnologySlider from "@/components/TechnologySlider";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Space launch 101: learn about the launch vehicle, spaceport and space capsule that will take you to space.",
};

const Technology = () => {
  return (
    <PageTransition>
      <main className="min-h-svh overflow-x-clip bg-[url('/technology/background-technology-mobile.jpg')] bg-cover bg-center px-6 pt-28 pb-12 md:bg-[url('/technology/background-technology-tablet.jpg')] md:px-10 md:pt-34 md:pb-10 lg:bg-[url('/technology/background-technology-desktop.jpg')] lg:pt-45 lg:pb-12">
        <h1 className="text-center font-nav text-subheading-sm tracking-subheading text-white uppercase md:text-left md:text-subheading-md lg:mx-auto lg:w-full lg:max-w-container lg:text-subheading">
          <span className="mr-6 font-bold text-white/25">03</span>
          Space launch 101
        </h1>

        <TechnologySlider />
      </main>
    </PageTransition>
  );
};

export default Technology;
