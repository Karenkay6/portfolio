import Image from "next/image";
import Link from "next/link";

const recentlyRead = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    cover: "/books/atomic-habits.jpg",
    rating: "5 / 5",
    category: "Personal Growth",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    cover: "/books/psychology-of-money.jpg",
    rating: "5 / 5",
    category: "Personal Growth",
  },
  {
    title: "The Defining Decade",
    author: "Meg Jay",
    cover: "/books/the-defining-decade.jpg",
    rating: "5 / 5",
    category: "Personal Growth",
  },
  {
    title: "The Mountain Is You",
    author: "Brianna Wiest",
    cover: "/books/the-mountain-is-you.jpg",
    rating: "4 / 5",
    category: "Personal Growth",
  },
  {
    title: "The Housemaid",
    author: "Freida McFadden",
    cover: "/books/the-housemaid.jpg",
    rating: "5 / 5",
    category: "Thriller",
  },
  {
    title: "Never Lie",
    author: "Freida McFadden",
    cover: "/books/never-lie.jpg",
    rating: "4.5 / 5",
    category: "Thriller",
  },
];

const wantToRead = [
  {
    title: "None of This Is True",
    author: "Lisa Jewell",
    cover: "/books/none-of-this-is-true.jpg",
  },
  {
    title: "Rock Paper Scissors",
    author: "Alice Feeney",
    cover: "/books/rock-paper-scissors.jpg",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    cover: "/books/deep-work.jpg",
  },
  {
    title: "Designing Your Life",
    author: "Bill Burnett and Dave Evans",
    cover: "/books/designing-your-life.jpg",
  },
  {
    title: "The Odyssey",
    author: "Homer",
    cover: "/books/the-odyssey.jpg",
  },
  {
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    cover: "/books/the-seven-husbands.jpg",
  },
];

export default function ReadingPage() {
  return (
    <main
      className="
        flex
        min-h-screen
        w-full
        justify-center
        overflow-x-hidden
        bg-[#f3b79c]
        py-8
        text-[#111111]
      "
    >
      {/* OUTER BORDER */}
      <div
        className="
          my-0
          w-[96%]
        max-w-[1450px]
          overflow-hidden
          rounded-8
          shadow-[0_24px_70px_rgba(48,13,13,0.10)]
        "
        style={{
          border: "5px solid rgb(139, 17, 21)",
          backgroundColor: "#FBE7E2",
        }}
      >
        {/* HEADER — DIRECTLY INSIDE THE OUTER BORDER */}
<header
  className="
    flex
    min-h-[100px]
    w-full
    items-center
    justify-between
    gap-6
    px-9
    md:px-12
  "
  style={{
    borderBottom: "1px solid #8b1115",
    paddingTop: "22px",
    paddingBottom: "28px",
  }}
>
          <Link
    href="/#beyond"
    className="
      inline-flex
      items-center
      justify-center
      rounded-full
      border-2
      border-[#65070b]
      bg-[#65070b]
      px-7
      py-3
      text-lg
      font-medium
      leading-none
      text-[#ffffff]
      shadow-[0_5px_12px_rgba(48,13,13,0.18)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-[#f8e7e1]
      hover:text-[#65070b]
      hover:shadow-lg
    "
  >
    ← Beyond Code
  </Link>

  <p
    className="
      hidden
      text-lg
      font-bold
      uppercase
      tracking-normal
      text-[#681317]
      sm:block
    "
  >
    Tochi&apos;s Bookshelf
  </p>
</header>

        {/* INNER CONTENT AREA */}
<div
  style={{
    paddingLeft: "48px",
    paddingRight: "48px",
  }}
>
  {/* INTRODUCTION */}
  <section className="px-8 py-10 md:px-10">
    <p className="text-lg font-semibold text-[#8b1115]">
      Beyond Code · Reading
    </p>

    <h1
      className="
        mt-3
        text-5xl
        font-bold
        leading-tight
        text-[#111111]
        md:text-6xl
      "
    >
      What Tochi is reading.
    </h1>

    <p className="mt-5 text-lg leading-8 text-[#20242b]">
      A growing collection of psychological thrillers,
      <br />
      personal-growth books, and stories that have challenged
      <br />
      my perspective or kept me reading far past bedtime.
    </p>
  </section>

  {/* INNER HORIZONTAL DIVIDER */}
<div
  className="
    mx-10
    border-t
    border-[#8b1115]
  "
/>

  {/* TOP READING STATS */}
  <section
  className="
    mx-10
    grid
    grid-cols-3
  "
>
    <div className="px-6 py-8 text-center">
      <p className="text-4xl font-bold text-[#111111]">12</p>

      <p
        className="
          mt-2
          text-sm
          font-semibold
          uppercase
          tracking-[0.12em]
          text-[#681317]
        "
      >
        Books Read
      </p>
    </div>

    <div
      className="
        border-y-2
        border-[#8b1115]
        px-6
        py-8
        text-center
        sm:border-x-2
        sm:border-y-0
      "
    >
      <p className="text-2xl font-bold text-[#111111]">
        Psychological Thriller
      </p>

      <p
        className="
          mt-2
          text-sm
          font-semibold
          uppercase
          tracking-[0.12em]
          text-[#681317]
        "
      >
        Favorite Genre
      </p>
    </div>

    <div className="px-6 py-8 text-center">
      <p className="text-4xl font-bold text-[#111111]">25</p>

      <p
        className="
          mt-2
          text-sm
          font-semibold
          uppercase
          tracking-[0.12em]
          text-[#681317]
        "
      >
        Yearly Goal
      </p>
    </div>
  </section>

  {/* INNER HORIZONTAL DIVIDER */}
 <div
  className="
    mx-10
    border-t
    border-[#8b1115]
  "
/>

  <section
  className="
    grid
    grid-cols-1
    gap-10
    py-8
    lg:grid-cols-[1.05fr_1.65fr]
  "
>
  {/* CURRENTLY READING */}
  <div>
    <p className="text-sm font-semibold text-[#8b1115]">
      Currently reading
    </p>

    <h2 className="mt-1 text-2xl font-bold text-[#111111]">
      On my nightstand right now
    </h2>

    <div
      className="
        mt-5
        grid
        grid-cols-[150px_1fr]
        gap-0
      "
    >
      <Image
        src="/books/the-silent-patient.jpg"
        alt="The Silent Patient book cover"
        width={300}
        height={450}
        priority
        className="
          h-[245px]
          w-[150px]
          object-cover
          shadow-[0_10px_25px_rgba(0,0,0,0.14)]
        "
      />

      <div
        className="
          flex
          min-w-0
          flex-col
          justify-center
          border
          border-[#8b1115]/40
          px-6
          py-5
        "
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8b1115]">
          Psychological Thriller
        </p>

        <h3 className="mt-2 text-3xl font-bold text-[#111111]">
          The Silent Patient
        </h3>

        <p className="mt-1 text-sm italic text-[#20242b]">
          Alex Michaelides
        </p>

        <p className="mt-5 text-sm leading-6 text-[#20242b]">
          A psychological thriller centered on a famous painter who stops
          speaking after the death of her husband and the therapist determined
          to understand why.
        </p>

        <div className="mt-5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.08em]">
              Reading Progress
            </p>

            <p className="text-sm font-bold text-[#8b1115]">68%</p>
          </div>

          <div className="mt-2 h-[9px] overflow-hidden rounded-full bg-[#cfb2a8]">
            <div className="h-full w-[68%] rounded-full bg-[#8b1115]" />
          </div>

          <p className="mt-3 text-xs text-[#20242b]/70">
            Started July 2026
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* RECENTLY FINISHED */}
  <div>
    <p className="text-sm font-semibold text-[#8b1115]">
      Recently finished
    </p>

    <h2 className="mt-1 text-2xl font-bold text-[#111111]">
      Books I&apos;ve read
    </h2>

    <div
      className="
        mt-5
        grid
        grid-cols-3
        gap-5
        xl:grid-cols-6
      "
    >
      {recentlyRead.map((book) => (
        <article key={book.title} className="min-w-0 text-center">
          <Image
            src={book.cover}
            alt={`${book.title} book cover`}
            width={220}
            height={330}
            className="
              h-[145px]
              w-full
              object-cover
              object-top
              shadow-[0_8px_18px_rgba(48,13,13,0.12)]
            "
          />

          <h3 className="mt-3 text-[11px] font-bold uppercase leading-4 text-[#111111]">
            {book.title}
          </h3>

          <p className="mt-1 text-xs italic leading-4 text-[#20242b]">
            {book.author}
          </p>

          <p className="mt-2 text-md font-bold text-[#8b1115]">
            {book.rating}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>


  <section
  className="
    grid
    grid-cols-1
    items-center
    gap-10
    py-7
    lg:grid-cols-[1.5fr_1fr]
  "
>
  {/* UP NEXT */}
  <div>
    <p className="text-sm font-semibold text-[#8b1115]">
      Up next
    </p>

    <h2 className="mt-1 text-2xl font-bold text-[#111111]">
      On my reading list
    </h2>

    <div
      className="
        mt-4
        grid
        grid-cols-3
        gap-5
        sm:grid-cols-6
      "
    >
      {wantToRead.map((book) => (
        <article key={book.title} className="min-w-0 text-center">
          <Image
            src={book.cover}
            alt={`${book.title} book cover`}
            width={180}
            height={270}
            className="
              h-[125px]
              w-full
              object-cover
              object-top
              shadow-[0_7px_16px_rgba(48,13,13,0.10)]
            "
          />

          <h3 className="mt-2 text-[9px] font-bold uppercase leading-3 text-[#111111]">
            {book.title}
          </h3>

          <p className="mt-1 text-[10px] italic leading-3 text-[#20242b]">
            {book.author}
          </p>
        </article>
      ))}
    </div>
  </div>

  {/* BUTTON AREA */}
  <div
    className="
      flex
      min-h-[150px]
      items-center
      justify-center
      border-t
      border-[#8b1115]/35
    "
  >
    <Link
      href="/#beyond"
      className="
        rounded-full
        bg-[#70090d]
        px-10
        py-3
        text-lg
        font-medium
        text-white
        shadow-[0_5px_12px_rgba(48,13,13,0.16)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-[#520609]
      "
    >
      Explore More Interests
    </Link>
  </div>
</section>
  {/* INNER HORIZONTAL DIVIDER */}
  <div
  className="
    mx-10
    border-t
    border-[#8b1115]
  "
/>

</div>
</div>
    </main>
  );
}