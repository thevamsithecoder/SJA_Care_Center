import React from "react";
import DoctorTransparent from "../assets/Doctor-transparent.png";
import BackPain from "../assets/Chiropractic-Treatment/Back-Pain.jpg";
import Sacralization from "../assets/Chiropractic-Treatment/Sacralization.jpg";
import Sciatica from "../assets/Chiropractic-Treatment/Sciatica.png";
import Scoliosis from "../assets/Chiropractic-Treatment/Scoliosis.jpg";
import BulgingDisc from "../assets/Chiropractic-Treatment/Bulging-Disc.jpg";
import FrozenShoulder from "../assets/Chiropractic-Treatment/Frozen-Shoulder.jpg";
import Headache from "../assets/Chiropractic-Treatment/Headache.jpg";
import HeelPain from "../assets/Chiropractic-Treatment/Heel-Pain.jpg";
import HerniatedDisc from "../assets/Chiropractic-Treatment/Herniated-Disc.jpg";
import KneePain from "../assets/Chiropractic-Treatment/Knee-Pain.avif";
import Lordosis from "../assets/Chiropractic-Treatment/Lordosis.jpg";
import LumbarSpondylosis from "../assets/Chiropractic-Treatment/Lumbar-Spondylosis.png";
import Migraine from "../assets/Chiropractic-Treatment/Migraine.jpg";
import MusclePain from "../assets/Chiropractic-Treatment/Muscle-Pain.jpg";
import NeckPain from "../assets/Chiropractic-Treatment/Neck-Pain.jpg";
import AnklePain from "../assets/Chiropractic-Treatment/Ankle-Pain.jpg";
import NervePain from "../assets/Chiropractic-Treatment/Nerve-Pain.jpg";
import Osteopathy from "../assets/Chiropractic-Treatment/Osteopathy.jpg";
import FingerPain from "../assets/Chiropractic-Treatment/Finger-Pain.jpg";
import Vertigo from "../assets/Chiropractic-Treatment/Vertigo.jpg";
import TennisElbow from "../assets/Chiropractic-Treatment/Tennis-Elbow.jpg";
import CervicalSpondylosis from "../assets/Chiropractic-Treatment/Cervical-Spondylosis.jpg";
import SlippedDisc from "../assets/Chiropractic-Treatment/Slipped-Disc.avif";
import AnkylosingSpondylitis from "../assets/Chiropractic-Treatment/Ankylosing-Spondylitis.png";
import Arthritis from "../assets/Chiropractic-Treatment/Arthritis.png";
import { Link } from "react-router-dom";


const ChiropraticTreatment = () => {
  return (
  
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="text-center font-semibold text-xl mt-10 pt-24">
          <h1 className="heading tracking-wide">
            Chiropractic Treatment <span>&mdash;&mdash;</span>
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
                  <div className="text-content w-full">
                    <h3 className="text-2xl sm:text-2xl font-bold mb-5 mt-10">
                      Discover relief from pain and discomfort with chiropractic
                      treatment at Dr. D S Dubey's clinic. Our skilled
                      chiropractor offers natural and non-invasive methods to
                      address a variety of musculoskeletal issues.
                    </h3>
                    <p className="text-base sm:text-lg leading-relaxed mb-5">
                      Benefits of our alternative therapy sessions include:
                    </p>
                    <ul className="list-disc list-inside mb-5">
                      <li className="text-base sm:text-lg leading-relaxed">
                        Natural Healing: Discover gentle techniques that work
                        with your body's own healing processes.
                      </li>
                      <li className="text-base sm:text-lg leading-relaxed">
                        Stress Reduction: Find relief from stress and anxiety
                        with holistic relaxation methods.
                      </li>
                      <li className="text-base sm:text-lg leading-relaxed">
                        Mind-Body Connection: Nurture balance and harmony
                        between your physical and mental well-being.
                      </li>
                      <li className="text-base sm:text-lg leading-relaxed">
                        Personalized Care: Receive individualized treatment
                        plans tailored to your unique needs and preferences.
                      </li>
                    </ul>
                    <p className="text-base sm:text-lg leading-relaxed mb-5">
                      Experience the power of alternative therapy to enhance
                      your health and vitality. Schedule an appointment today to
                      begin your journey towards holistic wellness.
                    </p>
                  </div>
                </p> 
          </div>
        </div>
        {/* Chiropractic Treatment */}
        <div className="flex flex-wrap justify-center mt-10 w-full ">
          <div className="flex justify-center font-semibold tracking-wide mt-20">
            <h1 className="heading mt-10">
              {" "}
              Services under{" "}
              <span style={{ color: "#b42329" }}>Chiropractic Treatment</span>
            </h1>
          </div>
          <div className="flex flex-wrap  justify-center mt-5">
            <div className="h-96 w-72 border rounded-3xl  border-black m-1">
              <div className="flex justify-center">
                <img
                  src={BackPain}
                  alt="Back Pain"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Back Pain
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/back-pain">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl  border-black m-1">
              <div className="flex justify-center">
                <img
                  src={Sacralization}
                  alt="Sacralization"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Sacralization
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/sacralization">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl  border-black m-1">
              <div className="flex justify-center">
                <img
                  src={Sciatica}
                  alt="Sciatica"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Sciatica
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/sciatica">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={Scoliosis}
                  alt="Scoliosis"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Scoliosis
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/scoliosis">
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
                  src={BulgingDisc}
                  alt="Bulging Disc"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Bulging Disc
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/disc-bulging">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={FrozenShoulder}
                  alt="Frozen Shoulder"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Frozen Shoulder
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/frozen-shoulder">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={Headache}
                  alt="Headache"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Headache
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/headache">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={HeelPain}
                  alt="Heel Pain"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Heel Pain
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/heel-pain">
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
                  src={HerniatedDisc}
                  alt="Herniated Disc"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Herniated Disc
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/herniated-disc">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={KneePain}
                  alt="Knee Pain"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Knee Pain
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/knee-pain">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={Lordosis}
                  alt="Lordosis"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Lordosis
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/lordosis">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={LumbarSpondylosis}
                  alt="Lumbar Spondylosis"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Lumbar Spondylosis
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/lumbar-spondylosis">
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
                  src={Migraine}
                  alt="Migraine"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Migraine
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/migraine">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={MusclePain}
                  alt="Muscle Pain"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Muscle Pain
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/muscle-pain">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={NeckPain}
                  alt="Neck Pain"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Neck Pain
                </h1>
              </div>
              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/neck-pain">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={AnklePain}
                  alt="Ankle Pain"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Ankle Pain
                </h1>
              </div>
              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/ankle-pain">
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
                  src={NervePain}
                  alt="Nerve Pain"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Nerve Pain
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/nerve-pain">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={AnkylosingSpondylitis}
                  alt="Ankylosing Spondylitis"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Ankylosing Spondylitis
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/ankylosing-spondylitis">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>

            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={Osteopathy}
                  alt="Osteopathy"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Osteopathy
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/osteopathy">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={Arthritis}
                  alt="Arthritis"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Arthritis
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/arthritis">
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
                  src={FingerPain}
                  alt="Finger Pain"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Finger Pain
                </h1>
              </div>
              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/finger-pain">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>

            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={Vertigo}
                  alt="Vertigo"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Vertigo
                </h1>
              </div>
              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/vertigo">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={TennisElbow}
                  alt="Tennis Elbow"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Tennis Elbow
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/tennis-elbow">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>

            <div className="h-96 w-72 border rounded-3xl border-black m-1">
              <div className="flex justify-center">
                <img
                  src={CervicalSpondylosis}
                  alt="Cervical-Spondylosis"
                  className="h-72 w-80 rounded-3xl p-2"
                />
              </div>
              <div>
                <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                  Cervical Spondylosis
                </h1>
              </div>

              <div className="flex justify-center">
                <Link to="/services/chiropractic-treatment/cervical-spondylosis">
                  <button className="button hover:bg-red-800 font-semibold tracking-wide text-lg mt-2">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="h-96 w-72 border rounded-3xl border-black m-1">
            <div className="flex justify-center">
              <img
                src={SlippedDisc}
                alt="SlippedDisc"
                className="h-72 w-80 rounded-3xl p-2"
              />
            </div>
            <div>
              <h1 className="font-semibold flex justify-center text-2xl tracking-wide mt-1">
                Slipped Disc
              </h1>
            </div>

            <div className="flex justify-center">
              <Link to="/services/chiropractic-treatment/slipped-disc">
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

export default ChiropraticTreatment;
