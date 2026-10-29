import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense, ViewTransition } from "react";
import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import { destinations } from "@/data/destination";

const findDestination = (name: string) =>
  destinations.find((item) => item.name.toLowerCase() === name);

export function generateStaticParams() {
  return destinations.map((item) => ({ name: item.name.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: PageProps<"/destination/[name]">): Promise<Metadata> {
  const { name } = await params;
  const destination = findDestination(name);
  if (!destination) return {};

  return {
    title: `Destination - ${destination.name}`,
    description: destination.description,
  };
}

const Destination = ({ params }: PageProps<"/destination/[name]">) => {
  return (
    <PageTransition>
      <main className="min-h-svh bg-[url('/destination/background-destination-mobile.jpg')] bg-cover bg-center px-6 pt-28 pb-12 md:bg-[url('/destination/background-destination-tablet.jpg')] md:px-10 md:pt-34">
        <h1 className="text-center font-nav text-subheading-sm tracking-subheading text-white uppercase md:text-left md:text-subheading-md">
          <span className="mr-6 font-bold text-white/25">01</span>
          Pick your destination
        </h1>

        <Suspense fallback={null}>
          <DestinationContent params={params} />
        </Suspense>
      </main>
    </PageTransition>
  );
};

const DestinationContent = async ({
  params,
}: Pick<PageProps<"/destination/[name]">, "params">) => {
  const { name } = await params;
  const destination = findDestination(name);
  if (!destination) notFound();

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center text-center">
      <ViewTransition
        key={destination.name}
        name="planet"
        share="planet"
        default="none"
      >
        <Image
          src={destination.image}
          alt={destination.name}
          loading="eager"
          className="mt-12 size-planet-sm md:mt-16 md:size-planet"
        />
      </ViewTransition>

      <ul className="mt-14 flex gap-8 md:mt-20">
        {destinations.map((item) => {
          const active = item.name === destination.name;

          return (
            <li key={item.name}>
              <Link
                href={`/destination/${item.name.toLowerCase()}`}
                className={`relative block pb-3 font-nav text-tab-sm tracking-subheading uppercase transition-colors md:text-tab ${
                  active
                    ? "text-white"
                    : "nav-hover-line text-light hover:text-white"
                }`}
              >
                {item.name}
                {active && (
                  <ViewTransition
                    name="tab-indicator"
                    share="indicator"
                    default="none"
                  >
                    <span className="absolute inset-x-0 bottom-0 h-0.75 bg-white" />
                  </ViewTransition>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      <ViewTransition
        key={`${destination.name}-text`}
        name="destination-text"
        share="text"
        default="none"
      >
        <div className="flex w-full flex-col items-center">
          <h2 className="mt-6 font-heading text-heading-sm text-white uppercase md:text-heading">
            {destination.name}
          </h2>

          <p className="mt-5 font-body text-body-sm text-light md:mt-6 md:text-body">
            {destination.description}
          </p>

          <div className="mt-6 flex w-full flex-col gap-6 border-t border-white/25 pt-6 md:grid md:grid-cols-2">
            <div>
              <p className="font-nav text-label tracking-subheading text-light uppercase">
                Avg. distance
              </p>
              <p className="mt-3 font-heading text-stat text-white uppercase">
                {destination.distance}
              </p>
            </div>
            <div>
              <p className="font-nav text-label tracking-subheading text-light uppercase">
                Est. travel time
              </p>
              <p className="mt-3 font-heading text-stat text-white uppercase">
                {destination.travelTime}
              </p>
            </div>
          </div>
        </div>
      </ViewTransition>
    </div>
  );
};

export default Destination;
