"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

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
    const updateActiveSection = () => {
      const scrollPoint = window.innerHeight * 0.34;
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

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();

    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const activeElement = itemRefs.current[active];
      if (!activeElement) return;

      setIndicatorStyle({
        transform: `translateX(${activeElement.offsetLeft}px)`,
        width: activeElement.offsetWidth,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [active]);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed left-1/2 top-5 z-[999] w-[calc(100%-40px)] max-w-[520px] -translate-x-1/2 sm:top-6 sm:w-auto sm:max-w-none lg:top-7"
    >
      <div className="relative rounded-full border-2 border-[#8b1115] bg-[#fbe9e4]/95 px-3 py-2 shadow-[0_8px_24px_rgba(70,15,18,0.12)] backdrop-blur-xl sm:px-7 sm:py-2.5 lg:px-8">
        <div className="relative grid grid-cols-4 items-center whitespace-nowrap text-center text-[11px] font-medium min-[390px]:text-[12px] min-[430px]:text-[13px] sm:flex sm:gap-8 sm:text-[16px] lg:gap-12 lg:text-[17px]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              ref={(element) => {
                itemRefs.current[item.id] = element;
              }}
              onClick={() => setActive(item.id)}
              className={`relative z-10 px-1 py-1 transition-colors duration-300 sm:px-0 ${
                active === item.id
                  ? "text-[#5d090d]"
                  : "text-[#7b6567] hover:text-[#5d090d]"
              }`}
            >
              {item.label}
            </a>
          ))}

          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[14px] left-0 h-[4px] rounded-full bg-[#5d090d] transition-[transform,width] duration-500 sm:-bottom-[16px]"
            style={indicatorStyle}
          />
        </div>
      </div>
    </nav>
  );
}
