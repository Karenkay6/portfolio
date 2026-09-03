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
      "
    >
      <SectionDivider title="Projects" />

      <div
        style={{
          paddingLeft: "clamp(16px, 4vw, 40px)",
          paddingRight: "clamp(16px, 4vw, 40px)",
          paddingTop: "clamp(40px, 6vw, 80px)",
          paddingBottom: "clamp(40px, 6vw, 80px)",
        }}
        className="
          flex
          flex-col
          items-center
        "
      >
        <div className="w-full max-w-[1050px]">
          {/* PROJECTS SUBTITLE */}
          <div
            style={{
              marginTop: "clamp(20px, 3vw, 32px)",
            }}
          >
            <p
              style={{
                fontSize: "clamp(15px, 1.4vw, 18px)",
              }}
              className="
                text-center
                font-semibold
                leading-relaxed
                text-[#db1717]/75
              "
            >
              A few things I want people to actually click on:
            </p>
          </div>

          {/* MAIN PROJECT GRID */}
          <div
            style={{
              marginTop: "clamp(45px, 7vw, 96px)",
              gap: "clamp(24px, 3vw, 40px)",
            }}
            className="
              grid
              w-full
              grid-cols-1
              md:grid-cols-2
            "
          >
            {/* STUDYBUDDY */}
            <div className="md:col-span-2">
              <ProjectTile
                title="StudyBuddy"
                color={cardColor}
                tech={["Arduino", "C++", "LCD", "Hardware"]}
                description="Built during UTSA RowdyHacks Hackathon Fall 2025, StudyBuddy is an Arduino-powered study assistant designed to help students stay organized with assignment reminders, push-button navigation, and an LCD display."
              />
            </div>

            {/* TOCHIBOT */}
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

            {/* PORTFOLIO */}
            <ProjectTile
              title="Portfolio"
              color={cardColor}
              tech={[
                "Next.js",
                "React",
                "Tailwind CSS",
                "TypeScript",
              ]}
              description="A custom portfolio website designed and built from scratch to showcase software projects, leadership experience, and technical growth."
            />

            {/* MEDTECH */}
            <div className="md:col-span-2">
              <ProjectTile
                title="MedCheck Project"
                color={cardColor}
                tech={[
                  "Healthcare",
                  "Software",
                  "UI/UX",
                  "Research",
                ]}
                description="MedCheck is an intelligent healthcare navigation platform designed to simplify what happens between noticing a symptom and knowing what to do next. Through an adaptive question-and-answer flow, MedCheck gathers relevant symptom information, identifies potential warning signs, provides appropriate next-step guidance, and helps users locate nearby healthcare services. Rather than replacing a medical professional, the platform is designed to help users make more informed decisions and arrive at appointments with clearer, structured information."
                revenue="$200"
                activeUsers="30"
              />
            </div>
          </div>

          {/* SMALL PROJECTS SUBTITLE */}
          <div
            style={{
              paddingTop: "clamp(42px, 6vw, 64px)",
              paddingBottom: "clamp(42px, 6vw, 64px)",
            }}
          >
            <p
              style={{
                fontSize: "clamp(15px, 1.4vw, 18px)",
              }}
              className="
                text-center
                font-semibold
                leading-relaxed
                text-[#db1717]/75
              "
            >
              Some of my smaller projects I&apos;ve built along the way:
            </p>
          </div>

          {/* SMALL PROJECTS */}
          <div
            style={{
              gap: "clamp(24px, 3vw, 40px)",
            }}
            className="
              grid
              grid-cols-1
              md:grid-cols-2
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