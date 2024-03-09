import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AppContext } from "./AppContext";
import "./App.css";

function App() {
  const [locationSelected, setLocationSelected] = useState("None");
  const [artStyleSelected, setArtStyleSelected] = useState("None");
  const [isLoading, setIsLoading] = useState(false);
  const [currentImages, setCurrentImages] = useState();

  function handleLocationChange(newLocation) {
    setPlayers((prevLocation) => {
      return {
        ...prevLocation,
        locationSelected: newLocation,
      };
    });
  }

  function handleArtStyleChange(newArtStyle) {
    setPlayers((prevArtStyle) => {
      return {
        ...prevArtStyle,
        artStyleSelected: newArtStyle,
      };
    });
  }

  function handleImagesChange(newImages) {
    setPlayers((prevImages) => {
      return {
        ...prevImages,
        currentImages: newImages,
      };
    });
  }

  const getImages = async (region) => {
    const req = `https://neuralcanvases.com/api/images?region=${region}`;
    const res = await fetch(req);
    const imageList = await res.json();
    handleImagesChange(imageList);
    setIsLoading(false);
  };

  const handleNewLocation = (region) => {
    setIsLoading(true);
    handleLocationChange(region);
    getImages(region);
  };

  const handleNewArtStyle = (style) => {
    setIsLoading(true);
    handleArtStyleChange(style);
    getImages(style);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          locationSelected,
          artStyleSelected,
          isLoading,
          currentImages,
          handleNewLocation,
          handleNewArtStyle,
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
