// src/section/SpecialProduct.jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const SpecialProduct = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`py-20 px-6 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-white text-black" // Dark mode → white background
          : "bg-[#0F0F1B] text-white" // Light mode → navy background
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-yellow-400 font-semibold mb-2">Special Product</p>
          <h2 className="text-4xl font-heading font-bold mb-4">CLUB THE NUIT</h2>
          <p className={`${theme === "dark" ? "text-gray-600" : "text-gray-300"} mb-6`}>
            CLUB THE NUIT has also been delighting another of our senses, 
            with equally gorgeous fragrances. If we think of Armani’s fragrances 
            as a complete experience...
          </p>

          <a
            href="https://wa.me/2347064400428"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
          >
            Shop Now
          </a>

          {/* Mini Testimonial */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              <img
                src="/womenper.webp"
                alt="Customer 1"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/womanperfume.webp"
                alt="Customer 2"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/menperfume4.jpg"
                alt="Customer 3"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
            </div>
            <p className={`${theme === "dark" ? "text-gray-500" : "text-gray-400"} text-sm italic`}>
              “Absolutely love this scent!” – Anotio Thompson
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="/hero-perfume-removebg-preview.png"
            alt="Giorgio Armani Perfume"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialProduct;
