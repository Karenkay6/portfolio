import Link from "next/link";
import SectionDivider from "./SectionDivider";

const hobbies = [
  {
    title: "Travel",
    description: "Places, stories, and future adventures.",
    href: "/beyond/travel",
  },
  {
    title: "Reading",
    description: "Keep up with what Tochi is reading right now.",
    href: "/beyond/reading",
  },
  {
    title: "Music",
    description: "Keep up with what Tochi is listening to right now.",
    href: "/beyond/music",
  },
];

export default function BeyondCode() {
  return (
    
    <section id="beyond" className="flex flex-col pb-40">
         <div className="h-[35px]" />
      <SectionDivider title="Beyond Code" />

       <div className="h-[5px]" />

      <div className="flex flex-col items-center px-6 pb-40 pt-16">
        <div className="w-full max-w-[950px]">
          <p className="text-center text-lg font-semibold leading-13 text-[#d10d0d]">
            Other things I find joy in:
          </p>
 <div className="h-[25px]" />
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
            {hobbies.map((hobby) => (
              <Link
                key={hobby.title}
                href={hobby.href}
                className="
                  group
                  flex
                  min-h-[230px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[28px]
                  border-2
                  border-[#300d0d]
                  bg-[#300d0d]/80
                  px-8
                  py-10
                  text-center
                  text-[#c2ccc1]
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#e7dbdb]
                  hover:text-[#300d0d]
                  hover:shadow-lg
                "
              >
                <h3 className="text-3xl font-semibold">
                  {hobby.title}
                </h3>

                <p className="mt-4 max-w-[280px] text-lg font-medium leading-7 opacity-80">
                  {hobby.description}
                </p>

                <span className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] transition-transform duration-300 group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[75px]" />
    </section>
  );
}