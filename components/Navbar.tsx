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

    return () => window.removeEventListener("scroll", handleScroll);
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
        top-7
        z-[999]
        -translate-x-1/2
      "
      aria-label="Main navigation"
    >
      <div
  className="
    relative
    max-w-[calc(100vw-32px)]
    overflow-x-auto
    rounded-full
    border-2
    border-red-800
    bg-white/85
    px-4
    py-3
    shadow-xl
    backdrop-blur-xl
    sm:px-8
    sm:py-4
  "
>
        <div
  className="
    relative
    flex
    items-center
    gap-6
    whitespace-nowrap
    text-sm
    font-semibold
    sm:gap-10
    sm:text-base
    lg:gap-16
    lg:text-lg
  "
>
          <span
            className="
              absolute
              -bottom-[7px]
              h-[3px]
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