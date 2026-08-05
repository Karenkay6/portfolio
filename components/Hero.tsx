import PhotoSlideshow from "./PhotoSlideshow";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        px-6
        pb-16
        pt-28

        min-[430px]:px-9
        min-[430px]:pt-32

        sm:px-12
        sm:pb-20
        sm:pt-36

        lg:flex
        lg:min-h-[900px]
        lg:items-center
        lg:px-16
        lg:pb-24
        lg:pt-32

        xl:px-20

        2xl:min-h-[940px]
        2xl:px-24
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1450px]
          grid-cols-1
          gap-14

          lg:grid-cols-[minmax(0,0.92fr)_minmax(430px,1.08fr)]
          lg:items-center
          lg:gap-14

          xl:grid-cols-[minmax(0,0.9fr)_minmax(500px,1.1fr)]
          xl:gap-20

          2xl:gap-24
        "
      >
        {/* TEXT */}
        <div className="w-full">
          <div
            className="
              mx-auto
              w-full
              max-w-[660px]

              lg:mx-0
              lg:max-w-[610px]

              xl:max-w-[650px]
            "
          >
            <p
              className="
                mb-3
                font-normal
                tracking-[0.01em]
                text-[#240808]

                text-[21px]

                min-[430px]:text-[24px]

                sm:text-[26px]

                lg:text-[24px]

                xl:text-[27px]
              "
            >
              Hi there, my name is
            </p>

            <h1
              className="
                flex
                flex-col
                font-semibold
                tracking-[-0.045em]
                text-[#6f0b10]

                text-[76px]
                leading-[0.79]

                min-[430px]:text-[92px]

                sm:text-[108px]

                lg:text-[92px]

                xl:text-[110px]

                2xl:text-[120px]
              "
            >
              <span>Tochi</span>
              <span className="mt-[0.13em]">Karen</span>
              <span className="mt-[0.13em]">Kalu</span>
            </h1>

            {/* ORNAMENT */}
            <div
              aria-hidden="true"
              className="
                mt-7
                flex
                w-[225px]
                items-center
                gap-3
                text-[#8b1115]

                sm:mt-8
                sm:w-[260px]

                lg:mt-8
              "
            >
              <span className="h-px flex-1 bg-[#8b1115]/70" />
              <span className="text-[17px] leading-none">✦</span>
              <span className="text-[17px] leading-none">✦</span>
              <span className="h-px flex-1 bg-[#8b1115]/70" />
            </div>

            <h2
              className="
                mt-7
                max-w-[650px]
                font-normal
                leading-[1.22]
                text-[#160505]

                text-[28px]

                min-[430px]:text-[32px]

                sm:text-[38px]

                lg:mt-8
                lg:max-w-[590px]
                lg:text-[34px]

                xl:text-[39px]

                2xl:text-[42px]
              "
            >
              Future Software Engineer Focused on Healthcare Innovation
            </h2>

            <p
              className="
                mt-5
                max-w-[650px]
                text-[#1d1010]

                text-[18px]
                leading-[1.75]

                min-[430px]:text-[20px]

                sm:mt-6
                sm:text-[22px]
                sm:leading-[1.7]

                lg:mt-6
                lg:max-w-[610px]
                lg:text-[18px]
                lg:leading-[1.75]

                xl:text-[20px]

                2xl:text-[21px]
              "
            >
              I&apos;m a CS student at The University of Texas at San Antonio
              who enjoys building software that improves people&apos;s lives
              through thoughtful technology, clean design, and meaningful user
              experiences. In the meantime, when I don&apos;t code, I am doing
              photography, listening to music, or watching films.
            </p>

            <div
              className="
                mt-7
                flex
                justify-center

                sm:mt-8

                lg:justify-start
              "
            >
              <a
                href="#connect"
                className="
                  inline-flex
                  w-[72%]
                  max-w-[450px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#3a090b]
                  bg-[#3a090b]
                  px-8
                  py-3
                  text-[18px]
                  font-medium
                  text-[#f8e8e3]
                  shadow-[0_8px_22px_rgba(58,9,11,0.15)]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-transparent
                  hover:text-[#3a090b]
                  hover:shadow-[0_12px_25px_rgba(58,9,11,0.2)]

                  sm:w-auto
                  sm:min-w-[270px]
                  sm:px-14
                  sm:py-3.5
                  sm:text-[20px]

                  lg:min-w-[240px]
                  lg:py-3

                  xl:min-w-[280px]
                "
              >
                Say Hello
              </a>
            </div>
          </div>
        </div>

        {/* SLIDESHOW */}
        <div
          className="
            flex
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