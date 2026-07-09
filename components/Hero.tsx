export default function Hero() {
  return (
    <section
      id="pocetna"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-black px-4 pb-14 pt-24 text-white sm:px-6 sm:pb-20 sm:pt-28 lg:pt-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-55"
        style={{ backgroundImage: "url('/hero-garage.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-black/25" />
      <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-orange-500/15 blur-3xl sm:h-72 sm:w-72" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <div className="fade-up mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-orange-300 sm:mb-6 sm:px-4 sm:text-xs sm:tracking-[0.28em]">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Dijagnostika, servis i odrzavanje
          </div>

          <h1 className="fade-up-delay-1 mb-5 max-w-[13ch] text-[2.5rem] font-black leading-[0.92] tracking-[-0.04em] sm:mb-6 sm:max-w-3xl sm:text-5xl lg:text-7xl">
            Servis koji
            <span className="block text-orange-400">vraca sigurnost</span>
            vasem vozilu
          </h1>

          <p className="fade-up-delay-2 mb-7 max-w-xl text-[15px] leading-7 text-white/78 sm:mb-8 sm:text-xl sm:leading-9">
            Odrzavanje, popravci i dijagnostika svih marki vozila uz posten pristup,
            jasnu komunikaciju i rad na koji se mozete osloniti.
          </p>

          <div className="fade-up-delay-3 flex max-w-md flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="tel:+385917912760"
              className="rounded-full bg-orange-600 px-7 py-3.5 text-center text-sm font-bold text-white shadow-[0_18px_45px_rgba(249,115,22,0.3)] transition hover:bg-orange-500 sm:px-9 sm:py-4 sm:text-base"
            >
              Nazovi nas
            </a>

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45 sm:text-sm sm:tracking-[0.24em]">
              Ponedjeljak - petak / 08:00 - 16:00
            </p>
          </div>

          <div className="fade-up-delay-4 mt-9 grid max-w-xl grid-cols-1 gap-3 sm:mt-12 sm:max-w-3xl sm:grid-cols-3 sm:gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-sm sm:px-4">
              <p className="text-2xl font-extrabold text-white">10+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55 sm:text-sm">
                Godina iskustva
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-sm sm:px-4">
              <p className="text-2xl font-extrabold text-white">1000+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55 sm:text-sm">
                Servisa vozila
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-sm sm:px-4">
              <p className="text-2xl font-extrabold text-white">Brzo</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55 sm:text-sm">
                Posteno i jasno
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
