import React from "react";
import bridal from "../images/img6.jpg";

const servicesData = [
  { id: 1, title: "Bridal", image: bridal },
  { id: 2, title: "Engagement", image: bridal },
  { id: 3, title: "Party Makeup", image: bridal },
  { id: 4, title: "Hair Styling", image: bridal },
  { id: 5, title: "Saree Draping", image: bridal },
  { id: 6, title: "HD Makeup", image: bridal },
  { id: 7, title: "Glass Skin Makeup", image: bridal },
  { id: 8, title: "Photoshoot Makeup", image: bridal },
];

const Services = () => {
  return (
    <div
      id="services"
      className="w-full min-h-screen bg-[#FFE6E4] flex flex-col justify-center items-center py-10"
    >
      <h1 className="text-3xl font-bold text-[#6B3E2E] mb-8">✨ SERVICES ✨</h1>

      <div className="w-11/12 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-72 rounded-2xl object-cover"
            />
            <h2 className="mt-3 text-lg font-semibold text-[#6B3E2E]">
              {service.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
