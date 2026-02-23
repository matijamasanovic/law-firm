import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Oblasti Prava | Advokatska kancelarija",
  description: "Saznajte više o oblastima prava koje pokriva Advokatska kancelarija - od korporativnog prava do sajber bezbjednosti.",
}

const practiceAreas = [
  {
    title: "Korporativno Pravo",
    description: "Savjetujemo korporacije svih veličina po pitanju osnivanja, upravljanja, spajanja, akvizicija i restrukturiranja. Naš tim pruža strateške pravne savjete koji pomažu kompanijama da rastu i napreduju.",
    services: ["Spajanja i Akvizicije", "Korporativno Upravljanje", "Osnivanje Društava", "Restrukturiranje"],
  },
  {
    title: "Međunarodno Trgovinsko Pravo",
    description: "Pružamo pravne usluge u oblasti međunarodne trgovine, uključujući prekogranične transakcije, međunarodnu arbitražu i usklađenost sa međunarodnim regulativama.",
    services: ["Prekogranične Transakcije", "Međunarodna Arbitraža", "Trgovinski Sporovi", "Carinske Procedure"],
  },
  {
    title: "Antimonopolska Regulativa",
    description: "Naši stručnjaci za zaštitu konkurencije pomažu klijentima da se usklade sa antimonopolskim zakonima i efikasno brane u postupcima pred regulatornim tijelima.",
    services: ["Zaštita Konkurencije", "Kontrola Koncentracija", "Državna Pomoć", "Regulatorni Postupci"],
  },
  {
    title: "Radno Pravo",
    description: "Savjetujemo poslodavce i zaposlene o svim aspektima radnog prava, od zapošljavanja do prestanka radnog odnosa, kolektivnog pregovaranja i radnih sporova.",
    services: ["Ugovori o Radu", "Kolektivno Pregovaranje", "Radni Sporovi", "Zaštita na Radu"],
  },
  {
    title: "Pravo Nekretnina",
    description: "Pružamo kompletne pravne usluge u oblasti nekretnina, uključujući kupoprodaju, zakup, građevinarstvo i rješavanje imovinskih sporova.",
    services: ["Kupoprodaja Nekretnina", "Zakup i Najam", "Građevinsko Pravo", "Imovinski Sporovi"],
  },
  {
    title: "Poresko Pravo",
    description: "Naši poreski stručnjaci pomažu klijentima u planiranju i optimizaciji poreskih obaveza, te zastupaju u poreskim sporovima pred nadležnim organima.",
    services: ["Poresko Planiranje", "Transferne Cijene", "Poreski Sporovi", "Međunarodno Oporezivanje"],
  },
  {
    title: "Intelektualna Svojina",
    description: "Štitimo intelektualnu svojinu klijenata kroz registraciju, licenciranje i sprovođenje prava na žigove, patente, autorska prava i poslovne tajne.",
    services: ["Žigovi i Patenti", "Autorska Prava", "Licenciranje", "Zaštita Poslovnih Tajni"],
  },
  {
    title: "Digitalno Pravo i Sajber Bezbjednost",
    description: "Naš najnoviji odjel pomaže kompanijama da se usklade sa regulativama o zaštiti podataka, sajber bezbjednosti i digitalnoj transformaciji.",
    services: ["Zaštita Podataka (GDPR)", "Sajber Bezbjednost", "E-Trgovina", "Digitalna Transformacija"],
  },
]

export default function OblastiPravaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Oblasti Prava"
          subtitle="Sveobuhvatne pravne usluge za sve vaše potrebe"
          imageSrc="/images/hero-lawyers.jpg"
          imageAlt="Advokati u razgovoru"
        />

        {/* Practice Areas List */}
        <section className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
          <div className="space-y-0">
            {practiceAreas.map((area, index) => (
              <div key={area.title} className="border-b border-border py-12 first:pt-0">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                  <div className="space-y-4">
                    <div className="flex items-baseline gap-4">
                      <span className="text-muted-foreground/30 font-serif text-2xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                        {area.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-12">
                      {area.description}
                    </p>
                  </div>
                  <div className="pl-12 lg:pl-0">
                    <p className="text-sm text-[#b8860b] mb-4">Usluge</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {area.services.map((service) => (
                        <div key={service} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#b8860b] flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#e8e4de]">
          <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                  Trebate Pravni Savjet?
                </h2>
                <p className="text-muted-foreground max-w-md">
                  Zakažite besplatnu konsultaciju sa jednim od naših stručnjaka danas.
                </p>
              </div>
              <Link
                href="/kontakt"
                className="group inline-flex items-center justify-between bg-[#1a2332] text-white px-6 py-4 min-w-[250px] hover:bg-[#2a3342] transition-colors self-start"
              >
                <span className="font-medium">Besplatna Konsultacija</span>
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
