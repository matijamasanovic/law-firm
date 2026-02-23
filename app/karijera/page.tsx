import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Karijera | Advokatska kancelarija",
  description: "Pridružite se timu Advokatska kancelarija advokatske kancelarije. Pogledajte otvorene pozicije i mogućnosti za razvoj karijere.",
}

const openPositions = [
  {
    title: "Viši Saradnik - Korporativno Pravo",
    location: "Podgorica",
    type: "Puno radno vrijeme",
    description: "Tražimo iskusnog pravnika sa najmanje 5 godina iskustva u korporativnom pravu za rad na složenim M&A transakcijama.",
  },
  {
    title: "Saradnik - Međunarodno Trgovinsko Pravo",
    location: "Beograd",
    type: "Puno radno vrijeme",
    description: "Otvorena pozicija za pravnika sa iskustvom u međunarodnoj trgovini i prekograničnim transakcijama.",
  },
  {
    title: "Pravni Pripravnik",
    location: "Podgorica, Beograd",
    type: "Pripravnički program",
    description: "Program pripravništva za svježe diplomirane pravnike koji žele da započnu karijeru u vrhunskom advokatskom timu.",
  },
  {
    title: "Saradnik - Digitalno Pravo",
    location: "Zagreb",
    type: "Puno radno vrijeme",
    description: "Tražimo pravnika sa iskustvom u oblasti zaštite podataka, GDPR-a i sajber bezbjednosti.",
  },
]

const benefits = [
  {
    title: "Profesionalni Razvoj",
    description: "Pristup redovnim obukama, seminarima i programima mentorstva od strane vodećih stručnjaka u regionu.",
  },
  {
    title: "Međunarodno Iskustvo",
    description: "Mogućnost rada sa klijentima širom regiona i učešća u prekograničnim projektima.",
  },
  {
    title: "Konkurentna Kompenzacija",
    description: "Atraktivan paket kompenzacije koji uključuje osnovnu platu, bonuse i beneficije.",
  },
  {
    title: "Balans Posla i Života",
    description: "Fleksibilno radno okruženje koje poštuje privatni život i porodične obaveze zaposlenih.",
  },
]

export default function KarijeraPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Karijera"
          subtitle="Gradite svoju karijeru sa vodećim pravnim timom"
          imageSrc="/images/team-meeting.jpg"
          imageAlt="Tim advokata"
        />

        {/* Why Join Us */}
        <section className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-[#b8860b] text-sm mb-4">Zašto Advokatska kancelarija?</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Izgradite Karijeru koja Ima Značenje
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              U Avvocatu vjerujemo da su naši ljudi naš najvredniji resurs. Nudimo okruženje koje podstiče profesionalni rast, kreativnost i izvrsnost, dok istovremeno njegovamo kulturu poštovanja i saradnje.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="space-y-4">
                <div className="w-12 h-0.5 bg-[#b8860b]" />
                <h3 className="font-serif text-xl text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="border-t border-border">
          <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
            <p className="text-[#b8860b] text-sm mb-4">Otvorene Pozicije</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">
              Trenutne Mogućnosti
            </h2>

            <div className="space-y-0">
              {openPositions.map((position) => (
                <div
                  key={position.title}
                  className="border-b border-border py-8 group hover:bg-muted/30 transition-colors px-4 -mx-4"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>{position.location}</span>
                        <span className="text-border">|</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <Link
                      href="/kontakt"
                      className="text-sm text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors flex-shrink-0"
                    >
                      Prijavi se
                    </Link>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                    {position.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1a2332]">
          <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl md:text-4xl text-white">
                  Ne Vidite Odgovarajuću Poziciju?
                </h2>
                <p className="text-white/60 max-w-md">
                  Uvijek smo zainteresovani za talentovane pravnike. Pošaljite nam svoju biografiju i motivaciono pismo.
                </p>
              </div>
              <Link
                href="/kontakt"
                className="group inline-flex items-center justify-between bg-white text-[#1a2332] px-6 py-4 min-w-[250px] hover:bg-white/90 transition-colors self-start"
              >
                <span className="font-medium">Kontaktirajte Nas</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
