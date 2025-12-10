import React, { useState, useEffect } from 'react';
import w1 from '../assets/water.jpeg';
import w2 from '../assets/water2.jpeg';
import w3 from '../assets/water3.jpeg';

const images = [w1, w2, w3];

const Hero2 = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds each slide

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl">

      {/* Background Image */}
      <img
        src={images[current]}
        alt="water"
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
        <p className="text-sm sm:text-base md:text-lg mb-3">
          Home <span className="text-blue-300"> &gt;&gt; </span> About
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400">
          About Ganilla Water
        </h1>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default Hero2;
