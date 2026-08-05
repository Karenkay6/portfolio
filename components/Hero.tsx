import PhotoSlideshow from "./PhotoSlideshow";

export default function Hero() {
  return (
    <section className="px-6 pb-12 pt-28 sm:px-8 md:px-10 md:pb-12 md:pt-24 lg:px-14 lg:pt-28 xl:px-20">
      <div className="h-[58px]" />
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1160px]
          grid-cols-1
          items-center
          gap-6
          md:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]
          md:gap-10
          lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]
          lg:gap-16
        "
      ><div className="flex justify-center md:justify-start lg:pl-12">
  <div className="w-full max-w-[430px] md:max-w-[310px] lg:max-w-[440px]">
        
            <p
              className="
                mb-2
                font-body
                text-[14px]
                leading-none
                text-[#0f1a0d]
                sm:text-[15px]
                md:text-[12px]
                lg:text-[15px]
              "
            >
              Hi there, my name is
            </p>
<div className="h-[20px]" />
            <h1
              className="
                font-display
                text-[52px]
                font-semibold
                leading-[0.9]
                tracking-[-0.025em]
                text-[#6f1115]
                min-[390px]:text-[56px]
                sm:text-[60px]
                md:text-[50px]
                lg:text-[64px]
                xl:text-[70px]
              "
            >
              Tochi
              <br />
              Karen
              <br />
              Kalu
            </h1>

            <div
              aria-hidden="true"
              className="
                mt-4
                flex
                w-[140px]
                items-center
                gap-2
                text-[#8b1115]
                sm:w-[155px]
                lg:mt-5
                lg:w-[175px]
              "
            >
              <span className="h-px flex-1 bg-[#8b1115]/50" />
              <span className="text-[10px]">✦</span>
              <span className="text-[10px]">✦</span>
              <span className="h-px flex-1 bg-[#8b1115]/50" />
            </div>
<div className="h-[10px]" />
            <h2
              className="
                mt-4
                max-w-[360px]
                font-display
                text-[18px]
                leading-[1.4]
                text-[#17100f]
                md:max-w-[285px]
                md:text-[15px]
                lg:mt-5
                lg:max-w-[420px]
                lg:text-[20px]
              "
            >
              <span className="block">Future Software Engineer</span>
              <span className="block">
                Focused on Healthcare Innovation
              </span>
            </h2>

<div className="h-[10px]" />

            <p
              className="
                mt-3
                max-w-[430px]
                font-body
                text-[13px]
                leading-[1.75]
                text-[#171411]
                sm:text-[14px]
                md:max-w-[300px]
                md:text-[11px]
                md:leading-[1.65]
                lg:mt-4
                lg:max-w-[430px]
                lg:text-[14px]
                lg:leading-[1.7]
              "
            >
              I&apos;m a CS student at The University of Texas at San Antonio
              who enjoys building software that improves people&apos;s lives
              through thoughtful technology, clean design, and meaningful user
              experiences. In the meantime, when I don&apos;t code, I am doing
              photography, listening to music, or watching films.
            </p>


<div className="h-[10px]" />

            <div className="mt-4 flex justify-start lg:mt-5">
              <a
                href="#connect"
                className="
                  inline-flex
                  min-h-[36px]
                  min-w-[150px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#4b1110]
                  bg-[#4b1110]
                  px-7
                  py-2
                  font-body
                  text-[13px]
                  text-[#eee3df]
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-transparent
                  hover:text-[#4b1110]
                  md:min-h-[30px]
                  md:min-w-[125px]
                  md:px-5
                  md:py-1.5
                  md:text-[10px]
                  lg:min-h-[38px]
                  lg:min-w-[155px]
                  lg:px-7
                  lg:text-[13px]
                "
              >
                Say Hello
              </a>
            </div>
          </div>
        </div>

        <div className="flex min-w-0 justify-center md:justify-end">
          <PhotoSlideshow />
        </div>
      </div>
    </section>
  );
}