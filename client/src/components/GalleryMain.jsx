import React from "react";
import "../Styles/Services.css";
import image9 from "../assets/image9.jpg";
import image11 from "../assets/image11.webp";
import "../Styles/GalleryCSS.css";



const GalleryMain = () => {
  return (   
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center font-semibold text-xl mt-10 pt-24">
          <h1 className="heading tracking-wide">
            Gallery <span>&mdash;&mdash;</span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-center mt-10 w-full ">
          <div className="flex justify-center items-center">
            <img
              src={image9}
              className="h-72 rectangle-width m-1"
              alt="image 9"
            />
            <img src={image11} className="w-96 h-72 m-1" alt="image 11" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center w-full ">
          <div className="flex justify-center items-center">
            <img
              src={image11}
              className="w-96 square-height m-1"
              alt="image 11"
            />
            <img
              src={image11}
              className="w-96 square-height m-1"
              alt="image 11"
            />
            <img
              src={image11}
              className="w-96 square-height m-1"
              alt="image 11"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center  w-full ">
          <div className="flex justify-center items-center">
            <img
              src={image9}
              className="h-72 rectangle-width m-1"
              alt="image 9"
            />
            <img src={image11} className="w-96 h-72 m-1" alt="image 11" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center w-full mb-20">
          <div className="flex justify-center items-center">
            <img
              src={image11}
              className="w-96 square-height m-1"
              alt="image 11"
            />
            <img
              src={image11}
              className="w-96 square-height m-1"
              alt="image 11"
            />
            <img
              src={image11}
              className="w-96 square-height m-1"
              alt="image 11"
            />
          </div>
        </div>
      </div>

  );
};

export default GalleryMain;
