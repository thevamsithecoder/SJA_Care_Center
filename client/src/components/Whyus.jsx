import React from "react";
import whyusimage from "../assets/sja images/whyus.png";



const Whyus = () => {
  return (
    <div className="px-4 xs:px-2 sm:px-4 md:px-6 lg:px-10">
      <div>
        <h1 className="font-semibold text-2xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-10 text-center">
          Why Us <span>&mdash;</span>
        </h1>
      </div>
      <div className="mt-10 flex justify-center items-center">
        {/* Image for Why Us */}
        <div className="container mx-auto text-black">
          <div className="flex flex-col items-center mb-10 pb-5">
            <img
              className="w-full xs:w-11/12 sm:w-4/5 md:w-3/4 lg:w-4/5 rounded-lg mb-5"
              src={whyusimage}
              alt="Why Us"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;