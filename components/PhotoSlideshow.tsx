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

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="flex w-full flex-col items-center lg:items-end">
      <div className="relative aspect-[16/10] w-full max-w-[560px] overflow-hidden rounded-[24px] border border-[#8b1115]/45 bg-white shadow-[0_22px_50px_rgba(70,15,18,0.09)] sm:max-w-[620px] sm:rounded-[28px] lg:mt-2 lg:h-[560px] lg:w-[500px] lg:max-w-none lg:aspect-auto lg:rounded-[30px] xl:h-[590px] xl:w-[530px]">
        {photos.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            alt={`Photo ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              current === index
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-5 lg:w-[500px] xl:w-[530px]">
        {photos.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`View photo ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              current === index
                ? "scale-125 bg-[#5d090d]"
                : "bg-[#d7b4ae] hover:bg-[#8b1115]/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
