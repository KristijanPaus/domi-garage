"use client";

import Reveal from "@/components/Reveal";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

const images = [
  "/gallery-11.png",
  "/gallery-22.png",
  "/gallery-3.jpeg",
  "/gallery-4.jpeg",
  "/gallery-5.jpeg",
  "/gallery-33.png",
];

export default function Gallery() {
  return (
    <>
      <section
        id="galerija"
        className="section-shell bg-neutral-950 py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="mb-12 text-center sm:mb-16">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              Galerija
            </p>

            <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl md:text-5xl">
              Pogledajte naš rad
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Dio atmosfere iz radionice, opreme i vozila na kojima svakodnevno
              radimo.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:auto-rows-[220px] md:grid-cols-3">
            {images.map((image, index) => (
              <a
                key={image}
                href={`#lightbox-${index}`}
                aria-label={`Otvori sliku ${index + 1} iz galerije`}
                className={`group relative block aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] text-left touch-manipulation md:aspect-auto ${
                  index === 1 || index === 4
                    ? "md:row-span-2 md:min-h-[460px]"
                    : "md:min-h-[220px]"
                }`}
              >
                <Image
                  src={image}
                  alt="DOMI Garage & Service galerija"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 400px"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 transition duration-300 group-hover:bg-black/40" />

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-2 rounded-full bg-black/55 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm md:opacity-0 md:transition md:duration-300 md:group-hover:opacity-100">
                    <Camera size={18} />
                    Pogledaj
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {images.map((image, index) => {
        const previous = (index - 1 + images.length) % images.length;
        const next = (index + 1) % images.length;

        return (
          <div key={image} id={`lightbox-${index}`} className="lightbox-slide">
            <a href="#galerija" className="lightbox-backdrop" aria-label="Zatvori galeriju" />

            <a
              href="#galerija"
              aria-label="Zatvori galeriju"
              className="lightbox-close"
            >
              <X size={20} />
            </a>

            <a
              href={`#lightbox-${previous}`}
              aria-label="Prethodna slika"
              className="lightbox-nav lightbox-nav-left"
            >
              <ChevronLeft size={22} />
            </a>

            <a
              href={`#lightbox-${next}`}
              aria-label="Sljedeća slika"
              className="lightbox-nav lightbox-nav-right"
            >
              <ChevronRight size={22} />
            </a>

            <div className="lightbox-frame">
              <Image
                src={image}
                alt="DOMI Garage & Service galerija"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain"
                priority={index === 0}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
