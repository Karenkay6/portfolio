interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
}

export default function ProjectCard({
  title,
  description,
  tech,
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        rounded-[28px]
        border-2
        border-black
        bg-white/50
        backdrop-blur-lg
        p-10
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        cursor-pointer
      "
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-3xl font-semibold text-[#1F2937]">
            {title}
          </h3>

          <p className="mt-4 text-lg text-[#4B5563]">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {tech.map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  bg-[#539647]
                  px-4
                  py-2
                  text-md
                  text-[#142c10]
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <span
          className="
            text-4xl
            transition-transform
            duration-300
            group-hover:translate-x-2
          "
        >
            →
        </span>
      </div>
    </div>
  );
}