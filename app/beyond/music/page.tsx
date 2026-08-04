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
    <main className="flex min-h-screen w-full justify-center overflow-x-hidden bg-[#f3b79c] py-8 text-[#111111]">
      {/* OUTER BORDER */}
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

          <p className="hidden text-lg font-bold uppercase text-[#681317] sm:block">
            Tochi&apos;s Soundtrack
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
          <section className="pb-5 pt-7">
            <p className="text-base font-semibold text-[#7d0b10]">
              Beyond Code · Music
            </p>

            <h1 className="mt-3 text-5xl font-bold leading-[1.05] md:text-6xl">
              What Tochi is listening to.
            </h1>

            <p className="mt-4 max-w-[620px] text-base leading-7 text-[#20242b]">
              The songs that have soundtracked long coding sessions,
              <br />
              workouts, late-night drives, and everything in between.
            </p>
          </section>

          {/* DIVIDER */}
          <div className="border-t border-[#8b1115]/60" />

          {/* STATS */}
          <section className="grid grid-cols-1 sm:grid-cols-3">
            <div className="px-6 py-5 text-center">
              <p className="text-3xl font-bold text-[#7d0b10]">1,247</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.06em]">
                Songs
              </p>
            </div>

            <div className="border-y border-[#8b1115]/45 px-6 py-5 text-center sm:border-x sm:border-y-0">
              <p className="text-2xl font-bold text-[#7d0b10]">Afrobeats</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.06em]">
                Top Genre
              </p>
            </div>

            <div className="px-6 py-5 text-center">
              <p className="text-2xl font-bold text-[#7d0b10]">4+ Years</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.06em]">
                Listening
              </p>
            </div>
          </section>

          {/* DIVIDER */}
          <div className="border-t border-[#8b1115]/60" />

          {/* RECENTLY ON REPEAT */}
          <section className="py-5">
  <h2 className="text-xl font-bold text-[#7d0b10]">
    Recently on Repeat
  </h2>

  <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
    {repeatSongs.map((song) => (
      <article key={song.title} className="min-w-0">
        <Image
          src={song.cover}
          alt={`${song.title} cover`}
          width={260}
          height={260}
          className="
            aspect-square
            w-full
            rounded-[6px]
            object-cover
          "
        />

        <h3 className="mt-2 text-lg font-bold leading-tight">
          {song.title}
        </h3>

        <p className="mt-1 text-sm leading-tight text-[#20242b]">
          {song.artist}
        </p>
      </article>
    ))}
  </div>
</section>

          {/* DIVIDER */}
          <div className="border-t border-[#8b1115]/60" />

          {/* PLAYLISTS */}
          <section className="py-5">
  <h2 className="text-xl font-bold text-[#7d0b10]">
    Playlists that define me
  </h2>

  <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
    {playlists.map((playlist) => (
      <article
        key={playlist.title}
        className="
          group
          relative
          h-[180px]
          overflow-hidden
          rounded-[8px]
        "
      >
        <Image
          src={playlist.cover}
          alt={`${playlist.title} playlist cover`}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div
  className="
    absolute
    inset-x-0
    bottom-0
    flex
    h-full
    flex-col
    justify-end
    p-6
    pb-7
    text-white
  "
>
          <h3 className="text-base font-bold leading-tight">
            {playlist.title}
          </h3>

          <p className="mt-1 text-sm leading-tight">
            {playlist.description}
          </p>

          <p className="mt-2 text-sm leading-tight">
            {playlist.songs}
          </p>
        </div>
      </article>
    ))}
  </div>
</section>

        

          {/* SPOTIFY */}
          <section className="flex min-h-[72px] items-center justify-center gap-8 py-3">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1DB954] text-xl font-bold text-black">
                ♪
              </div>

              <p className="text-lg font-bold text-[#7d0b10]">
                Follow my full playlist on Spotify
              </p>
            </div>

            <div className="hidden h-10 border-l border-[#8b1115]/50 sm:block" />

            <Link
              href="https://open.spotify.com/user/31jrrpcco3vq53t4iath7wsdt7zy"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-[10px]
                bg-[#73080d]
                px-8
                py-3
                text-lg
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