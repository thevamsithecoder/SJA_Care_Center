import React from "react";

const Map = () => {
  const latitude = 19.29812680165292;
  const longitude = 72.86054369908562;

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-screen-lg h-[26rem] border-2 border-black rounded-xl bg-slate-200 text-gray-600 body-font px-5 py-5 sm:py-24 sm:mx-10 md:mx-20 lg:mx-32 mx-4 rounded-lg overflow-hidden flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          frameBorder="0"
          title="map"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=14&output=embed`}
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        ></iframe>
      </div>
    </div>
 
  );
};

export default Map;