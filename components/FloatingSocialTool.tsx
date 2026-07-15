"use client";

import Link from "next/link";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Wrench, X } from "lucide-react";
import type { SVGProps } from "react";

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.3-1.5 1.6-1.5H16V5.1c-.5-.1-1.3-.1-2.2-.1-2.2 0-3.8 1.3-3.8 4V11H7.5v3H10V21h3.5Z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/garage_service_domi1/",
    icon: InstagramIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591183229827&locale=hr_HR",
    icon: FacebookIcon,
  },
];

function getScrollMetrics() {
  if (typeof window === "undefined") {
    return { opacity: 1, translateY: 0 };
  }

  const maxScroll = Math.max(
    document.documentElement.scrollHeight - window.innerHeight,
    1
  );
  const progress = Math.min(window.scrollY / maxScroll, 1);

  const opacity =
    progress <= 0.5
      ? 1 - 0.7 * (progress / 0.5)
      : 0.3 + 0.7 * ((progress - 0.5) / 0.5);

  return {
    opacity,
    translateY: progress * 160,
  };
}

export default function FloatingSocialTool() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );
  const shellRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);

  const applyScrollStyle = useEffectEvent(() => {
    const node = shellRef.current;

    if (!node) {
      return;
    }

    const { opacity, translateY } = getScrollMetrics();
    node.style.opacity = opacity.toFixed(3);
    node.style.transform = `translate3d(0, ${translateY}px, 0)`;
  });

  const queueScrollStyleUpdate = useEffectEvent(() => {
    if (frameRef.current !== null) {
      return;
    }

    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;
      applyScrollStyle();
    });
  });

  const syncViewport = useEffectEvent(() => {
    setIsMobile(window.innerWidth < 640);
    queueScrollStyleUpdate();
  });

  const closeOnEscape = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  });

  useEffect(() => {
    queueScrollStyleUpdate();

    window.addEventListener("scroll", queueScrollStyleUpdate, { passive: true });
    window.addEventListener("resize", syncViewport);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("scroll", queueScrollStyleUpdate);
      window.removeEventListener("resize", syncViewport);
      document.removeEventListener("keydown", closeOnEscape);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const socialCards = (
    <div className="space-y-2">
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 transition hover:border-orange-500/45 hover:bg-white/[0.08] active:border-orange-500/45 active:bg-white/[0.08]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/14 text-orange-400">
              <Icon width={20} height={20} />
            </span>
            <span>
              <span className="block text-sm font-semibold text-white">{item.name}</span>
              <span className="block text-xs text-white/55">Otvori profil</span>
            </span>
          </Link>
        );
      })}
    </div>
  );

  return (
    <>
      <div
        ref={shellRef}
        className="pointer-events-none fixed right-3 top-24 z-[130] will-change-transform sm:right-6 sm:top-28"
      >
        <div className="pointer-events-auto relative flex items-center justify-end">
          {isOpen && !isMobile ? (
            <div className="absolute right-[calc(100%+0.9rem)] top-1/2 z-[140] w-64 -translate-y-1/2 rounded-[1.75rem] border border-white/12 bg-black/92 p-3 text-white shadow-[0_20px_55px_rgba(0,0,0,0.5)] backdrop-blur-xl">
              <p className="px-3 pb-2 pt-1 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-orange-400/90">
                Pratite nas
              </p>
              {socialCards}
            </div>
          ) : null}

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Zatvori drustvene mreze" : "Otvori drustvene mreze"}
            onClick={() => setIsOpen((open) => !open)}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-orange-500/45 bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-[0_18px_45px_rgba(249,115,22,0.38)] transition duration-300 hover:scale-105 hover:from-orange-400 hover:to-orange-500 sm:h-16 sm:w-16"
          >
            <Wrench
              size={isMobile ? 20 : 28}
              className={`transition duration-300 ${isOpen ? "rotate-45" : "group-hover:rotate-12"}`}
            />
          </button>
        </div>
      </div>

      {isOpen && isMobile && typeof document !== "undefined"
        ? createPortal(
            <div className="fixed inset-0 z-[140] sm:hidden">
              <button
                type="button"
                aria-label="Zatvori drustvene mreze"
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
              />

              <div className="absolute inset-x-4 bottom-24 rounded-[1.75rem] border border-white/12 bg-black/94 p-3 text-white shadow-[0_20px_55px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                <div className="mb-2 flex items-center justify-between px-3 pt-1">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-orange-400/90">
                    Pratite nas
                  </p>
                  <button
                    type="button"
                    aria-label="Zatvori panel"
                    onClick={() => setIsOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75"
                  >
                    <X size={16} />
                  </button>
                </div>

                {socialCards}
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
