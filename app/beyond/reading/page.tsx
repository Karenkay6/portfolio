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
          width: "min(calc(100vw - clamp(16px, 5vw, 64px)), 1180px)",
          border: "clamp(3px, 0.35vw, 5px) solid rgb(139, 17, 21)",
          borderRadius: "clamp(22px, 3vw, 34px)",
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
            minHeight: "clamp(76px, 9vw, 100px)",
            gap: "clamp(12px, 3vw, 24px)",
            paddingLeft: "clamp(16px, 4vw, 48px)",
            paddingRight: "clamp(16px, 4vw, 48px)",
            paddingTop: "clamp(16px, 2vw, 22px)",
            paddingBottom: "clamp(18px, 2.5vw, 28px)",
            borderBottom: "1px solid #8b1115",
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
              paddingLeft: "clamp(16px, 2.2vw, 28px)",
              paddingRight: "clamp(16px, 2.2vw, 28px)",
              paddingTop: "clamp(8px, 1vw, 12px)",
              paddingBottom: "clamp(8px, 1vw, 12px)",
              fontSize: "clamp(13px, 1.3vw, 18px)",
            }}
            className="
              inline-flex
              shrink-0
              items-center
              justify-center
              rounded-full
              border-2
              border-[#65070b]
              bg-[#65070b]
              font-medium
              leading-none
              text-white
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
            style={{
              fontSize: "clamp(13px, 1.4vw, 18px)",
            }}
            className="
              hidden
              text-right
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

        {/* INNER CONTENT */}
        <div
          style={{
            marginLeft: "clamp(18px, 5vw, 64px)",
            marginRight: "clamp(18px, 5vw, 64px)",
          }}
        >
          {/* INTRODUCTION */}
          <section
            style={{
              paddingTop: "clamp(30px, 4vw, 40px)",
              paddingBottom: "clamp(30px, 4vw, 40px)",
            }}
          >
            <p
              style={{
                fontSize: "clamp(15px, 1.5vw, 18px)",
              }}
              className="font-semibold text-[#8b1115]"
            >
              Beyond Code · Reading
            </p>

            <h1
              style={{
                marginTop: "clamp(10px, 1vw, 12px)",
                fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
              }}
              className="
                font-bold
                leading-tight
                text-[#111111]
              "
            >
              What Tochi is reading.
            </h1>

            <p
              style={{
                marginTop: "clamp(16px, 2vw, 20px)",
                fontSize: "clamp(15px, 1.5vw, 18px)",
                lineHeight: "1.75",
              }}
              className="
                max-w-[720px]
                text-[#20242b]
              "
            >
              A growing collection of psychological thrillers,
              personal-growth books, and stories that have challenged my
              perspective or kept me reading far past bedtime.
            </p>
          </section>

          <div className="w-full border-t-2 border-[#8b1115]" />

          {/* TOP STATS */}
          <section className="grid grid-cols-1 sm:grid-cols-3">
            <div
              style={{
                padding: "clamp(22px, 3vw, 32px)",
              }}
              className="text-center"
            >
              <p
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.25rem)",
                }}
                className="font-bold text-[#111111]"
              >
                12
              </p>

              <p
                style={{
                  marginTop: "clamp(6px, 1vw, 8px)",
                  fontSize: "clamp(11px, 1.1vw, 14px)",
                }}
                className="
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
              style={{
                padding: "clamp(22px, 3vw, 32px)",
              }}
              className="
                border-y-2
                border-[#8b1115]
                text-center
                sm:border-x-2
                sm:border-y-0
              "
            >
              <p
                style={{
                  fontSize: "clamp(1.25rem, 2.2vw, 1.5rem)",
                }}
                className="font-bold text-[#111111]"
              >
                Psychological Thriller
              </p>

              <p
                style={{
                  marginTop: "clamp(6px, 1vw, 8px)",
                  fontSize: "clamp(11px, 1.1vw, 14px)",
                }}
                className="
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#681317]
                "
              >
                Favorite Genre
              </p>
            </div>

            <div
              style={{
                padding: "clamp(22px, 3vw, 32px)",
              }}
              className="text-center"
            >
              <p
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.25rem)",
                }}
                className="font-bold text-[#111111]"
              >
                25
              </p>

              <p
                style={{
                  marginTop: "clamp(6px, 1vw, 8px)",
                  fontSize: "clamp(11px, 1.1vw, 14px)",
                }}
                className="
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

          <div className="w-full border-t-2 border-[#8b1115]" />

          {/* CURRENTLY READING */}
          <section
            style={{
              paddingTop: "clamp(30px, 4vw, 40px)",
              paddingBottom: "clamp(30px, 4vw, 40px)",
            }}
          >
            <p
              style={{
                fontSize: "clamp(15px, 1.5vw, 18px)",
              }}
              className="font-semibold text-[#8b1115]"
            >
              Currently Reading
            </p>

            <h2
              style={{
                marginTop: "clamp(6px, 1vw, 8px)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.25rem)",
              }}
              className="font-bold text-[#111111]"
            >
              On my nightstand right now
            </h2>

            <div
              style={{
                marginTop: "clamp(24px, 3vw, 32px)",
                gap: "clamp(28px, 5vw, 48px)",
              }}
              className="
                grid
                grid-cols-1
                items-center
                md:grid-cols-[minmax(150px,220px)_1fr]
              "
            >
              {/* CURRENT BOOK */}
              <div
                style={{
                  width: "min(60vw, 220px)",
                }}
                className="mx-auto"
              >
                <Image
                  src="/books/the-silent-patient.jpg"
                  alt="The Silent Patient book cover"
                  width={440}
                  height={660}
                  priority
                  className="
                    aspect-[2/3]
                    h-auto
                    w-full
                    object-cover
                    shadow-[0_16px_35px_rgba(0,0,0,0.18)]
                  "
                />
              </div>

              <div className="flex min-w-0 flex-col justify-center">
                <p
                  style={{
                    fontSize: "clamp(11px, 1.1vw, 14px)",
                  }}
                  className="
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-[#8b1115]
                  "
                >
                  Psychological Thriller
                </p>

                <h3
                  style={{
                    marginTop: "clamp(8px, 1vw, 12px)",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.25rem)",
                  }}
                  className="font-bold text-[#111111]"
                >
                  The Silent Patient
                </h3>

                <p
                  style={{
                    marginTop: "clamp(6px, 1vw, 8px)",
                    fontSize: "clamp(15px, 1.5vw, 18px)",
                  }}
                  className="italic text-[#20242b]"
                >
                  Alex Michaelides
                </p>

                {/* PROGRESS */}
                <div
                  style={{
                    marginTop: "clamp(22px, 3vw, 32px)",
                  }}
                >
                  <div className="flex items-center justify-between gap-5">
                    <p
                      style={{
                        fontSize: "clamp(14px, 1.3vw, 16px)",
                      }}
                      className="font-semibold text-[#111111]"
                    >
                      Reading Progress
                    </p>

                    <p
                      style={{
                        fontSize: "clamp(14px, 1.3vw, 16px)",
                      }}
                      className="font-bold text-[#8b1115]"
                    >
                      68%
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: "clamp(8px, 1vw, 12px)",
                    }}
                    className="
                      h-[10px]
                      w-full
                      overflow-hidden
                      rounded-full
                      bg-[#cfb2a8]
                    "
                  >
                    <div className="h-full w-[68%] rounded-full bg-[#8b1115]" />
                  </div>
                </div>

                {/* THOUGHTS */}
                <div
                  style={{
                    marginTop: "clamp(22px, 3vw, 32px)",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "clamp(15px, 1.5vw, 18px)",
                    }}
                    className="font-bold text-[#8b1115]"
                  >
                    Current Thoughts
                  </h4>

                  <p
                    style={{
                      marginTop: "clamp(6px, 1vw, 8px)",
                      fontSize: "clamp(15px, 1.5vw, 18px)",
                      lineHeight: "1.75",
                    }}
                    className="text-[#20242b]"
                  >
                    The story is tense, mysterious, and full of details that
                    make me question every character&apos;s intentions.
                  </p>
                </div>

                {/* QUOTE */}
                <div
                  style={{
                    marginTop: "clamp(20px, 3vw, 28px)",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "clamp(15px, 1.5vw, 18px)",
                    }}
                    className="font-bold text-[#8b1115]"
                  >
                    Favorite Quote
                  </h4>

                  <p
                    style={{
                      marginTop: "clamp(6px, 1vw, 8px)",
                      paddingLeft: "clamp(14px, 2vw, 20px)",
                      fontSize: "clamp(15px, 1.5vw, 18px)",
                      lineHeight: "1.75",
                    }}
                    className="
                      border-l-4
                      border-[#8b1115]
                      italic
                      text-[#20242b]
                    "
                  >
                    “We are made up of different parts, some good, some bad, and
                    a healthy mind can tolerate this ambivalence.”
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="w-full border-t-2 border-[#8b1115]" />

          {/* BOOKS I'VE LOVED */}
          <section
            style={{
              paddingTop: "clamp(30px, 4vw, 40px)",
              paddingBottom: "clamp(30px, 4vw, 40px)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
              }}
              className="font-bold text-[#111111]"
            >
              Books I&apos;ve Loved
            </h2>

            <div
              style={{
                marginTop: "clamp(24px, 3vw, 32px)",
                columnGap: "clamp(16px, 2.5vw, 24px)",
                rowGap: "clamp(28px, 4vw, 40px)",
              }}
              className="
                grid
                grid-cols-2
                sm:grid-cols-3
                lg:grid-cols-6
              "
            >
              {recentlyRead.map((book) => (
                <article key={book.title} className="group min-w-0">
                  <Image
                    src={book.cover}
                    alt={`${book.title} book cover`}
                    width={300}
                    height={450}
                    className="
                      aspect-[2/3]
                      h-auto
                      w-full
                      object-cover
                      object-top
                      shadow-[0_10px_25px_rgba(48,13,13,0.12)]
                      transition-all
                      duration-300
                      group-hover:-translate-y-2
                    "
                  />

                  <h3
                    style={{
                      marginTop: "clamp(10px, 1.3vw, 16px)",
                      fontSize: "clamp(13px, 1.2vw, 16px)",
                    }}
                    className="
                      font-bold
                      leading-snug
                      text-[#111111]
                    "
                  >
                    {book.title}
                  </h3>

                  <p
                    style={{
                      marginTop: "clamp(3px, 0.5vw, 4px)",
                      fontSize: "clamp(12px, 1vw, 14px)",
                    }}
                    className="italic text-[#20242b]"
                  >
                    {book.author}
                  </p>

                  <p
                    style={{
                      marginTop: "clamp(8px, 1vw, 12px)",
                      fontSize: "clamp(13px, 1.1vw, 16px)",
                    }}
                    className="font-bold text-[#8b1115]"
                  >
                    {book.rating}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <div className="w-full border-t-2 border-[#8b1115]" />

          {/* WANT TO READ */}
          <section
            style={{
              paddingTop: "clamp(30px, 4vw, 40px)",
              paddingBottom: "clamp(30px, 4vw, 40px)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
              }}
              className="font-bold text-[#111111]"
            >
              Want to Read
            </h2>

            <div
              style={{
                marginTop: "clamp(24px, 3vw, 32px)",
                columnGap: "clamp(16px, 2.5vw, 24px)",
                rowGap: "clamp(28px, 4vw, 40px)",
              }}
              className="
                grid
                grid-cols-2
                sm:grid-cols-3
                lg:grid-cols-6
              "
            >
              {wantToRead.map((book) => (
                <article key={book.title} className="group min-w-0">
                  <Image
                    src={book.cover}
                    alt={`${book.title} book cover`}
                    width={300}
                    height={450}
                    className="
                      aspect-[2/3]
                      h-auto
                      w-full
                      object-cover
                      object-top
                      shadow-[0_10px_25px_rgba(48,13,13,0.10)]
                      transition-all
                      duration-300
                      group-hover:-translate-y-2
                    "
                  />

                  <h3
                    style={{
                      marginTop: "clamp(10px, 1.3vw, 16px)",
                      fontSize: "clamp(13px, 1.2vw, 16px)",
                    }}
                    className="
                      font-bold
                      leading-snug
                      text-[#111111]
                    "
                  >
                    {book.title}
                  </h3>

                  <p
                    style={{
                      marginTop: "clamp(3px, 0.5vw, 4px)",
                      fontSize: "clamp(12px, 1vw, 14px)",
                    }}
                    className="italic text-[#20242b]"
                  >
                    {book.author}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <div className="w-full border-t-2 border-[#8b1115]" />

          {/* READING STATS */}
          <section
            style={{
              paddingTop: "clamp(30px, 4vw, 40px)",
              paddingBottom: "clamp(30px, 4vw, 40px)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
              }}
              className="font-bold text-[#111111]"
            >
              Reading Stats
            </h2>

            <div
              style={{
                marginTop: "clamp(24px, 3vw, 32px)",
              }}
              className="
                grid
                grid-cols-1
                sm:grid-cols-3
              "
            >
              <div
                style={{
                  padding: "clamp(22px, 3vw, 32px)",
                }}
                className="text-center"
              >
                <p
                  style={{
                    fontSize: "clamp(1.8rem, 3.5vw, 2.25rem)",
                  }}
                  className="font-bold text-[#8b1115]"
                >
                  12
                </p>

                <p className="mt-2 font-semibold">Books Read</p>
              </div>

              <div
                style={{
                  padding: "clamp(22px, 3vw, 32px)",
                }}
                className="
                  border-y-2
                  border-[#8b1115]
                  text-center
                  sm:border-x-2
                  sm:border-y-0
                "
              >
                <p
                  style={{
                    fontSize: "clamp(1.8rem, 3.5vw, 2.25rem)",
                  }}
                  className="font-bold text-[#8b1115]"
                >
                  25
                </p>

                <p className="mt-2 font-semibold">Yearly Goal</p>
              </div>

              <div
                style={{
                  padding: "clamp(22px, 3vw, 32px)",
                }}
                className="text-center"
              >
                <p
                  style={{
                    fontSize: "clamp(1.25rem, 2.2vw, 1.5rem)",
                  }}
                  className="font-bold text-[#8b1115]"
                >
                  Psychological Thriller
                </p>

                <p className="mt-2 font-semibold">Favorite Genre</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}