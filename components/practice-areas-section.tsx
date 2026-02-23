"use client"

import { Plus, Minus } from "lucide-react"
import { useState } from "react"

const practiceAreas = [
  "Korporativno Pravo",
  "Intelektualna Svojina",
  "Pravo Nekretnina",
  "Radno Pravo",
  "Poresko Pravo",
  "Krivična Odbrana"
]

export function PracticeAreasSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="border-t border-border">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-6 flex items-center gap-4 text-left hover:bg-muted/30 transition-colors"
        >
          {isOpen ? (
            <Minus className="w-5 h-5 text-muted-foreground" />
          ) : (
            <Plus className="w-5 h-5 text-muted-foreground" />
          )}
          <span className="font-medium text-foreground">Oblasti Prava</span>
        </button>

        {isOpen && (
          <div className="pb-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {practiceAreas.map((area) => (
              <div key={area} className="py-3 border-b border-border">
                <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  {area}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
