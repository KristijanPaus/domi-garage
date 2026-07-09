import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Pocetna", href: "/#pocetna" },
  { label: "Usluge", href: "/#usluge" },
  { label: "O nama", href: "/#onama" },
  { label: "Galerija", href: "/#galerija" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-[120] w-full border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/#pocetna"
            className="flex min-w-0 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white shadow-[0_10px_30px_rgba(0,0,0,0.24)] transition hover:border-orange-500/40 hover:bg-white/[0.08] sm:px-4"
          >
            <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-orange-500/40 bg-white ring-2 ring-white/12">
              <Image
                src="/Logo-Domi.jpg"
                alt="Garage&Service DOMI logo"
                fill
                sizes="44px"
                className="object-cover scale-[1.08]"
              />
            </span>

            <span className="flex min-w-0 flex-col leading-none">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/65 sm:text-xs">
                Garage&Service
              </span>
              <span className="pt-1 text-sm font-extrabold text-orange-500 sm:text-base">
                DOMI
              </span>
            </span>
          </Link>

          <nav className="hidden gap-8 text-sm font-medium text-white/80 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-orange-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <details className="group relative md:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-orange-500/40 hover:bg-white/[0.08] [&::-webkit-details-marker]:hidden">
              <Menu size={24} className="group-open:hidden" />
              <X size={24} className="hidden group-open:block" />
            </summary>

            <div className="absolute right-0 top-[calc(100%+0.9rem)] w-[min(18rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-white/10 bg-black/95 p-3 shadow-2xl">
              <nav className="flex flex-col gap-2 text-white/85">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl border border-transparent bg-white/[0.03] px-4 py-3 transition hover:border-white/10 hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
