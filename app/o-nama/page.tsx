import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "O Nama | Advokatska kancelarija",
  description: "Saznajte više o Advokatska kancelarija advokatskoj kancelariji, našoj istoriji, vrijednostima i posvećenosti klijentima.",
}

const values = [
  {
    title: "Integritet",
    description: "Naša praksa je zasnovana na neprikosnovenom integritetu. Svaki savjet koji dajemo je potpuno iskren i u najboljem interesu klijenta.",
  },
  {
    title: "Posvećenost",
    description: "Posvećujemo se svakom slučaju sa punom pažnjom i energijom, tretirajući svaki predmet kao da je jedini.",
  },
  {
    title: "Izvrsnost",
    description: "Težimo ka izvrsnosti u svemu što radimo - od pravne analize do komunikacije sa klijentima i pred sudom.",
  },
  {
    title: "Inovacija",
    description: "Koristimo najnovije pravne strategije i tehnologije kako bismo našim klijentima pružili najeffektivniju zastupljenost.",
  },
]

export default function ONamaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="O Nama"
          subtitle="Tradicija izvrsnosti u pravu od 1998. godine"
          imageSrc="/images/office-interior.jpg"
          imageAlt="Kancelarija advokatske firme Advokatska kancelarija"
        />

        {/* Intro Section */}
        <section className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-6">
              <p className="text-[#b8860b] text-sm">Naša Priča</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                Više od Dvije Decenije Pravne Izvrsnosti
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Advokatska kancelarija je osnovan 1998. godine sa jasnom vizijom - pružiti klijentima pravne usluge najvišeg kvaliteta sa individualnim pristupom. Od tada smo izrasli u jednu od najuglednijih advokatskih kancelarija u regionu.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Naš tim od preko 56 pravnih stručnjaka pokriva sve oblasti prava, sa posebnim fokusom na korporativno pravo, međunarodno trgovinsko pravo i antimonopolsku regulativu. Radimo sa klijentima širom Balkana i Evrope.
              </p>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/team-meeting.jpg"
                alt="Tim advokata na sastanku"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#1a2332] text-white text-xs px-2 py-1 font-medium">
                Av
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="border-t border-border">
          <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
            <p className="text-[#b8860b] text-sm mb-4">Naše Vrijednosti</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">
              Principi Koji Nas Vode
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="space-y-4">
                  <div className="w-12 h-0.5 bg-[#b8860b]" />
                  <h3 className="font-serif text-xl text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#1a2332]">
          <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-20">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              <div>
                <p className="font-serif text-4xl md:text-5xl text-white mb-2">25+</p>
                <p className="text-white/60 text-sm">Godina Iskustva</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl text-white mb-2">56</p>
                <p className="text-white/60 text-sm">Pravnih Stručnjaka</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl text-white mb-2">3</p>
                <p className="text-white/60 text-sm">Kancelarije u Regionu</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl text-white mb-2">100+</p>
                <p className="text-white/60 text-sm">Zadovoljnih Klijenata Godišnje</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
