"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function DemoNotice() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-yellow-500 text-black py-2 px-4 relative">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-medium text-sm md:text-base">
          Ovo je demo sajt koji je prezentacionog tipa, neke od funkcija nisu u
          upotrebi.
        </p>
        <p className="text-xs md:text-sm">
          Sajt je u vlasništvu kompanije{" "}
          <span className="font-semibold">Sajt Za Dan</span>. Kontaktirajte nas
          ukoliko ste zainteresovani.
        </p>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-2 text-black hover:opacity-70 transition"
        aria-label="Zatvori obavještenje"
      >
        <X size={18} />
      </button>
    </div>
  );
}
