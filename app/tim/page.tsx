import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tim | Advokatska kancelarija",
  description: "Upoznajte naš tim iskusnih advokata i pravnih stručnjaka koji čine Advokatska kancelarija kancelariju.",
}

const partners = [
  {
    name: "Marko Petrović",
    role: "Upravni Partner",
    specialization: "Korporativno Pravo, M&A",
    image: "/images/team-1.jpg",
    description: "Marko ima preko 25 godina iskustva u korporativnom pravu i vodi firmu od njenog osnivanja. Specijalista je za spajanja i akvizicije.",
  },
  {
    name: "Ana Đurović",
    role: "Viši Partner",
    specialization: "Međunarodno Trgovinsko Pravo",
    image: "/images/team-2.jpg",
    description: "Ana je stručnjak za međunarodno trgovinsko pravo sa posebnim fokusom na prekogranične transakcije i međunarodnu arbitražu.",
  },
  {
    name: "Dragan Vujović",
    role: "Partner",
    specialization: "Antimonopolska Regulativa",
    image: "/images/team-3.jpg",
    description: "Dragan je vodeći stručnjak za antimonopolsku regulativu u regionu, sa iskustvom u najsloženijim predmetima zaštite konkurencije.",
  },
  {
    name: "Milica Radović",
    role: "Partner",
    specialization: "Radno Pravo, Digitalno Pravo",
    image: "/images/team-4.jpg",
    description: "Milica predvodi naš odjel za radno pravo i digitalno pravo, pomažući kompanijama da se prilagode novim zakonskim okvirima.",
  },
]

const associates = [
  { name: "Stefan Nikolić", role: "Viši Saradnik", specialization: "Poresko Pravo" },
  { name: "Jelena Kovačević", role: "Viši Saradnik", specialization: "Pravo Nekretnina" },
  { name: "Nikola Đorđević", role: "Saradnik", specialization: "Korporativno Pravo" },
  { name: "Maja Popović", role: "Saradnik", specialization: "Intelektualna Svojina" },
  { name: "Petar Janković", role: "Saradnik", specialization: "Krivično Pravo" },
  { name: "Ivana Marković", role: "Saradnik", specialization: "Međunarodno Pravo" },
]

export default function TimPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Naš Tim"
          subtitle="56 pravnih stručnjaka posvećenih vašem uspjehu"
          imageSrc="/images/team-meeting.jpg"
          imageAlt="Tim advokata na sastanku"
        />

        {/* Partners Section */}
        <section className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
          <p className="text-[#b8860b] text-sm mb-4">Rukovodstvo</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">
            Partneri
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div key={partner.name} className="group">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl text-foreground">{partner.name}</h3>
                  <p className="text-[#b8860b] text-sm">{partner.role}</p>
                  <p className="text-muted-foreground text-xs">{partner.specialization}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed pt-2">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Associates Section */}
        <section className="border-t border-border">
          <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
            <p className="text-[#b8860b] text-sm mb-4">Pravni Tim</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">
              Saradnici
            </h2>

            <div className="space-y-0">
              {associates.map((associate) => (
                <div
                  key={associate.name}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-border group hover:bg-muted/30 transition-colors px-4 -mx-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                    <h3 className="font-medium text-foreground min-w-[200px]">{associate.name}</h3>
                    <p className="text-muted-foreground text-sm">{associate.role}</p>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2 sm:mt-0">{associate.specialization}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="bg-[#e8e4de]">
          <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                  Pridružite se Našem Timu
                </h2>
                <p className="text-muted-foreground max-w-md">
                  Uvijek tražimo talentovane pravnike koji dijele našu strast za izvrsnost i etiku.
                </p>
              </div>
              <Link
                href="/karijera"
                className="group inline-flex items-center justify-between bg-[#1a2332] text-white px-6 py-4 min-w-[250px] hover:bg-[#2a3342] transition-colors self-start"
              >
                <span className="font-medium">Pogledaj Pozicije</span>
                <svg className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
