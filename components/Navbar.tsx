"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

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

  const itemRefs =
    useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPoint = window.innerHeight * 0.34;

      let currentSection = "projects";

      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (
          rect.top <= scrollPoint &&
          rect.bottom >= scrollPoint
        ) {
          currentSection = item.id;
          break;
        }
      }

      setActive(currentSection);
    };

    window.addEventListener(
      "scroll",
      updateActiveSection,
      { passive: true }
    );

    updateActiveSection();

    return () => {
      window.removeEventListener(
        "scroll",
        updateActiveSection
      );
    };
  }, []);

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const activeElement =
        itemRefs.current[active];

      if (!activeElement) return;

      setIndicatorStyle({
        transform: `translateX(${activeElement.offsetLeft}px)`,
        width: activeElement.offsetWidth,
      });
    };

    updateIndicator();

    window.addEventListener(
      "resize",
      updateIndicator
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateIndicator
      );
    };
  }, [active]);

  return (
    <nav
      aria-label="Main navigation"
      className="
        fixed
        left-1/2
        top-[clamp(1rem,2.2vw,1.75rem)]
        z-[999]
        -translate-x-1/2
      "
    >
      <div
        className="
          relative

          max-w-[calc(100vw-1.5rem)]

          rounded-full

          border-2
          border-[#8b1115]

          bg-[#fbe9e4]/95

          px-[clamp(0.75rem,2.2vw,2rem)]
          py-[clamp(0.55rem,1vw,0.75rem)]

          shadow-[0_8px_24px_rgba(70,15,18,0.12)]

          backdrop-blur-xl
        "
      >
        <div
          className="
            relative
            flex
            items-center

            gap-[clamp(0.85rem,3vw,3rem)]

            whitespace-nowrap

            font-medium

            text-[clamp(0.7rem,1.25vw,1.05rem)]
          "
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              ref={(element) => {
                itemRefs.current[item.id] =
                  element;
              }}
              onClick={() =>
                setActive(item.id)
              }
              className={`relative z-10 transition-colors duration-300 ${
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
            className="
              pointer-events-none
              absolute
              left-0

              -bottom-[clamp(0.9rem,1.6vw,1.2rem)]

              h-[3px]

              rounded-full

              bg-[#5d090d]

              transition-[transform,width]
              duration-500
            "
            style={indicatorStyle}
          />
        </div>
      </div>
    </nav>
  );
}