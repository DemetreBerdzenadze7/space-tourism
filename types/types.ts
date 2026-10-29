import type { StaticImageData } from "next/image";

export interface Destination {
  name: string;
  description: string;
  distance: string;
  travelTime: string;
  image: StaticImageData;
}

export interface CrewMember {
  name: string;
  role: string;
  bio: string;
  portrait: StaticImageData;
}

export interface Technology {
  name: string;
  description: string;
  images: {
    landscape: StaticImageData;
    portrait: StaticImageData;
  };
}
