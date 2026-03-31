import React from "react";
import bannerImg from "../assets/banner.png";
import circleIcon from "../assets/circle.png";
import playBtnImg from "../assets/Play.png";
const Hero = () => {
  return (
    <div className="hero py-16 container mx-auto">
      <div className="hero-content flex-col lg:flex-row gap-15">
        <div>
          <div className="py-2 mb-4 px-4 bg-[#E1E7FF] rounded-full flex items-center gap-2.5 w-fit mx-auto md:mx-0">
            <div>
              <img src={circleIcon} alt="Circle Icon" />
            </div>
            <p className="text-base font-medium bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </p>
          </div>
          <h1 className="text-4xl font-bold test-gray-900 md:text-7xl">
            Super charge your digital workflow
          </h1>
          <p className="text-lg py-6 text-gray-500">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
            <br />
            Explore Products
          </p>
          <div className="space-x-4">
            <a
              className="btn text-white rounded-full bg-linear-to-r from-indigo-600 to-purple-600 border border-transparent"
              href="#"
            >
              Explore Products
            </a>
            <button
              className="p-px rounded-full bg-linear-to-r from-indigo-600 to-purple-600"
              href="#"
            >
              <div className="btn bg-white rounded-full">
                <img src={playBtnImg} alt="play icon" />
                <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Watch Demo
                </span>
              </div>
            </button>
          </div>
        </div>
        <img src={bannerImg} className="rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default Hero;
