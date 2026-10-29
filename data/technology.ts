import launchVehicleLandscape from "../public/technology/image-launch-vehicle-landscape.jpg";
import launchVehiclePortrait from "../public/technology/image-launch-vehicle-portrait.jpg";
import spaceCapsuleLandscape from "../public/technology/image-space-capsule-landscape.jpg";
import spaceCapsulePortrait from "../public/technology/image-space-capsule-portrait.jpg";
import spaceportLandscape from "../public/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "../public/technology/image-spaceport-portrait.jpg";
import { Technology } from "../types/types";

export const technology: Technology[] = [
  {
    name: "Launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth’s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it’s quite an awe-inspiring sight on the launch pad!",
    images: {
      landscape: launchVehicleLandscape,
      portrait: launchVehiclePortrait,
    },
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    images: { landscape: spaceportLandscape, portrait: spaceportPortrait },
  },
  {
    name: "Space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth’s atmosphere without wings. Our capsule is where you’ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    images: {
      landscape: spaceCapsuleLandscape,
      portrait: spaceCapsulePortrait,
    },
  },
];
