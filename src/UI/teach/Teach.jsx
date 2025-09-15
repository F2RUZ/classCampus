import React from 'react';

const Teach = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-500/30 via-pink-400/30 to-yellow-300/30 backdrop-blur-xl">
      {/* Content container */}
      <div className="relative z-10 p-10 text-center text-white">
        {/* Title + description */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          What will you teach?
        </h2>
        <p className="text-gray-100 mb-6 text-lg">
          Pick a course template and start today — people will love it!
        </p>
        <button className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition flex items-center justify-center mx-auto font-medium shadow-lg">
          Create a course <span className="ml-2">→</span>
        </button>

        {/* Divider line */}
        <div className="my-10 border-t border-white/20 w-2/3 mx-auto"></div>

        {/* Testimonial */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl max-w-lg mx-auto text-white shadow-md">
          <p className="italic text-lg text-center">
            "I can now create a lesson in minutes, instead of days or weeks"
          </p>
          <p className="text-right text-sm text-gray-200 mt-2">
            - L. Springer, Course Creator
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teach;