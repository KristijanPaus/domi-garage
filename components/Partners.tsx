import Image from "next/image";

import Reveal from "@/components/Reveal";

const partners = [
  {
    name: "Ciak Auto",
    logo: "/Ciak-Auto.png",
  },
  {
    name: "Inter Cars",
    logo: "/intercars-logo.jpg",
  },
  {
    name: "Tehnolub",
    logo: "/Tehnolub.jpg",
  },
];

export default function Partners() {
  return (
    <section className="section-shell bg-neutral-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            Naši partneri
          </p>
          <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Suradnja s provjerenim imenima
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            Kvalitetan servis ne čini samo dobar rad, nego i pouzdani partneri,
            provjereni dijelovi i proizvodi iza kojih možemo stati bez rezerve.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <Reveal key={partner.name} delayMs={index * 90}>
              <div className="group flex min-h-[170px] items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-6 py-8 transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-white/[0.05] active:border-orange-500/50 active:bg-white/[0.05]">
                <div className="relative h-16 w-full max-w-[220px] sm:h-20">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 220px"
                    className="object-contain opacity-85 transition duration-300 group-hover:opacity-100 group-hover:scale-[1.03] group-active:opacity-100"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
