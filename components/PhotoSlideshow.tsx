"use client";

import { useEffect, useState } from "react";

const photos = [
  "/photos/me1.jpg",
  "/photos/me2.jpg",
  "/photos/me3.jpg",
];

export default function PhotoSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Photo Frame */}
      <div
  className="
    relative
    aspect-[4/5]
    w-full
    max-w-[470px]
    overflow-hidden
    rounded-[28px]
    border
    border-[#8b1115]/40
    bg-white/25
    shadow-[0_25px_60px_rgba(0,0,0,0.08)]
    lg:h-[600px]
    lg:w-[470px]
    lg:-translate-y-10
  "
>
        {photos.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            alt={`Photo ${index + 1}`}
            className={`
              absolute
              inset-0
              w-full
              h-full
              object-cover
              transition-opacity
              duration-1000
              ${current === index ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="mt-6 flex gap-7 lg:mt-10">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              h-3
              w-3
              rounded-full
              transition-all
              duration-300

              ${
                current === index
                  ? "bg-[#300d0d] scale-125"
                  : "bg-white/60 hover:bg-white"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}