import React from "react";
import profimg from "../images/mua.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-[#FFE6E4] flex flex-col lg:flex-row items-center lg:h-screen py-10"
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-5">
        <img
          src={profimg}
          alt="Nazrin"
          className="rounded-2xl w-10/12 sm:w-8/12 md:w-6/12 lg:w-10/12 xl:w-8/12 object-cover shadow-lg"
        />
      </div>

      {/* About Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center text-center p-5 lg:p-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#6B3E2E]">
          Nazrin
        </h1>
        <h2 className="text-lg lg:text-2xl text-[#6B3E2E] mt-2">
          PROFESSIONAL MAKEUP ARTIST
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-700 mt-4 leading-relaxed">
          Hi, I’m <span className="font-bold text-[#6B3E2E]">Nazrin</span>, a
          Professional Makeup Artist. I specialize in creating flawless,
          natural-looking makeup that enhances your beauty while making you feel
          confident and radiant.
        </p>
        <p className="text-sm md:text-base lg:text-lg text-gray-700 mt-4 leading-relaxed">
          Located in{" "}
          <span className="font-bold text-[#6B3E2E]">Kochi, Kerala</span>,
          <span className="font-bold text-[#6B3E2E]"> Nazrin's Makeover</span>{" "}
          offers expert bridal and special occasion makeup services. Our
          talented team crafts elegant, timeless looks using high-quality
          products and the latest techniques. We are passionate about staying
          updated with beauty trends.
        </p>
        <p className="text-sm md:text-base lg:text-lg text-gray-700 mt-4 leading-relaxed">
          Are you dreaming of a{" "}
          <span className="font-bold text-[#6B3E2E]">
            dewy, luminous, and picture-perfect bridal look
          </span>
          while still feeling like yourself? Look no further! We provide{" "}
          <span className="font-bold text-[#6B3E2E]">
            luxury bridal makeup services
          </span>{" "}
          to make your special day truly unforgettable.
        </p>
        <p className="text-sm md:text-base lg:text-lg text-gray-700 mt-4 leading-relaxed">
          <span className="font-bold text-[#6B3E2E]">Contact us today</span> for
          a personalized beauty experience!
        </p>
      </div>
    </div>
  );
};

export default About;
