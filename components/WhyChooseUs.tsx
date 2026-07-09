"use client";

import Reveal from "@/components/Reveal";
import { useEffect, useRef, useState } from "react";
import { Clock, ShieldCheck, BadgeEuro, Users, Car, Wrench } from "lucide-react";

const benefits = [
  {
    title: "Brza i pouzdana usluga",
    description: "Poštujemo vaše vrijeme i trudimo se vozilo vratiti što prije.",
    icon: Clock,
  },
  {
    title: "Kvalitetni dijelovi",
    description: "Koristimo provjerene rezervne dijelove i kvalitetnu opremu.",
    icon: ShieldCheck,
  },
  {
    title: "Transparentne cijene",
    description: "Bez skrivenih troškova i neugodnih iznenađenja.",
    icon: BadgeEuro,
  },
];

const stats = [
  { value: 250, suffix: "+", label: "Zadovoljnih klijenata", icon: Users },
  { value: 1000, suffix: "+", label: "Servisiranih vozila", icon: Car },
  { value: 10, suffix: "+", label: "Godina iskustva", icon: Wrench },
];

function AnimatedCount({ end, start }: { end: number; start: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) {
      return;
    }

    let step = 0;
    const totalSteps = 48;

    const startTimeout = window.setTimeout(() => {
      const interval = window.setInterval(() => {
        step += 1;
        const progress = step / totalSteps;
        const eased = 1 - Math.pow(1 - progress, 3);
        const nextValue = Math.round(end * eased);

        setValue(nextValue);

        if (step >= totalSteps) {
          window.clearInterval(interval);
          setValue(end);
        }
      }, 45);

      cleanup = () => window.clearInterval(interval);
    }, 120);

    let cleanup = () => {};

    return () => {
      window.clearTimeout(startTimeout);
      cleanup();
    };
  }, [end, start]);

  return <>{start ? value : end}</>;
}

export default function WhyChooseUs() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const node = statsRef.current;

    if (!node || statsStarted) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [statsStarted]);

  return (
    <section className="section-shell bg-black py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            Zašto odabrati nas
          </p>

          <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Servis kojem se klijenti vraćaju
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Spoj stručnosti, poštenog odnosa i kvalitetne usluge razlog je zašto
            nam klijenti povjeravaju svoja vozila.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <Reveal
                key={benefit.title}
                delayMs={index * 90}
                className={`h-full ${index === 2 ? "col-span-2 md:col-span-1" : ""}`}
              >
                <div className="group flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 transition duration-300 hover:-translate-y-2 hover:border-orange-500/70 hover:bg-white/[0.06] active:-translate-y-1 active:border-orange-500/70 active:bg-white/[0.06] sm:p-6 md:p-8">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 transition duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white group-active:scale-110 group-active:bg-orange-500 group-active:text-white sm:mb-6 sm:h-14 sm:w-14">
                    <Icon size={24} className="sm:h-[30px] sm:w-[30px]" />
                  </div>

                  <h3 className="mb-2 text-base font-bold leading-snug sm:mb-3 sm:text-xl md:text-2xl">
                    {benefit.title}
                  </h3>

                  <p className="text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                    {benefit.description}
                  </p>

                  {index === 2 ? (
                    <div className="mt-auto pt-4">
                      <span className="inline-flex rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:text-xs">
                        Bez skrivenih troškova
                      </span>
                    </div>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10" delayMs={120}>
          <div
            ref={statsRef}
            className="grid grid-cols-3 gap-3 rounded-3xl border border-white/10 bg-gradient-to-r from-neutral-950 to-neutral-900 p-4 sm:gap-6 sm:p-8"
          >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <Reveal key={stat.label} delayMs={index * 100} className="h-full">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 sm:mb-4 sm:h-14 sm:w-14">
                    <Icon size={22} className="sm:h-[30px] sm:w-[30px]" />
                  </div>

                  <div className="mb-1 text-2xl font-extrabold sm:mb-2 sm:text-5xl">
                    <AnimatedCount end={stat.value} start={statsStarted} />
                    {stat.suffix}
                  </div>

                  <p className="text-xs leading-5 text-white/60 sm:text-base">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            );
          })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
