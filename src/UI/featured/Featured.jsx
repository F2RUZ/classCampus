import React from 'react';


const Featured = () => {
  return (
    <div className="bg-gray-900 py-10 px-4">
      <h1 className="text-white text-4xl font-bold mb-8 text-center">Featured courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div
          className="bg-green-400 p-6 rounded-lg shadow-lg flex items-end relative overflow-hidden"
          // style={{ backgroundImage: `url(${Img1})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '400px' }}
        >
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-white mb-2">Going Wild with Graffiti Letters</h2>
            <p className="text-white mb-4">
              Style writing is so much fun. I'll teach you the tools from my 20 years of <br />
              practice! Get creative, and how to clean up the style to get rid of all the <br />
              useless nonsense.
            </p>
            <div className="bg-purple-700 text-white px-3 py-1 rounded-tl-lg rounded-br-lg inline-block mb-2">
              SMOE NOVA <br /> <span className="text-sm">188k subscribers</span>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
              Pre-signup →
            </button>
          </div>
        </div>
        <div
          className="bg-green-400 p-6 rounded-lg shadow-lg flex items-end relative overflow-hidden"
          // style={{ backgroundImage: `url(${Img2})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '400px' }}
        >
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-white mb-2">Learn How to Airbrush</h2>
            <p className="text-white mb-4">
              Gain confident control of the airbrush to create simple artworks and lettering. You'll <br />
              also get an understanding of how to set up, clean, and maintain your airbrushes.
            </p>
            <div className="bg-purple-700 text-white px-3 py-1 rounded-tl-lg rounded-br-lg inline-block mb-2">
              The Airbrush Guy <br /> <span className="text-sm">237k subscribers</span>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
              Pre-signup →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;