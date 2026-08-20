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
  description,
  tech,
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
      style={{
        padding: "clamp(16px, 3vw, 32px)",
      }}
      className="
        flex
        h-full
        flex-col
        border
        border-[#8b1115]/50
        bg-transparent
      "
    >
      {/* TOP ROW */}
      <div
        style={{
          gap: "clamp(12px, 2vw, 24px)",
        }}
        className="
          flex
          flex-wrap
          items-start
          justify-between
        "
      >
        <h3
          style={{
            fontSize: "clamp(1.35rem, 2.3vw, 1.875rem)",
          }}
          className="
            flex
            min-w-0
            items-center
            gap-2
            break-words
            font-bold
            leading-tight
            text-[#000000]
          "
        >
          <span
            style={{
              fontSize: "clamp(16px, 1.5vw, 20px)",
            }}
            className="shrink-0"
          >
            •
          </span>

          {title}
        </h3>

        {status && (
          <span
            style={{
              paddingLeft: "clamp(10px, 1.5vw, 16px)",
              paddingRight: "clamp(10px, 1.5vw, 16px)",
              paddingTop: "clamp(6px, 0.7vw, 8px)",
              paddingBottom: "clamp(6px, 0.7vw, 8px)",
              fontSize: "clamp(10px, 0.8vw, 12px)",
            }}
            className="
              shrink-0
              border
              border-[#300d0d]/40
              uppercase
              tracking-widest
              text-[#000000]
            "
          >
            {status}
          </span>
        )}
      </div>

      {/* MAIN DIVIDER */}
      <div
        style={{
          marginTop: "clamp(16px, 2vw, 20px)",
        }}
        className="
          border-t-2
          border-[#8b1115]/50
        "
      />

      {/* CONTENT */}
      <div
        style={{
          paddingLeft: "clamp(0px, 1.3vw, 20px)",
          paddingRight: "clamp(0px, 1.3vw, 20px)",
        }}
      >
        <p
          style={{
            marginTop: "clamp(16px, 2vw, 24px)",
            fontSize: "clamp(15px, 1.5vw, 20px)",
          }}
          className="
            leading-[1.6]
            text-[#000000]
          "
        >
          {description}
        </p>

        {/* METRICS */}
        {hasMetrics && (
          <>
            <div
              style={{
                marginTop: "clamp(24px, 3vw, 32px)",
              }}
              className="
                border-t
                border-dotted
                border-[#000000]/65
              "
            />

            <div
              style={{
                marginTop: "clamp(20px, 2vw, 24px)",
                gap: "clamp(20px, 3vw, 32px)",
              }}
              className="
                grid
                grid-cols-2
              "
            >
              {revenue && (
                <div>
                  <p
                    style={{
                      fontSize:
                        "clamp(18px, 1.7vw, 20px)",
                    }}
                    className="
                      font-bold
                      text-[#000000]
                    "
                  >
                    {revenue}
                  </p>

                  <p
                    style={{
                      fontSize:
                        "clamp(10px, 0.8vw, 12px)",
                    }}
                    className="
                      mt-2
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
                    style={{
                      fontSize:
                        "clamp(18px, 1.7vw, 20px)",
                    }}
                    className="
                      font-bold
                      text-[#000000]
                    "
                  >
                    {activeUsers}
                  </p>

                  <p
                    style={{
                      fontSize:
                        "clamp(10px, 0.8vw, 12px)",
                    }}
                    className="
                      mt-2
                      font-semibold
                      uppercase
                      tracking-wider
                      text-[#000000]/80
                    "
                  >
                    {secondMetricLabel}
                  </p>
                </div>
              )}
            </div>

            <div
              style={{
                marginTop: "clamp(24px, 3vw, 32px)",
              }}
              className="
                border-t
                border-dotted
                border-[#000000]/65
              "
            />
          </>
        )}

        {/* TECH STACK */}
        <div
          style={{
            marginTop: "clamp(24px, 3vw, 32px)",
            columnGap: "clamp(16px, 3vw, 32px)",
            rowGap: "clamp(10px, 1.5vw, 16px)",
            fontSize: "clamp(13px, 1.2vw, 16px)",
          }}
          className="
            flex
            flex-wrap
            font-semibold
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
              <span>•</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}