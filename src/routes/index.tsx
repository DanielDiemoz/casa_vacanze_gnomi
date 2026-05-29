import { createFileRoute } from "@tanstack/react-router";
import {
  Wifi,
  Car,
  PawPrint,
  Tv,
  BedDouble,
  Bath,
  Mountain,
  Snowflake,
  Castle,
  Sparkles,
  MapPin,
  Globe,
  Users,
  Home,
  Trees,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";
import heroImg from "@/assets/IMG_0622.png";
import bedroomImg from "@/assets/IMG_0621.jpeg";
import bedroomImg2 from "@/assets/IMG_0624.png";
import terraceImg from "@/assets/terme.jpg";
import hikingImg from "@/assets/cascata.jpeg";
import winterImg from "@/assets/skyway.webp";
import cultureImg from "@/assets/fenis.jpg";

const BOOKING_URL = "https://www.booking.com/hotel/it/casa-per-vacanze-degli-gnomi.it.html?aid=2311236&label=it-it-booking-desktop-new-VRZD0IC5lt9Ulq%2AajTZ_bgS652828999642%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp1008047%3Ali%3Adec%3Adm&sid=1f5c352bc70a008db49fc781dd66b255&dest_id=8861545&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1779971261&srpvid=0e9f5799668b03e3&type=total&ucfs=1&#tab-main";

const reviews = [
  {
    name: "Rocio",
    stay: "Weekend di coppia",
    rating: "10 / 10",
    text: "Siamo stati benissimo. La struttura era impeccabile, molto silenziosa e circondata da paesaggi davvero bellissimi. Ci torneremo!",
  },
  {
    name: "Criver",
    stay: "Vacanza in famiglia",
    rating: "10 / 10",
    text: "L'accoglienza assolutamente perfetta. Gentilezza e professionalità.L'alloggio è molto spazioso e curato nei minimi particolari. Sono certo che torneremo",
  },
  {
    name: "Mariel",
    stay: "Soggiorno relax",
    rating: "10 / 10",
    text: "Erika super gentile, disponibile e simpatica. L'alloggio è stato perfetto per una serata post terme nella pace. Grazie mille!",
  },
  {
    name: "Thomas",
    stay: "Settimana sulla neve",
    rating: "9.5 / 10",
    text: "Ottima base per Courmayeur e La Thuile. Parcheggio comodissimo e rientrare la sera era un piacere.",
  },
  {
    name: "Chiara",
    stay: "Viaggio con cane",
    rating: "10 / 10",
    text: "Abbiamo apprezzato tantissimo l'accoglienza per gli animali e la tranquillità dei dintorni.",
  },
  {
    name: "Luca",
    stay: "Escursioni in valle",
    rating: "9.0 / 10",
    text: "Casa molto curata, panorama bellissimo e posizione perfetta per partire verso sentieri e borghi.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa per vacanze degli gnomi · Mansarda in Valle d'Aosta" },
      {
        name: "description",
        content:
          "Mansarda di 80 m² immersa nel verde a Cheverel, Valle d'Aosta. Vista montagne, fino a 7 ospiti, WiFi e parcheggio gratuiti. Prenota su Booking.com.",
      },
      { property: "og:title", content: "Casa per vacanze degli gnomi" },
      {
        property: "og:description",
        content:
          "Mansarda accogliente immersa nella natura della Valle d'Aosta, a 15 km da Courmayeur.",
      },
      { property: "og:image", content: heroImg },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function BookButton({
  className = "",
  children = "Prenota su Booking.com",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-accent-foreground shadow-warm transition-all hover:scale-[1.02] hover:brightness-110 active:scale-100 ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-primary-foreground">
          <a href="#" className="font-display text-xl font-semibold">
            Casa degli Gnomi
          </a>
          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#alloggio" className="opacity-90 hover:opacity-100">
              L'alloggio
            </a>
            <a href="#servizi" className="opacity-90 hover:opacity-100">
              Servizi
            </a>
            <a href="#dintorni" className="opacity-90 hover:opacity-100">
              Dintorni
            </a>
            <a href="#recensioni" className="opacity-90 hover:opacity-100">
              Recensioni
            </a>
            <a href="#contatti" className="opacity-90 hover:opacity-100">
              Contatti
            </a>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-background/95 px-5 py-2 text-sm font-medium text-foreground backdrop-blur transition hover:bg-background"
          >
            Prenota
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <img
          src={heroImg}
          alt="Mansarda con vista sulle montagne della Valle d'Aosta"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/30 to-black/70" />

        <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-16 pt-32 text-primary-foreground md:pb-24">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest backdrop-blur">
            <MapPin className="size-3.5" /> Cheverel · Valle d'Aosta
          </div>

          <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] text-balance md:text-7xl lg:text-8xl">
            Casa per vacanze <em className="text-accent not-italic">degli gnomi</em>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            Una splendida mansarda immersa nella natura della Valle d'Aosta, con vista spettacolare
            sulle montagne.
          </p>

          {/* Key facts bar */}
          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur md:grid-cols-5">
            {[
              { label: "Superficie", value: "80 m²" },
              { label: "Ospiti", value: "Fino a 7" },
              { label: "Camere", value: "2" },
              { label: "Bagno", value: "1" },
              { label: "Extra", value: "WiFi · Parking" },
            ].map((f) => (
              <div key={f.label} className="bg-black/20 px-4 py-3 text-center">
                <div className="font-display text-xl font-semibold text-white md:text-2xl">
                  {f.value}
                </div>
                <div className="mt-0.5 text-[10px] uppercase tracking-widest text-white/70">
                  {f.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <BookButton />
            <a
              href="#alloggio"
              className="text-sm font-medium text-white/90 underline-offset-4 hover:underline"
            >
              Scopri l'alloggio →
            </a>
          </div>
        </div>
      </section>

      {/* ALLOGGIO */}
      <section id="alloggio" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="text-xs font-medium uppercase tracking-widest text-accent">
                L'alloggio
              </div>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-6xl">
                Una mansarda che sa di legno, silenzio e neve fresca.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Ottanta metri quadrati di calore alpino in una zona tranquillissima, immersa nel
                verde. Camere accoglienti con moquette a terra, soffitti spioventi in legno e
                finestre che incorniciano la montagna.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  { icon: BedDouble, title: "Camera 1", desc: "1 letto matrimoniale" },
                  { icon: BedDouble, title: "Camera 2", desc: "2 letti singoli" },
                  { icon: Home, title: "Soggiorno", desc: "1 divano letto · TV" },
                  { icon: Bath, title: "Bagno", desc: "Vasca e bidet" },
                ].map((r) => (
                  <div
                    key={r.title}
                    className="flex items-start gap-4 border-b border-border/60 pb-5 last:border-0"
                  >
                    <div className="rounded-xl bg-secondary p-3 text-primary">
                      <r.icon className="size-5" />
                    </div>
                    <div>
                      <div className="font-display text-xl font-medium">{r.title}</div>
                      <div className="text-sm text-muted-foreground">{r.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                Cucina completamente attrezzata con frigorifero e forno, balcone con vista sul
                giardino e sulle montagne.
              </p>
            </div>

            <div className="relative">
              <div className="grid gap-4">
                <img
                  src={bedroomImg}
                  alt="Camera da letto con moquette e travi a vista"
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft"
                />
                <img
                  src={bedroomImg2}
                  alt="Terrazza con vista sul giardino e sulle montagne"
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="aspect-[5/4] w-2/3 -translate-y-12 self-end rounded-3xl object-cover shadow-warm"
                />
              </div>
              <div className="absolute -left-4 top-1/3 hidden rotate-[-4deg] rounded-2xl bg-card px-5 py-3 shadow-warm md:block">
                <div className="font-display text-2xl font-semibold text-primary">10/10</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Posizione · Coppie
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section id="servizi" className="relative bg-primary py-24 text-primary-foreground md:py-32">
        <div className="absolute inset-0 bg-grain opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-medium uppercase tracking-widest text-accent">
              Servizi inclusi
            </div>
            <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">
              Tutto quello che serve, niente di superfluo.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              { icon: Wifi, label: "WiFi gratuito" },
              { icon: Car, label: "Parcheggio privato" },
              { icon: PawPrint, label: "Animali ammessi" },
              { icon: Tv, label: "TV" },
              { icon: BedDouble, label: "Lenzuola incluse" },
              { icon: Sparkles, label: "Asciugamani inclusi" },
            ].map((a) => (
              <div
                key={a.label}
                className="group rounded-2xl border border-white/15 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <a.icon className="size-7 text-accent" strokeWidth={1.5} />
                <div className="mt-4 text-sm font-medium leading-tight">{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DINTORNI */}
      <section id="dintorni" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
            <div className="max-w-2xl">
              <div className="text-xs font-medium uppercase tracking-widest text-accent">
                Cosa fare nei dintorni
              </div>
              <h2 className="mt-4 font-display text-4xl font-medium md:text-6xl">
                Escursioni, neve, castelli, relax.
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              A 15 km da Courmayeur, 20 km da La Thuile e 21 km dalla Skyway Monte Bianco. La valle
              è il tuo giardino di casa.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Trees,
                img: hikingImg,
                tag: "Estate",
                title: "Trekking & Natura",
                desc: "Sentieri per tutti i livelli, Riserva del Marais, Cascata di Lenteney e molti altri sentieri nella natura.",
              },
              {
                icon: Snowflake,
                img: winterImg,
                tag: "Inverno",
                title: "Sci & Ciaspole",
                desc: "Sci alpino e ciaspolate. 15 km da Courmayeur e 20 km da La Thuile.",
              },
              {
                icon: Castle,
                img: cultureImg,
                tag: "Cultura",
                title: "Castelli & Borghi",
                desc: "Castello di Châtelard, borgo medievale di Derby e il Castello di Fénis.",
              },
              {
                icon: Mountain,
                img: terraceImg,
                tag: "Relax",
                title: "Terme & Skyway",
                desc: "Terme di Pré-Saint-Didier e Skyway Monte Bianco a soli 21 km.",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft transition hover:-translate-y-1"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="size-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground backdrop-blur">
                    <c.icon className="size-3" /> {c.tag}
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <h3 className="font-display text-2xl font-medium">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REGOLE */}
      <section className="bg-secondary py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2">
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-accent">
              Per famiglie & amici a 4 zampe
            </div>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
              Bambini e animali sono di casa.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-secondary-foreground/90">
            <div className="flex items-start gap-4">
              <Users className="mt-1 size-5 text-primary" />
              <p>
                I bambini di tutte le età sono i benvenuti. Sopra gli 11 anni pagano come adulti.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <PawPrint className="mt-1 size-5 text-primary" />
              <p>
                Gli animali domestici sono i benvenuti, con un piccolo supplemento.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Home className="mt-1 size-5 text-primary" />
              <p>L'accesso alla mansarda è tramite scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RECENSIONI */}
      <section id="recensioni" className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="text-xs font-medium uppercase tracking-widest text-accent">
                Recensioni
              </div>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-6xl">
                Le parole di chi ha già vissuto la mansarda.
              </h2>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-soft">
              <div className="flex text-accent">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" strokeWidth={1.5} />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">Ospiti soddisfatti</span>
            </div>
          </div>

          <div className="mt-14 -mx-6 overflow-x-auto px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max snap-x snap-mandatory gap-5">
              {reviews.map((review) => (
                <article
                  key={review.name}
                  className="group flex min-h-80 w-[82vw] max-w-sm snap-start flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-warm sm:w-96"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <div className="font-display text-2xl font-medium text-foreground">
                        {review.name}
                      </div>
                      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                        {review.stay}
                      </div>
                    </div>
                    <div className="rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-primary">
                      {review.rating}
                    </div>
                  </div>

                  <div className="mt-8 flex text-accent">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="size-4 fill-current" strokeWidth={1.5} />
                    ))}
                  </div>

                  <blockquote className="mt-5 flex-1 text-base leading-relaxed text-muted-foreground">
                    "{review.text}"
                  </blockquote>

                  <Quote
                    className="mt-8 size-8 text-accent/35 transition group-hover:text-accent/60"
                    strokeWidth={1.5}
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA + HOST */}
      <section id="contatti" className="relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="text-xs font-medium uppercase tracking-widest text-accent">
            La tua fuga in Valle d'Aosta
          </div>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-5xl font-medium leading-[1.05] text-balance md:text-7xl">
            La montagna ti aspetta. La mansarda è pronta.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Prenota direttamente su Booking con cancellazione flessibile e recensioni verificate
            dagli ospiti.
          </p>
          <div className="mt-10 flex justify-center">
            <BookButton className="px-10 py-5 text-lg" />
          </div>

          <div className="mx-auto mt-20 max-w-md rounded-3xl border border-border bg-card p-8 text-left shadow-soft">
            <div className="flex items-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-full bg-primary font-display text-2xl font-semibold text-primary-foreground">
                E
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Il tuo host
                </div>
                <div className="font-display text-2xl font-medium">Erika</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              "Vivo a Cheverel da 24 anni. Amo la natura e il silenzio: spero che la mansarda vi
              faccia sentire un po' come se foste a casa."
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
              <Globe className="size-4" />
              <span>Parla italiano e francese</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row md:items-center">
          <div>
            <div className="font-display text-base font-semibold text-foreground">
              Casa per vacanze degli gnomi
            </div>
            <div className="mt-1 flex items-center gap-1.5">
              <MapPin className="size-3.5" />
              Frazione Cheverel, 11015 La Salle · Italia
            </div>
          </div>
          <div>© {new Date().getFullYear()} · Tutti i diritti riservati</div>
        </div>
      </footer>
    </div>
  );
}
