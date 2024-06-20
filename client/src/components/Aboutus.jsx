import React from "react";
import DoctorTransparent from "../assets/Doctor-transparent.png";
import "../Styles/Aboutus.css";
import { Link } from 'react-router-dom';



const Aboutus = () => {
  return (
   
    <div className="grid grid-cols-1 md:grid-cols-2 mt-20 container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Left column */}
      <div className="flex flex-col justify-center items-center">
        <img src={DoctorTransparent} alt="About us" />
        <h1 className="font-color text-3xl font-bold text-center md:text-center mt-5 md:mt-0">
          Dr. D.S Dubey (Chiropractor)
        </h1>
      </div>

      {/* Right column */}
      <div className="font-semibold tracking-wide mt-10">
        <h1 className="heading mt-10 text-center md:text-center">
          About Us <span>&mdash;</span>
        </h1>

        <div>
          <div>
            <p className="leading-9 md:text-xl mt-5 font-medium text-center md:text-left">
              Dr. D S Dubey is a well-known chiropractor in Mumbai, highly
              praised for treating chronic pain like back pain, sciatica, and
              frozen shoulder. With many years of experience, he helps patients
              avoid surgery and find relief through chiropractic adjustments,
              exercises, and lifestyle advice. Patients often feel better after
              just a few sessions, making his treatments both effective and
              affordable.
            </p>
          </div>
          <div className="flex justify-center md:justify-center">
            <Link to="/contactus">
              <button className="button-style font-semibold text-lg mt-5">
                Book an Appointment<i className="fas fa-location-arrow p-2"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
