import type { Metadata } from "next";
import CrewSlider from "@/components/CrewSlider";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Crew",
  description:
    "Meet your crew: the commander, mission specialist, pilot and flight engineer who will take you to space.",
};

const Crew = () => {
  return (
    <PageTransition>
      <main className="flex min-h-svh flex-col bg-[url('/crew/background-crew-mobile.jpg')] bg-cover bg-center px-6 pt-28 md:bg-[url('/crew/background-crew-tablet.jpg')] md:px-10 md:pt-34 lg:bg-[url('/crew/background-crew-desktop.jpg')] lg:pt-45 lg:pb-12">
        <h1 className="text-center font-nav text-subheading-sm tracking-subheading text-white uppercase md:text-left md:text-subheading-md lg:mx-auto lg:w-full lg:max-w-container lg:text-subheading">
          <span className="mr-6 font-bold text-white/25">02</span>
          Meet your crew
        </h1>

        <CrewSlider />
      </main>
    </PageTransition>
  );
};

export default Crew;
