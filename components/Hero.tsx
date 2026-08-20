import PhotoSlideshow from "./PhotoSlideshow";

export default function Hero() {
  return (
    <section
  style={{
    paddingLeft: "clamp(32px, 5vw, 80px)",
    paddingRight: "clamp(32px, 5vw, 80px)",
  }}
  className="
    pb-[clamp(48px,7vw,96px)]
    pt-[clamp(48px,6vw,80px)]
  "
>
      <div
        className="
          mx-auto

          grid
          w-full
          max-w-[1160px]

          grid-cols-1

          items-center

          gap-[clamp(40px,6vw,80px)]

          lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]
        "
      >
        {/* LEFT SIDE */}
<div
  style={{
  transform: "translateY(clamp(40px, 4vw, 55px))",
}}
  className="
    flex
    w-full
    justify-center

    lg:justify-start
  "
>
          <div
            className="
              w-full
              max-w-[440px]
            "
          >
            <p
              className="
                mb-[clamp(8px,1vw,14px)]

                font-body

                text-[clamp(14px,1.2vw,17px)]
                leading-none

                text-[#0f1a0d]
              "
            >
              Hi there, my name is
            </p>

            <h1
              className="
                font-display

                text-[clamp(3.5rem,6vw,4.6rem)]

                font-semibold

                leading-[0.9]

                tracking-[-0.025em]

                text-[#6f1115]
              "
            >
              Tochi
              <br />
              Karen
              <br />
              Kalu
            </h1>

            {/* DECORATIVE LINE */}
            <div
              aria-hidden="true"
              className="
                mt-[clamp(16px,1.8vw,24px)]

                flex

                w-[clamp(140px,14vw,175px)]

                items-center

                gap-[clamp(6px,0.8vw,10px)]

                text-[#8b1115]
              "
            >
              <span className="h-px flex-1 bg-[#8b1115]/50" />

              <span className="text-[10px]">✦</span>

              <span className="text-[10px]">✦</span>

              <span className="h-px flex-1 bg-[#8b1115]/50" />
            </div>

            {/* SUBTITLE */}
            <h2
              className="
                mt-[clamp(20px,2vw,30px)]

                max-w-[420px]

                font-display

                text-[clamp(18px,1.8vw,22px)]

                leading-[1.4]

                text-[#17100f]
              "
            >
              <span className="block">
                Future Software Engineer
              </span>

              <span className="block">
                Focused on Healthcare Innovation
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-[clamp(18px,2vw,28px)]

                max-w-[430px]

                font-body

                text-[clamp(13px,1.15vw,15px)]

                leading-[1.75]

                text-[#171411]
              "
            >
              I&apos;m a CS student at The University of Texas at San Antonio
              who enjoys building software that improves people&apos;s lives
              through thoughtful technology, clean design, and meaningful user
              experiences. In the meantime, when I don&apos;t code, I am doing
              photography, listening to music, or watching films.
            </p>

            {/* BUTTON */}
            <div
              className="
                mt-[clamp(20px,2vw,30px)]

                flex

                justify-center

                lg:justify-start
              "
            >
              <a
                href="#connect"
                className="
                  inline-flex

                  min-h-[clamp(36px,3vw,40px)]
                  min-w-[clamp(150px,15vw,170px)]

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#4b1110]

                  bg-[#4b1110]

                  px-[clamp(22px,2.4vw,30px)]
                  py-[clamp(8px,0.8vw,10px)]

                  font-body

                  text-[clamp(12px,1vw,14px)]

                  text-[#eee3df]

                  shadow-sm

                  transition
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-transparent
                  hover:text-[#4b1110]
                "
              >
                Say Hello
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
  style={{
  marginTop: "clamp(30px, 4vw, 65px)",
}}
  className="
    flex
    min-w-0
    w-full
    justify-center
    lg:justify-end
  "
>
  <PhotoSlideshow />
</div>
      </div>
    </section>
  );
}