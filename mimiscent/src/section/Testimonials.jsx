// src/sections/Testimonials.jsx
const Testimonials = () => {
  const testimonials = [
    {
      name: "Chidera E.",
      role: "Lagos, Nigeria",
      text: "This perfume is pure luxury. I get compliments every single day I wear it!",
      image: "/customer1.jpg",
    },
    {
      name: "David A.",
      role: "Abuja, Nigeria",
      text: "The scent lasts all day without being overpowering. Absolutely worth it.",
      image: "/customer2.jpg",
    },
    {
      name: "Fatima S.",
      role: "Port Harcourt, Nigeria",
      text: "Classy packaging, divine fragrance. I’m already buying my second bottle.",
      image: "/customer3.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#f9f9f9] text-black dark:bg-[#010020] dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Real reviews from our happy customers who love our luxury perfumes.
        </p>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1a1a2e] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border-2 border-[#FFD700]"
              />
              <p className="text-sm italic mb-4">"{t.text}"</p>
              <h3 className="font-heading font-bold">{t.name}</h3>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {t.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
