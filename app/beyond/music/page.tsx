import Image from "next/image";
import Link from "next/link";

const repeatSongs = [
  {
    title: "eternal sunshine",
    artist: "Ariana Grande",
    cover: "/music/eternal-sunshine.jpg",
  },
  {
    title: "M$NEY",
    artist: "Asake",
    cover: "/music/money.jpg",
  },
  {
    title: "B'DAY",
    artist: "Beyoncé",
    cover: "/music/bday.jpg",
  },
  {
    title: "NEVER ENOUGH",
    artist: "Daniel Caesar",
    cover: "/music/never-enough.jpg",
  },
  {
    title: "Off the Wall",
    artist: "Michael Jackson",
    cover: "/music/off-the-wall.jpg",
  },
  {
    title: "The Message",
    artist: "Minister GUC",
    cover: "/music/the-message.jpg",
  },
];

const playlists = [
  {
    title: "Late Night Coding",
    description: "Focus · Deep Work",
    songs: "42 songs",
    cover: "/music/late-night-coding.jpg",
  },
  {
    title: "Gym Energy",
    description: "Workout · Motivation",
    songs: "61 songs",
    cover: "/music/gym-energy.jpg",
  },
  {
    title: "Sunday Reset",
    description: "Relax · Unwind",
    songs: "38 songs",
    cover: "/music/sunday-reset.jpg",
  },
  {
    title: "Lagos Vibes",
    description: "Afrobeats · Vibes",
    songs: "55 songs",
    cover: "/music/lagos-vibes.jpg",
  },
  {
    title: "Road Trip",
    description: "Drive · Chill",
    songs: "47 songs",
    cover: "/music/road-trip.jpg",
  },
  {
    title: "Good Morning",
    description: "Positive · Fresh",
    songs: "33 songs",
    cover: "/music/good-morning.jpg",
  },
];

export default function MusicPage() {
  return (
    <main
      style={{
        paddingTop: "clamp(12px, 2.5vw, 32px)",
        paddingBottom: "clamp(12px, 2.5vw, 32px)",
        paddingLeft: "clamp(8px, 2.5vw, 32px)",
        paddingRight: "clamp(8px, 2.5vw, 32px)",
      }}
      className="
        flex
        min-h-screen
        w-full
        justify-center
        overflow-x-hidden
        bg-[#f3b79c]
        text-[#111111]
      "
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
            className="
              hidden
              font-bold
              uppercase
              text-[#681317]
              sm:block
            "
          >
            Tochi&apos;s Soundtrack
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
              paddingTop: "clamp(24px, 3vw, 28px)",
              paddingBottom: "clamp(18px, 2.5vw, 20px)",
            }}
          >
            <p
              style={{
                fontSize: "clamp(14px, 1.3vw, 16px)",
              }}
              className="font-semibold text-[#7d0b10]"
            >
              Beyond Code · Music
            </p>

            <h1
              style={{
                marginTop: "clamp(10px, 1vw, 12px)",
                fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
              }}
              className="
                font-bold
                leading-[1.05]
              "
            >
              What Tochi is listening to.
            </h1>

            <p
              style={{
                marginTop: "clamp(14px, 1.5vw, 16px)",
                fontSize: "clamp(14px, 1.3vw, 16px)",
                lineHeight: "1.75",
              }}
              className="
                max-w-[620px]
                text-[#20242b]
              "
            >
              The songs that have soundtracked long coding sessions, workouts,
              late-night drives, and everything in between.
            </p>
          </section>

          {/* DIVIDER */}
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
                  fontSize: "clamp(1.7rem, 3vw, 1.875rem)",
                }}
                className="font-bold text-[#7d0b10]"
              >
                1,247
              </p>

              <p
                style={{
                  marginTop: "clamp(4px, 0.5vw, 6px)",
                  fontSize: "clamp(10px, 0.9vw, 12px)",
                }}
                className="
                  font-semibold
                  uppercase
                  tracking-[0.06em]
                "
              >
                Songs
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
                  fontSize: "clamp(1.35rem, 2.4vw, 1.5rem)",
                }}
                className="font-bold text-[#7d0b10]"
              >
                Afrobeats
              </p>

              <p
                style={{
                  marginTop: "clamp(4px, 0.5vw, 6px)",
                  fontSize: "clamp(10px, 0.9vw, 12px)",
                }}
                className="
                  font-semibold
                  uppercase
                  tracking-[0.06em]
                "
              >
                Top Genre
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
                  fontSize: "clamp(1.35rem, 2.4vw, 1.5rem)",
                }}
                className="font-bold text-[#7d0b10]"
              >
                4+ Years
              </p>

              <p
                style={{
                  marginTop: "clamp(4px, 0.5vw, 6px)",
                  fontSize: "clamp(10px, 0.9vw, 12px)",
                }}
                className="
                  font-semibold
                  uppercase
                  tracking-[0.06em]
                "
              >
                Listening
              </p>
            </div>
          </section>

          {/* DIVIDER */}
          <div className="border-t border-[#8b1115]/60" />

          {/* RECENTLY ON REPEAT */}
          <section
            style={{
              paddingTop: "clamp(20px, 3vw, 28px)",
              paddingBottom: "clamp(20px, 3vw, 28px)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.25rem)",
              }}
              className="font-bold text-[#7d0b10]"
            >
              Recently on Repeat
            </h2>

            <div
              style={{
                marginTop: "clamp(16px, 2vw, 20px)",
                columnGap: "clamp(14px, 2.5vw, 32px)",
                rowGap: "clamp(18px, 3vw, 28px)",
              }}
              className="
                grid
                grid-cols-2
                sm:grid-cols-3
                lg:grid-cols-6
              "
            >
              {repeatSongs.map((song) => (
                <article key={song.title} className="min-w-0">
                  <Image
                    src={song.cover}
                    alt={`${song.title} cover`}
                    width={260}
                    height={260}
                    className="
                      aspect-square
                      h-auto
                      w-full
                      rounded-[6px]
                      object-cover
                    "
                  />

                  <h3
                    style={{
                      marginTop: "clamp(7px, 1vw, 10px)",
                      fontSize: "clamp(14px, 1.3vw, 18px)",
                    }}
                    className="
                      font-bold
                      leading-tight
                    "
                  >
                    {song.title}
                  </h3>

                  <p
                    style={{
                      marginTop: "clamp(3px, 0.5vw, 5px)",
                      fontSize: "clamp(12px, 1vw, 14px)",
                    }}
                    className="
                      leading-tight
                      text-[#20242b]
                    "
                  >
                    {song.artist}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* DIVIDER */}
          <div className="border-t border-[#8b1115]/60" />

          {/* PLAYLISTS */}
          <section
            style={{
              paddingTop: "clamp(20px, 3vw, 28px)",
              paddingBottom: "clamp(20px, 3vw, 28px)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.25rem)",
              }}
              className="font-bold text-[#7d0b10]"
            >
              Playlists that define me
            </h2>

            <div
              style={{
                marginTop: "clamp(16px, 2vw, 20px)",
                gap: "clamp(16px, 2vw, 24px)",
              }}
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-6
              "
            >
              {playlists.map((playlist) => (
                <article
                  key={playlist.title}
                  style={{
                    minHeight: "clamp(170px, 18vw, 220px)",
                  }}
                  className="
                    group
                    relative
                    aspect-[4/3]
                    overflow-hidden
                    rounded-[8px]
                  "
                >
                  <Image
                    src={playlist.cover}
                    alt={`${playlist.title} playlist cover`}
                    fill
                    sizes="
                      (max-width: 640px) 90vw,
                      (max-width: 1024px) 45vw,
                      (max-width: 1280px) 30vw,
                      16vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-[1.04]
                    "
                  />

                  <div className="absolute inset-0 bg-black/40" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div
                    style={{
                      padding: "clamp(16px, 2vw, 24px)",
                      paddingBottom: "clamp(18px, 2.2vw, 28px)",
                    }}
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      flex
                      h-full
                      flex-col
                      justify-end
                      text-white
                    "
                  >
                    <h3
                      style={{
                        fontSize: "clamp(14px, 1.2vw, 16px)",
                      }}
                      className="
                        font-bold
                        leading-tight
                      "
                    >
                      {playlist.title}
                    </h3>

                    <p
                      style={{
                        marginTop: "clamp(3px, 0.5vw, 5px)",
                        fontSize: "clamp(12px, 1vw, 14px)",
                      }}
                      className="leading-tight"
                    >
                      {playlist.description}
                    </p>

                    <p
                      style={{
                        marginTop: "clamp(6px, 0.8vw, 8px)",
                        fontSize: "clamp(12px, 1vw, 14px)",
                      }}
                      className="leading-tight"
                    >
                      {playlist.songs}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* SPOTIFY */}
          <section
            style={{
              minHeight: "clamp(90px, 10vw, 120px)",
              gap: "clamp(20px, 4vw, 32px)",
              paddingTop: "clamp(20px, 3vw, 28px)",
              paddingBottom: "clamp(20px, 3vw, 28px)",
            }}
            className="
              flex
              flex-col
              items-center
              justify-center
              sm:flex-row
            "
          >
            <div
              style={{
                gap: "clamp(10px, 1.5vw, 16px)",
              }}
              className="
                flex
                items-center
                text-center
                sm:text-left
              "
            >
              <div
                style={{
                  width: "clamp(36px, 4vw, 42px)",
                  height: "clamp(36px, 4vw, 42px)",
                  fontSize: "clamp(16px, 1.5vw, 20px)",
                }}
                className="
                  flex
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#1DB954]
                  font-bold
                  text-black
                "
              >
                ♪
              </div>

              <p
                style={{
                  fontSize: "clamp(15px, 1.5vw, 18px)",
                }}
                className="font-bold text-[#7d0b10]"
              >
                Follow my full playlist on Spotify
              </p>
            </div>

            <div className="hidden h-10 border-l border-[#8b1115]/50 sm:block" />

            <Link
              href="https://open.spotify.com/user/31jrrpcco3vq53t4iath7wsdt7zy"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                paddingLeft: "clamp(20px, 3vw, 32px)",
                paddingRight: "clamp(20px, 3vw, 32px)",
                paddingTop: "clamp(9px, 1vw, 12px)",
                paddingBottom: "clamp(9px, 1vw, 12px)",
                fontSize: "clamp(14px, 1.4vw, 18px)",
              }}
              className="
                rounded-[10px]
                bg-[#73080d]
                font-medium
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#570609]
              "
            >
              Open on Spotify ↗
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}