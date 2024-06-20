import React, { useState } from "react";
import Circle from "../assets/Circle.png";
import { IoCall } from "react-icons/io5";
import { MdEmail, MdAccessTime } from "react-icons/md";
import { FaHospital, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import axios from "axios";
import "../Styles/Getintouch.css";

const Getintouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/save-email", formData);
      if (response.status === 200) {
        setSuccess("Form submitted successfully!");
        setError("");
        setFormData({ name: "", email: "", services: "" });
      } else {
        setError("Error submitting form. Please try again.");
        setSuccess("");
      }
    } catch (error) {
      setError("Error submitting form. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card-getintouch card-color border-2 border-black rounded-xl flex flex-row">
        <div className="flex items-center">
          <img src={Circle} alt="Decorative Circle" />
        </div>
        <div>
          {/* Contact Form */}
          <div className="w-11/12 rounded-lg">
            <h2 className="text-center m-5 p-5 font-semibold text-4xl">
              Get In Touch <span>&mdash;&mdash;</span>
            </h2>
            <p className="text-xl">
              Connect Without Worry - Your Information is Safe Here
            </p>
            <form className="space-y-4 mt-5" onSubmit={handleSubmit}>
              <div className="flex justify-center items-center">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-3/5 p-4 rounded-3xl hover:border-red-600 border-2 border-black card-color focus:outline-none"
                  required
                />
              </div>
              <div className="flex justify-center">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-3/5 p-4 rounded-3xl hover:border-red-600 border-2 border-black card-color focus:outline-none"
                  required
                />
              </div>
              <div className="flex justify-center">
                <input
                  type="text"
                  name="services"
                  placeholder="Services"
                  value={formData.services}
                  onChange={handleChange}
                  className="w-3/5 p-4 rounded-3xl hover:border-red-600 border-2 border-black card-color focus:outline-none"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="button-submit hover:bg-red-600 bg-black text-white font-medium text-lg md:text-xl rounded-3xl p-2 mb-3"
                >
                  Submit
                </button>
              </div>
            </form>
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
            {success && <p className="text-green-500 text-center mt-4">{success}</p>}
          </div>
        </div>
        {/* Contact Info */}
        <div className="flex">
          <div className="card-details text-white flex items-center justify-center">
            <div className="bg-black p-6 flex flex-col justify-center items-center relative z-10">
              <h2 className="text-3xl font-semibold mb-4 p-4">Info</h2>
              <div className="text-center m-2">
                <div className="flex items-center mb-2 p-2">
                  <IoCall className="mr-1 text-3xl" />
                  <a href="tel:+919967521331" className="text-xl hover:underline">
                    +91 9967521331
                  </a>
                </div>
                <div className="flex items-center mb-2 p-2">
                  <MdEmail className="mr-1 text-3xl" />
                  <a href="mailto:spinejoint.arthritiscare@gmail.com" className="text-xl hover:underline">
                    spinejoint.arthritiscare@gmail.com
                  </a>
                </div>
                <div className="flex items-center mb-2 p-2">
                  <MdAccessTime className="mr-1 text-3xl" />
                  <p className="text-xl">10 A.M to 7 P.M</p>
                </div>
                <div className="flex items-center p-2">
                  <FaHospital className="mr-1 text-3xl" />
                  <a href="https://www.google.com/maps/search/?api=1&query=Bhayandar(E),+Mumbai" target="_blank" rel="noopener noreferrer" className="text-xl hover:underline">
                    Bhayandar(E), Mumbai
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bgcolor w-40 rounded-r-lg rounded-l-lg text-white flex items-end -ml-24 relative">
            <a
              href="https://www.youtube.com/@drdsdubey3069"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 mb-6 text-black text-3xl hover:text-red-700"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/spine_joints_arthritis_care"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 mb-6 text-black text-3xl hover:text-purple-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100064044185076&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 mb-6 text-black text-3xl hover:text-blue-600"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
