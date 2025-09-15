import React, { useState } from 'react';
import 'aos/dist/aos.css';

export default function Element() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  return (
    <section className="bg-[#100e14] text-white py-20">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left text */}
        <div data-aos="fade-right" className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Add interactive <br /> elements
          </h2>
          <p className="text-gray-400 max-w-md">
            People learn best by doing. Include hands-on assignments, quizzes and give
            students feedback. <span className="font-semibold text-white">
              Give extra value, with little effort.
            </span>
          </p>
        </div>

        {/* Right cards */}
        <div
          data-aos="fade-left"
          className="bg-gradient-to-b from-gray-800/60 to-gray-900/60 backdrop-blur-md p-6 rounded-3xl shadow-xl space-y-4"
        >
          {/* Card 1 */}
          <div
            className="flex justify-between items-center px-4 py-3 rounded-2xl bg-black/40 hover:bg-black/60 transition group cursor-pointer"
            onClick={() => setToggle1(!toggle1)}
          >
            <div>
              <p className="font-semibold flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-300 group-hover:bg-green-400 transition"></span>
                Request work submission
              </p>
              <p className="text-sm text-gray-400">Give students feedback on their work</p>
            </div>
            <button
              className={`w-12 h-6 rounded-full p-1 transition ${
                toggle1 ? 'bg-green-500' : 'bg-gray-600'
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transition-transform ${
                  toggle1 ? 'translate-x-6' : ''
                }`}
              ></div>
            </button>
          </div>

          {/* Card 2 */}
          <div
            className="flex justify-between items-center px-4 py-3 rounded-2xl bg-black/40 hover:bg-black/60 transition group cursor-pointer"
            onClick={() => setToggle2(!toggle2)}
          >
            <div>
              <p className="font-semibold flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-300 group-hover:bg-pink-400 transition"></span>
                Finish with a quiz
              </p>
              <p className="text-sm text-gray-400">Let students test their learnings</p>
            </div>
            <button
              className={`w-12 h-6 rounded-full p-1 transition ${
                toggle2 ? 'bg-pink-500' : 'bg-gray-600'
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transition-transform ${
                  toggle2 ? 'translate-x-6' : ''
                }`}
              ></div>
            </button>
          </div>
        </div>


      </div>

     

    </section>

  );
}
