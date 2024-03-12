import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AppContext } from "./context/AppContext";
import "./App.css";

function App() {
  const [locationSelected, setLocationSelected] = useState("None");
  const [artStyleSelected, setArtStyleSelected] = useState("None");
  const [animeSelected, setAnimeSelected] = useState("None");
  const [isLoading, setIsLoading] = useState(true);
  const [currentImages, setCurrentImages] = useState();
  
  const getImages = async (region) => {
    const req = `https://https://neuralcanvases.com/api/images?region=${region}`;
    const res = await fetch(req);
    const imageList = await res.json();
    setCurrentImages(imageList);
    setIsLoading(false);
  };

  const handleNewLocation = (region) => {
    setIsLoading(true);
    setLocationSelected(region);
    getImages(region);
  };

  const handleNewArtStyle = (style) => {
    setIsLoading(true);
    setArtStyleSelected(style);
    getImages(style);
  };

  const handleNewAnime = (anime) => {
    setIsLoading(true);
    setAnimeSelected(anime);
    getImages(anime);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          locationSelected,
          artStyleSelected,
          animeSelected,
          isLoading,
          currentImages,
          handleNewLocation,
          handleNewArtStyle,
          handleNewAnime,
          setLocationSelected,
          setArtStyleSelected,
          setCurrentImages,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default App;
