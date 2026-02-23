import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Firma | Advokatska kancelarija",
  description: "Upoznajte advokatsku kancelariju Advokatska kancelarija - našu strukturu, pristup i globalnu praksu.",
}

const milestones = [
  { year: "1998", event: "Osnivanje Advokatska kancelarija advokatske kancelarije u Podgorici" },
  { year: "2005", event: "Otvaranje kancelarije u Beogradu i širenje na tržište Srbije" },
  { year: "2010", event: "Rangiranje među top 10 advokatskih kancelarija u regionu" },
  { year: "2015", event: "Otvaranje kancelarije u Zagrebu i uspostavljanje međunarodne prakse" },
  { year: "2020", event: "Pokretanje posebnog odjela za digitalno pravo i sajber bezbjednost" },
  { year: "2024", event: "Proširenje tima na 56 pravnih stručnjaka i otvaranje nove moderne kancelarije" },
]

export default function FirmaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Firma"
          subtitle="Struktura, pristup i globalna praksa"
          imageSrc="/images/office-interior.jpg"
          imageAlt="Kancelarija advokatske firme Advokatska kancelarija"
        />

        {/* Our Approach */}
        <section className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-6">
              <p className="text-[#b8860b] text-sm">Naš Pristup</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                Individualni Pristup Svakom Klijentu
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Vjerujemo da svaki klijent zaslužuje potpunu posvećenost i prilagođenu strategiju. Naš pristup kombinuje duboku pravnu ekspertizu sa razumijevanjem poslovnih ciljeva klijenata.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Radimo zajedno kao jedan tim, koristeći znanje i iskustvo iz različitih oblasti prava kako bismo pružili sveobuhvatna rješenja za najsloženije pravne izazove.
              </p>
              <Link
                href="/kontakt"
                className="group inline-flex items-center justify-between bg-[#1a2332] text-white px-6 py-4 min-w-[250px] hover:bg-[#2a3342] transition-colors"
              >
                <span className="font-medium">Kontaktirajte Nas</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/lawyer-woman.jpg"
                alt="Advokat u modernoj kancelariji"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="border-t border-border">
          <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
            <p className="text-[#b8860b] text-sm mb-4">Istorija</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">
              Naš Put
            </h2>

            <div className="space-y-0">
              {milestones.map((milestone) => (
                <div
                  key={milestone.year}
                  className="flex gap-8 md:gap-16 py-8 border-b border-border group"
                >
                  <span className="font-serif text-3xl md:text-4xl text-muted-foreground/40 group-hover:text-[#b8860b] transition-colors min-w-[100px]">
                    {milestone.year}
                  </span>
                  <p className="text-foreground leading-relaxed pt-2">
                    {milestone.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="bg-[#e8e4de]">
          <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="space-y-6">
                <p className="text-[#b8860b] text-sm">Globalno Prisustvo</p>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                  Tri Kancelarije, Jedan Standard
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Sa kancelarijama u Podgorici, Beogradu i Zagrebu, pružamo usluge klijentima širom regiona sa istim nivoom profesionalnosti i posvećenosti.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <p className="font-serif text-4xl text-foreground">MNE</p>
                  <p className="text-sm text-muted-foreground">Podgorica</p>
                </div>
                <div className="space-y-2">
                  <p className="font-serif text-4xl text-foreground">SRB</p>
                  <p className="text-sm text-muted-foreground">Beograd</p>
                </div>
                <div className="space-y-2">
                  <p className="font-serif text-4xl text-foreground">HR</p>
                  <p className="text-sm text-muted-foreground">Zagreb</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
