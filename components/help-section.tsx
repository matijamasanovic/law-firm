import Image from "next/image"
import Link from "next/link"

export function HelpSection() {
  return (
    <section className="border-t border-border">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
        {/* Section Label */}
        <p className="text-[#b8860b] text-sm mb-8">Komplikovana Situacija?</p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Tu Smo da Pomognemo
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Zaštita interesa vaše kompanije u državnim agencijama i potpuno razumijevanje svih procesa. Zaštita interesa vaše kompanije u državnim agencijama i potpuno razumijevanje svih procesa.
              </p>
            </div>

            {/* Practice Areas */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-0.5 bg-[#b8860b]" />
                <h3 className="font-serif text-xl text-foreground">
                  Međunarodno<br />Trgovinsko<br />Pravo
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Poslovni advokat Marko Petrović govori o tome kako spriječiti i upravljati sigurnosnim povredama podataka koje pogađaju mnoge kompanije. Pogledajte cijeli članak
                </p>
                <Link href="#" className="text-foreground text-sm underline underline-offset-4 hover:text-muted-foreground transition-colors inline-block">
                  Saznaj Više
                </Link>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-0.5 bg-[#b8860b]" />
                <h3 className="font-serif text-xl text-foreground">
                  Antimonopolska<br />Regulativa
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Poslovni advokat Marko Petrović govori o tome kako spriječiti i upravljati sigurnosnim povredama podataka koje pogađaju mnoge kompanije. Pogledajte cijeli članak
                </p>
                <Link href="#" className="text-foreground text-sm underline underline-offset-4 hover:text-muted-foreground transition-colors inline-block">
                  Saznaj Više
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="space-y-8">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/lawyer-woman.jpg"
                alt="Professional female lawyer portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/lawyer-man.jpg"
                alt="Professional male lawyer portrait"
                fill
                className="object-cover"
              />
              {/* Av Badge */}
              <div className="absolute bottom-4 right-4 bg-[#1a2332] text-white text-xs px-2 py-1 font-medium">
                Av
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
