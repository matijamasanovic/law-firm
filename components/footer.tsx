import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-serif text-2xl text-foreground">Advokatska kancelarija</h3>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Stručne pravne usluge sa individualnim pristupom. Primjenjujemo pravo na činjenice, ne emocije.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Brzi Linkovi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/o-nama" className="text-muted-foreground hover:text-foreground transition-colors">O Nama</Link></li>
              <li><Link href="/oblasti-prava" className="text-muted-foreground hover:text-foreground transition-colors">Oblasti Prava</Link></li>
              <li><Link href="/tim" className="text-muted-foreground hover:text-foreground transition-colors">Naš Tim</Link></li>
              <li><Link href="/kontakt" className="text-muted-foreground hover:text-foreground transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Kontakt</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>+382 20 234 567</p>
              <p>info@advokatskakanc.me</p>
              <p>Bulevar Svetog Petra Cetinjskog 25<br />81000 Podgorica, Crna Gora</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © 2026 Advokatska kancelarija. Sva prava zadržana.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Politika Privatnosti</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Uslovi Korišćenja</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
