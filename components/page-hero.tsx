import Image from "next/image"

interface PageHeroProps {
  title: string
  subtitle?: string
  imageSrc: string
  imageAlt: string
}

export function PageHero({ title, subtitle, imageSrc, imageAlt }: PageHeroProps) {
  return (
    <section className="relative h-[40vh] min-h-[320px] w-full">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="absolute bottom-12 left-8 md:left-16 lg:left-24 max-w-2xl text-white">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-3 text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl opacity-90">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
