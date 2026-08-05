import PhotoSlideshow from "./PhotoSlideshow";

export default function Hero() {
  return (
    <section className="px-5 pb-16 pt-32 sm:px-10 sm:pb-20 sm:pt-36 lg:min-h-[760px] lg:px-14 lg:pb-10 lg:pt-24 xl:px-20 2xl:px-24">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-14 lg:grid-cols-[44%_56%] lg:items-start lg:gap-12 xl:grid-cols-[45%_55%] xl:gap-16">
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-[520px] lg:pt-3">
            <p className="mb-4 text-base tracking-wide text-[#0f1a0d] sm:text-lg">
              Hi there, my name is
            </p>

            <h1 className="text-[58px] font-bold leading-[0.9] text-[#5d090d] min-[390px]:text-[66px] sm:text-[78px] lg:text-[76px] xl:text-[86px]">
              Tochi
              <br />
              Karen
              <br />
              Kalu
            </h1>

            <div aria-hidden="true" className="mt-6 flex w-[190px] items-center gap-3 text-[#8b1115] sm:w-[220px]">
              <span className="h-px flex-1 bg-[#8b1115]/60" />
              <span className="text-sm">✦</span>
              <span className="text-sm">✦</span>
              <span className="h-px flex-1 bg-[#8b1115]/60" />
            </div>

            <h2 className="mt-7 max-w-[500px] text-[23px] leading-[1.35] text-black sm:text-[28px] lg:mt-8 lg:text-[27px] xl:text-[30px]">
              Future Software Engineer Focused on Healthcare Innovation
            </h2>

            <p className="mt-6 max-w-[500px] text-base leading-7 text-[#0e1014] sm:text-lg sm:leading-8 lg:text-[17px] lg:leading-8 xl:text-lg">
              I&apos;m a CS student at The University of Texas at San Antonio
              who enjoys building software that improves people&apos;s lives
              through thoughtful technology, clean design, and meaningful user
              experiences. In the meantime, when I don&apos;t code, I am doing
              photography, listening to music, or watching films.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="#connect"
                className="inline-flex w-full max-w-[290px] items-center justify-center rounded-full border-2 border-[#300d0d] bg-[#300d0d] px-10 py-3 text-lg font-medium text-[#c2ccc1] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#e7dbdb] hover:text-[#300d0d] hover:shadow-lg sm:w-auto sm:min-w-[220px] lg:min-w-[230px]"
              >
                Say Hello
              </a>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center lg:justify-end">
          <PhotoSlideshow />
        </div>
      </div>
    </section>
  );
}
