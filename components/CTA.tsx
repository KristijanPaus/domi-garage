"use client";

import Reveal from "@/components/Reveal";

export default function CTA() {
  return (
    <section className="section-shell relative overflow-hidden bg-black py-16 text-white sm:py-24 lg:py-28">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url('/cta-garage.png')" }}
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            Vrijeme je za servis?
          </p>
        </Reveal>

        <Reveal delayMs={90}>
          <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Ne čekajte da mali kvar postane veliki
          </h2>
        </Reveal>

        <Reveal delayMs={180}>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Dogovorite termin već danas i prepustite svoje vozilo stručnom timu
            DOMI Garage & Service.
          </p>
        </Reveal>

        <Reveal delayMs={260}>
          <a
            href="tel:+385917912760"
            className="inline-flex rounded-full bg-orange-600 px-10 py-4 font-bold text-white shadow-[0_0_35px_rgba(249,115,22,0.45)] transition hover:scale-105 hover:bg-orange-500"
          >
            Nazovi nas
          </a>
        </Reveal>
      </div>
    </section>
  );
}
