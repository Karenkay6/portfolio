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
  flex
  flex-col
  rounded-none
  border
  border-[#8b1115]/50
  bg-transparent
  p-5
  sm:p-8
  ${
    featured
      ? "min-h-[220px] sm:min-h-[260px]"
      : "min-h-[210px] sm:min-h-[240px]"
  }
`}
    >
     
      {/* TOP ROW */}
      <div className="flex justify-between items-start gap-6">
        <h3
          className="
  flex
  items-center
  gap-2
  text-2xl
  font-bold
  leading-tight
  text-[#000000]
  sm:gap-3
  sm:text-3xl
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
      <div className="px-1 sm:px-5">
        {/* DETAILS */}
        <p
          className="
  mt-5
  text-lg
  leading-7
  text-[#000000]
  sm:mt-6
  sm:text-xl
  sm:leading-8
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
  mt-6
  flex
  flex-wrap
  gap-x-5
  gap-y-3
  text-base
  font-semibold
  tracking-wide
  text-[#000000]
  sm:mt-8
  sm:gap-x-8
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