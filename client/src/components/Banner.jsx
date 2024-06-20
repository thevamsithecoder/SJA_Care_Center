import React from 'react';
import BannerImage from "../assets/Banner-Image.png";

const Banner = () => {
  return (
    <div className='mt-28'>
      <img src={BannerImage} alt="Banner" className="w-full" />
    </div>
  );
}

export default Banner;
