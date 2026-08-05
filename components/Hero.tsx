import PhotoSlideshow from "./PhotoSlideshow";

export default function Hero() {
  return (
    <section
      className="
        min-h-screen
        px-5
        pb-20
        pt-36

        sm:px-8
        sm:pb-24
        sm:pt-40

        lg:min-h-[92vh]
        lg:px-32
        lg:pb-24
        lg:pt-0
      "
    >
      <div
        className="
          grid
          grid-cols-1
          items-center
          gap-16

          lg:grid-cols-[52%_48%]
          lg:items-start
          lg:gap-10
        "
      >
        {/* TEXT FIRST */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-[520px] lg:translate-x-10">
            <p className="mb-5 text-lg tracking-wide text-[#0f1a0d]">
              Hi there, my name is
            </p>

            <h1
              className="
                text-5xl
                font-bold
                leading-[0.95]
                text-[#5d090d]

                min-[430px]:text-6xl
                sm:text-7xl
              "
            >
              Tochi
              <br />
              Karen
              <br />
              Kalu
            </h1>

            <div className="mt-4 flex items-center gap-2 text-[#8b1115]">
              <span className="h-px w-12 bg-[#8b1115]/50" />
              <span>✦</span>
              <span>✦</span>
              <span className="h-px w-12 bg-[#8b1115]/50" />
            </div>

            <h2
              className="
                mt-8
                max-w-[460px]
                text-xl
                leading-snug
                text-[#000000]

                min-[430px]:text-2xl

                sm:mt-10
                sm:text-3xl

                lg:mt-15
              "
            >
              Future Software Engineer Focused on Healthcare Innovation
            </h2>

            <p
              className="
                mt-7
                max-w-[460px]
                text-base
                leading-7
                text-[#0e1014]

                sm:mt-8
                sm:text-lg
                sm:leading-8

                lg:mt-15
              "
            >
              I&apos;m a CS student at The University of Texas at San Antonio
              who enjoys building software that improves people&apos;s lives
              through thoughtful technology, clean design, and meaningful user
              experiences. In the meantime, when I don&apos;t code, I am doing
              photography, listening to music, or watching films.
            </p>

            <div className="mt-10 flex justify-center lg:mt-12 lg:justify-start">
              <a
                href="#connect"
                className="
                  w-full
                  max-w-[300px]
                  rounded-full
                  border-3
                  border-[#300d0d]
                  bg-[#300d0d]
                  px-10
                  py-4
                  text-center
                  text-lg
                  font-medium
                  text-[#c2ccc1]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#e7dbdb]
                  hover:text-[#300d0d]

                  sm:w-auto
                  sm:min-w-[220px]
                  sm:px-14
                  sm:py-5
                "
              >
                Say Hello
              </a>
            </div>
          </div>
        </div>

        {/* SLIDESHOW UNDER TEXT ON MOBILE */}
        <div className="flex w-full justify-center lg:-ml-16 lg:justify-start">
          <PhotoSlideshow />
        </div>
      </div>
    </section>
  );
}