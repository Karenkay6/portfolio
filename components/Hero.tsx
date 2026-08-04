import PhotoSlideshow from "./PhotoSlideshow";

export default function Hero() {
  return (
  <section
  className="
    min-h-[92vh]
    px-32
    pb-24
  "
>
  {/* Space below the floating navbar */}
  <div className="h-26" />
  <div
    className="
      grid
      grid-cols-[52%_48%]
      gap-10
      items-start
    "
  >

        {/* LEFT SIDE */}
        <div className="flex justify-center">
          <div className="w-[520px] translate-x-10">

          <p className="text-[#0f1a0d] text-lg tracking-wide mb-5">
            Hi there, my name is
          </p>

          <h1 className="text-7xl font-bold leading-none text-[#5d090d]">
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

          <h2 className="mt-15 text-3xl text-[#3a2022] leading-snug max-w-[460px]">
            Future Software Engineer Focused on Healthcare Innovation 
          </h2>

          <p className="mt-15 text-lg leading-8 max-w-[460px] text-[#0e1014]">
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
        <div className="flex justify-start -ml-16">
          <PhotoSlideshow />
        </div>

      </div>
    </section>
  );
}