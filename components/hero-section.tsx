import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative h-[70vh] min-h-[500px] w-full">
        <Image
          src="/images/hero-lawyers.jpg"
          alt="Professional lawyers having a conversation in a modern office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        
        {/* Hero Text Overlay */}
        <div className="absolute bottom-16 left-8 md:left-16 lg:left-24 max-w-2xl text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4 text-balance">
            Individualni Pristup
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Primjenjujemo pravo na činjenice. Ne primjenjujemo emocije na činjenice.
          </p>
        </div>

        {/* Av Badge */}
        <div className="absolute bottom-4 left-4 bg-[#1a2332] text-white text-xs px-2 py-1 font-medium">
          Av
        </div>
      </div>

      {/* Expert Section */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-tight">
              Eksperti za Krizne ili Izuzetne<br />Situacije.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Vaša 100% besplatna (bez obaveza) konsultacija je uvijek sa praktičnim advokatom iz naših kancelarija.
            </p>
            <button className="group flex items-center justify-between bg-[#1a2332] text-white px-6 py-4 min-w-[250px] hover:bg-[#2a3342] transition-colors">
              <span className="font-medium">Besplatna Konsultacija</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
          
          <div className="flex flex-col items-end text-right space-y-2">
            <p className="text-muted-foreground text-sm">Pozovite Sad. Dostupni 24/7</p>
            <a href="tel:+38220234567" className="font-serif text-2xl md:text-3xl text-foreground hover:text-muted-foreground transition-colors">
              +382 20 234 567
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
