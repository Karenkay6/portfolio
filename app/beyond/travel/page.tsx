import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Inter, Libre_Baskerville } from "next/font/google";

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const visitedCities = [
  {
    name: "Seattle",
    images: [
      "/travel/seattle-1.jpg",
      "/travel/seattle-2.jpg",
      "/travel/seattle-3.jpg",
    ],
  },
  {
    name: "Portland",
    images: [
      "/travel/portland-1.jpg",
      "/travel/portland-2.jpg",
      "/travel/portland-3.jpg",
    ],
  },
  {
    name: "Atlanta",
    images: [
      "/travel/atlanta-1.jpg",
      "/travel/atlanta-2.jpg",
      "/travel/atlanta-3.jpg",
    ],
  },
  {
    name: "Baltimore",
    images: [
      "/travel/baltimore-1.jpg",
      "/travel/baltimore-2.jpg",
      "/travel/baltimore-3.jpg",
    ],
  },
  {
    name: "Washington, DC",
    images: [
      "/travel/washington-dc-1.jpg",
      "/travel/washington-dc-3.jpg",
    ],
  },
  {
    name: "New York",
    images: [
      "/travel/new-york-1.jpg",
      "/travel/new-york-2.jpg",
    ],
  },
  {
    name: "New Jersey",
    images: [
      "/travel/new-jersey-1.jpg",
      "/travel/new-jersey-2.jpg",
    ],
  },
  {
    name: "Austin",
    images: [
      "/travel/austin-1.jpg",
      "/travel/austin-2.jpg",
      "/travel/austin-3.jpg",
    ],
  },
  {
    name: "Houston",
    images: [
      "/travel/houston-1.jpg",
      "/travel/houston-2.jpg",
      "/travel/houston-3.jpg",
    ],
  },
  {
    name: "Chicago",
    images: [
      "/travel/chicago-1.jpg",
      "/travel/chicago-2.jpg",
      "/travel/chicago-3.jpg",
    ],
  },
];

const futureDestinations = [
  {
    number: "01",
    city: "Nigeria",
    coordinates: "35.6762° N, 139.6503° E",
  },
  {
    number: "02",
    city: "Paris",
    coordinates: "48.8566° N, 2.3522° E",
  },
  {
    number: "03",
    city: "Ireland",
    coordinates: "8.3405° S, 115.0920° E",
  },
  {
    number: "04",
    city: "Morroco",
    coordinates: "33.9249° S, 18.4241° E",
  },
  {
    number: "05",
    city: "Dubai",
    coordinates: "25.2048° N, 55.2708° E",
  },
  {
    number: "06",
    city: "Iceland",
    coordinates: "64.9631° N, 19.0208° W",
  },
  {
    number: "07",
    city: "Sydney",
    coordinates: "33.8688° S, 151.2093° E",
  },
  {
    number: "08",
    city: "Maldives",
    coordinates: "3.2028° N, 73.2207° E",
  },
  {
    number: "09",
    city: "Rome",
    coordinates: "41.9028° N, 12.4964° E",
  },
  {
    number: "10",
    city: "Barcelona",
    coordinates: "41.3851° N, 2.1734° E",
  },
];

export default function TravelPage() {
  return (
    <main
      style={{
        paddingTop: "clamp(12px, 2.5vw, 32px)",
        paddingBottom: "clamp(12px, 2.5vw, 32px)",
        paddingLeft: "clamp(8px, 2.5vw, 32px)",
        paddingRight: "clamp(8px, 2.5vw, 32px)",
      }}
      className={`${inter.className} flex min-h-screen w-full justify-center overflow-x-hidden bg-[#f3b79c] text-[#111111]`}
    >
      {/* OUTER FRAME */}
      <div
        style={{
          width: "min(calc(100vw - clamp(16px, 5vw, 64px)), 1450px)",
          border: "clamp(3px, 0.3vw, 4px) solid #7d0b10",
          borderRadius: "clamp(14px, 2.5vw, 28px)",
          backgroundColor: "#FBE7E2",
        }}
        className="
          overflow-hidden
          shadow-[0_24px_70px_rgba(48,13,13,0.10)]
        "
      >
        {/* HEADER */}
        <header
          style={{
            minHeight: "clamp(68px, 7vw, 76px)",
            gap: "clamp(12px, 2vw, 24px)",
            paddingLeft: "clamp(16px, 4vw, 40px)",
            paddingRight: "clamp(16px, 4vw, 40px)",
            borderBottom: "1px solid rgba(125,11,16,0.55)",
          }}
          className="
            flex
            w-full
            items-center
            justify-between
          "
        >
          <Link
            href="/#beyond"
            style={{
              paddingLeft: "clamp(16px, 2vw, 24px)",
              paddingRight: "clamp(16px, 2vw, 24px)",
              paddingTop: "clamp(8px, 1vw, 12px)",
              paddingBottom: "clamp(8px, 1vw, 12px)",
              fontSize: "clamp(13px, 1.2vw, 16px)",
            }}
            className="
              inline-flex
              shrink-0
              items-center
              justify-center
              rounded-[12px]
              bg-[#73080d]
              font-medium
              leading-none
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#570609]
            "
          >
            ← Beyond Code
          </Link>

          <p
            style={{
              fontSize: "clamp(13px, 1.4vw, 18px)",
            }}
            className={`${libre.className} hidden font-bold uppercase text-[#681317] sm:block`}
          >
            Tochi&apos;s Passport
          </p>
        </header>

        {/* INNER CONTENT */}
        <div
          style={{
            paddingLeft: "clamp(18px, 4vw, 48px)",
            paddingRight: "clamp(18px, 4vw, 48px)",
          }}
        >
          {/* INTRO */}
          <section
            style={{
              paddingTop: "clamp(28px, 4vw, 32px)",
              paddingBottom: "clamp(22px, 3vw, 24px)",
            }}
          >
            <p
              style={{
                fontSize: "clamp(14px, 1.3vw, 16px)",
              }}
              className={`${libre.className} font-bold text-[#7d0b10]`}
            >
              Beyond Code · Travel
            </p>

            <h1
              style={{
                marginTop: "clamp(12px, 1.5vw, 16px)",
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              }}
              className={`${libre.className} max-w-[760px] font-bold leading-[1.08]`}
            >
              Places I&apos;ve been,
              <br />
              memories I keep.
            </h1>

            <p
              style={{
                marginTop: "clamp(16px, 2vw, 20px)",
                fontSize: "clamp(14px, 1.3vw, 16px)",
                lineHeight: "1.75",
              }}
              className="max-w-[620px] text-[#20242b]"
            >
              Collecting moments, cultures, and city lights.
              <br />
              Every trip adds a new perspective.
            </p>
          </section>

          <div className="border-t border-[#8b1115]/60" />

          {/* STATS */}
          <section className="grid grid-cols-1 sm:grid-cols-3">
            <div
              style={{
                padding: "clamp(16px, 2.5vw, 24px)",
              }}
              className="text-center"
            >
              <p
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2rem)",
                }}
                className={`${libre.className} font-bold text-[#7d0b10]`}
              >
                10
              </p>

              <p
                style={{
                  marginTop: "clamp(4px, 0.5vw, 6px)",
                  fontSize: "clamp(10px, 0.9vw, 12px)",
                }}
                className="font-semibold uppercase tracking-[0.06em]"
              >
                Cities Visited
              </p>
            </div>

            <div
              style={{
                padding: "clamp(16px, 2.5vw, 24px)",
              }}
              className="
                border-y
                border-[#8b1115]/45
                text-center
                sm:border-x
                sm:border-y-0
              "
            >
              <p
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2rem)",
                }}
                className={`${libre.className} font-bold text-[#7d0b10]`}
              >
                7
              </p>

              <p
                style={{
                  marginTop: "clamp(4px, 0.5vw, 6px)",
                  fontSize: "clamp(10px, 0.9vw, 12px)",
                }}
                className="font-semibold uppercase tracking-[0.06em]"
              >
                States
              </p>
            </div>

            <div
              style={{
                padding: "clamp(16px, 2.5vw, 24px)",
              }}
              className="text-center"
            >
              <p
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.5rem)",
                }}
                className={`${libre.className} font-bold text-[#7d0b10]`}
              >
                ∞
              </p>

              <p
                style={{
                  marginTop: "clamp(4px, 0.5vw, 6px)",
                  fontSize: "clamp(10px, 0.9vw, 12px)",
                }}
                className="font-semibold uppercase tracking-[0.06em]"
              >
                Memories
              </p>
            </div>
          </section>

          <div className="border-t border-[#8b1115]/60" />

          {/* VISITED CITIES */}
          <section
            style={{
              paddingTop: "clamp(24px, 3vw, 28px)",
              paddingBottom: "clamp(24px, 3vw, 28px)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.25rem)",
              }}
              className={`${libre.className} font-bold text-[#7d0b10]`}
            >
              I&apos;ve been to
            </h2>

            <div
              style={{
                marginTop: "clamp(16px, 2vw, 20px)",
                gap: "clamp(12px, 1.5vw, 16px)",
              }}
              className="
                grid
                grid-cols-2
                sm:grid-cols-3
                md:grid-cols-5
                lg:grid-cols-10
              "
            >
              {visitedCities.map((city, cityIndex) => {
                const repeatedImages = [...city.images, ...city.images];

                const trackStyle = {
                  "--travel-duration": `${17 + cityIndex * 1.2}s`,
                  "--travel-direction":
                    cityIndex % 2 === 0 ? "normal" : "reverse",
                } as CSSProperties;

                return (
                  <article
                    key={city.name}
                    className="city-column group min-w-0"
                  >
                    <div className="city-strip">
                      <div className="city-track" style={trackStyle}>
                        {repeatedImages.map((image, imageIndex) => (
                          <div
                            key={`${city.name}-${imageIndex}`}
                            className="city-photo"
                          >
                            <Image
                              src={image}
                              alt={`${city.name} travel memory ${
                                (imageIndex % city.images.length) + 1
                              }`}
                              fill
                              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 20vw, 10vw"
                              className="
                                object-cover
                                transition-transform
                                duration-500
                                group-hover:scale-[1.04]
                              "
                            />
                          </div>
                        ))}
                      </div>

                      <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#FBE7E2] to-transparent" />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#FBE7E2] to-transparent" />
                    </div>

                    <p
                      style={{
                        marginTop: "clamp(8px, 1vw, 12px)",
                        fontSize: "clamp(10px, 0.8vw, 11px)",
                      }}
                      className="
                        min-h-[32px]
                        text-center
                        font-semibold
                        uppercase
                        leading-4
                        tracking-[0.05em]
                      "
                    >
                      {city.name}
                    </p>
                  </article>
                );
              })}
            </div>

            <p
              style={{
                marginTop: "clamp(16px, 2vw, 20px)",
                fontSize: "clamp(12px, 1vw, 14px)",
              }}
              className={`${libre.className} text-center text-[#7d0b10]`}
            >
              ☝ Hover over a city to pause
            </p>
          </section>

          <div className="border-t border-[#8b1115]/60" />

          {/* FUTURE DESTINATIONS */}
          <section
            style={{
              paddingTop: "clamp(24px, 3vw, 28px)",
              paddingBottom: "clamp(24px, 3vw, 28px)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.25rem)",
              }}
              className={`${libre.className} font-bold text-[#7d0b10]`}
            >
              Where I&apos;m going next
            </h2>

            <div
              style={{
                marginTop: "clamp(16px, 2vw, 20px)",
                gap: "clamp(24px, 4vw, 48px)",
              }}
              className="
                grid
                grid-cols-1
                lg:grid-cols-[minmax(120px,180px)_1fr]
              "
            >
              {/* PASSPORT STAMP */}
              <div className="hidden items-center justify-center lg:flex">
                <div
                  style={{
                    width: "clamp(110px, 12vw, 144px)",
                    aspectRatio: "1 / 1",
                  }}
                  className="
                    flex
                    rotate-[-12deg]
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-dashed
                    border-[#8b1115]/35
                    text-center
                    text-[#8b1115]/45
                  "
                >
                  <p
                    style={{
                      fontSize: "clamp(24px, 3vw, 30px)",
                    }}
                  >
                    ✈
                  </p>

                  <p
                    style={{
                      marginTop: "clamp(4px, 0.5vw, 6px)",
                      fontSize: "clamp(8px, 0.8vw, 10px)",
                    }}
                    className="font-semibold uppercase tracking-[0.18em]"
                  >
                    Adventure
                  </p>

                  <p
                    style={{
                      fontSize: "clamp(8px, 0.8vw, 10px)",
                    }}
                    className="font-semibold uppercase tracking-[0.18em]"
                  >
                    Awaits
                  </p>
                </div>
              </div>

              {/* DESTINATION LIST */}
              <div>
                {futureDestinations.map((destination) => (
                  <article
                    key={destination.number}
                    style={{
                      paddingTop: "clamp(10px, 1.2vw, 12px)",
                      paddingBottom: "clamp(10px, 1.2vw, 12px)",
                    }}
                    className="
                      group
                      grid
                      grid-cols-[minmax(34px,42px)_1fr]
                      items-center
                      border-b
                      border-[#8b1115]/45
                      transition-all
                      duration-300
                      hover:pl-3

                      sm:grid-cols-[minmax(40px,50px)_minmax(110px,180px)_1fr_minmax(70px,100px)]
                    "
                  >
                    <p
                      style={{
                        fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                      }}
                      className={`${libre.className} text-[#7d0b10]`}
                    >
                      {destination.number}
                    </p>

                    <h3
                      style={{
                        fontSize: "clamp(13px, 1.2vw, 16px)",
                      }}
                      className={`${libre.className} font-bold uppercase`}
                    >
                      {destination.city}
                    </h3>

                    <div className="hidden items-center gap-4 sm:flex">
                      <div className="h-px flex-1 border-t border-dotted border-[#8b1115]/35" />

                      <p
                        style={{
                          fontSize: "clamp(9px, 0.8vw, 11px)",
                        }}
                        className="text-[#20242b]/70"
                      >
                        {destination.coordinates}
                      </p>
                    </div>

                    <p
                      style={{
                        fontSize: "clamp(8px, 0.8vw, 10px)",
                      }}
                      className="
                        hidden
                        text-right
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-[#7d0b10]
                        sm:block
                      "
                    >
                      Someday ☆
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>

        <style>{`
          .city-strip {
            position: relative;
            height: clamp(260px, 30vw, 420px);
            overflow: hidden;
            border-radius: clamp(6px, 0.7vw, 8px);
            background: #ead3cc;
          }

          .city-track {
            display: flex;
            flex-direction: column;
            animation-name: city-scroll;
            animation-duration: var(--travel-duration);
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            animation-direction: var(--travel-direction);
          }

          .city-column:hover .city-track {
            animation-play-state: paused;
          }

          .city-photo {
            position: relative;
            width: 100%;
            height: clamp(130px, 15vw, 210px);
            flex: 0 0 clamp(130px, 15vw, 210px);
            overflow: hidden;
          }

          @keyframes city-scroll {
            from {
              transform: translateY(0);
            }

            to {
              transform: translateY(-50%);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .city-track {
              animation: none;
            }
          }
        `}</style>
      </div>
    </main>
  );
}