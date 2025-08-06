import { useState } from "react";

const Products = () => {
  const [category, setCategory] = useState("men");
  const [viewAll, setViewAll] = useState(false);

  const products = {
    men: [
      {
        title: "Ocean Breeze",
        desc: "Fresh and long-lasting fragrance.",
        image: "/menperf.webp",
      },
      {
        title: "Golden Touch",
        desc: "Luxury scent with a golden finish.",
        image: "/menperfume4.jpg",
      },
      {
        title: "Midnight Musk",
        desc: "Bold and mysterious night fragrance.",
        image: "/menperfume.webp",
      },
    ],
    women: [
      {
        title: "Rose Elixir",
        desc: "Elegant and romantic floral scent.",
        image: "/perfume8.png",
      },
      {
        title: "Velvet Bloom",
        desc: "Soft and graceful with a hint of jasmine.",
        image: "/womenper.webp",
      },
      {
        title: "Amber Kiss",
        desc: "Warm, rich and feminine.",
        image: "/womanp.webp",
      },
    ],
  };

  const displayedProducts = viewAll
    ? [...products.men, ...products.women]
    : products[category];

  return (
    <section
      id="products"
      className="py-20 px-6 bg-white text-black dark:bg-white dark:text-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header and Toggle Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading mb-2">
              Latest Products
            </h2>
            <p className="text-sm md:text-base font-body text-gray-600 max-w-md">
              Discover our luxury collection of men and women perfumes crafted for elegance and distinction.
            </p>
          </div>

          {/* Toggle Buttons on the Right */}
          <div className="flex bg-gray-100 rounded-full p-1 border border-gray-300">
            <button
              onClick={() => {
                setCategory("men");
                setViewAll(false);
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                category === "men" && !viewAll
                  ? "bg-[#010020] text-white"
                  : "text-[#010020]"
              }`}
            >
              Men
            </button>
            <button
              onClick={() => {
                setCategory("women");
                setViewAll(false);
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                category === "women" && !viewAll
                  ? "bg-[#FFD700] text-black"
                  : "text-[black]"
              }`}
            >
              Women
            </button>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {displayedProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-heading font-bold mb-1">
                  {product.title}
                </h3>
                <p className="text-sm font-body text-gray-600 mb-4">
                  {product.desc}
                </p>
                <a
                  href="https://wa.me/2347064400428"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#010020] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#FFD700] hover:text-black transition"
                >
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Button (Right-aligned) */}
        {!viewAll && (
          <div className="mt-12 flex justify-end">
            <button
              onClick={() => setViewAll(true)}
              className="px-6 py-2 rounded-full font-semibold border border-black text-black hover:bg-black hover:text-white transition"
            >
              Explore All
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
