import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Pravila privatnosti | DOMI Garage & Service",
  description: "Pravila privatnosti za web stranicu DOMI Garage & Service.",
};

const sections = [
  {
    title: "1. Voditelj obrade",
    content: [
      "Voditelj obrade osobnih podataka na ovoj web stranici je EDER AUTO SERVIS d.o.o za trgovinu, prijevoz i usluge, Ulica Puhali 30, Kalinovica, OIB 81935359858.",
      "Ako nam se korisnik javi telefonom ili osobno radi dogovora servisa, podatke obrađujemo isključivo radi komunikacije, dogovora termina i pružanja tražene usluge.",
    ],
  },
  {
    title: "2. Koje podatke možemo obrađivati",
    content: [
      "Prilikom pregledavanja stranice ne tražimo otvaranje korisničkog računa niti unos podataka kroz obrazac.",
      "Hosting i tehnička infrastruktura mogu privremeno obrađivati osnovne tehničke podatke poput IP adrese, vrste preglednika, vremena pristupa i sigurnosnih zapisa radi zaštite sustava i stabilnog rada stranice.",
      "Ako korisnik klikne na vanjske servise, primjerice Google Maps, daljnja obrada može se odvijati prema pravilima tih trećih strana.",
    ],
  },
  {
    title: "3. Svrha i pravna osnova",
    content: [
      "Podatke obradujemo radi legitimnog interesa za siguran i funkcionalan rad web stranice te radi odgovora na upite kada nam se korisnik samostalno javi.",
      "Ako se u budućnosti uvedu kontakt obrazac, newsletter, analitika ili marketinški alati, ova pravila privatnosti treba ažurirati prije aktivacije takvih funkcionalnosti.",
    ],
  },
  {
    title: "4. Dijeljenje podataka",
    content: [
      "Ne prodajemo niti ustupamo osobne podatke trećim stranama u marketinške svrhe.",
      "Vanjske usluge kojima korisnik pristupa klikom, kao što je Google Maps, djeluju kao zasebne usluge i na njih se primjenjuju vlastita pravila privatnosti.",
    ],
  },
  {
    title: "5. Rokovi čuvanja",
    content: [
      "Tehnički zapisi čuvaju se onoliko dugo koliko je razumno potrebno za sigurnost sustava, održavanje i rješavanje eventualnih poteškoća.",
      "Podaci koje korisnik dobrovoljno podijeli pri dogovoru servisa čuvaju se onoliko dugo koliko je potrebno za izvršenje usluge i ispunjenje zakonskih obveza.",
    ],
  },
  {
    title: "6. Kolačići",
    content: [
      "Ova web stranica trenutno ne koristi analitičke ni marketinške kolačiće poput alata za praćenje posjeta, oglašavanja ili remarketinga.",
      "Moguće je da hosting i tehnička infrastruktura koriste isključivo nužne tehničke mehanizme potrebne za sigurnost, stabilan rad stranice i osnovnu isporuku sadržaja.",
      "Ako se u budućnosti uvedu analitički, marketinški ili drugi nenužni kolačići, korisnici će prije njihove aktivacije biti obaviješteni na odgovarajući način, a ova pravila privatnosti bit će ažurirana.",
    ],
  },
  {
    title: "7. Prava korisnika",
    content: [
      "Korisnik može zatražiti pristup svojim podacima, ispravak netočnih podataka, brisanje, ograničenje obrade ili prigovor na obradu kada su za to ispunjeni zakonski uvjeti.",
      "Korisnik također ima pravo podnijeti prigovor nadležnom tijelu za zaštitu osobnih podataka u Republici Hrvatskoj.",
    ],
  },
  {
    title: "8. Kontakt",
    content: [
      "Za pitanja vezana uz privatnost i obradu podataka možete nas kontaktirati putem podataka objavljenih na ovoj web stranici ili telefonom na +385 91 791 2760.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black pt-28 text-white sm:pt-32">
        <section className="section-shell py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
                Pravila privatnosti
              </p>
              <h1 className="mb-5 text-3xl font-extrabold sm:text-4xl md:text-5xl">
                Informacije o obradi osobnih podataka
              </h1>
              <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Ova pravila privatnosti opisuju koje se informacije mogu obrađivati tijekom
                korištenja web stranice DOMI Garage & Service i u koje svrhe.
              </p>
            </div>

            <div className="space-y-6">
              {sections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8"
                >
                  <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">
                    {section.title}
                  </h2>
                  <div className="space-y-4 text-sm leading-7 text-white/72 sm:text-base">
                    {section.content.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
