// src/section/Hero.jsx
import { useState } from 'react';

const images = [
  '/hero-perfume-removebg-preview.png',
  '/perfume8-removebg-preview.png',
  '/perfume1-removebg-preview.png',
 '/hero-perfume-removebg-preview.png',


];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
    }
  };

  const handleExploreClick = () => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
    } else {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-primary text-white dark:bg-white dark:text-black px-6 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="md:w-1/2 font-heading text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Choose the Perfect <br /> Perfume for You
          </h1>
          <p className="mt-4 text-gray-300 dark:text-gray-700 text-sm md:text-base font-body">
            Since 2006, we’ve curated niche fragrances that define elegance and identity.
            Explore timeless scents that make lasting impressions.
          </p>
          <button
            onClick={handleExploreClick}
            className="mt-6 bg-white text-black dark:bg-black dark:text-white px-6 py-2 rounded-full font-semibold hover:bg-accent hover:text-white transition font-body"
          >
            Explore Now →
          </button>
        </div>

        {/* Image with glow and arrows */}
        <div className="mt-12 md:mt-0 md:w-1/2 relative flex justify-center items-center">
          {/* Glow Background */}
          <div className="absolute w-[500px] h-[500px] bg-[#0c1a5b]/30 blur-[150px] rounded-full z-0 animate-pulse-glow"></div>

          {/* Arrow left */}
          {current > 0 && (
            <button
              onClick={() => setCurrent(current - 1)}
              className="absolute left-0 text-2xl bg-white text-black rounded-full p-2 z-20 hover:bg-accent hover:text-white transition"
            >
              ‹
            </button>
          )}

          {/* Image */}
          <img
            src={images[current]}
            alt={`Perfume ${current + 1}`}
            className="w-full max-w-sm z-10 relative animate-float"
          />

          {/* Arrow right */}
          {current < images.length - 1 && (
            <button
              onClick={nextImage}
              className="absolute right-0 text-2xl bg-white text-black rounded-full p-2 z-20 hover:bg-accent hover:text-white transition"
            >
              ›
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
