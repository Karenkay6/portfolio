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
      className={`${inter.className} flex min-h-screen w-full justify-center overflow-x-hidden bg-[#f3b79c] py-8 text-[#111111]`}
    >
      <div
        className="
          w-[96%]
          max-w-[1450px]
          overflow-hidden
          rounded-[14px]
          shadow-[0_24px_70px_rgba(48,13,13,0.10)]
        "
        style={{
          border: "4px solid #7d0b10",
          backgroundColor: "#FBE7E2",
        }}
      >
        {/* HEADER */}
        <header
          className="
            flex
            min-h-[76px]
            w-full
            items-center
            justify-between
            gap-6
            px-8
            md:px-10
          "
          style={{
            borderBottom: "1px solid rgba(125,11,16,0.55)",
          }}
        >
          <Link
            href="/#beyond"
            className="
              inline-flex
              items-center
              justify-center
              rounded-[12px]
              bg-[#73080d]
              px-6
              py-3
              text-base
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
            className={`${libre.className} hidden text-lg font-bold uppercase text-[#681317] sm:block`}
          >
            Tochi&apos;s Passport
          </p>
        </header>

        {/* INNER CONTENT */}
        <div
          style={{
            paddingLeft: "48px",
            paddingRight: "48px",
          }}
        >
          {/* INTRO */}
          <section className="pb-6 pt-8">
            <p
              className={`${libre.className} text-base font-bold text-[#7d0b10]`}
            >
              Beyond Code · Travel
            </p>

            <h1
              className={`${libre.className} mt-4 max-w-[760px] text-5xl font-bold leading-[1.08] md:text-6xl`}
            >
              Places I&apos;ve been,
              <br />
              memories I keep.
            </h1>

            <p className="mt-5 max-w-[620px] text-base leading-7 text-[#20242b]">
              Collecting moments, cultures, and city lights.
              <br />
              Every trip adds a new perspective.
            </p>
          </section>

          <div className="border-t border-[#8b1115]/60" />

          {/* STATS */}
          <section className="grid grid-cols-1 sm:grid-cols-3">
            <div className="px-6 py-5 text-center">
              <p
                className={`${libre.className} text-3xl font-bold text-[#7d0b10]`}
              >
                10
              </p>

              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.06em]">
                Cities Visited
              </p>
            </div>

            <div className="border-y border-[#8b1115]/45 px-6 py-5 text-center sm:border-x sm:border-y-0">
              <p
                className={`${libre.className} text-3xl font-bold text-[#7d0b10]`}
              >
                7
              </p>

              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.06em]">
                States
              </p>
            </div>

            <div className="px-6 py-5 text-center">
              <p
                className={`${libre.className} text-4xl font-bold text-[#7d0b10]`}
              >
                ∞
              </p>

              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.06em]">
                Memories
              </p>
            </div>
          </section>

          <div className="border-t border-[#8b1115]/60" />

          {/* VISITED CITIES */}
          <section className="py-7">
            <h2
              className={`${libre.className} text-xl font-bold text-[#7d0b10]`}
            >
              I&apos;ve been to
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
              {visitedCities.map((city, cityIndex) => {
                const repeatedImages = [...city.images, ...city.images];

                const trackStyle = {
                  "--travel-duration": `${17 + cityIndex * 1.2}s`,
                  "--travel-direction":
                    cityIndex % 2 === 0 ? "normal" : "reverse",
                } as CSSProperties;

                return (
                  <article key={city.name} className="city-column group min-w-0">
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
                                (imageIndex % 3) + 1
                              }`}
                              fill
                              sizes="(max-width: 768px) 45vw, 10vw"
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

                    <p className="mt-3 min-h-[32px] text-center text-[11px] font-semibold uppercase leading-4 tracking-[0.05em]">
                      {city.name}
                    </p>
                  </article>
                );
              })}
            </div>

            <p
              className={`${libre.className} mt-5 text-center text-sm text-[#7d0b10]`}
            >
              ☝ Hover over a city to pause
            </p>
          </section>

          <div className="border-t border-[#8b1115]/60" />

          {/* FUTURE DESTINATIONS */}
          <section className="py-7">
            <h2
              className={`${libre.className} text-xl font-bold text-[#7d0b10]`}
            >
              Where I&apos;m going next
            </h2>

            <div className="mt-5 grid gap-8 lg:grid-cols-[180px_1fr]">
              {/* PASSPORT STAMP */}
              <div className="hidden items-center justify-center lg:flex">
                <div
                  className="
                    flex
                    h-36
                    w-36
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
                  <p className="text-3xl">✈</p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
                    Adventure
                  </p>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                    Awaits
                  </p>
                </div>
              </div>

              {/* DESTINATION LIST */}
              <div>
                {futureDestinations.map((destination) => (
                  <article
                    key={destination.number}
                    className="
                      group
                      grid
                      grid-cols-[42px_1fr]
                      items-center
                      border-b
                      border-[#8b1115]/45
                      py-3
                      transition-all
                      duration-300
                      hover:pl-3
                      sm:grid-cols-[50px_180px_1fr_100px]
                    "
                  >
                    <p
                      className={`${libre.className} text-2xl text-[#7d0b10]`}
                    >
                      {destination.number}
                    </p>

                    <h3
                      className={`${libre.className} text-base font-bold uppercase`}
                    >
                      {destination.city}
                    </h3>

                    <div className="hidden items-center gap-4 sm:flex">
                      <div className="h-px flex-1 border-t border-dotted border-[#8b1115]/35" />

                      <p className="text-[11px] text-[#20242b]/70">
                        {destination.coordinates}
                      </p>
                    </div>

                    <p className="hidden text-right text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7d0b10] sm:block">
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
            height: 420px;
            overflow: hidden;
            border-radius: 8px;
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
            height: 210px;
            flex: 0 0 210px;
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

          @media (max-width: 1024px) {
            .city-strip {
              height: 360px;
            }

            .city-photo {
              height: 180px;
              flex-basis: 180px;
            }
          }

          @media (max-width: 640px) {
            .city-strip {
              height: 320px;
            }

            .city-photo {
              height: 160px;
              flex-basis: 160px;
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