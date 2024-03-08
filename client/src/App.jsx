import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AppContext } from "./AppContext";
import "./App.css";

function App() {
  const [locationSelected, setLocationSelected] = useState(null);
  const [artStyleSelected, setArtStyleSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImages, setCurrentImages] = useState(null);

  const getImages = async (region) => {
    const req = `http://localhost:3030/images?region=${region}`;
    const res = await fetch(req);
    const imageList = await res.json();
    setCurrentImages(imageList);
    setIsLoading(true);
  };

  const handleNewLocation = (region) => {
    setIsLoading(true);
    setLocationSelected(region);
    getImages(region);
  }

  return (
    <div className="body-container">
      <AppContext.Provider
        value={{
          locationSelected,
          artStyleSelected,
          isLoading,
          currentImages,
          handleNewLocation,
          setLocationSelected,
          setArtStyleSelected,
          setCurrentImages,
        }}
      >
        <Header />
        <main className="bg-slate-900">
          <Outlet />
        </main>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
