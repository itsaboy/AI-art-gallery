import china from "./assets/china.webp";
import colombia from "./assets/colombia.webp";
import ireland from "./assets/ireland.webp";
import italy from "./assets/italy.webp";
import japan from "./assets/japan.webp";
import portugal from "./assets/portugal.webp";
import qatar from "./assets/qatar.webp";
import sweden from "./assets/sweden.webp";

import inkDrawing from "./assets/inkDrawing.webp";
import sumi from "./assets/sumi.webp";
import suminagashi from "./assets/suminagashi.webp";
import ukiyo from "./assets/ukiyo.webp";

export const LOCATIONS = [
  {
    id: 1,
    name: "China",
    path: "/photos/china",
    img: china,
    alt: "a photo of a woman at the Great Wall of China",
  },
  {
    id: 2,
    name: "Colombia",
    path: "/photos/colombia",
    img: colombia,
    alt: "a photo of a woman in a colonial Colombian city",
  },
  {
    id: 3,
    name: "Ireland",
    path: "/photos/ireland",
    img: ireland,
    alt: "a photo of a woman at a castle",
  },
  {
    id: 4,
    name: "Italy",
    path: "/photos/italy",
    img: italy,
    alt: "a photo of a woman at the Venice canals",
  },
  {
    id: 5,
    name: "Japan",
    path: "/photos/japan",
    img: japan,
    alt: "a photo of a woman in front of Mount Fuji",
  },
  {
    id: 6,
    name: "Portugal",
    path: "/photos/portugal",
    img: portugal,
    alt: "a photo of a woman in front of a castle",
  },
  {
    id: 7,
    name: "Qatar",
    path: "/photos/qatar",
    img: qatar,
    alt: "a photo of a woman in front of a Qatari city skyline",
  },
  {
    id: 8,
    name: "Sweden",
    path: "/photos/sweden",
    img: sweden,
    alt: "a photo of a woman in front of a palace",
  },
];

export const STYLES = [
  {
    id: 1,
    name: "Ink Drawing",
    path: "/art/inkdrawing",
    img: inkDrawing,
    alt: "an ink drawing of Mount Fuji",
  },
  {
    id: 2,
    name: "Sumi",
    path: "/art/sumi",
    img: sumi,
    alt: "a sumi painting of Mount Fuji",
  },
  {
    id: 3,
    name: "Suminagashi",
    path: "/art/suminagashi",
    img: suminagashi,
    alt: "a suminagashi painting of Mount Fuji",
  },
  {
    id: 4,
    name: "Ukiyo",
    path: "/art/ukiyo",
    img: ukiyo,
    alt: "a ukiyo painting of Mount Fuji",
  },
];

export const imageAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};