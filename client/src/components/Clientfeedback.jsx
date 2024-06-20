import React from "react";
import Saumya from "../assets/testimonial1.png";
import Laxman from "../assets/testimonial2.png";
import Sumit from "../assets/testimonial3.png";
import "../Styles/Clientfeedback.css";
import Google from "../assets/Google.png";



const ClientFeedback = () => {
  return ( 
    <div className="m-5 md:m-20">
      <div className="flex justify-center">
        <h1 className="p-4 font-semibold md:text-4xl lg:text-4xl text-2xl">
          What our clients say <span>&mdash;&mdash;</span>
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mt-5 md:justify-around">
        <div className="card-client bg-white shadow-md p-6 max-w-md border border-black rounded-lg mb-6 sm:mb-0">
          <div className="flex justify-between mb-4">
            <img
              src={Saumya}
              alt="Saumya"
              className="rounded-full h-12 w-12 mr-4 border border-black"
            />
            <div className="flex justify-around">
              <img src={Google} alt="Google Image" className="google-img h-6 w-6" />
              <a
                className="text-blue-600 hover:text-blue-800 font-medium tracking-wide ml-2"
                href="https://g.co/kgs/Yn61ZEz"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google
              </a>
            </div>
          </div>
          <p className="leading-tight font-normal">
            After three years of back and joint pain, my mother finally found
            relief with Dr. DS Dubey's treatment. Now she's...
          </p>
          <hr className="mt-5 border-black" />
          <div className="flex justify-between mt-2">
            <h3 className="text-lg font-semibold tracking-wide">Saumya</h3>
            <div className="flex items-center">
              <span className="fa fa-star text-yellow-400"></span>
              <span className="fa fa-star text-yellow-400"></span>
              <span className="fa fa-star text-yellow-400"></span>
              <span className="fa fa-star text-yellow-400"></span>
              <span className="fa fa-star text-yellow-400"></span>
            </div>
          </div>
        </div>
        <div className="card-client bg-white shadow-md p-6 max-w-md border border-black rounded-lg mb-6 sm:mb-0">
          <div className="flex justify-between mb-4">
            <img
              src={Laxman}
              alt="Laxman Mate"
              className="rounded-full h-12 w-12 mr-4 border border-black"
            />
            <div className="flex justify-around">
              <img src={Google} alt="Google Image" className="google-img h-6 w-6" />
              <a
                className="text-blue-600 hover:text-blue-800 font-medium tracking-wide ml-2"
                href="https://g.co/kgs/Yn61ZEz"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google
              </a>
            </div>
          </div>
          <p className="leading-tight font-normal">
            Best treatment for back pain by chiropractic Dr. DS Dubey I had a
            speedy recovery at spine joints and ...
          </p>
          <hr className="mt-5 border-black" />
          <div className="flex justify-between mt-2">
            <h3 className="text-lg font-semibold tracking-wide">Laxman Mate</h3>
            <div className="flex items-center">
              <span className="fa fa-star text-yellow-400"></span>
              <span className="fa fa-star text-yellow-400"></span>
              <span className="fa fa-star text-yellow-400"></span>
              <span className="fa fa-star text-yellow-400"></span>
              <span className="fa fa-star text-yellow-400"></span>
            </div>
          </div>
        </div>
        <div className="card-client bg-white shadow-md p-6 max-w-md border border-black rounded-lg mb-6 sm:mb-0">
          <div className="flex justify-between mb-4">
            <img
              src={Sumit}
              alt="Sumit Dubey"
              className="rounded-full h-12 w-12 mr-4 border border-black"
            />
            <div className="flex justify-around">
              <img src={Google} alt="Google Image" className="google-img h-6 w-6" />
              <a
                className="text-blue-600 hover:text-blue-800 font-medium tracking-wide ml-2"
                href="https://g.co/kgs/Yn61ZEz"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google
              </a>
            </div>
          </div>
          <p className="leading-tight font-normal">
            Excellent treatment by Dr. D.S. Dubey and his team. Very effective
            for back pain in Bhayandar.
          </p>
          <hr className="mt-10 border-black" />
          <div className="flex justify-between mt-2">
            <h3 className="text-lg font-semibold tracking-wide">Sumit Dubey</h3>
            <div className="flex items-center">
              <span className="fa fa-star text-yellow-400"></span>
              <span className="fa fa-star text-yellow-400"></span>
              <span className="fa fa-star text-yellow-400"></span>
              <span className="fa fa-star text-yellow-400"></span>
              <span className="fa fa-star text-yellow-400"></span>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default ClientFeedback;
