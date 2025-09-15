import React from 'react';

export default function Shere() {
  const socials = [
    { icon: '📷', color: 'bg-pink-600' },   // Instagram
    { icon: '▶️', color: 'bg-red-600' },    // YouTube
    { icon: '🎵', color: 'bg-black' },      // TikTok
    { icon: '🐦', color: 'bg-sky-500' },    // Twitter
    { icon: '💬', color: 'bg-blue-600' },   // Messenger
    { icon: '📧', color: 'bg-green-500' },  // Email
  ];

  return (
    <section className="bg-[#100e14] text-white py-20">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: colorful card */}
        <div
          data-aos="fade-right"
          className="relative p-8 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-green-400 shadow-2xl overflow-hidden group"
        >
          <div className="flex gap-3 mb-6">
            {socials.map((s, i) => (
              <div
                key={i}
                className={`w-10 h-10 flex items-center justify-center rounded-xl text-xl ${s.color} hover:scale-110 transition-transform duration-300`}
              >
                {s.icon}
              </div>
            ))}
          </div>

          <div className="bg-white/20 backdrop-blur-xl text-sm rounded-full px-4 py-2 flex items-center gap-2 hover:bg-white/30 transition">
            <span className="truncate">classcamp.com/your-course-title</span>
            <button className="px-2 py-1 bg-white/30 rounded-full text-xs hover:bg-white/50 transition">
              Copy
            </button>
          </div>

          {/* subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        </div>

        {/* Right: text */}
        <div data-aos="fade-left" className="space-y-5">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Share your link
            </span>{' '}
            and <br /> start selling
          </h2>

          <p className="text-gray-400 max-w-md">
            Your course comes with a stunning enrollment page, up and running in minutes,
            even before you shoot any content.{' '}
            <span className="text-white font-semibold underline decoration-green-400 underline-offset-2 hover:text-green-400 transition">
              Start selling now.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
