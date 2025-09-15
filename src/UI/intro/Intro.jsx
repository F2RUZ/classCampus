import React from "react";
import person from "../../assets/img/Rectangle.png";

const Intro = () => {
  return (
    <section className="bg-[#100e14] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Take out your phone, <br className="hidden sm:block" /> and teach
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
          Classcamp is the easiest way to create an online course and share
          knowledge with the world.
        </p>

        <div className="mt-10">
          <button className="px-8 py-4 rounded-xl shadow-lg bg-indigo-600 text-white text-lg font-semibold hover:bg-indigo-500 hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-offset-2">
            🚀 Create a course
          </button>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          If you're a student,{" "}
          <span className="text-indigo-400">continue here</span>
        </p>

        <div className="mt-16 md:mt-20 lg:mt-24">
          <div className="relative bg-gradient-to-br from-[#151a1f] to-[#100e14] rounded-3xl shadow-2xl p-6 md:p-10 max-w-4xl mx-auto overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-500/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/30 rounded-full blur-3xl"></div>

            <img
              src={person}
              alt="Course instructor"
              className="w-full max-w-[904px] h-auto object-contain rounded-2xl mx-auto transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
