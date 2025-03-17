import React from "react";
import { Link } from "react-router-dom";

const PriceCard = () => {
  const packages = [
    {
      title: "Basic Package",
      price: "₹15,000",
      description:
        "Bridal makeup with hijab setting or hairstyle. Products used: PAC, MAC, L'Oréal, and equivalent products.",
    },
    {
      title: "Advanced HD Package",
      price: "₹20,000",
      description:
        "Bridal makeup with hijab setting or pro hairstyle. Products used: NARS, Too Faced, Tarte, and equivalent products.",
    },
    {
      title: "Luxury HD Package / Glass Skin Makeup",
      price: "₹25,000",
      description:
        "Bridal makeup with advanced hairstyle or hijab setting. Includes luxury products like Gucci, Urban Decay, and Charlotte Tilbury with hair extensions.",
    },
  ];

  return (
    <div className="bg-[#FFE6E4] min-h-screen flex flex-col justify-center items-center py-10 px-5 rounded-lg shadow-lg">
      {/* Back Button */}
      <Link to="/">
        <button className="absolute top-4 left-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900 transition">
          ← Back
        </button>
      </Link>

      <h2 className="text-2xl font-bold text-[#6B3E2E] mb-6">
        ✨ Bridal Makeup Packages ✨
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 w-80 shadow-md hover:scale-105 transition transform duration-300"
          >
            <h3 className="text-lg font-semibold text-[#6B3E2E]">
              {pkg.title}
            </h3>
            <p className="text-xl text-[#D76A64] font-bold">{pkg.price}</p>
            <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-[#6B3E2E] text-lg text-center">
        <h3 className="font-semibold">Additional Services</h3>
        <p>✨ Saree Draping: ₹1,500 - ₹2,500</p>
        <p>✨ Transportation & accommodation charges extra</p>
        <p>✨ Order confirmed only after advance payment</p>
        <p>✨ Amount paid is non-refundable</p>
      </div>
    </div>
  );
};

export default PriceCard;
