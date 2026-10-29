"use client";

import { getImageProps } from "next/image";
import { ViewTransition } from "react";
import { technology } from "@/data/technology";
import { useSelectNext } from "@/hooks/selectHooks";

const TechnologySlider = () => {
  const { selectNext, handleSelect } = useSelectNext("Douglas Hurley");
  const currentTechnology =
    technology.find((item) => item.name === selectNext) ?? technology[0];

  const common = {
    alt: currentTechnology.name,
    sizes: "(min-width: 1024px) 608px, 100vw",
  };
  const {
    props: { srcSet: portrait },
  } = getImageProps({ ...common, src: currentTechnology.images.portrait });
  const {
    props: { srcSet: landscape, ...rest },
  } = getImageProps({ ...common, src: currentTechnology.images.landscape });

  return (
    <div className="mt-21 flex flex-col items-center text-center md:mt-22 lg:-mr-10 lg:flex-row lg:justify-between lg:pl-[max(0px,calc((100%-var(--spacing-container))/2))] lg:text-left">
      <ViewTransition
        key={currentTechnology.name}
        name="tech-image"
        share="planet"
        default="none"
      >
        <picture className="-mx-6 block h-64.5 self-stretch md:-mx-10 md:h-92 lg:order-last lg:mx-0 lg:h-150 lg:w-152 lg:min-w-0 lg:self-auto">
          <source media="(min-width: 1024px)" srcSet={portrait} />
          <source srcSet={landscape} />
          <img
            {...rest}
            alt={currentTechnology.name}
            loading="eager"
            className="size-full object-cover"
          />
        </picture>
      </ViewTransition>

      <div className="contents lg:flex lg:items-center lg:gap-16">
        <ul className="mt-8 flex gap-4 lg:mt-0 lg:flex-col lg:gap-8">
          {technology.map((tech, index) => {
            const active = tech.name === currentTechnology.name;

            return (
              <li key={tech.name} className="flex">
                <button
                  type="button"
                  aria-label={tech.name}
                  aria-pressed={active}
                  className={`relative flex size-10 items-center justify-center rounded-full border font-heading text-lg/none transition-colors md:size-14 md:text-2xl/none lg:size-20 lg:text-[2rem]/none ${
                    active
                      ? "border-white text-dark"
                      : "border-white/25 text-white hover:border-white"
                  }`}
                  onClick={() => handleSelect(tech.name)}
                >
                  {active && (
                    <ViewTransition
                      name="tech-step"
                      share="indicator"
                      default="none"
                    >
                      <span className="absolute -inset-px rounded-full bg-white" />
                    </ViewTransition>
                  )}
                  <span className="relative">{index + 1}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <ViewTransition
          key={`${currentTechnology.name}-text`}
          name="tech-text"
          share="text"
          default="none"
        >
          <div className="mt-9 flex flex-col items-center lg:mt-0 lg:max-w-123 lg:items-start">
            <p className="font-heading text-role-sm text-white/50 uppercase md:text-role lg:text-role-lg">
              The terminology…
            </p>
            <h2 className="mt-3.5 font-heading text-name-sm text-white uppercase md:mt-4 md:text-name lg:mt-3 lg:text-name-lg">
              {currentTechnology.name}
            </h2>
            <p className="mt-4 font-body text-body-sm text-light md:mt-5 md:max-w-lg md:text-body lg:mt-6 lg:max-w-none lg:text-body-lg">
              {currentTechnology.description}
            </p>
          </div>
        </ViewTransition>
      </div>
    </div>
  );
};

export default TechnologySlider;
