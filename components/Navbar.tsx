"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Projects", id: "projects" },
  { label: "Journey", id: "journey" },
  { label: "Beyond Code", id: "beyond" },
  { label: "Connect", id: "connect" },
];

export default function Navbar() {
  const [active, setActive] = useState("projects");

  const [indicatorStyle, setIndicatorStyle] = useState({
    transform: "translateX(0px)",
    width: 0,
  });

  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPoint = window.innerHeight * 0.35;
      let currentSection = "projects";

      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= scrollPoint && rect.bottom >= scrollPoint) {
          currentSection = item.id;
          break;
        }
      }

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const element = itemRefs.current[active];

    if (!element) return;

    const elementRect = element.getBoundingClientRect();
    const parentRect = element.parentElement?.getBoundingClientRect();

    if (!parentRect) return;

    setIndicatorStyle({
      transform: `translateX(${elementRect.left - parentRect.left}px)`,
      width: elementRect.width,
    });
  }, [active]);

  return (
    <nav
      className="
        fixed
        left-1/2
        top-4
        z-[999]
        -translate-x-1/2

        sm:top-6
        lg:top-7
      "
      aria-label="Main navigation"
    >
      <div
        className="
          relative
          max-w-[calc(100vw-24px)]
          overflow-hidden
          rounded-full
          border-2
          border-red-800
          bg-white/85
          px-3
          py-3
          shadow-xl
          backdrop-blur-xl

          sm:max-w-[calc(100vw-48px)]
          sm:px-7
          sm:py-4
        "
      >
        <div
          className="
            relative
            flex
            items-center
            gap-4
            whitespace-nowrap
            text-[12px]
            font-semibold

            min-[430px]:gap-5
            min-[430px]:text-sm

            sm:gap-8
            sm:text-base

            lg:gap-12
          "
        >
          <span
            className="
              absolute
              bottom-[2px]
              h-[4px]
              rounded-full
              bg-[#5d090d]
              transition-all
              duration-500
            "
            style={indicatorStyle}
          />

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              ref={(element) => {
                itemRefs.current[item.id] = element;
              }}
              onClick={() => setActive(item.id)}
              className={`whitespace-nowrap transition-colors duration-300 ${
                active === item.id
                  ? "text-[#5d090d]"
                  : "text-[#7b6567] hover:text-[#5d090d]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}