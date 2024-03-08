import React from "react";
import Navbar from "../../components/block/Navbar";
import Footer from "../../components/block/Footer";
import GalleryIntroBlock from "./components/block/GalleryIntroBlock";
import bg from "../../assets/BG.png";
import GalleryBlock from "./components/block/GalleryBlock";

const Gallery = () => {
  return (
    <div className=" font-serif">
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          width: "100%",
        }}
      >
        <GalleryIntroBlock />
        <GalleryBlock />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
