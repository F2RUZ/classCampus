import React from "react";
// import modernText from "../images/enrich-photo.png";

const Enrich = () => {
  return (
    <div>
      <section className="bg-[#100e14] py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left (Illustration) */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center group">
              <span className="text-gray-400 text-lg transition-transform duration-500 group-hover:scale-110">
                {/* <img src={modernText} alt="" /> */}
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Right (Text content) */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Enrich them with text and images
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300">
              Sometimes speaking to the camera isn't enough. So add text and
              graphics to get your point across.{" "}
              <span className="font-semibold text-indigo-400">
                Like slides, but easy peasy.
              </span>
            </p>
            <button className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enrich;
