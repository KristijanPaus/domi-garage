"use client";

import Reveal from "@/components/Reveal";
import {
  BatteryCharging,
  Car,
  Disc3,
  Gauge,
  Snowflake,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Mali i veliki servis",
    description: "Redovno održavanje vozila prema preporukama proizvođača.",
    icon: Wrench,
  },
  {
    title: "Računalna dijagnostika",
    description: "Brzo otkrivanje kvarova modernom dijagnostičkom opremom.",
    icon: Gauge,
  },
  {
    title: "Servis kočnica",
    description: "Zamjena diskova, pločica i provjera kočionog sustava.",
    icon: Disc3,
  },
  {
    title: "Servis klima uređaja",
    description: "Punjenje, dezinfekcija i popravak klima sustava.",
    icon: Snowflake,
  },
  {
    title: "Ovjes i trap",
    description: "Pregled i popravak ovjesa za sigurnu i udobnu vožnju.",
    icon: Car,
  },
  {
    title: "Akumulatori",
    description: "Provjera, testiranje i zamjena akumulatora.",
    icon: BatteryCharging,
  },
];

export default function Services() {
  return (
    <section id="usluge" className="section-shell bg-neutral-950 py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            Naše usluge
          </p>

          <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Sve što vaše vozilo treba
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Pružamo kompletnu uslugu održavanja i popravka svih marki vozila uz
            kvalitetne dijelove i modernu dijagnostiku.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delayMs={index * 80} className="h-full">
                <div className="group flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 transition duration-300 hover:-translate-y-2 hover:border-orange-500/70 hover:bg-white/[0.06] active:-translate-y-1 active:border-orange-500/70 active:bg-white/[0.06] sm:p-6 lg:p-8">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 transition duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white group-active:scale-110 group-active:bg-orange-500 group-active:text-white sm:mb-6 sm:h-14 sm:w-14">
                    <Icon size={24} strokeWidth={2.2} className="sm:h-[30px] sm:w-[30px]" />
                  </div>

                  <h3 className="mb-2 text-base font-bold leading-snug sm:mb-3 sm:text-xl lg:text-2xl">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
