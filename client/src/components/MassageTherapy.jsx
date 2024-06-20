import React from "react";
import "../Styles/Services.css";
import DoctorTransparent from "../assets/Doctor-transparent.png";
import ThaiMassage from "../assets/Massage-Therapy/Thai-Massage.jpg";
import DeepTissueMassage from "../assets/Massage-Therapy/Deep-Tissue-Massage.jpg";
import PanchakarmaMassage from "../assets/Massage-Therapy/Panchakarma-Massage.jpg";
import ReflexologyMassage from "../assets/Massage-Therapy/Reflexology-Massage.jpg";
import AbhyangaMassage from "../assets/Massage-Therapy/Abhyanga-Massage.jpg";
import MeridianMassage from "../assets/Massage-Therapy/Meridian-Massage.jpg";
import CuppingMassage from "../assets/Massage-Therapy/Cupping-Massage.jpg";
import KeralaMassage from "../assets/Massage-Therapy/Kerala-Massage.webp";
import { Link } from "react-router-dom";
import "../Styles/Aboutus.css";


const MassageTherapy = () => {
  return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center font-semibold text-xl mt-10 pt-24">
          <h1 className="heading tracking-wide">
            Massage Therapy <span>&mdash;&mdash;</span>
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
           
                <p className="leading-9 text-xl mt-5 font-meidum text-center md:text-left">
                <h3 className="text-2xl sm:text-2xl font-bold mb-5 mt-10">
                    At Dr. D S Dubey's clinic, we offer expert massage therapy services to complement our chiropractic treatments. Our licensed massage therapists specialize in techniques designed to alleviate muscle tension, improve circulation, and promote overall relaxation and well-being.
                </h3>
                <p className="text-base sm:text-lg leading-relaxed mb-5">
                    Benefits of our massage therapy include:
                </p>
                <ul className="list-disc list-inside mb-5">
                    <li className="text-base sm:text-lg leading-relaxed">
                        Pain Relief: Soothe aches and pains, including back pain and neck tension.
                    </li>
                    <li className="text-base sm:text-lg leading-relaxed">
                        Stress Reduction: Relax and unwind with calming massage techniques.
                    </li>
                    <li className="text-base sm:text-lg leading-relaxed">
                        Improved Mobility: Enhance flexibility and movement for better daily living.
                    </li>
                    <li className="text-base sm:text-lg leading-relaxed">
                        Faster Healing: Aid in recovery from injuries by improving circulation and reducing inflammation.
                    </li>
                </ul>
                <p className="text-base sm:text-lg leading-relaxed mb-5">
                    Book a session today and discover the benefits of massage therapy for yourself.
                </p>
                </p>
              
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-10 w-full mb-14 ">
          <div className="flex justify-center font-semibold tracking-wide mt-20">
            <h1 className="heading mt-10">
              {" "}
              Services under{" "}
              <span style={{ color: "#b42329" }}>Massage Therapy</span>
            </h1>
          </div>
          <div className="flex flex-wrap  justify-center mt-5">
            <div className="h-96 w-72 border rounded-3xl  border-black m-1">
              <div className="flex justify-center">
                <img
                  src={ThaiMassage}
                  alt="Thai-Massage"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                Thai Massage
                </h1>
              </div>

              <div className="flex justify-center">
              <Link to="/services/massage-therapy/thai-massage">
                <button className="button font-semibold tracking-wide text-lg mt-2">
                  Know More
                </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl  border-black m-1">
              <div className="flex justify-center">
                <img
                  src={DeepTissueMassage}
                  alt="Deep Tissue Massage"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                Deep Tissue Massage
                </h1>
              </div>

              <div className="flex justify-center">
              <Link to="/services/massage-therapy/deep-tissue-massage">
                <button className="button font-semibold tracking-wide text-lg mt-2">
                  Know More
                </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl  border-black m-1">
              <div className="flex justify-center">
                <img
                  src={PanchakarmaMassage}
                  alt="Panchakarma Massage"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                Panchakarma Massage
                </h1>
              </div>

              <div className="flex justify-center">
              <Link to="/services/massage-therapy/panchakarma-massage">
                <button className="button font-semibold tracking-wide text-lg mt-2">
                  Know More
                </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={ReflexologyMassage}
                  alt="Reflexology Massage"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                Reflexology Massage
                </h1>
              </div>

              <div className="flex justify-center">
              <Link to="/services/massage-therapy/reflexology-massage">
                <button className="button font-semibold tracking-wide text-lg mt-2">
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
                  src={AbhyangaMassage}
                  alt="Abhyanga Massage"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                Abhyanga Massage
                </h1>
              </div>

              <div className="flex justify-center">
              <Link to="/services/massage-therapy/abhyanga-massage">
                <button className="button font-semibold tracking-wide text-lg mt-2">
                  Know More
                </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={MeridianMassage}
                  alt="Meridian Massage"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                Meridian Massage
                </h1>
              </div>

              <div className="flex justify-center">
              <Link to="/services/massage-therapy/meridian-massage">
                <button className="button font-semibold tracking-wide text-lg mt-2">
                  Know More
                </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={CuppingMassage}
                  alt="Cupping Massage"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                Cupping Massage
                </h1>
              </div>

              <div className="flex justify-center">
              <Link to="/services/massage-therapy/cupping-massage">
                <button className="button font-semibold tracking-wide text-lg mt-2">
                  Know More
                </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={KeralaMassage}
                  alt="Kerala Massage"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                Kerala Massage
                </h1>
              </div>

              <div className="flex justify-center">
              <Link to="/services/massage-therapy/kerala-massage">
                <button className="button font-semibold tracking-wide text-lg mt-2">
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

export default MassageTherapy;