// src/section/PopularProduct.jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const PopularProduct = () => {
  const { theme } = useContext(ThemeContext);

  // Text color changes depending on theme
  const textColor = theme === "dark" ? "text-gray-900" : "text-gray-900";
  const subTextColor = theme === "dark" ? "text-gray-600" : "text-gray-600";

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-yellow-500 font-semibold mb-2">Popular Product</p>
          <h2 className={`text-4xl font-heading font-bold mb-4 ${textColor}`}>
            Park Avenue
          </h2>
          <p className={`mb-6 ${subTextColor}`}>
            Surface Handling: Emboss, frost, screen printing, paint. UV Glass Spray Bottles,
            Roller Ball Bottles, Solid Perfume Jars.
          </p>
          <img
            src="/womenper.webp"
            alt="Park Avenue Small"
            className="w-24 h-24 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            src="/menperf.webp"
            alt="Park Avenue Perfume"
            className="rounded-xl shadow-lg max-h-[400px]"
          />
        </div>

        {/* Stats */}
        <div className="space-y-6">
          <div>
            <h3 className={`text-3xl font-bold ${textColor}`}>1.3k+</h3>
            <p className={`${subTextColor}`}>Product Available</p>
          </div>
          <div>
            <h3 className={`text-3xl font-bold ${textColor}`}>₦70k+</h3>
            <p className={`${subTextColor}`}>Revenue Generated</p>
          </div>
          <div>
            <h3 className={`text-3xl font-bold ${textColor}`}>4.6k+</h3>
            <p className={`${subTextColor}`}>Product Sold</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PopularProduct;
