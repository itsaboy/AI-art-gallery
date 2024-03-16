import { useState, useContext } from "react";
import { motion } from "framer-motion";
import LoadingPanel from "./LoadingPanel";
import Clicked from "./Clicked";
import { AppContext } from "../context/AppContext";
import { imageAnimationVariants } from "../data";
import art from "../assets/art.webp";
import inkDrawing from "../assets/inkDrawing.webp";
import sumi from "../assets/sumi.webp";
import suminagashi from "../assets/suminagashi.webp";
import ukiyo from "../assets/ukiyo.webp";
import psychedelic from "../assets/psychedelic.webp";
import watercolor from "../assets/watercolor.webp";

export default function PicPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [imgPath, setImgPath] = useState("");

  const { artStyleSelected, isLoading, currentImages } = useContext(AppContext);

  const handleImageClick = (path) => {
    setImgPath(path);
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-slate-900 py-20 mx-auto">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-6 lg:max-w-7xl lg:px-8">
        <div className="bg-slate-900 mb-6 px-6 py-24 sm:py-32 lg:px-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 rounded-lg">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="sr-only">{artStyleSelected}</h2>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              {artStyleSelected === "None" &&
                "Choose an art style from the Art dropdown"}
              {artStyleSelected === "Ink Drawing" &&
                "The brush dances and the ink sings. - Japanese proverb"}
              {artStyleSelected === "Sumi" &&
                "The goal of sumi-e is not merely to reproduce the appearance of the subject, but to capture its soul. - Unknown"}
              {artStyleSelected === "Suminagashi" &&
                "The art of Suminagashi is like a conversation with water and ink; it teaches us the beauty of letting go and the serenity of impermanence. - Unknown"}
              {artStyleSelected === "Ukiyo" &&
                "The essence of Ukiyo lies in finding joy in the temporary, seeing the profound beauty in the ephemeral nature of our lives. - Unknown"}
              {artStyleSelected === "Watercolor" &&
                "The art of Suminagashi is like a conversation with water and ink; it teaches us the beauty of letting go and the serenity of impermanence. - Unknown"}
              {artStyleSelected === "Psychedelic" &&
                "The essence of Ukiyo lies in finding joy in the temporary, seeing the profound beauty in the ephemeral nature of our lives. - Unknown"}
            </p>
            <img
              {...(artStyleSelected === "None" && {
                src: art,
              })}
              {...(artStyleSelected === "Ink Drawing" && {
                src: inkDrawing,
              })}
              {...(artStyleSelected === "Sumi" && {
                src: sumi,
              })}
              {...(artStyleSelected === "Suminagashi" && {
                src: suminagashi,
              })}
              {...(artStyleSelected === "Ukiyo" && {
                src: ukiyo,
              })}
              {...(artStyleSelected === "Watercolor" && {
                src: watercolor,
              })}
              {...(artStyleSelected === "Psychedelic" && {
                src: psychedelic,
              })}
              className="absolute inset-0 -z-10 h-full w-full object-cover rounded-lg opacity-10"
            />
          </div>
        </div>
        {isLoading ? (
          <LoadingPanel />
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {currentImages.map((style) => (
              <a key={style} className="group">
                <div className="aspect-h-16 aspect-w-9 w-full overflow-hidden rounded-lg relative">
                  <motion.img
                    src={style}
                    variants={imageAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 hover:cursor-zoom-in"
                    onClick={() => handleImageClick(style)}
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
