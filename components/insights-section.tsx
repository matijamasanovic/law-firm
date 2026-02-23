import Link from "next/link"

const insights = [
  {
    category: "Korporativno pravo",
    title: "Hoće li predložena pravila SEC-a o klimatskim rizicima preživjeti kontrolu Vrhovnog suda?",
  },
  {
    category: "Korporativno pravo",
    title: "Povjerenički računi koji predstavljaju više od 140 milijardi dolara imovine pod upravom",
  },
  {
    category: "Korporativno pravo",
    title: "Ključni koraci za zaštitu vašeg poslovanja od sajber prijetnji",
  },
  {
    category: "Članci",
    title: "Kako pravilno upravljati podacima i spriječiti sigurnosne povrede u vašoj kompaniji",
  },
]

const awards = [
  "American Association for Justice",
  "Super Lawyers",
  "Lexpert Ranked",
  "Best Lawyers",
]

export function InsightsSection() {
  return (
    <section className="border-t border-border">
      {/* Memberships and Awards */}
      <div className="border-b border-border">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 py-8">
          <p className="text-muted-foreground text-sm mb-6">Članstva i Nagrade</p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {awards.map((award, index) => (
              <span key={index} className="text-muted-foreground/70 font-serif text-lg md:text-xl">
                {award}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-[#d4cdc4]">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-12">
            Vijesti
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="bg-background p-6 flex flex-col min-h-[280px]"
              >
                <p className="text-xs text-muted-foreground mb-4">
                  {insight.category}
                </p>
                <h3 className="font-serif text-lg text-foreground leading-snug flex-grow">
                  {insight.title}
                </h3>
                <Link
                  href="#"
                  className="text-sm text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors mt-6"
                >
                  Pročitaj
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
