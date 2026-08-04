import Image from "next/image";
import SectionDivider from "./SectionDivider";

export default function Journey() {
  return (
    <section id="journey" className="flex flex-col">
         <div className="h-[20px]" />
      <SectionDivider title="Journey" />

      <div className="flex flex-col items-center px-4 py-20">
        <div className="w-full max-w-[1050px] space-y-20">
          {/* EDUCATION */}
          <div className="mb-6">
            <h2
              className="
                text-lg
                font-semibold
                leading-relaxed
                tracking-wide
                text-center
                underline
                text-[#db1717]/75
              "
            >
              Education
            </h2>
 <div className="h-[10px]" />
            {/*
            <p
              className="
                mt-2
                text-lg
                text-[#cc1d1d]/60
              "
            >
              The academic path that shaped my technical foundation.
            </p>
            */}
          </div>

          <section
            className="
              border-1
              border-[#000000]
              px-8
              py-10
            "
          >
            <div className="divide-y divide-[#000000]/15">
              {/* EDUCATION ENTRY 1 */}
              <article className="grid gap-6 py-8 md:grid-cols-[70px_1fr_auto]">
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    border
                    border-[#2b0909]/70
                    bg-white
                    overflow-hidden
                  "
                >
                  <Image
                    src="/photos/utsa-logo.png"
                    alt="UTSA logo"
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#000000]">
                    University of Texas at San Antonio
                  </h3>

                  <p className="mt-1 text-base italic text-[#000000]">
                    Bachelor of Science · Computer Science · GPA{" "}
                    <span className="font-bold not-italic">3.8</span>
                  </p>

                  <p className="mt-2 text-sm text-[#000000]/80">
                    San Antonio, TX
                  </p>

                  <ul className="mt-5 space-y-3 text-lg leading-9">
                    <li>
                      · Relevant coursework: Data Structures & Algorithms,
                      Databases, Software Engineering, Cloud Technologies, AI/ML
                      Concepts, Calculus I & II.
                    </li>

                    <li>
                      · Active in CougarCS · CougarAI · INROADS · NSBE · MLT ·
                      ColorStack.
                    </li>
                  </ul>
                </div>

                <p className="font-semibold text-lg text-[#000000]/60">
                  May 2028
                </p>
              </article>

              {/* EDUCATION ENTRY 2 */}
              <article className="grid gap-6 py-8 md:grid-cols-[70px_1fr_auto]">
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    border
                    border-[#2b0909]/70
                    bg-white
                    overflow-hidden
                  "
                >
                  <Image
                    src="/photos/acc-logo.png"
                    alt="Austin Community College logo"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#000000]">
                    Austin Community College
                  </h3>

                  <p className="mt-1 text-md italic text-[#000000]">
                    Associate of Science · GPA{" "}
                    <span className="font-bold not-italic">4.0</span>
                  </p>

                  <p className="mt-2 text-sm text-[#000000]/80">
                    Austin, TX
                  </p>

                  <ul className="mt-5 space-y-3 text-lg leading-10">
                    <li>· Coursework: Principles of IT, Calculus I.</li>
                  </ul>
                </div>

                <p className="font-semibold text-lg text-[#000000]/60">
                  2024 – 2026
                </p>
              </article>

              {/* EDUCATION ENTRY 3 */}
              <article className="grid gap-6 py-8 md:grid-cols-[70px_1fr_auto]">
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    border
                    border-[#2b0909]/70
                    bg-white
                    overflow-hidden
                  "
                >
                  <Image
                    src="/photos/phs logo.jpg"
                    alt="Pflugerville High School logo"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#000000]">
                    Pflugerville High School
                  </h3>

                  <p className="mt-1 text-md italic text-[#000000]">
                    High School Diploma · GPA{" "}
                    <span className="font-bold not-italic">3.6</span>
                  </p>

                  <p className="mt-2 text-sm text-[#000000]/80">
                    Pflugerville, TX
                  </p>

                  <ul className="mt-5 space-y-3 text-lg leading-10">
                    <li>
                      · Coursework: Principles of IT, Advanced Cloud Computing,
                      Computer Science I – III, Practicum in STEM I & II.
                    </li>

                    <li>
                      · Activities: African Student Organization Executive,
                      National Honor Society, PALS, Key Club, Computer
                      Application Design.
                    </li>
                  </ul>
                </div>

                <p className="font-semibold text-lg text-[#000000]/60">
                  May 2024
                </p>
              </article>
            </div>
          </section>

 <div className="h-[10px]" />

          {/* EXPERIENCE */}
          <div className="mb-6">
            <h2
              className="
                text-lg
                font-semibold
                leading-relaxed
                tracking-wide
                text-center
                underline
                text-[#db1717]/75
              "
            >
              Experience
            </h2>
 <div className="h-[10px]" />
            {/*
            <p
              className="
                mt-2
                text-lg
                text-[#000000]/60
              "
            >
              Professional, technical, and leadership experience.
            </p>
            */}
          </div>

          <section className="border border-[#000000]/80 px-8 py-10">
  <div className="divide-y divide-[#000000]/15">

    {/* EXPERIENCE ENTRY 1 */}
    <article className="grid gap-6 py-8 md:grid-cols-[70px_1fr_auto]">
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          border
          border-[#2b0909]/70
          bg-white
          overflow-hidden
        "
      >
        <Image
          src="/photos/nsbe-logo.png"
          alt="NSBE logo"
          width={56}
          height={56}
          className="object-contain"
        />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-[#000000]">
          National Society of Black Engineers
        </h3>

        <p className="mt-1 text-md italic text-[#000000]">
          Membership Chair
        </p>

        <p className="mt-2 text-sm text-[#000000]/80">
          San Antonio, TX
        </p>

        <ul className="mt-5 space-y-3 text-lg leading-10">
          <li>
            · Support membership recruitment, engagement, and retention for the
            UTSA chapter.
          </li>

          <li>
            · Connect members with chapter events, professional development
            opportunities, and community resources.
          </li>
        </ul>
      </div>

      <p className="font-semibold text-lg text-[#000000]/60">
        2025 – Present
      </p>
    </article>

    {/* EXPERIENCE ENTRY 2 */}
    <article className="grid gap-6 py-8 md:grid-cols-[70px_1fr_auto]">
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          border
          border-[#2b0909]/70
          bg-white
          overflow-hidden
        "
      >
        <Image
          src="/photos/utsa-logo.png"
          alt="UTSA logo"
          width={70}
          height={70}
          className="object-contain"
        />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-[#000000]">
          University of Texas at San Antonio
        </h3>

        <p className="mt-1 text-md italic text-[#000000]">
          Peer Mentor
        </p>

        <p className="mt-2 text-sm text-[#000000]/80">
          San Antonio, TX
        </p>

        <ul className="mt-5 space-y-3 text-lg leading-10">
          <li>
            · Mentor students as they adjust to university life and navigate
            academic and campus resources.
          </li>

          <li>
            · Provide individual guidance, encouragement, and peer support to
            help students achieve their goals.
          </li>
        </ul>
      </div>

      <p className="font-semibold text-lg text-[#000000]/60">
        2025 – Present
      </p>
    </article>

    {/* EXPERIENCE ENTRY 3 */}
    <article className="grid gap-6 py-8 md:grid-cols-[70px_1fr_auto]">
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          border
          border-[#2b0909]/70
          bg-white
          overflow-hidden
        "
      >
        <Image
          src="/photos/acm logo.png"
          alt="ACM logo"
          width={70}
          height={70}
          className="object-contain"
        />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-[#000000]">
          The Association for Computing Machinery
        </h3>

        <p className="mt-1 text-md italic text-[#000000]">
          Hackathon Logistics Planner
        </p>

        <p className="mt-2 text-sm text-[#000000]/80">
          San Antonio, TX
        </p>

        <ul className="mt-5 space-y-3 text-lg leading-10">
          <li>
            · Coordinate logistics and planning for ACM-hosted hackathons,
            ensuring a smooth experience for participants and volunteers.
          </li>

          <li>
            · Collaborate with student leaders and sponsors to organize event
            operations, scheduling, and participant engagement.
          </li>
        </ul>
      </div>

      <p className="font-semibold text-lg text-[#000000]/60">
        2025 – Present
      </p>
    </article>

    {/* EXPERIENCE ENTRY 4 */}
    <article className="grid gap-6 py-8 md:grid-cols-[70px_1fr_auto]">
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          border
          border-[#000000]/70
          bg-white
          overflow-hidden
        "
      >
        <Image
          src="/photos/c2c logo.png"
          alt="Code2College logo"
          width={56}
          height={56}
          className="object-contain"
        />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-[#000000]">
          Code2College
        </h3>

        <p className="mt-1 text-md italic text-[#000000]">
          Software Development Instructor
        </p>

        <p className="mt-2 text-sm text-[#000000]/80">
          Austin, TX
        </p>

        <ul className="mt-5 space-y-3 text-lg leading-10">
          <li>
            · Teach students foundational software development concepts through
            structured lessons and hands-on Python activities.
          </li>

          <li>
            · Guide students through debugging, project development, and
            problem-solving exercises.
          </li>
        </ul>
      </div>

      <p className="font-semibold text-lg text-[#000000]/60">
        June 2024-August 2024
      </p>
    </article>

  </div>
</section>
        </div>
      </div>
    </section>
  );
}