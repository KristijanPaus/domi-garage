import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="section-shell border-t border-white/10 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.85fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-orange-500">
              Podaci o društvu
            </p>
            <div className="grid gap-4 text-sm leading-7 text-white/72 sm:grid-cols-2">
              <div>
                <p className="font-semibold text-white">Naziv</p>
                <p>EDER AUTO SERVIS d.o.o za trgovinu, prijevoz i usluge</p>
              </div>
              <div>
                <p className="font-semibold text-white">OIB</p>
                <p>81935359858</p>
              </div>
              <div>
                <p className="font-semibold text-white">Sjedište društva</p>
                <p>Ulica Puhali 30, Kalinovica</p>
              </div>
              <div>
                <p className="font-semibold text-white">NKD</p>
                <p>T95310 - Popravak i održavanje motornih vozila</p>
              </div>
              <div>
                <p className="font-semibold text-white">Registarsko tijelo</p>
                <p>Trgovački sud u Zagrebu</p>
              </div>
              <div>
                <p className="font-semibold text-white">MBS</p>
                <p>081719183</p>
              </div>
              <div className="sm:col-span-2">
                <p className="font-semibold text-white">Temeljni kapital</p>
                <p>2.500 EUR, uplaćen u cijelosti</p>
              </div>
            </div>
          </div>

          <div className="flex min-h-[220px] items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 sm:p-8">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border border-orange-500/35 bg-white/95 shadow-[0_14px_35px_rgba(0,0,0,0.28)] sm:h-36 sm:w-36">
              <Image
                src="/Logo-Domi.jpg"
                alt="Garage&Service DOMI logo"
                fill
                sizes="(max-width: 640px) 128px, 144px"
                className="object-cover scale-[1.08]"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 EDER AUTO SERVIS d.o.o. Sva prava pridržana.</p>
          <div className="flex flex-col gap-2 sm:items-end">
            <div className="flex flex-wrap gap-4">
              <Link href="/pravila-privatnosti" className="transition hover:text-orange-400">
                Pravila privatnosti
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
