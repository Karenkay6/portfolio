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
    const timer = window.setInterval(() => {
      setCurrent((previous) => (previous + 1) % photos.length);
    }, 10000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex w-full flex-col items-center">
      <div
        className="
          relative
          aspect-[4/5]
          w-[88%]
          max-w-[400px]
          overflow-hidden
          rounded-[26px]
          border
          border-[#8b1115]/40
          bg-white
          shadow-[0_25px_60px_rgba(0,0,0,0.08)]

          min-[430px]:w-[86%]
          min-[430px]:max-w-[440px]

          sm:max-w-[470px]
          sm:rounded-[28px]

          lg:h-[600px]
          lg:w-[470px]
          lg:max-w-none
          lg:translate-y-5
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
              h-full
              w-full
              object-cover
              transition-opacity
              duration-1000
              ${current === index ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>

      <div className="mt-7 flex gap-7 lg:mt-10">
        {photos.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`View photo ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`
              h-3
              w-3
              rounded-full
              transition-all
              duration-300
              ${
                current === index
                  ? "scale-125 bg-[#300d0d]"
                  : "bg-white/60 hover:bg-white"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}