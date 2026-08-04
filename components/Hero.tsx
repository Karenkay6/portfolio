import PhotoSlideshow from "./PhotoSlideshow";

export default function Hero() {
  return (
  <section
  className="
    min-h-screen
    px-5
    pb-20
    pt-28
    sm:px-8
    lg:min-h-[92vh]
    lg:px-32
    lg:pb-24
  "
>
  <div
    className="
      grid
      grid-cols-1
      items-center
      gap-12
      lg:grid-cols-[52%_48%]
      lg:gap-10
    "
  >

        {/* LEFT SIDE */}
        <div className="flex justify-center lg:justify-start">
  <div className="w-full max-w-[520px] lg:translate-x-10">

          <p className="text-[#0f1a0d] text-lg tracking-wide mb-5">
            Hi there, my name is
          </p>

          <h1 className="
  text-6xl
  font-bold
  leading-[0.95]
  sm:text-7xl
 text-[#5d090d]">
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

          <h2   className="
    mt-10
    max-w-[460px]
    text-2xl
    leading-snug
    text-[#000000]
    sm:text-3xl
    lg:mt-15
  ">
            Future Software Engineer Focused on Healthcare Innovation 
          </h2>

          <p  className="
    mt-8
    max-w-[460px]
    text-base
    leading-7
    text-[#0e1014]
    sm:text-lg
    sm:leading-8
    lg:mt-15
  ">
            I'm a CS student at The University of Texas at San Antonio that enjoys
              building software that improves peoples lives through
            thoughtful technology, clean design, and meaningful user
            experiences. In the meantime when I don't code, I am doing photography,
            listening to music or watching films.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-5 mt-12">

            <a
              href="#connect"
              className="
                border-3
                bg-[#300d0d]
                border-[#300d0d]
                text-[#c2ccc1]
                px-14
                py-5
                text-lg
                font-medium
                rounded-full
                min-w-[220px]
                text-center
                rounded-full
                hover:bg-[#e7dbdb]
                hover:text-[#300d0d]
                transition-all
                duration-300
                
              "
            >
              Say Hello
            </a>

          </div>
        </div>

        </div>

               {/* RIGHT SIDE */}
        <div className="flex justify-center lg:-ml-16 lg:justify-start">
          <PhotoSlideshow />
        </div>

      </div>
    </section>
  );
}