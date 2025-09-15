import React from "react";
import person from "../../assets/img/images-person.png";

const Lesson = () => {
  return (
    <section className="px-6 py-20 lg:py-28 bg-[#100e14]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Shoot lessons with your phone
          </h1>
          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-gray-300">
            Pick a course template, and let the app guide you through the
            shooting. It's as easy as that.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
              <img
                src={person}
                alt="Lesson"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-40 blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lesson;
