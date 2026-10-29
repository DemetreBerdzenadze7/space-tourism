"use client";

import Image from "next/image";
import { ViewTransition } from "react";
import { crew } from "@/data/crew";
import { useSelectNext } from "@/hooks/selectHooks";

const CrewSlider = () => {
  const { selectNext, handleSelect } = useSelectNext("Douglas Hurley");
  const currentCrew = crew.find((item) => item.name === selectNext) ?? crew[0];

  return (
    <div className="mx-auto flex w-full max-w-lg flex-1 flex-col items-center text-center lg:grid lg:max-w-container lg:grid-cols-2 lg:grid-rows-[1fr_auto] lg:items-start lg:text-left">
      <ViewTransition
        key={`${currentCrew.name}-text`}
        name="crew-text"
        share="text"
        default="none"
      >
        <div className="mt-16 flex flex-col items-center lg:col-start-1 lg:row-start-1 lg:mt-0 lg:mb-7 lg:items-start lg:self-center">
          <p className="font-heading text-role-sm text-white/50 uppercase md:text-role lg:text-role-lg">
            {currentCrew.role}
          </p>
          <h2 className="mt-2 font-heading text-name-sm text-white uppercase md:mt-4 md:text-name lg:mt-3 lg:text-name-lg">
            {currentCrew.name}
          </h2>
          <p className="mt-6 font-body text-body-sm text-light md:text-body lg:text-body-lg">
            {currentCrew.bio}
          </p>
        </div>
      </ViewTransition>

      <ul className="mt-20 flex gap-4 md:mt-14 lg:col-start-1 lg:row-start-2 lg:mt-0 lg:mb-12 lg:gap-10">
        {crew.map((item) => {
          const active = item.name === currentCrew.name;

          return (
            <li key={item.name} className="flex">
              <button
                type="button"
                aria-label={item.name}
                aria-pressed={active}
                className={`relative size-dot rounded-full bg-white/17 transition-colors lg:size-dot-lg ${
                  active ? "" : "hover:bg-white/50"
                }`}
                onClick={() => handleSelect(item.name)}
              >
                {active && (
                  <ViewTransition
                    name="crew-dot"
                    share="indicator"
                    default="none"
                  >
                    <span className="absolute inset-0 rounded-full bg-white" />
                  </ViewTransition>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 flex flex-1 items-end justify-center md:mt-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:mb-7.5 lg:self-stretch">
        <ViewTransition
          key={currentCrew.name}
          name="crew-portrait"
          share="portrait"
          default="none"
        >
          <Image
            src={currentCrew.portrait}
            alt={currentCrew.name}
            loading="eager"
            className="h-portrait-sm w-auto mask-b-from-75% mask-b-to-90% md:h-portrait lg:h-auto lg:max-h-portrait-lg lg:max-w-full"
          />
        </ViewTransition>
      </div>
    </div>
  );
};

export default CrewSlider;
