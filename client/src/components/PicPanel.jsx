import { useState, useContext } from "react";
import { motion } from "framer-motion";

import LoadingPanel from "./LoadingPanel";
import Clicked from "./Clicked";

import { AppContext } from "../AppContext";

import china from "../assets/china.webp";
import colombia from "../assets/colombia.webp";
import ireland from "../assets/ireland.webp";
import japan from "../assets/japan.webp";

const imageAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  animate: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      delay: 0.1 * i,
    },
  }),
};

export default function PicPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [imgPath, setImgPath] = useState("");

  const { locationSelected, isLoading, currentImages } = useContext(AppContext);

  const handleImageClick = (path) => {
    setImgPath(path);
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-slate-900">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-6 lg:max-w-7xl lg:px-8">
        <div className="bg-slate-900 mb-6 px-6 py-24 sm:py-32 lg:px-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 rounded-lg">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="sr-only">{locationSelected}</h2>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              {locationSelected === "China" &&
                "China is a sleeping giant. Let her sleep, for when she wakes she will move the world. - Napolean Bonaparte"}
              {locationSelected === "Colombia" &&
                "Colombia is the rhythm of the falling rain, the mystery of the misty mountains, and the eternal dream of the Caribbean sun. - Unknown"}
              {locationSelected === "Ireland" &&
                "There is another world, but it is in this one. - William Butler Yeats"}
              {locationSelected === "Japan" &&
                "Japan is a dream that you have been experiencing since you were born, that doesn't let go of you until you die. - Lafcadio Hearn"}
            </p>
            <img
              {...(locationSelected === "China" && {
                src: china,
              })}
              {...(locationSelected === "Colombia" && {
                src: colombia,
              })}
              {...(locationSelected === "Ireland" && {
                src: ireland,
              })}
              {...(locationSelected === "Japan" && {
                src: japan,
              })}
              className="absolute inset-0 -z-10 h-full w-full object-cover rounded-lg opacity-10"
            />
          </div>
        </div>
        {isLoading ? (
          <LoadingPanel />
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {currentImages.map((location, i) => (
            <a key={location} className="group">
              <div className="aspect-h-16 aspect-w-9 w-full overflow-hidden rounded-lg relative">
                <motion.img
                  src={location}
                  variants={imageAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 hover:animate-pulse"
                  onClick={() => handleImageClick(location)}
                  custom={i}
                />
              </div>
            </a>
            ))}
          </div>
        )}
      </div>
      {isOpen ? (
        <Clicked isOpen={isOpen} setIsOpen={setIsOpen} imgPath={imgPath} />
      ) : null}
    </div>
  );
}
