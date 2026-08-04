import Frame from "@/components/Frame";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkGallery from "@/components/WorkGallery";
import Journey from "@/components/Journey";
import BeyondCode from "@/components/BeyondCode";

function ContactSection() {
  const contacts = [
    {
      title: "Email",
      detail: "6tochi.kalu@gmail.com",
      href: "mailto:6tochi.kalu@gmail.com",
      icon: "✉",
    },
    {
      title: "LinkedIn",
      detail: "linkedin.com/in/tochi",
      href: "https://www.linkedin.com/in/tochi-kalu-475890311/",
      icon: "in",
    },
    {
      title: "GitHub",
      detail: "github.com/tochi",
      href: "https://github.com/Karenkay6",
      icon: "</>",
    },
    {
      title: "Resume",
      detail: "View Resume",
      href: "/resume.pdf",
      icon: "▤",
    },
  ];

  return (
    <section
      id="connect"
      className="
        px-6
        pb-10
        pt-0
        md:px-10
        lg:px-14
      "
    >
      <div className="mx-auto w-full max-w-[1280px]">
        {/* CONNECT TITLE */}
        <div className="flex items-center gap-6">
          <div className="h-px flex-1 bg-[#8b1115]/55" />

          <span className="text-lg text-[#8b1115]">✦</span>

          <h2
            className="
              whitespace-nowrap
              text-5xl
              font-semibold
              leading-none
              text-[#681014]
              md:text-6xl
            "
          >
            Connect
          </h2>

          <span className="text-lg text-[#8b1115]">✦</span>

          <div className="h-px flex-1 bg-[#8b1115]/55" />
        </div>

        <div className="h-[25px]" />

        {/* INTRO */}
        <div className="mx-auto mt-7 flex w-full justify-center px-6">
          <p
            className="
              max-w-[700px]
              text-center
              text-lg
              leading-8
              text-[#3e2527]
            "
          >
            Whether it&apos;s software engineering, healthcare technology,
            research, or simply saying hello, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="h-[45px]" />

        {/* CONTACT CARDS */}
        <div className="mt-10 flex justify-center">
          <div
            className="
              grid
              w-[92%]
max-w-[1040px]
              grid-cols-1
              gap-8
              px-12
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {contacts.map((contact) => (
              <a
                key={contact.title}
                href={contact.href}
                target={
                  contact.href.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  group
                  flex
                  min-h-[175px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[20px]
                  border
                  border-[#dca9a3]/70
                  bg-[#fae9e4]/75
                  px-5
                  py-6
                  text-center
                  shadow-[0_8px_20px_rgba(70,15,18,0.07)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_13px_28px_rgba(70,15,18,0.12)]
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#8b1115]
                    text-lg
                    font-bold
                    text-white
                    shadow-[0_6px_15px_rgba(70,15,18,0.18)]
                  "
                >
                  {contact.icon}
                </div>

                <h3
                  className="
                    mt-4
                    text-2xl
                    font-semibold
                    leading-none
                    text-[#681014]
                  "
                >
                  {contact.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-base
                    leading-6
                    text-[#4b3234]
                  "
                >
                  {contact.detail}
                </p>
              </a>
            ))}
          </div>
        </div>
        <div className="h-[55px]" />

        {/* SAY HELLO BOX */}
<div className="mt-8 w-full px-12 md:px-16 lg:px-20">
  <div
    className="
      mx-auto
      flex
      min-h-[155px]
      w-full
      flex-col
      items-center
      justify-center
      rounded-[22px]
      border
      border-dashed
      border-[#dca9a3]
      bg-[#fae9e4]/55
      px-8
      py-6
      text-center
    "
  >
    <div className="text-3xl leading-none text-[#8b1115]">
      ✉
    </div>

    <h3 className="mt-2 text-3xl font-semibold leading-none text-[#681014]">
      Say Hello!
    </h3>

    <p className="mt-3 text-base leading-6 text-[#4b3234]">
      I&apos;m always open to meaningful conversations and opportunities.
    </p>

    <a
      href="mailto:6tochi.kalu@gmail.com"
      className="
        mt-4
        inline-flex
        items-center
        justify-center
        gap-5
        rounded-[9px]
        bg-[#8b1115]
        px-9
        py-3
        text-xs
        font-semibold
        uppercase
        tracking-[0.24em]
        text-white
        shadow-[0_7px_16px_rgba(70,15,18,0.16)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-[#650b0f]
      "
    >
      Get in Touch
      <span>→</span>
    </a>
  </div>
</div>
      </div>

      <div className="h-[75px]" />
    </section>
  );
}

export default function Home() {
  return (
    <main
      className="
        flex
        min-h-screen
        items-start
        justify-center
        bg-[#f3b79c]
        px-8
        py-8
      "
    >
      <Navbar />

      <Frame>
        <Hero />
        <WorkGallery />
        <Journey />
        <BeyondCode />
        <ContactSection />
      </Frame>
    </main>
  );
}