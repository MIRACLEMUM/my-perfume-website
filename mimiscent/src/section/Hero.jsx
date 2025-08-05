
const Hero = () => {
  return (
    <section className="bg-primary text-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Choose Perfect <br /> Perfume For You
          </h1>
          <p className="mt-4 text-gray-300 text-sm md:text-base">
            We started the Scent Company in 2006 and mainly focus on
            the import and distribution of niche perfumes.
          </p>
          <button className="mt-6 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-accent hover:text-white transition">
            Explore Now →
          </button>
        </div>

        {/* Image Content */}
        <div className="mt-12 md:mt-0 md:w-1/2">
          <img
            src= "/hero-perfume-removebg-preview.png"
            alt="Blue Chanel Perfume"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
