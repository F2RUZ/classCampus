import React from 'react';

const Avatar = ({ src, name, delay }) => (
  <div
    data-aos="zoom-in"
    data-aos-delay={delay}
    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-white/20 hover:ring-green-400 transition hover:scale-110 duration-300"
  >
    <img src={src} alt={name} className="w-full h-full object-cover" />
  </div>
);

export default function Group() {
  const avatars = [
    { src: 'https://i.pravatar.cc/150?img=1', name: 'User1', delay: 0 },
    { src: 'https://i.pravatar.cc/150?img=2', name: 'User2', delay: 100 },
    { src: 'https://i.pravatar.cc/150?img=3', name: 'User3', delay: 200 },
    { src: 'https://i.pravatar.cc/150?img=4', name: 'User4', delay: 300 },
    { src: 'https://i.pravatar.cc/150?img=5', name: 'User5', delay: 400 },
    { src: 'https://i.pravatar.cc/150?img=6', name: 'User6', delay: 500 },
    { src: 'https://i.pravatar.cc/150?img=7', name: 'User7', delay: 600 },
    { src: 'https://i.pravatar.cc/150?img=8', name: 'User8', delay: 700 },
    { src: 'https://i.pravatar.cc/150?img=9', name: 'User9', delay: 800 },
  ];

  return (
    <section className="bg-[#111] text-white py-20">
      <div className="container mx-auto px-6 text-center space-y-6">

        {/* Title */}
        <div data-aos="fade-up" className="space-y-3">
          <p className="text-sm text-green-400 uppercase tracking-wide">Agent group courses</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold">
            Offer a group learning <br /> experience, but stay flexible.
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Set starting dates, accept batches of students and watch them go through the course. 
            Provide feedback on your own time, via text or video.
          </p>
        </div>

        {/* Circle Avatars */}
        <div className="relative flex flex-wrap justify-center gap-6 mt-10">
          {avatars.map((a) => (
            <Avatar key={a.name} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
}
