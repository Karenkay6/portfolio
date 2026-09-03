interface SectionDividerProps {
  title: string;
}

export default function SectionDivider({
  title,
}: SectionDividerProps) {
  return (
    <div
      style={{
        paddingLeft: "clamp(16px, 4vw, 48px)",
        paddingRight: "clamp(16px, 4vw, 48px)",
        paddingTop: "clamp(28px, 4vw, 40px)",
      }}
      className="w-full"
    >
      <div
        style={{
          gap: "clamp(8px, 2vw, 32px)",
        }}
        className="
          flex
          items-center
        "
      >
        <div className="h-px flex-1 bg-[#8b1115]/65" />

        <span
          style={{
            fontSize: "clamp(14px, 1.5vw, 20px)",
          }}
          className="
            shrink-0
            text-[#8b1115]
          "
        >
          ✦
        </span>

        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
          }}
          className="
            shrink-0
            whitespace-nowrap
            text-center
            font-bold
            leading-none
            text-[#661014]
          "
        >
          {title}
        </h2>

        <span
          style={{
            fontSize: "clamp(14px, 1.5vw, 20px)",
          }}
          className="
            shrink-0
            text-[#8b1115]
          "
        >
          ✦
        </span>

        <div className="h-px flex-1 bg-[#8b1115]/65" />
      </div>
    </div>
  );
}