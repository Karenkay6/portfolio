interface ProjectTileProps {
  title: string;
  subtitle?: string;
  description: string;
  tech: string[];
  color?: string;
  featured?: boolean;
  status?: string;
  revenue?: string;
  activeUsers?: string;
  revenueLabel?: string;
  activeUsersLabel?: string;
}

export default function ProjectTile({
  title,
  subtitle,
  description,
  tech,
  color = "#f2e7e1",
  featured = false,
  status,
  revenue,
  activeUsers,
  revenueLabel = "Revenue",
  activeUsersLabel = "Active Users",
}: ProjectTileProps) {
  const hasMetrics = Boolean(revenue || activeUsers);

const firstMetricLabel =
  title === "TochiBot" ? "Downloads" : revenueLabel;

const secondMetricLabel =
  title === "TochiBot" ? "Rating" : activeUsersLabel;

  return (
    <div
      className={`
        border-1
        border-[#8b1115]/50
        rounded-none
        p-8
        bg-transparent
        flex
        flex-col
        ${featured ? "min-h-[260px]" : "min-h-[240px]"}
      `}
    >
      {/* TOP ROW */}
      <div className="flex justify-between items-start gap-6">
        <h3
          className="
            text-3xl
            font-bold
            text-[#000000]
            flex
            items-center
            gap-3
          "
        >
          <span className="text-[#000000] text-xl">•</span>
          {title}
        </h3>

        {status && (
          <span
            className="
              shrink-0
              border
              border-[#300d0d]/40
              px-4
              py-2
              text-xs
              tracking-widest
              uppercase
              text-[#000000]
            "
          >
            {status}
          </span>
        )}
      </div>

      {/* SUBTITLE */}
      {/*
      <p
        className="
          mt-8
          text-xl
          leading-relaxed
          text-[#000000]
          max-w-4xl
        "
      >
        {subtitle}
      </p>
      */}

      {/* MAIN DIVIDER */}
      <div
        className="
          mt-5
          border-t-2
          border-[#8b1115]/50
        "
      />

      {/* EVERYTHING BELOW THE DIVIDER */}
      <div
        style={{
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        {/* DETAILS */}
        <p
          className="
            mt-6
            text-2xl
            
            leading-8
            text-[#000000]
          "
        >
          {description}
        </p>

        {/* PROJECT METRICS */}
{hasMetrics && (
  <>
    {/* Top dotted divider */}
    <div
      className="
        mt-8
        border-t
        border-dotted
        border-[#000000]/65
      "
    />

    {/* Metrics */}
    <div
      className="
        mt-6
        grid
        grid-cols-2
        gap-8
      "
    >
      {revenue && (
        <div>
  <p
    className="
      text-xl
      font-bold
      text-[#000000]
    "
  >
    {revenue}
  </p>

  <p
    className="
      mt-2
      text-xs
      font-semibold
      uppercase
      tracking-wider
      text-[#000000]/80
    "
  >
    {firstMetricLabel}
  </p>
</div>
      )}

      {activeUsers && (
        <div>
  <p
    className="
      text-xl
      font-bold
      text-[#000000]
    "
  >
    {activeUsers}
  </p>

  <p
    className="
      mt-2
      text-xs
      uppercase
      font-semibold
      tracking-wider
      text-[#000000]/80
    "
  >
    {secondMetricLabel}
  </p>
</div>
      )}
    </div>

    {/* Bottom dotted divider */}
    <div
      className="
        mt-8
        border-t
        border-dotted
        border-[#000000]/65
      "
    />
  </>
)}

{/* TECH STACK */}
<div
  className="
    mt-8
    flex
    flex-wrap
    font-semibold
    gap-x-8
    gap-y-4
    text-md
    tracking-wide
    text-[#000000]
  "
>
          {tech.map((item) => (
            <span
              key={item}
              className="
                flex
                items-center
                gap-2
              "
            >
              <span className="text-[#000000]">•</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}