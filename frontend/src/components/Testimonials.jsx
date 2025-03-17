import React from "react";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: img1,
    review:
      "Absolutely loved my bridal makeover! Nazrin made me look flawless and feel confident.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emily Carter",
    image: img2,
    review:
      "The best makeup artist in town! My makeup lasted all day and looked stunning in photos.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Lee",
    image: img3,
    review:
      "A truly talented artist! She understood exactly what I wanted and delivered beautifully.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#FFE6E4] py-5 w-full">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-5">
        What Our Clients Say
      </h2>
      <Marquee
        speed={30}
        pauseOnHover={true}
        gradient={true}
        gradientColor="#FFE6E4"
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white shadow-lg rounded-xl p-4 m-3 w-80 flex flex-col items-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-3 border-2 border-gray-300"
            />
            <h3 className="text-lg font-semibold text-gray-700">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-600 text-center italic">
              "{testimonial.review}"
            </p>
            <div className="flex mt-2">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <Star
                  key={index}
                  className="text-yellow-500 w-4 h-4"
                  fill="yellow"
                />
              ))}
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
