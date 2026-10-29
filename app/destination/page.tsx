import type { Metadata } from "next";
import DestinationTabs from "@/components/DestinationTabs";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Destination",
  description:
    "Pick your destination: the Moon, Mars, Europa or Titan. Compare distances and travel times, and plan your trip to space.",
};

const Destination = () => {
  return (
    <PageTransition>
      <main className="min-h-svh bg-[url('/destination/background-destination-mobile.jpg')] bg-cover bg-center px-6 pt-28 pb-12 md:bg-[url('/destination/background-destination-tablet.jpg')] md:px-10 md:pt-34">
        <h1 className="text-center font-nav text-subheading-sm tracking-subheading text-white uppercase md:text-left md:text-subheading-md">
          <span className="mr-6 font-bold text-white/25">01</span>
          Pick your destination
        </h1>

        <DestinationTabs />
      </main>
    </PageTransition>
  );
};

export default Destination;
