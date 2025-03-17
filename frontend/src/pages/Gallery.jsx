import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";

const categories = [
  "All categories",
  "Bridal",
  "Fashion",
  "Ethnic",
  "Photoshoot",
];

const imageData = [
  { src: img1, category: "Fashion" },
  { src: img2, category: "Bridal" },
  { src: img3, category: "Ethnic" },
  { src: img4, category: "Fashion" },
  { src: img5, category: "Photoshoot" },
  { src: img6, category: "Bridal" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "All categories"
      ? imageData
      : imageData.filter((image) => image.category === selectedCategory);

  return (
    <div className="container mx-auto p-4 bg-[#FFE6E4] min-h-screen">
      {/* Back Button */}
      <Link to="/">
        <button className="mb-4 px-5 py-2 border-2 border-gray-700 rounded-3xl text-gray-700 hover:bg-black hover:text-white transition">
          Back
        </button>
      </Link>

      {/* Category Filters */}
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2.5 text-base font-medium rounded-full text-gray-900 border border-gray-300 hover:border-gray-700 transition duration-200 ${
              selectedCategory === category
                ? "bg-[#830000] text-white"
                : "bg-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-lg shadow-md hover:scale-105 transition duration-300"
              src={image.src}
              alt={`Gallery image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
