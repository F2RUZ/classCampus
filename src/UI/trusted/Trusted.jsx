import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const mentors = [
  {
    title: "Videography for movement",
    author: "By Alexander Stephenson",
    image:
      "https://images.unsplash.com/photo-1590080876374-2a1e2b7b29ea?auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Create the life and business you want",
    author: "By Emily Johnson",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Get started with graffiti",
    author: "By Chris Art",
    image:
      "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Yoga and Mindfulness",
    author: "By Sarah Lee",
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Holistic business and wellbeing",
    author: "By Mark Wilson",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=500&q=60",
  },
];

export default function Trusted() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-[#0f0f13] text-white py-16 px-6 text-center">
      {/* Title */}
      <div data-aos="fade-up" className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Trusted by the <span className="text-red-500">best</span> at{" "}
          <span className="relative">
            their craft
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 animate-pulse"></span>
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Coaches, creators and changemakers use Classcamp to offer engaging
          learning experiences
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {mentors.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
