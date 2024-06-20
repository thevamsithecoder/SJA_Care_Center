import React from "react";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.webp";
import image11 from "../assets/image11.webp";
import "../Styles/Gallery.css";
import { Link } from "react-router-dom";


const Gallery = () => {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="p-8 font-semibold text-4xl">
          Gallery <span>&mdash;&mdash;</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <div>
          <img
            src={image9}
            alt="Image 9"
            className="card-gallery m-6 border border-black"
          />
        </div>
        <div>
          <img
            src={image10}
            alt="Image 10"
            className="card-gallery m-6 border border-black"
          />
        </div>
        <div>
          <img
            src={image11}
            alt="Image 11"
            className="card-gallery m-6 border border-black"
          />
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <Link to="/gallery">
          <button className="button-viewmore hover:bg-red-800 font-semibold text-lg">
            View More
          </button>
        </Link>
      </div>
    </>
  );
};

export default Gallery;
