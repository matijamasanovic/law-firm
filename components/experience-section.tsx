import Image from "next/image"

const stats = [
  {
    value: "10 Miliona",
    label: "Oporavak za Naše Klijente"
  },
  {
    value: "56",
    label: "Pravnih stručnjaka sa različitim ekspertizama"
  },
  {
    value: "25+",
    label: "Godina Iskustva"
  },
  {
    value: "100+",
    label: "Recenzija na Google-u"
  }
]

export function ExperienceSection() {
  return (
    <section className="border-t border-border">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Mi Smo Iskustvo
          </h2>
          <p className="text-muted-foreground max-w-md">
            Naši advokati i osoblje imaju decenije iskustva u poslovnom pravu u 15 industrija.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Image */}
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/lawyer-working.jpg"
              alt="Lawyer working on laptop in modern office"
              fill
              className="object-cover"
            />
            {/* Av Badge */}
            <div className="absolute bottom-4 left-4 bg-[#1a2332] text-white text-xs px-2 py-1 font-medium">
              Av
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-8">
            <p className="text-muted-foreground text-sm">U Brojevima:</p>
            
            <div className="space-y-8">
              {stats.map((stat, index) => (
                <div key={index} className="border-b border-border pb-6">
                  <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
