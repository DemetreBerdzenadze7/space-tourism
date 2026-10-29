import Link from "next/link";
import PageTransition from "@/components/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <main className="flex min-h-svh flex-col items-center bg-[url('/home/background-home-mobile.jpg')] bg-cover bg-center px-6 pt-28 pb-12 text-center md:bg-[url('/home/background-home-tablet.jpg')] md:pt-52 md:pb-24">
        <h1 className="flex flex-col items-center">
          <span className="font-nav text-subheading-sm tracking-subheading text-light uppercase md:text-subheading">
            So, you want to travel to
          </span>
          <span className="mt-5 font-heading text-display-sm text-white uppercase md:text-display">
            Space
          </span>
        </h1>

        <p className="mt-7 max-w-lg font-body text-body-sm text-light md:mt-6 md:text-body">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>

        <Link
          href="/destination"
          transitionTypes={["nav-page"]}
          className="mt-28 flex size-explore-sm animate-pulse-ring items-center justify-center rounded-full bg-white font-heading text-button-sm tracking-button text-dark uppercase transition-[box-shadow,scale] duration-500 hover:animate-none hover:shadow-explore-sm focus-visible:animate-none focus-visible:shadow-explore-sm focus-visible:outline-none active:scale-95 motion-reduce:animate-none md:mt-16 md:size-explore md:text-button md:hover:shadow-explore md:focus-visible:shadow-explore"
        >
          Explore
        </Link>
      </main>
    </PageTransition>
  );
};

export default Home;
