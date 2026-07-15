import Reveal from "@/components/Reveal";
import { Clock3, MapPinned, Phone } from "lucide-react";

const contactCards = [
  {
    title: "Nazovite nas",
    value: ["+385 91 791 2760"],
    href: "tel:+385917912760",
    icon: Phone,
  },
  {
    title: "Posjetite nas",
    value: ["Purgarija odv. I 38", "10431, Kerestinec"],
    href: "https://www.google.com/maps/dir/?api=1&destination=Garage%26service%20Domi%2C%20Purgarija%2038%2C%2010431%20Kerestinec%2C%20Croatia&travelmode=driving",
    icon: MapPinned,
    target: "_blank",
  },
  {
    title: "Radno vrijeme",
    value: ["Pon - Pet", "08:00 - 16:00"],
    href: "#kontakt",
    icon: Clock3,
  },
];

export default function Contact() {
  return (
    <section id="kontakt" className="section-shell bg-black py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            Kontakt
          </p>
          <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Javite nam se i rezervirajte termin
          </h2>
          <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Ako želite redovni servis, dijagnostiku ili pregled vozila, javite se i brzo
            ćemo dogovoriti termin koji vam odgovara.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal key={card.title} delayMs={index * 90}>
                <a
                  href={card.href}
                  target={card.target}
                  rel={card.target === "_blank" ? "noreferrer" : undefined}
                  className="group flex h-full min-h-[250px] flex-col rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/60 hover:bg-white/[0.05] active:border-orange-500/60 active:bg-white/[0.05]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 transition duration-300 group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white group-active:scale-105 group-active:bg-orange-500 group-active:text-white">
                    <Icon size={26} />
                  </div>

                  <div className="flex flex-1 flex-col justify-between gap-6">
                    <div>
                      <h3 className="mb-3 text-xl font-bold text-white">{card.title}</h3>
                      <div className="space-y-2 text-base leading-7 text-white/72">
                        {card.value.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
