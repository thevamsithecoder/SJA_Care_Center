import React, { useState } from "react";
<<<<<<< HEAD
=======
import { MdCall, MdMenu } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Styles/Navbar.css";
import Footer from "./Footer";
import "../Styles/Services.css";
import "../Styles/Aboutus.css";
>>>>>>> 508932fbf10a8e101a5e80ca5f0e2afeba5f41f5
import DoctorTransparent from "../assets/Doctor-transparent.png";
import HotCupping from "../assets/Alternative-Therapy/Hot-Cupping.jpg";
import VaccumeCupping from "../assets/Alternative-Therapy/Vacuum-Cupping.jpg";
import BloodCupping from "../assets/Alternative-Therapy/Blood-Cupping.jpg";
import LeechTherapy from "../assets/Alternative-Therapy/Leech-Therapy.webp";
import Acupressure from "../assets/Alternative-Therapy/Acupressure.jpg";
import Acupuncture from "../assets/Alternative-Therapy/Acupuncture.webp";
import Ayurvedicneurotherapy from "../assets/Alternative-Therapy/Ayurvedic-Neurotherapy.jpg";

const AlternativeTherapy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
<<<<<<< HEAD
=======
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center p-3 fixed z-10 bg-gray-200 w-full top-0 md:mb-6">
        <div className="flex items-center mb-2 md:mb-0">
          <Link to="/">
            <h3 className="hidden sm:block text-red-600 font-semibold mr-2 tracking-wide md:text-base lg:text-lg sm:text-sm text-xs cursor-pointer">
              For Appointment:
            </h3>
          </Link>
          <div className="flex items-center">
            <MdCall className="mr-1 md:text-3xl sm:text-sm" />
            <a href="tel:+91-9967521331" className="mr-3 md:mr-5 md:text-base lg:text-lg sm:text-sm text-xs lg:mr-5">
              +91 9967521331
            </a>
            <a href="tel:+91-9136631331" className="md:text-base lg:text-lg sm:text-sm text-xs lg:mr-5">
              +91 9136631331
            </a>
          </div>
          <IoMdMail className="mr-1 md:text-3xl sm:text-sm" />
          <a href="mailto:spinejoint.arthritiscare@gmail.com" className="md:mr-5 md:text-base lg:text-lg sm:text-sm text-xs lg:mr-5">
            spinejoint.arthritiscare@gmail.com
          </a>
        </div>
        <div className="hidden sm:flex flex-col md:flex-row items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <IoLocation className="mr-2 md:text-3xl sm:text-base" />
            <a href="https://www.google.com/maps/search/?api=1&query=Bhayandar(E),+Mumbai" target="_blank" rel="noopener noreferrer" className="mr-5 md:text-base lg:text-lg sm:text-sm text-sm cursor-pointer">
              Bhayandar(E), Mumbai
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="https://www.youtube.com/@drdsdubey3069"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-3xl hover:text-red-700"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/spine_joints_arthritis_care"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-3xl hover:text-purple-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100064044185076&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-3xl hover:text-blue-600"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
      <div className="navbar flex flex-col md:flex-row justify-between bg-gray-200 shadow-xl items-center z-10 fixed w-full md:mt-5 lg:mt-3 top-10">
        <div className="flex items-center mb-2 md:mb-0">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="logo ml-12 h-8 md:h-16 lg:h-16 sm:h-12 rounded-3xl cursor-pointer"
            />
          </Link>
          <Link to="/">
            <h1 className="md:text-base lg:text-lg sm:text-sm text-sm font-bold ml-5 tracking-wide cursor-pointer">
              SJA CARE
            </h1>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:bg-red-800 focus:outline-none"
            >
              <MdMenu className="text-2xl" />
            </button>
          </div>
          <div
            className={`flex-col md:flex-row items-center md:flex ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <ul className="flex flex-col md:flex-row items-center cursor-pointer">
              <li className="font-semibold hover:text-red-700 mr-5 text-sm md:text-base lg:text-lg p-0 md:p-2">
                <Link to="/">
                  HOME
                </Link>
              </li>
              <li className="font-semibold mr-5 hover:text-red-700 text-sm md:text-base lg:text-lg p-0 md:p-2">
                <Link to="/services">
                  SERVICES
                </Link>
              </li>
              <li className="font-semibold mr-5 text-sm hover:text-red-700 md:text-base lg:text-lg p-0 md:p-2">
                <Link to="/aboutus">
                  ABOUT US
                </Link>
              </li>
              <li className="font-semibold mr-5 text-sm hover:text-red-700 md:text-base lg:text-lg p-0 md:p-2">
                <Link to="/gallery">
                  GALLERY
                </Link>
              </li>
              <li className="font-semibold mr-5 p-0 md:p-2">
                <Link to="/contactus">
                  <button className="h-8 sm:h-6 px-3 sm:px-4 md:h-12 md:px-6 font-semibold tracking-wide bg-red-600 hover:bg-red-700 text-white text-xs sm:text-xs md:text-base lg:text-lg rounded-3xl">
                    CONTACT US
                    <i className="fas fa-location-arrow ml-2"></i>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
>>>>>>> 508932fbf10a8e101a5e80ca5f0e2afeba5f41f5
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center font-semibold text-xl mt-10 pt-24">
          <h1 className="heading tracking-wide">
          Alternate Therapy <span>&mdash;&mdash;</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-4 md:px-0 mt-10">
          {/* Left column */}
          <div className="flex flex-col justify-center items-center md:items-start">
            <img
              src={DoctorTransparent}
              alt="About us"
              className="mx-auto md:ml-0"
            />
          </div>

          {/* Right column */}
          <div className="font-semibold tracking-wide mt-10">
            <div>
              <div>
                <p className="leading-9 text-xl mt-5 font-medium text-center md:text-left">
                <h3 className="text-2xl sm:text-2xl font-bold mb-5 mt-10">
                    Explore holistic healing options at Dr. D S Dubey's clinic with our alternative therapy services. Our approach focuses on natural methods to promote overall well-being and support your body's innate healing abilities.
                </h3>
                <p className="text-base sm:text-lg leading-relaxed mb-5">
                    Benefits of our alternative therapy sessions include:
                </p>
                <ul className="list-disc list-inside mb-5">
                    <li className="text-base sm:text-lg leading-relaxed">
                        Natural Healing: Discover gentle techniques that work with your body's own healing processes.
                    </li>
                    <li className="text-base sm:text-lg leading-relaxed">
                        Stress Reduction: Find relief from stress and anxiety with holistic relaxation methods.
                    </li>
                    <li className="text-base sm:text-lg leading-relaxed">
                        Mind-Body Connection: Nurture balance and harmony between your physical and mental well-being.
                    </li>
                    <li className="text-base sm:text-lg leading-relaxed">
                        Personalized Care: Receive individualized treatment plans tailored to your unique needs and preferences.
                    </li>
                </ul>
                <p className="text-base sm:text-lg leading-relaxed mb-5">
                    Experience the power of alternative therapy to enhance your health and vitality. Schedule an appointment today to begin your journey towards holistic wellness.
                </p>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-10 w-full mb-14 ">
          <div className="flex justify-center font-semibold tracking-wide mt-20">
            <h1 className="heading mt-10">
              {" "}
              Services under{" "}
              <span style={{ color: "#b42329" }}>Alternate Therapy</span>
            </h1>
          </div>
          <div className="flex flex-wrap  justify-center mt-5">
            <div className="h-96 w-72 border rounded-3xl  border-black m-1">
              <div className="flex justify-center">
                <img
                  src={HotCupping}
                  alt="Hot Cupping"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Hot cupping
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/alternative-therapy/hot-cupping">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl  border-black m-1">
              <div className="flex justify-center">
                <img
                  src={VaccumeCupping}
                  alt="Vaccum cupping"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Vaccum cupping
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/alternative-therapy/vacuum-cupping">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl  border-black m-1">
              <div className="flex justify-center">
                <img
                  src={BloodCupping}
                  alt="Blood cupping (Hijama)"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Blood cupping (Hijama)
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/alternative-therapy/blood-cupping">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={Acupressure}
                  alt="Acupressure"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Acupressure
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/alternative-therapy/acupressure">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap  justify-center mt-5">
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={Acupuncture}
                  alt="Acupuncture"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Acupuncture
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/alternative-therapy/acupuncture">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={LeechTherapy}
                  alt="Leech therapy"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Leech therapy
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/alternative-therapy/leech-therapy">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={Ayurvedicneurotherapy}
                  alt="Ayurvedic neuro therapy"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Ayurvedic neuro therapy
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/alternative-therapy/ayurvedic-neuro-therapy">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AlternativeTherapy;
