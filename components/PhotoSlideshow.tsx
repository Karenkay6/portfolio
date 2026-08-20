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
    <div
      className="
        flex
        w-full
        flex-col
        items-center
      "
    >
      {/* PHOTO FRAME */}
      <div
        className="
          relative

          w-full

          max-w-[clamp(320px,42vw,530px)]

          aspect-[4/5]

          overflow-hidden

          rounded-[clamp(24px,2.4vw,30px)]

          border
          border-[#8b1115]/45

          bg-white

          shadow-[0_22px_50px_rgba(70,15,18,0.09)]
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

              ${
                current === index
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }
            `}
          />
        ))}
      </div>

      {/* CAROUSEL DOTS */}
      <div
  style={{
    marginTop: "clamp(25px, 3vw, 40px)",
  }}
  className="
    flex
    justify-center
    gap-[clamp(14px,1.5vw,20px)]
  "
>
        {photos.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`View photo ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`
              h-[clamp(10px,0.9vw,12px)]
              w-[clamp(10px,0.9vw,12px)]

              rounded-full

              transition-all
              duration-300

              ${
                current === index
                  ? "scale-125 bg-[#5d090d]"
                  : "bg-[#d7b4ae] hover:bg-[#8b1115]/60"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}