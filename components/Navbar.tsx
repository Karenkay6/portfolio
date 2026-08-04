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
          rounded-full
          border
          border-[#8b1115]
          bg-[#fbe7e2]/90
          px-7
          py-3
          shadow-[0_8px_25px_rgba(72,10,14,0.13)]
          backdrop-blur-xl
          md:px-10
        "
      >
        <div className="relative flex items-center gap-6 text-sm font-semibold md:gap-10 md:text-base">
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