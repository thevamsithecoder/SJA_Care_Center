import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import { FaHospital, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { Link as ScrollLink } from "react-scroll";
import "../Styles/Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeError, setSubscribeError] = useState("");
  const [subscribeSuccess, setSubscribeSuccess] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/subscribe", { email });
      setSubscribeSuccess("Email subscribed successfully!");
      setSubscribeError("");
      setEmail("");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setSubscribeError(error.response.data.error);
      } else {
        setSubscribeError("Something went wrong. Please try again later.");
      }
      setSubscribeSuccess("");
    }
  };

  return (
    <div className="bg-black p-4 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex flex-col items-center">
        <img src={logo} className="w-16 md:w-20 rounded-full" alt="Logo" />
        <h1 className="text-white font-semibold mt-2 md:mt-5 text-xl md:text-2xl">
          Newsletter
        </h1>
        <form onSubmit={handleSubscribe} className="flex items-center mt-2">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={handleEmailChange}
            className="text-white bg-transparent border border-white px-2 py-1 rounded-md"
          />
          <button
            type="submit"
            className="button-footer ml-2 font-semibold text-white block px-4 py-2 hover:bg-red-800"
          >
            SUBSCRIBE
          </button>
        </form>
        {subscribeError && <p className="text-red-500 text-center mt-2">{subscribeError}</p>}
        {subscribeSuccess && <p className="text-green-500 text-center mt-2">{subscribeSuccess}</p>}
      </div>

      <div className="flex flex-col items-center sm:col-span-2 md:col-span-1">
        <ul className="text-center mt-4 md:mt-0">
          <li className="text-white text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Quick Links
          </li>
          <ScrollLink to="home" smooth={true} duration={500}>
            <li className="text-base md:text-xl text-white p-1 md:p-2 cursor-pointer hover:text-red-500">
              HOME
            </li>
          </ScrollLink>
          <ScrollLink to="aboutus" smooth={true} duration={500}>
            <li className="text-base md:text-xl text-white p-1 md:p-2 cursor-pointer hover:text-red-500">
              ABOUT US
            </li>
          </ScrollLink>
          <ScrollLink to="gallery" smooth={true} duration={500}>
            <li className="text-base md:text-xl text-white p-1 md:p-2 cursor-pointer hover:text-red-500">
              GALLERY
            </li>
          </ScrollLink>
          <ScrollLink to="contactus" smooth={true} duration={500}>
            <li className="text-base md:text-xl text-white p-1 md:p-2 cursor-pointer hover:text-red-500">
              CONTACT US
            </li>
          </ScrollLink>
        </ul>
      </div>

      <div className="flex flex-col items-center sm:col-span-2 md:col-span-1">
        <div className="text-white flex flex-col items-center md:items-start md:mr-4 text-base md:text-lg">
          <ul className="text-center md:text-left mt-4 md:mt-0">
            <li>MUMBAI</li>
            <li>Sai Geeta Darshan,</li>
            <li>Opp. premier theatre,</li>
            <li>Bhayandar,</li>
            <li>Queens Park,</li>
            <li>Mira Road East,</li>
            <li>Mira Bhayandar,</li>
            <li>Maharashtra - 401105</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center sm:col-span-2 md:col-span-1">
        <div className="text-white flex flex-col items-center md:items-start md:w-1/2 mt-4 md:mt-0">
          <div className="text-center md:text-left">
            <div className="flex items-center mb-2 md:mb-5">
              <CgMail className="mr-2 md:mr-3 text-xl md:text-3xl" />
              <a href="mailto:spinejoint.arthritiscare@gmail.com" className="text-base md:text-lg hover:underline">
                spinejoint.arthritiscare@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-2 md:mb-5">
              <MdCall className="mr-2 md:mr-3 text-xl md:text-3xl" />
              <a href="tel:+919967521331" className="text-base md:text-lg hover:underline">
                +91 9967521331
              </a>
            </div>
            <div className="flex items-center mb-2 md:mb-5">
              <FaHospital className="mr-2 md:mr-3 text-xl md:text-3xl" />
              <a href="https://www.google.com/maps/search/?api=1&query=Bhayandar(E),+Mumbai" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg hover:underline">
                Bhayandar(E), Mumbai
              </a>
            </div>
          </div>

          <div className="text-white flex flex-row mt-2 p-2 md:p-5 justify-center">
            <a
              href="https://www.youtube.com/@drdsdubey3069"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600"
            >
              <FaYoutube className="text-xl md:text-3xl m-1 md:m-2" />
            </a>
            <a
              href="https://www.instagram.com/spine_joints_arthritis_care"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600"
            >
              <FaInstagram className="text-xl md:text-3xl m-1 md:m-2" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100064044185076&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaFacebook className="text-xl md:text-3xl m-1 md:m-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
