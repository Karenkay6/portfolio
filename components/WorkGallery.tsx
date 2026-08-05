import ProjectTile from "./ProjectTile";
import SectionDivider from "./SectionDivider";

export default function WorkGallery() {
  const cardColor = "#f2e7e1";

  return (
    <section
  id="projects"
  className="
    flex
    scroll-mt-28
    flex-col
    pt-10

    sm:pt-14

    lg:pt-6
  "
>
      <SectionDivider title="Projects" />

      <div className="h-[20px]" />

      <div
        className="
          flex
          flex-col
          items-center
          px-4
          py-10

          sm:px-6
          sm:py-16

          lg:py-20
        "
      >
        <div className="w-full max-w-[1050px]">
          {/* PROJECTS SUBTITLE */}
          <div className="mt-8">
            <p className="text-center text-lg font-semibold leading-relaxed text-[#db1717]/75">
              A few things I want people to actually click on:
            </p>
          </div>

          <div className="h-[15px]" />

          {/* MAIN PROJECTS GALLERY */}
          <div
            className="
              mt-10
              grid
              w-full
              grid-cols-1
              gap-6

              sm:mt-16
              sm:gap-8

              md:grid-cols-2

              lg:mt-24
              lg:gap-10
            "
          >
            <div className="md:col-span-2">
              <ProjectTile
                title="StudyBuddy"
                color={cardColor}
                tech={["Arduino", "C++", "LCD", "Hardware"]}
                description="Built during UTSA RowdyHacks Hackathon Fall 2025, StudyBuddy is an Arduino-powered study assistant designed to help students stay organized with assignment reminders, push-button navigation, and an LCD display."
              />
            </div>

            <ProjectTile
              title="TochiBot"
              color={cardColor}
              tech={["Python", "OpenAI", "Tkinter"]}
              description="An AI assistant built with Python that answers questions, helps with productivity tasks, and explores natural language processing."
              revenue="100+"
              revenueLabel="Downloads"
              activeUsers="4.9 / 5"
              activeUsersLabel="Rating"
            />

            <ProjectTile
              title="Portfolio"
              color={cardColor}
              tech={["Next.js", "React", "Tailwind CSS", "TypeScript"]}
              description="A custom portfolio website designed and built from scratch to showcase software projects, leadership experience, and technical growth."
            />

            <div className="md:col-span-2">
              <ProjectTile
                title="MedTech Project"
                color={cardColor}
                tech={["Healthcare", "Software", "UI/UX", "Research"]}
                description="A healthcare-focused project exploring how technology can improve accessibility and patient experiences."
                revenue="$400"
                activeUsers="30"
              />
            </div>
          </div>

          <div className="h-[15px]" />

          {/* SMALLER PROJECTS SUBTITLE */}
          <div className="py-10 sm:py-14">
            <p className="text-center text-lg font-semibold leading-relaxed text-[#db1717]/75">
              Some of my smaller projects I&apos;ve built along the way:
            </p>
          </div>

          <div className="h-[15px]" />

          {/* SMALLER PROJECTS */}
          <div
            className="
              grid
              grid-cols-1
              gap-6

              sm:gap-8

              md:grid-cols-2

              lg:gap-10
            "
          >
            <ProjectTile
              title="Smart Expense Splitter"
              color={cardColor}
              tech={["Python", "Java", "Algorithms"]}
              description="A budgeting application that automatically splits shared expenses between friends or roommates, calculates individual balances, and tracks payments to simplify group finances."
            />

            <ProjectTile
              title="Interview Question Generator"
              color={cardColor}
              tech={["Python", "OpenAI API", "React"]}
              description="An interview preparation tool that generates customized technical interview questions based on programming language, difficulty level, and topic to help students practice for software engineering interviews."
            />
          </div>
        </div>
      </div>
    </section>
  );
}