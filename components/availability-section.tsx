"use client"

import { Phone, ArrowUpRight } from "lucide-react"
import { useState } from "react"

const offices = [
  {
    country: "MNE",
    city: "Podgorica",
    address: "Bulevar Svetog Petra Cetinjskog 25",
    addressLine2: "81000 Podgorica",
    addressLine3: "Crna Gora",
    email: "office@avvocato.me",
    phone: "+382 20 234 567",
  },
  {
    country: "SRB",
    city: "Beograd",
    address: "Knez Mihailova 42",
    addressLine2: "11000 Beograd",
    addressLine3: "Srbija",
    email: "beograd@avvocato.me",
    phone: "+381 11 234 567",
  },
  {
    country: "HR",
    city: "Zagreb",
    address: "Ilica 12",
    addressLine2: "10000 Zagreb",
    addressLine3: "Hrvatska",
    email: "zagreb@avvocato.me",
    phone: "+385 1 234 567",
  },
]

const areaOptions = [
  "Korporativno pravo",
  "Međunarodno pravo",
  "Antimonopolska regulativa",
  "Nekretnine",
  "Radno pravo",
  "Poresko pravo",
]

export function AvailabilitySection() {
  const [activeTab, setActiveTab] = useState<"offices" | "leadership">("offices")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    description: "",
  })

  return (
    <section id="contact" className="bg-[#e8e4de]">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Dostupni Smo
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Vaša 100% besplatna (bez obaveza) konsultacija je uvijek sa praktičnim advokatom iz naših kancelarija. Detalji koje podijelite čuvaju se u strogoj povjerljivosti.
              </p>
            </div>

            {/* Tabs */}
            <div className="space-y-8">
              <div className="flex gap-8 border-b border-border/50">
                <button
                  onClick={() => setActiveTab("offices")}
                  className={`pb-4 text-lg font-medium transition-colors ${
                    activeTab === "offices"
                      ? "text-foreground border-b-2 border-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Kancelarije
                </button>
                <button
                  onClick={() => setActiveTab("leadership")}
                  className={`pb-4 text-lg transition-colors ${
                    activeTab === "leadership"
                      ? "text-foreground border-b-2 border-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Rukovodstvo
                </button>
              </div>

              {/* Offices Grid */}
              {activeTab === "offices" && (
                <div className="grid sm:grid-cols-3 gap-8">
                  {offices.map((office) => (
                    <div key={office.country} className="space-y-4">
                      <p className="font-serif text-4xl text-muted-foreground/40">
                        {office.country}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">{office.city}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {office.address}<br />
                          {office.addressLine2}<br />
                          {office.addressLine3}
                        </p>
                        <a
                          href={`mailto:${office.email}`}
                          className="text-sm text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors block"
                        >
                          {office.email}
                        </a>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                          <Phone className="w-4 h-4" />
                          <span>{office.phone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "leadership" && (
                <div className="text-muted-foreground">
                  <p>Informacije o rukovodstvu uskoro...</p>
                </div>
              )}

              <button className="text-sm text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
                Pogledaj sve
              </button>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#d4cdc4] p-8 md:p-10">
            <p className="text-sm text-muted-foreground mb-2">Imate Slučaj?</p>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
              Dobijte besplatnu procjenu
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Ime"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border-b border-muted-foreground/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
              <input
                type="tel"
                placeholder="Telefon"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border-b border-muted-foreground/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border-b border-muted-foreground/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
              <select
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border-b border-muted-foreground/30 text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              >
                <option value="">Oblast interesovanja</option>
                {areaOptions.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
              <textarea
                placeholder="Ukratko opišite"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 bg-transparent border-b border-muted-foreground/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
              />

              <p className="text-xs text-muted-foreground pt-2">
                Slanjem pristajete na naše{" "}
                <a href="#" className="underline">Uslove</a> i{" "}
                <a href="#" className="underline">Politiku privatnosti</a>.
              </p>

              <button
                type="submit"
                className="group w-full flex items-center justify-between bg-[#1a2332] text-white px-6 py-4 hover:bg-[#2a3342] transition-colors mt-4"
              >
                <span className="font-medium">Zakaži Konsultaciju</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
