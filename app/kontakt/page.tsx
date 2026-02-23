"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { useState } from "react"

const offices = [
  {
    country: "MNE",
    city: "Podgorica",
    address: "Bulevar Svetog Petra Cetinjskog 25",
    zip: "81000 Podgorica",
    region: "Crna Gora",
    email: "office@advokatskakanc.me",
    phone: "+382 20 234 567",
  },
  {
    country: "SRB",
    city: "Beograd",
    address: "Knez Mihailova 42",
    zip: "11000 Beograd",
    region: "Srbija",
    email: "beograd@advokatskakanc.me",
    phone: "+381 11 234 567",
  },
  {
    country: "HR",
    city: "Zagreb",
    address: "Ilica 12",
    zip: "10000 Zagreb",
    region: "Hrvatska",
    email: "zagreb@advokatskakanc.me",
    phone: "+385 1 234 567",
  },
]

const areaOptions = [
  "Korporativno pravo",
  "Međunarodno pravo",
  "Antimonopolska regulativa",
  "Radno pravo",
  "Pravo nekretnina",
  "Poresko pravo",
  "Intelektualna svojina",
  "Digitalno pravo",
]

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    description: "",
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Kontakt"
          subtitle="Dostupni smo za vas 24 sata dnevno, 7 dana u nedjelji"
          imageSrc="/images/office-interior.jpg"
          imageAlt="Moderna kancelarija Advokatska kancelarija firme"
        />

        {/* Contact Form + Offices */}
        <section className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Form */}
            <div className="space-y-8">
              <div>
                <p className="text-[#b8860b] text-sm mb-4">Imate Pitanje?</p>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Dobijte Besplatnu Procjenu
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vaša konsultacija je 100% besplatna i bez obaveza. Svi detalji koje podijelite čuvaju se u strogoj povjerljivosti.
                </p>
              </div>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Vaše Ime i Prezime"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Telefon"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3.5 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Adresa"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
                <select
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-4 py-3.5 bg-transparent border-b border-border text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                >
                  <option value="">Oblast Interesovanja</option>
                  {areaOptions.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Ukratko opišite vaš slučaj"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3.5 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                />
                <p className="text-xs text-muted-foreground">
                  Slanjem pristajete na naše{" "}
                  <a href="#" className="underline">Uslove korišćenja</a> i{" "}
                  <a href="#" className="underline">Politiku privatnosti</a>.
                </p>
                <button
                  type="submit"
                  className="group flex items-center justify-between bg-[#1a2332] text-white px-6 py-4 min-w-[280px] hover:bg-[#2a3342] transition-colors"
                >
                  <span className="font-medium">Zakaži Konsultaciju</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            </div>

            {/* Offices */}
            <div className="space-y-10">
              <div>
                <p className="text-[#b8860b] text-sm mb-4">Naše Kancelarije</p>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                  Lokacije
                </h2>
              </div>

              <div className="space-y-10">
                {offices.map((office) => (
                  <div key={office.country} className="border-b border-border pb-8">
                    <p className="font-serif text-3xl text-muted-foreground/30 mb-4">{office.country}</p>
                    <h3 className="font-medium text-foreground text-lg mb-3">{office.city}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          {office.address}<br />
                          {office.zip}<br />
                          {office.region}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="text-sm text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
                          {office.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-sm text-muted-foreground">
                          {office.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
