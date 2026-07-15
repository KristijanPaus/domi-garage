"use client";

import Reveal from "@/components/Reveal";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const points = [
  "Iskusni automehaničari",
  "Moderna dijagnostička oprema",
  "Kvalitetni rezervni dijelovi",
  "Pošten i transparentan pristup",
];

export default function About() {
  return (
    <section id="onama" className="section-shell bg-neutral-950 py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10 sm:min-h-[420px] lg:min-h-[520px]">
            <Image
              src="/about-garage.png"
              alt="DOMI Garage & Service radionica"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              O nama
            </p>

            <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Pouzdan partner za vaše vozilo
            </h2>

            <p className="mb-6 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Garage & Service DOMI pruža kvalitetan servis, dijagnostiku i
              održavanje vozila uz stručan pristup i korektan odnos prema svakom
              klijentu.
            </p>

            <p className="mb-8 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Naš cilj je jednostavan: da vaše vozilo bude sigurno, ispravno i
              spremno za cestu, bez nepotrebnog čekanja i skrivenih troškova.
            </p>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              {points.map((point) => (
                <div
                  key={point}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition duration-300 hover:border-orange-500/70 hover:bg-white/[0.06] active:border-orange-500/70 active:bg-white/[0.06]"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      className="text-orange-500 transition duration-300 group-hover:scale-110 group-active:scale-110"
                      size={22}
                    />
                    <span className="text-white/80">{point}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
