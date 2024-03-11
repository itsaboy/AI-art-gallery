import { useState, useContext } from "react";
import { motion } from "framer-motion";
import LoadingPanel from "./LoadingPanel";
import Clicked from "./Clicked";
import { AppContext } from "../context/AppContext";
import { imageAnimationVariants } from "../data"
import beach from "../assets/beach.webp"

export default function AnimePanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [imgPath, setImgPath] = useState("");

  const { animeSelected, isLoading, currentImages } = useContext(AppContext);

  const handleImageClick = (path) => {
    setImgPath(path);
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-slate-900 py-20 mx-auto">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-6 lg:max-w-7xl lg:px-8">
        <div className="bg-slate-900 mb-6 px-6 py-24 sm:py-32 lg:px-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 rounded-lg">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="sr-only">{animeSelected}</h2>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              {animeSelected === "None" &&
                "Choose a category from the Anime dropdown"}
              {animeSelected === "Beach" &&
                "The sound of the waves crashing against the shore, it's like a melody that washes away all the sadness."}
            </p>
            <img
              {...(animeSelected === "None" && {
                src: art,
              })}
              {...(animeSelected === "Beach" && {
                src: beach,
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
                    className="h-full w-full object-cover object-center group-hover:opacity-75 hover:cursor-zoom-in"
                    onClick={() => handleImageClick(location)}
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
