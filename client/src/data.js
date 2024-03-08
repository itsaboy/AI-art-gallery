import china from "./assets/china.webp";
import colombia from "./assets/colombia.webp";
import ireland from "./assets/ireland.webp";
import japan from "./assets/japan.webp";

export const LOCATIONS = [
  {
    id: 1,
    name: "China",
    path: "/photos/china",
    img: china,
  },
  {
    id: 2,
    name: "Colombia",
    path: "/photos/colombia",
    img: colombia,
  },
  {
    id: 3,
    name: "Ireland",
    path: "/photos/ireland",
    img: ireland,
  },
  {
    id: 4,
    name: "Japan",
    path: "/photos/japan",
    img: japan,
  },
  {
    id: 5,
    name: "Portugal",
    path: "/photos/portugal",
    img: japan,
  },
];

export const STYLES = [
  {
    id: 1,
    name: "Style 1",
    path: "/art/art1",
  },
  {
    id: 2,
    name: "Style 2",
    path: "/art/art2",
  },
  {
    id: 3,
    name: "Style 3",
    path: "/art/art3",
  },
  {
    id: 4,
    name: "Style 4",
    path: "/art/art4",
  },
  {
    id: 5,
    name: "Style 5",
    path: "/art/art5",
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