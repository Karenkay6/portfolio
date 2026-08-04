function ContactSection() {
  const contacts = [
    {
      title: "Email",
      detail: "your@email.com",
      action: "Reach Out",
      href: "mailto:your@email.com",
      icon: "✉",
    },
    {
      title: "LinkedIn",
      detail: "linkedin.com/in/tochi",
      action: "View Profile",
      href: "https://www.linkedin.com/in/YOUR_PROFILE",
      icon: "in",
    },
    {
      title: "GitHub",
      detail: "github.com/tochi",
      action: "View Profile",
      href: "https://github.com/YOUR_USERNAME",
      icon: "</>",
    },
    {
      title: "Resume",
      detail: "View Resume",
      action: "View Resume",
      href: "/resume.pdf",
      icon: "▤",
    },
  ];

  return (
    <section
      id="connect"
      className="
  px-8
  pb-24
  pt-28
  md:px-12
"
    >
      {/* TITLE */}
      <div className="flex items-center gap-5 md:gap-8 -mt-24">
        <div className="h-px flex-1 bg-[#8b1115]/55" />

        <span className="text-xl text-[#8b1115]">✦</span>

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

        <span className="text-xl text-[#8b1115]">✦</span>

        <div className="h-px flex-1 bg-[#8b1115]/55" />
      </div>

      {/* INTRO */}
      <p
        className="
          mx-auto
          mt-8
          max-w-[820px]
          text-center
          text-xl
          leading-11
          text-[#3e2527]
        "
      >
        Whether it&apos;s software engineering, healthcare technology,
        research, or simply saying hello, I&apos;d love to hear from you.
      </p>

      {/* CONTACT CARDS */}
      <div
        className="
          mx-auto
          mt-16
          grid
          w-full
          max-w-[1280px]
          grid-cols-1
          gap-6
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
              min-h-[190px]
              flex-col
              items-center
              justify-center
              rounded-[22px]
              border
              border-[#8b1115]/20
              bg-[#f9e7e2]/85
              px-6
              py-7
              text-center
              shadow-[0_10px_24px_rgba(70,15,18,0.07)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#8b1115]/40
              hover:shadow-[0_16px_32px_rgba(70,15,18,0.12)]
            "
          >
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-[#8b1115]
                text-xl
                font-bold
                text-white
                shadow-[0_7px_17px_rgba(70,15,18,0.18)]
                transition-transform
                duration-300
                group-hover:scale-105
              "
            >
              {contact.icon}
            </div>

            <h3
              className="
                mt-5
                text-2xl
                font-bold
                text-[#681014]
              "
            >
              {contact.title}
            </h3>

            <p
              className="
                mt-2
                break-words
                text-base
                leading-6
                text-[#4b3234]
              "
            >
              {contact.detail}
            </p>

            <span
              className="
                mt-5
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#9a171c]
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              {contact.action} →
            </span>
          </a>
        ))}
      </div>

      {/* SAY HELLO BANNER */}
      <div
        className="
          mx-auto
          mt-16
          w-full
          max-w-[1280px]
          rounded-[26px]
          border
          border-dashed
          border-[#dca9a3]
          bg-[#fae9e4]/70
          px-8
          py-10
          text-center
          shadow-[0_8px_24px_rgba(70,15,18,0.05)]
          md:px-12
        "
      >
        <div className="text-4xl text-[#8b1115]">✉</div>

        <h3
          className="
            mt-3
            text-3xl
            font-semibold
            text-[#681014]
            md:text-4xl
          "
        >
          Say Hello!
        </h3>

        <p
          className="
            mx-auto
            mt-3
            max-w-[660px]
            text-lg
            leading-8
            text-[#4b3234]
          "
        >
          I&apos;m always open to meaningful conversations and opportunities.
        </p>

        <a
          href="mailto:your@email.com"
          className="
            mt-7
            inline-flex
            items-center
            justify-center
            gap-5
            rounded-[10px]
            bg-[#8b1115]
            px-10
            py-3
            text-sm
            font-semibold
            uppercase
            tracking-[0.24em]
            text-white
            shadow-[0_8px_18px_rgba(70,15,18,0.16)]
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
    </section>
  );
}