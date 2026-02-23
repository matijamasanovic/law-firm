import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vijesti | Advokatska kancelarija",
  description: "Najnovije vijesti, pravne analize i stručni članci tima advokatske kancelarije Advokatska kancelarija.",
}

const featuredArticle = {
  category: "Korporativno Pravo",
  title: "Ključne Promjene u Regulativi EU koje Utiču na Kompanije u Regionu",
  description: "Analiza najnovijih regulatornih promjena u Evropskoj uniji i njihov uticaj na poslovne subjekte u Crnoj Gori, Srbiji i Hrvatskoj. Saznajte kako se pripremiti za nove zahtjeve.",
  date: "15. Februar 2026",
  author: "Marko Petrović",
  image: "/images/lawyer-working.jpg",
}

const articles = [
  {
    category: "Korporativno Pravo",
    title: "Hoće li predložena pravila o klimatskim rizicima preživjeti sudsku kontrolu?",
    date: "10. Februar 2026",
    author: "Ana Đurović",
  },
  {
    category: "Antimonopolska Regulativa",
    title: "Povjerenički računi koji predstavljaju više od 140 milijardi dolara imovine pod upravom",
    date: "5. Februar 2026",
    author: "Dragan Vujović",
  },
  {
    category: "Digitalno Pravo",
    title: "Ključni koraci za zaštitu vašeg poslovanja od sajber prijetnji u 2026. godini",
    date: "28. Januar 2026",
    author: "Milica Radović",
  },
  {
    category: "Radno Pravo",
    title: "Nove obaveze poslodavaca prema Zakonu o radu - šta morate znati",
    date: "20. Januar 2026",
    author: "Stefan Nikolić",
  },
  {
    category: "Pravo Nekretnina",
    title: "Promjene u regulativi za strane investitore na tržištu nekretnina",
    date: "15. Januar 2026",
    author: "Jelena Kovačević",
  },
  {
    category: "Poresko Pravo",
    title: "Kako pravilno planirati poreske obaveze za međunarodne transakcije",
    date: "8. Januar 2026",
    author: "Nikola Đorđević",
  },
]

export default function VijestiPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Vijesti"
          subtitle="Pravne analize i stručni članci našeg tima"
          imageSrc="/images/hero-lawyers.jpg"
          imageAlt="Advokati u razgovoru"
        />

        {/* Featured Article */}
        <section className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
          <p className="text-[#b8860b] text-sm mb-8">Izdvojeno</p>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="relative aspect-[4/3]">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#1a2332] text-white text-xs px-2 py-1 font-medium">
                Av
              </div>
            </div>
            <div className="space-y-6 flex flex-col justify-center">
              <p className="text-xs text-muted-foreground">{featuredArticle.category}</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-snug">
                {featuredArticle.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {featuredArticle.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{featuredArticle.author}</span>
                <span className="text-border">|</span>
                <span>{featuredArticle.date}</span>
              </div>
              <Link
                href="#"
                className="text-foreground text-sm underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                Pročitaj Cijeli Članak
              </Link>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="border-t border-border">
          <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
            <p className="text-[#b8860b] text-sm mb-4">Svi Članci</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">
              Najnovije Vijesti
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <div
                  key={article.title}
                  className="border border-border p-6 flex flex-col min-h-[280px] hover:bg-muted/30 transition-colors group"
                >
                  <p className="text-xs text-muted-foreground mb-4">{article.category}</p>
                  <h3 className="font-serif text-lg text-foreground leading-snug flex-grow">
                    {article.title}
                  </h3>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{article.author}</span>
                      <span className="text-border">|</span>
                      <span>{article.date}</span>
                    </div>
                    <Link
                      href="#"
                      className="text-sm text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors inline-block"
                    >
                      Pročitaj
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
