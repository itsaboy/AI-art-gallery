import { useState, useContext } from "react";
import { motion } from "framer-motion";
import LoadingPanel from "./LoadingPanel";
import Clicked from "./Clicked";
import { AppContext } from "../context/AppContext";
import { imageAnimationVariants } from "../data"
import photos from "../assets/photos.webp";
import china from "../assets/china.webp";
import colombia from "../assets/colombia.webp";
import ireland from "../assets/ireland.webp";
import italy from "../assets/italy.webp";
import japan from "../assets/japan.webp";
import portugal from "../assets/portugal.webp";
import qatar from "../assets/qatar.webp";
import sweden from "../assets/sweden.webp";

export default function PicPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [imgPath, setImgPath] = useState("");

  const { locationSelected, isLoading, currentImages } = useContext(AppContext);

  const handleImageClick = (path) => {
    setImgPath(path);
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-slate-900 py-20 mx-auto">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-6 lg:max-w-7xl lg:px-8">
        <div className="bg-slate-900 mb-6 px-6 py-24 sm:py-32 lg:px-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 rounded-lg">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="sr-only">{locationSelected}</h2>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              {locationSelected === "None" &&
                "Choose a location from the Photos dropdown"}
              {locationSelected === "China" &&
                "China is a sleeping giant. Let her sleep, for when she wakes she will move the world. - Napolean Bonaparte"}
              {locationSelected === "Colombia" &&
                "Colombia is the rhythm of the falling rain, the mystery of the misty mountains, and the eternal dream of the Caribbean sun. - Unknown"}
              {locationSelected === "Ireland" &&
                "There is another world, but it is in this one. - William Butler Yeats"}
              {locationSelected === "Italy" &&
                "Italy is a dream that keeps returning for the rest of your life. - Anna Akhmatova"}
              {locationSelected === "Japan" &&
                "Japan is a dream that you have been experiencing since you were born, that doesn't let go of you until you die. - Lafcadio Hearn"}
              {locationSelected === "Portugal" &&
                "Portugal is not a small country. It is a great country. - Salazar"}
              {locationSelected === "Qatar" &&
                "Qatar is a country that pushes the envelope of possibility. - Unknown"}
              {locationSelected === "Sweden" &&
                "Sweden, the middle way. - Marquis Childs"}
            </p>
            <img
              {...(locationSelected === "None" && {
                src: photos,
              })}
              {...(locationSelected === "China" && {
                src: china,
              })}
              {...(locationSelected === "Colombia" && {
                src: colombia,
              })}
              {...(locationSelected === "Ireland" && {
                src: ireland,
              })}
              {...(locationSelected === "Italy" && {
                src: italy,
              })}
              {...(locationSelected === "Japan" && {
                src: japan,
              })}
              {...(locationSelected === "Portugal" && {
                src: portugal,
              })}
              {...(locationSelected === "Qatar" && {
                src: qatar,
              })}
              {...(locationSelected === "Sweden" && {
                src: sweden,
              })}
              className="absolute inset-0 -z-10 h-full w-full object-cover rounded-lg opacity-10"
            />
          </div>
        </div>
        {isLoading ? (
          <LoadingPanel />
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {currentImages.map((location) => (
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
