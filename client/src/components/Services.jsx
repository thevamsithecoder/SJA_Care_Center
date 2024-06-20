import React from "react";
import "../Styles/Services.css";
import Chiropractor from "../assets/Chiropractor.jpg";
import MassageTherapy from "../assets/MassageTherapy.png";
import Cupping from "../assets/Cupping.avif";
import Ayurvedic from "../assets/Ayurvedic.jpg";
import Arthrities from "../assets/Arthrities.jpeg";
import Headache from "../assets/Headache.jpeg";
import Chiropractic from "../assets/Chiropractic.jpeg";
import Kidneystone from "../assets/Kidneystone.jpeg";
import Jaundice from "../assets/Jaundice.webp";
import Thai from "../assets/Thai.jpeg";
import Meridian from "../assets/Meridian.webp";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center font-semibold text-xl mt-2 pt-12">
        <h1>
          SERVICES <span>&mdash;&mdash;</span>
        </h1>
      </div>
      {/* The Best Quality Services You will Get */}
      <div className="text-center font-semibold tracking-wide mt-6">
        <h1 className="heading">
          Unmatched Quality and Services <br />
          <span className="flex justify-center tracking-wide">Awaits You</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center mt-6">
        <div className="card border-black m-8 ">
          <div className="flex justify-center">
            <img
              src={Chiropractor}
              alt="Chiropractor"
              className="image-service p-2"
            />
          </div>
          <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
            Chiropractic Treatment
          </h1>
       
        
          <p className="text-lg font-normal flex justify-center m-3 p-2  text-center leading-none tracking-wide">
            Adjusts the spine to relieve pain and improve function
          </p>
<<<<<<< HEAD

          <div className="flex justify-center mt-12">
          <Link to="/services/chiropractic-treatment" > <button className="button-home font-semibold tracking-wide text-lg ">
=======
          <div className="flex justify-center mt-8">
          <ScrollLink to="chiropractic-treatment" smooth={true} duration={500}> <button className="button-home hover:bg-red-800 w-72 font-semibold tracking-wide text-lg ">
>>>>>>> 508932fbf10a8e101a5e80ca5f0e2afeba5f41f5
              Know More
            </button> </Link>
           
          </div>
        </div>
        <div className="card border-black m-8 ">
          <div className="flex justify-center">
            <img
              src={MassageTherapy}
              alt="Massage Therapy"
              className="image-service p-2"
            />
          </div>
          <div>
            <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
              Massage Therapy
            </h1>
            <p className="text-lg font-normal flex justify-center m-3 p-2  text-center leading-none tracking-wide">
              Perfect for those seeking physical and mental peace
            </p>
          </div>

<<<<<<< HEAD
          <div className="flex justify-center mt-12">
          <Link to="/services/massage-therapy" > <button className="button-home font-semibold tracking-wide text-lg ">
=======
          <div className="flex justify-center mt-8">
          <ScrollLink to="message-therapy" smooth={true} duration={500}> <button className="button-home hover:bg-red-800 w-72 font-semibold tracking-wide text-lg ">
>>>>>>> 508932fbf10a8e101a5e80ca5f0e2afeba5f41f5
              Know More
            </button> </Link>
          </div>
        </div>

        <div className="card border-black m-8 ">
          <div className="flex justify-center">
            <img
              src={Ayurvedic}
              alt="Ayurvedic Medicine"
              className="image-service p-2"
            />
          </div>
          <div>
            <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
              Alternative Therapy
            </h1>
            <p className="text-lg font-normal flex justify-center m-3 p-2  text-center leading-none tracking-wide">
              Offers natural approach to health and emotional well-being
            </p>
          </div>

<<<<<<< HEAD
          <div className="flex justify-center mt-12">
          <Link to="/services/alternative-therapy" > <button className="button-home font-semibold tracking-wide text-lg">
=======
          <div className="flex justify-center mt-8">
          <ScrollLink to="alternative-therapy" smooth={true} duration={500}> <button className="hover:bg-red-800 button-home w-72 font-semibold tracking-wide text-lg ">
>>>>>>> 508932fbf10a8e101a5e80ca5f0e2afeba5f41f5
              Know More
            </button> </Link>
          </div>
        </div>
      </div>
      {/* Chiropractic Treatment */}
      <div className="flex flex-wrap justify-center mt-10" id="chiropractic-treatment">
        <div className="flex justify-center font-semibold tracking-wide mt-20">
          <h1 className="heading mt-10"> Chiropractic Treatment</h1>
        </div>
        <div className="flex   flex-wrap  justify-center mt-5">
          <div className="card border-black m-8">
            <div className="flex justify-center">
              <img
                src={Arthrities}
                alt="Arthrities"
                className="image-square p-2"
              />
            </div>
            <div>
              <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                Arthrities
              </h1>
            </div>
            <div className="flex justify-center">
              <Link to="/services/chiropractic-treatment/arthritis">
<<<<<<< HEAD
              <button className="button-home font-semibold tracking-wide text-lg mt-2">
                Know More
              </button>
              </Link>
=======
                <button className="button-home w-72 font-semibold tracking-wide hover:bg-red-800 text-lg mt-2">
                  Know More
                </button>
                </Link>
>>>>>>> 508932fbf10a8e101a5e80ca5f0e2afeba5f41f5
            </div>
          </div>
          <div className="card border-black m-8">
            <div className="flex justify-center">
              <img src={Headache} alt="Headache" className="image-square p-2" />
            </div>
            <div>
              <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                Sciatica
              </h1>
            </div>
            <div className="flex justify-center ">
            <Link to="/services/chiropractic-treatment/sciatica">
<<<<<<< HEAD
              <button className="button-home font-semibold tracking-wide text-lg mt-2">
                Know More
              </button>
            </Link>
=======
                <button className="button-home w-72 font-semibold hover:bg-red-800 tracking-wide text-lg mt-2">
                  Know More
                </button>
                </Link>
>>>>>>> 508932fbf10a8e101a5e80ca5f0e2afeba5f41f5
            </div>
          </div>
          <div className="card border-black m-8">
            <div className="flex justify-center">
              <img
                src={Chiropractic}
                alt="Chiropractic"
                className="image-square p-2"
              />
            </div>
            <div>
              <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                Back Pain
              </h1>
            </div>
            <div className="flex justify-center">
            <Link to="/services/chiropractic-treatment/back-pain">
<<<<<<< HEAD
              <button className="button-home font-semibold tracking-wide text-lg mt-2">
                Know More
              </button>
              </Link>
=======
                <button className="button-home w-72 font-semibold hover:bg-red-800 tracking-wide text-lg mt-2">
                  Know More
                </button>
                </Link>
>>>>>>> 508932fbf10a8e101a5e80ca5f0e2afeba5f41f5
            </div>
          </div>
        </div>
      </div>
      <div className="viewall-hr">
        <div className="viewall-hr-position">
        <Link to="/services/chiropractic-treatment">
          <button className="viewall-button text-2xl hover:bg-red-800 tracking-wide font-semibold text-white">
            View All
          </button>
          </Link>
        </div>
        <hr className="hr" />
      </div>
      {/* Massage Therapy */}
      <div className="flex justify-center font-semibold tracking-wide mt-5 " id="message-therapy">
        <h1 className="heading mt-10">
          {" "}
          <div className="mt-10">
            <div className="flex flex-wrap justify-center font-semibold tracking-wide mt-0">
              <h1 className="heading mt-10"> Massage Therapy</h1>
            </div>
            <div className="flex flex-wrap justify-center mt-5">
              <div className="card border-black m-8">
                <div className="flex justify-center">
                  <img
                    src={Cupping}
                    alt="Cupping"
                    className="image-square p-2"
                  />
                </div>
                <div>
                  <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                    Cupping Massage
                  </h1>
                </div>

                <div className="flex justify-center">
                <Link to="/services/massage-therapy/cupping-massage">
<<<<<<< HEAD
                  <button className="button-home font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                  </Link>
=======
                <button className="button-home w-72 hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                  Know More
                </button>
                </Link>
>>>>>>> 508932fbf10a8e101a5e80ca5f0e2afeba5f41f5
                </div>
              </div>
              <div className="card border-black m-8">
                <div className="flex justify-center">
                  <img src={Thai} alt="Thai" className="image-square p-2" />
                </div>
                <div>
                  <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                    Thai Massage
                  </h1>
                </div>

                <div className="flex justify-center">
<<<<<<< HEAD
                <Link to="/services/massage-therapy/cupping-massage">
                  <button className="button-home font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                  </Link>
=======
                <Link to="/services/massage-therapy/thai-massage">
                <button className="button-home w-72 hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                  Know More
                </button>
                </Link>
>>>>>>> 508932fbf10a8e101a5e80ca5f0e2afeba5f41f5
                </div>
              </div>
              <div className="card border-black m-8">
                <div className="flex justify-center">
                  <img
                    src={Meridian}
                    alt="Meridian"
                    className="image-square p-2"
                  />
                </div>
                <div>
                  <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                    Panchakarma Massage
                  </h1>
                </div>

                <div className="flex justify-center">
                <Link to="/services/massage-therapy/panchakarma-massage">
<<<<<<< HEAD
                  <button className="button-home font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                  </Link>
=======
                <button className="button-home w-72 hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                  Know More
                </button>
                </Link>
>>>>>>> 508932fbf10a8e101a5e80ca5f0e2afeba5f41f5
                </div>
              </div>
            </div>
          </div>
        </h1>
      </div>
      <div className="viewall-hr">
        <div className="viewall-hr-position">
          <Link to="/services/massage-therapy">
          <button className="viewall-button text-2xl hover:bg-red-800 tracking-wide font-semibold text-white">
            View All
          </button>
          </Link>
        </div>
        <hr className="hr" />
      </div>
      <div className="mt-10">
        <div className="flex flex-wrap justify-center font-semibold tracking-wide mt-20 " id="alternative-therapy">
          <h1 className="heading mt-10"> Alternative Therapy</h1>
        </div>
        <div className="flex flex-wrap justify-center mt-5">
          <div className="card border-black m-8">
            <div className="flex justify-center">
              <img
                src={Kidneystone}
                alt="Kidneystone"
                className="image-square p-2"
              />
            </div>
            <div>
              <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                Leech therapy
              </h1>
            </div>

            <div className="flex justify-center">
            <Link to="/services/alternative-therapy/leech-therapy">
<<<<<<< HEAD
              <button className="button-home font-semibold tracking-wide text-lg mt-2">
                Know More
              </button>
              </Link>
=======
                <button className="button-home hover:bg-red-800 w-72 font-semibold tracking-wide text-lg mt-2">
                  Know More
                </button>
                </Link>
>>>>>>> 508932fbf10a8e101a5e80ca5f0e2afeba5f41f5
            </div>
          </div>
          <div className="card border-black m-8">
            <div className="flex justify-center">
              <img
                src={Jaundice}
                alt="Jaundice "
                className="image-square p-2"
              />
            </div>
            <div>
              <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                Blood cupping (Hijama)
              </h1>
            </div>

            <div className="flex justify-center">
            <Link to="/services/alternative-therapy/blood-cupping">
<<<<<<< HEAD
              <button className="button-home font-semibold tracking-wide text-lg mt-2">
                Know More
              </button>
              </Link>
=======
                <button className="button-home hover:bg-red-800 w-72 font-semibold tracking-wide text-lg mt-2">
                  Know More
                </button>
                </Link>
>>>>>>> 508932fbf10a8e101a5e80ca5f0e2afeba5f41f5
            </div>
          </div>
          <div className="card border-black m-8">
            <div className="flex justify-center">
              <img
                src={Arthrities}
                alt="Arthrities"
                className="image-square p-2"
              />
            </div>
            <div>
              <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                Acupuncture
              </h1>
            </div>

            <div className="flex justify-center">
            <Link to="/services/alternative-therapy/acupuncture">
<<<<<<< HEAD
              <button className="button-home font-semibold tracking-wide text-lg mt-2">
                Know More
              </button>
              </Link>
=======
                <button className="button-home hover:bg-red-800 w-72 font-semibold tracking-wide text-lg mt-2">
                  Know More
                </button>
                </Link>
>>>>>>> 508932fbf10a8e101a5e80ca5f0e2afeba5f41f5
            </div>
          </div>
        </div>
      </div>
      <div className="viewall-hr">
        <div className="viewall-hr-position">
          <Link to="/services/alternative-therapy">
          <button className="viewall-button hover:bg-red-800 text-2xl tracking-wide font-semibold text-white">
            View All
          </button>
          </Link>
        </div>
        <hr className="hr" />
      </div>
    </div>
  );
};

export default Services;
