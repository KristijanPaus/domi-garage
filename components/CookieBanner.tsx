"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ConsentChoice = "accepted" | "rejected" | "necessary";

const STORAGE_KEY = "domi-cookie-consent";

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentChoice | null | undefined>(undefined);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const storedValue = window.localStorage.getItem(STORAGE_KEY) as ConsentChoice | null;
      setConsent(storedValue);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const saveConsent = (choice: ConsentChoice) => {
    window.localStorage.setItem(STORAGE_KEY, choice);
    setConsent(choice);
  };

  if (consent === undefined || consent !== null) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[140] px-3 pb-3 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-5xl rounded-[1.75rem] border border-white/12 bg-black/92 p-4 text-white shadow-[0_20px_55px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-orange-400">
              Kolačići
            </p>
            <p className="text-sm leading-6 text-white/78 sm:text-[0.95rem] sm:leading-7">
              Koristimo samo nužne kolačiće za siguran i stabilan rad stranice. Ako
              kasnije uvedemo analitiku ili marketinške alate, ovdje ćeš moći odabrati
              što prihvaćaš. Više informacija je u{" "}
              <Link
                href="/pravila-privatnosti"
                className="font-semibold text-orange-400 transition hover:text-orange-300"
              >
                pravilima privatnosti
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => saveConsent("rejected")}
              className="rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              Odbij
            </button>
            <button
              type="button"
              onClick={() => saveConsent("necessary")}
              className="rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-100 transition hover:border-orange-400/50 hover:bg-orange-500/16"
            >
              Samo nužne
            </button>
            <button
              type="button"
              onClick={() => saveConsent("accepted")}
              className="rounded-full bg-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(249,115,22,0.28)] transition hover:bg-orange-500"
            >
              Prihvati
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
