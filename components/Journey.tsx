import Image from "next/image";
import SectionDivider from "./SectionDivider";

const articleClass = `
  grid
  grid-cols-1
  gap-5
  py-7

  sm:grid-cols-[70px_1fr]
  sm:gap-6
  sm:py-8

  lg:grid-cols-[70px_1fr_auto]
`;

const titleClass = `
  text-xl
  font-bold
  text-[#000000]
  sm:text-2xl
`;

const listClass = `
  mt-5
  space-y-3
  text-base
  leading-7

  sm:text-lg
  sm:leading-9
`;

const dateClass = `
  text-base
  font-semibold
  text-[#000000]/60

  sm:col-start-2

  lg:col-start-auto
  lg:text-lg
`;

const logoClass = `
  flex
  h-16
  w-16
  items-center
  justify-center
  overflow-hidden
  border
  border-[#2b0909]/70
  bg-white
`;

export default function Journey() {
  return (
    <section id="journey" className="flex flex-col">
      <div className="h-[20px]" />

      <SectionDivider title="Journey" />

      <div className="flex flex-col items-center px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="w-full max-w-[1050px] space-y-12 sm:space-y-16 lg:space-y-20">
          {/* EDUCATION */}
          <div>
            <div className="mb-6">
              <h2 className="text-center text-lg font-semibold leading-relaxed tracking-wide text-[#db1717]/75 underline">
                Education
              </h2>

              <div className="h-[10px]" />
            </div>

            <section
              className="
                border
                border-[#000000]
                px-4
                py-5

                sm:px-8
                sm:py-10
              "
            >
              <div className="divide-y divide-[#000000]/15">
                {/* EDUCATION ENTRY 1 */}
                <article className={articleClass}>
                  <div className={logoClass}>
                    <Image
                      src="/photos/utsa-logo.png"
                      alt="UTSA logo"
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h3 className={titleClass}>
                      University of Texas at San Antonio
                    </h3>

                    <p className="mt-1 text-base italic text-[#000000]">
                      Bachelor of Science · Computer Science · GPA{" "}
                      <span className="font-bold not-italic">3.8</span>
                    </p>

                    <p className="mt-2 text-sm text-[#000000]/80">
                      San Antonio, TX
                    </p>

                    <ul className={listClass}>
                      <li>
                        · Relevant coursework: Data Structures & Algorithms,
                        Databases, Software Engineering, Cloud Technologies,
                        AI/ML Concepts, Calculus I & II.
                      </li>

                      <li>
                        · Active in CougarCS · CougarAI · INROADS · NSBE · MLT ·
                        ColorStack.
                      </li>
                    </ul>
                  </div>

                  <p className={dateClass}>May 2028</p>
                </article>

                {/* EDUCATION ENTRY 2 */}
                <article className={articleClass}>
                  <div className={logoClass}>
                    <Image
                      src="/photos/acc-logo.png"
                      alt="Austin Community College logo"
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h3 className={titleClass}>
                      Austin Community College
                    </h3>

                    <p className="mt-1 text-base italic text-[#000000]">
                      Associate of Science · GPA{" "}
                      <span className="font-bold not-italic">4.0</span>
                    </p>

                    <p className="mt-2 text-sm text-[#000000]/80">
                      Austin, TX
                    </p>

                    <ul className={listClass}>
                      <li>· Coursework: Principles of IT, Calculus I.</li>
                    </ul>
                  </div>

                  <p className={dateClass}>2024 – 2026</p>
                </article>

                {/* EDUCATION ENTRY 3 */}
                <article className={articleClass}>
                  <div className={logoClass}>
                    <Image
                      src="/photos/phs-logo.png"
                      alt="Pflugerville High School logo"
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h3 className={titleClass}>
                      Pflugerville High School
                    </h3>

                    <p className="mt-1 text-base italic text-[#000000]">
                      High School Diploma · GPA{" "}
                      <span className="font-bold not-italic">3.6</span>
                    </p>

                    <p className="mt-2 text-sm text-[#000000]/80">
                      Pflugerville, TX
                    </p>

                    <ul className={listClass}>
                      <li>
                        · Coursework: Principles of IT, Advanced Cloud
                        Computing, Computer Science I – III, Practicum in STEM I
                        & II.
                      </li>

                      <li>
                        · Activities: African Student Organization Executive,
                        National Honor Society, PALS, Key Club, Computer
                        Application Design.
                      </li>
                    </ul>
                  </div>

                  <p className={dateClass}>May 2024</p>
                </article>
              </div>
            </section>
          </div>

          {/* EXPERIENCE */}
          <div>
            <div className="mb-6">
              <h2 className="text-center text-lg font-semibold leading-relaxed tracking-wide text-[#db1717]/75 underline">
                Experience
              </h2>

              <div className="h-[10px]" />
            </div>

            <section
              className="
                border
                border-[#000000]/80
                px-4
                py-5

                sm:px-8
                sm:py-10
              "
            >
              <div className="divide-y divide-[#000000]/15">
                {/* EXPERIENCE ENTRY 1 */}
                <article className={articleClass}>
                  <div className={logoClass}>
                    <Image
                      src="/photos/nsbe-logo.png"
                      alt="NSBE logo"
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h3 className={titleClass}>
                      National Society of Black Engineers
                    </h3>

                    <p className="mt-1 text-base italic text-[#000000]">
                      Membership Chair
                    </p>

                    <p className="mt-2 text-sm text-[#000000]/80">
                      San Antonio, TX
                    </p>

                    <ul className={listClass}>
                      <li>
                        · Support membership recruitment, engagement, and
                        retention for the UTSA chapter.
                      </li>

                      <li>
                        · Connect members with chapter events, professional
                        development opportunities, and community resources.
                      </li>
                    </ul>
                  </div>

                  <p className={dateClass}>2025 – Present</p>
                </article>

                {/* EXPERIENCE ENTRY 2 */}
                <article className={articleClass}>
                  <div className={logoClass}>
                    <Image
                      src="/photos/utsa-logo.png"
                      alt="UTSA logo"
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h3 className={titleClass}>
                      University of Texas at San Antonio
                    </h3>

                    <p className="mt-1 text-base italic text-[#000000]">
                      Peer Mentor
                    </p>

                    <p className="mt-2 text-sm text-[#000000]/80">
                      San Antonio, TX
                    </p>

                    <ul className={listClass}>
                      <li>
                        · Mentor students as they adjust to university life and
                        navigate academic and campus resources.
                      </li>

                      <li>
                        · Provide individual guidance, encouragement, and peer
                        support to help students achieve their goals.
                      </li>
                    </ul>
                  </div>

                  <p className={dateClass}>2025 – Present</p>
                </article>

                {/* EXPERIENCE ENTRY 3 */}
                <article className={articleClass}>
                  <div className={logoClass}>
                    <Image
                      src="/photos/acm logo.png"
                      alt="ACM logo"
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h3 className={titleClass}>
                      The Association for Computing Machinery
                    </h3>

                    <p className="mt-1 text-base italic text-[#000000]">
                      Hackathon Logistics Planner
                    </p>

                    <p className="mt-2 text-sm text-[#000000]/80">
                      San Antonio, TX
                    </p>

                    <ul className={listClass}>
                      <li>
                        · Coordinate logistics and planning for ACM-hosted
                        hackathons, ensuring a smooth experience for
                        participants and volunteers.
                      </li>

                      <li>
                        · Collaborate with student leaders and sponsors to
                        organize event operations, scheduling, and participant
                        engagement.
                      </li>
                    </ul>
                  </div>

                  <p className={dateClass}>2025 – Present</p>
                </article>

                {/* EXPERIENCE ENTRY 4 */}
                <article className={articleClass}>
                  <div className={logoClass}>
                    <Image
                      src="/photos/c2c logo.png"
                      alt="Code2College logo"
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h3 className={titleClass}>Code2College</h3>

                    <p className="mt-1 text-base italic text-[#000000]">
                      Software Development Instructor
                    </p>

                    <p className="mt-2 text-sm text-[#000000]/80">
                      Austin, TX
                    </p>

                    <ul className={listClass}>
                      <li>
                        · Teach students foundational software development
                        concepts through structured lessons and hands-on Python
                        activities.
                      </li>

                      <li>
                        · Guide students through debugging, project development,
                        and problem-solving exercises.
                      </li>
                    </ul>
                  </div>

                  <p className={dateClass}>June 2024 – August 2024</p>
                </article>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}