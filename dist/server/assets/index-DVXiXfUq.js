import { jsxs, jsx } from "react/jsx-runtime";
import { MapPin, BedDouble, Home, Bath, Wifi, Car, PawPrint, Tv, Sparkles, Trees, Snowflake, Castle, Mountain, Users, Star, Quote, Globe, ArrowRight } from "lucide-react";
import { h as heroImg } from "./router-DPSgn2n-.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
const bedroomImg = "/assets/bedroom-8vFcM3h1.jpg";
const terraceImg = "/assets/terme-BnKZBapI.jpg";
const hikingImg = "/assets/cascata-Bwgyh4Xd.jpeg";
const winterImg = "/assets/courmayeur.jpg-DiZg-vMZ.jpg";
const cultureImg = "/assets/fenis-cIMVfG9g.jpg";
const BOOKING_URL = "https://www.booking.com/";
const reviews = [{
  name: "Marco e Giulia",
  stay: "Weekend di coppia",
  rating: "10 / 10",
  text: "Posizione eccellente, perfetta per staccare davvero. La casa è silenziosa, calda e con una vista splendida sulle montagne."
}, {
  name: "Famiglia R.",
  stay: "Vacanza in famiglia",
  rating: "9.8 / 10",
  text: "Spazi comodi, cucina attrezzata e atmosfera accogliente. I bambini si sono sentiti subito a casa."
}, {
  name: "Elena",
  stay: "Soggiorno relax",
  rating: "10 / 10",
  text: "Mansarda curata, pulita e immersa nel verde. Il balcone al mattino è stato il nostro angolo preferito."
}, {
  name: "Thomas",
  stay: "Settimana sulla neve",
  rating: "9.7 / 10",
  text: "Ottima base per Courmayeur e La Thuile. Parcheggio comodissimo e rientrare la sera era un piacere."
}, {
  name: "Chiara",
  stay: "Viaggio con cane",
  rating: "10 / 10",
  text: "Abbiamo apprezzato tantissimo l'accoglienza per gli animali e la tranquillità dei dintorni."
}, {
  name: "Luca",
  stay: "Escursioni in valle",
  rating: "9.9 / 10",
  text: "Casa ordinata, panorama bellissimo e posizione perfetta per partire verso sentieri, terme e borghi."
}];
function BookButton({
  className = "",
  children = "Prenota su Booking.com"
}) {
  return /* @__PURE__ */ jsxs("a", { href: BOOKING_URL, target: "_blank", rel: "noopener noreferrer", className: `group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-accent-foreground shadow-warm transition-all hover:scale-[1.02] hover:brightness-110 active:scale-100 ${className}`, children: [
    children,
    /* @__PURE__ */ jsx(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx("header", { className: "absolute inset-x-0 top-0 z-20", children: /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-primary-foreground", children: [
      /* @__PURE__ */ jsx("a", { href: "#", className: "font-display text-xl font-semibold", children: "Casa degli Gnomi" }),
      /* @__PURE__ */ jsxs("div", { className: "hidden items-center gap-8 text-sm md:flex", children: [
        /* @__PURE__ */ jsx("a", { href: "#alloggio", className: "opacity-90 hover:opacity-100", children: "L'alloggio" }),
        /* @__PURE__ */ jsx("a", { href: "#servizi", className: "opacity-90 hover:opacity-100", children: "Servizi" }),
        /* @__PURE__ */ jsx("a", { href: "#dintorni", className: "opacity-90 hover:opacity-100", children: "Dintorni" }),
        /* @__PURE__ */ jsx("a", { href: "#recensioni", className: "opacity-90 hover:opacity-100", children: "Recensioni" }),
        /* @__PURE__ */ jsx("a", { href: "#contatti", className: "opacity-90 hover:opacity-100", children: "Contatti" })
      ] }),
      /* @__PURE__ */ jsx("a", { href: BOOKING_URL, target: "_blank", rel: "noopener noreferrer", className: "rounded-full bg-background/95 px-5 py-2 text-sm font-medium text-foreground backdrop-blur transition hover:bg-background", children: "Prenota" })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative isolate min-h-[100svh] overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Mansarda con vista sulle montagne della Valle d'Aosta", width: 1920, height: 1080, className: "absolute inset-0 -z-10 size-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/30 to-black/70" }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-16 pt-32 text-primary-foreground md:pb-24", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest backdrop-blur", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "size-3.5" }),
          " Cheverel · Valle d'Aosta"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "max-w-4xl font-display text-5xl font-medium leading-[1.05] text-balance md:text-7xl lg:text-8xl", children: [
          "Casa per vacanze ",
          /* @__PURE__ */ jsx("em", { className: "text-accent not-italic", children: "degli gnomi" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl", children: "Una splendida mansarda immersa nella natura della Valle d'Aosta, con vista spettacolare sulle montagne." }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur md:grid-cols-5", children: [{
          label: "Superficie",
          value: "80 m²"
        }, {
          label: "Ospiti",
          value: "Fino a 7"
        }, {
          label: "Camere",
          value: "2"
        }, {
          label: "Bagno",
          value: "1"
        }, {
          label: "Extra",
          value: "WiFi · Parking"
        }].map((f) => /* @__PURE__ */ jsxs("div", { className: "bg-black/20 px-4 py-3 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-xl font-semibold text-white md:text-2xl", children: f.value }),
          /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-[10px] uppercase tracking-widest text-white/70", children: f.label })
        ] }, f.label)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsx(BookButton, {}),
          /* @__PURE__ */ jsx("a", { href: "#alloggio", className: "text-sm font-medium text-white/90 underline-offset-4 hover:underline", children: "Scopri l'alloggio →" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "alloggio", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-16 lg:grid-cols-2 lg:gap-20", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-medium uppercase tracking-widest text-accent", children: "L'alloggio" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl font-medium leading-tight md:text-6xl", children: "Una mansarda che sa di legno, silenzio e neve fresca." }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg leading-relaxed text-muted-foreground", children: "Ottanta metri quadrati di calore alpino in una zona tranquillissima, immersa nel verde. Camere accoglienti con moquette a terra, soffitti spioventi in legno e finestre che incorniciano la montagna." }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-5", children: [{
          icon: BedDouble,
          title: "Camera 1",
          desc: "1 letto matrimoniale"
        }, {
          icon: BedDouble,
          title: "Camera 2",
          desc: "2 letti singoli"
        }, {
          icon: Home,
          title: "Soggiorno",
          desc: "1 divano letto · TV"
        }, {
          icon: Bath,
          title: "Bagno",
          desc: "Vasca e bidet"
        }].map((r) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 border-b border-border/60 pb-5 last:border-0", children: [
          /* @__PURE__ */ jsx("div", { className: "rounded-xl bg-secondary p-3 text-primary", children: /* @__PURE__ */ jsx(r.icon, { className: "size-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-display text-xl font-medium", children: r.title }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: r.desc })
          ] })
        ] }, r.title)) }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-base leading-relaxed text-muted-foreground", children: "Cucina completamente attrezzata con frigorifero e forno, balcone con vista sul giardino e sulle montagne." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4", children: [
          /* @__PURE__ */ jsx("img", { src: bedroomImg, alt: "Camera da letto con moquette e travi a vista", loading: "lazy", width: 1280, height: 960, className: "aspect-[4/5] w-full rounded-3xl object-cover shadow-soft" }),
          /* @__PURE__ */ jsx("img", { src: terraceImg, alt: "Terrazza con vista sul giardino e sulle montagne", loading: "lazy", width: 1280, height: 960, className: "aspect-[5/4] w-2/3 -translate-y-12 self-end rounded-3xl object-cover shadow-warm" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "absolute -left-4 top-1/3 hidden rotate-[-4deg] rounded-2xl bg-card px-5 py-3 shadow-warm md:block", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-2xl font-semibold text-primary", children: "10/10" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Posizione · Coppie" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs("section", { id: "servizi", className: "relative bg-primary py-24 text-primary-foreground md:py-32", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grain opacity-30" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-medium uppercase tracking-widest text-accent", children: "Servizi inclusi" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl font-medium md:text-5xl", children: "Tutto quello che serve, niente di superfluo." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6", children: [{
          icon: Wifi,
          label: "WiFi gratuito"
        }, {
          icon: Car,
          label: "Parcheggio privato"
        }, {
          icon: PawPrint,
          label: "Animali ammessi"
        }, {
          icon: Tv,
          label: "TV"
        }, {
          icon: BedDouble,
          label: "Lenzuola incluse"
        }, {
          icon: Sparkles,
          label: "Asciugamani inclusi"
        }].map((a) => /* @__PURE__ */ jsxs("div", { className: "group rounded-2xl border border-white/15 bg-white/5 p-6 transition hover:bg-white/10", children: [
          /* @__PURE__ */ jsx(a.icon, { className: "size-7 text-accent", strokeWidth: 1.5 }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 text-sm font-medium leading-tight", children: a.label })
        ] }, a.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "dintorni", className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end justify-between gap-6 md:flex-row", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-medium uppercase tracking-widest text-accent", children: "Cosa fare nei dintorni" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl font-medium md:text-6xl", children: "Escursioni, neve, castelli, relax." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "max-w-sm text-muted-foreground", children: "A 15 km da Courmayeur, 20 km da La Thuile e 21 km dalla Skyway Monte Bianco. La valle è il tuo giardino di casa." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4", children: [{
        icon: Trees,
        img: hikingImg,
        tag: "Estate",
        title: "Trekking & Bike",
        desc: "Sentieri per tutti i livelli, Riserva del Marais, Cascata di Lenteney e Bike Park a Maison Gerbollier."
      }, {
        icon: Snowflake,
        img: winterImg,
        tag: "Inverno",
        title: "Sci & Ciaspole",
        desc: "Sci alpino e ciaspolate. 15 km da Courmayeur e 20 km da La Thuile."
      }, {
        icon: Castle,
        img: cultureImg,
        tag: "Cultura",
        title: "Castelli & Borghi",
        desc: "Castello di Châtelard, borgo medievale di Derby e il Castello di Fénis."
      }, {
        icon: Mountain,
        img: terraceImg,
        tag: "Relax",
        title: "Terme & Skyway",
        desc: "Terme di Pré-Saint-Didier e Skyway Monte Bianco a soli 21 km."
      }].map((c) => /* @__PURE__ */ jsxs("article", { className: "group flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft transition hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] overflow-hidden", children: [
          /* @__PURE__ */ jsx("img", { src: c.img, alt: c.title, loading: "lazy", width: 1024, height: 1280, className: "size-full object-cover transition duration-700 group-hover:scale-105" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground backdrop-blur", children: [
            /* @__PURE__ */ jsx(c.icon, { className: "size-3" }),
            " ",
            c.tag
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-medium", children: c.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: c.desc })
        ] })
      ] }, c.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-medium uppercase tracking-widest text-accent", children: "Per famiglie & amici a 4 zampe" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl font-medium leading-tight md:text-5xl", children: "Bambini e animali sono di casa." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-base leading-relaxed text-secondary-foreground/90", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx(Users, { className: "mt-1 size-5 text-primary" }),
          /* @__PURE__ */ jsx("p", { children: "I bambini di tutte le età sono i benvenuti. Sopra gli 11 anni pagano come adulti." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx(PawPrint, { className: "mt-1 size-5 text-primary" }),
          /* @__PURE__ */ jsx("p", { children: "Gli animali domestici sono i benvenuti, con un piccolo supplemento supplementi nascosti." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx(Home, { className: "mt-1 size-5 text-primary" }),
          /* @__PURE__ */ jsx("p", { children: "L'accesso alla mansarda è tramite scale." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "recensioni", className: "relative overflow-hidden py-24 md:py-32", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-6 md:flex-row md:items-end", children: [
          /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs font-medium uppercase tracking-widest text-accent", children: "Recensioni" }),
            /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl font-medium leading-tight md:text-6xl", children: "Le parole di chi ha già vissuto la mansarda." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-soft", children: [
            /* @__PURE__ */ jsx("div", { className: "flex text-accent", children: Array.from({
              length: 5
            }).map((_, index) => /* @__PURE__ */ jsx(Star, { className: "size-4 fill-current", strokeWidth: 1.5 }, index)) }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-foreground", children: "Ospiti soddisfatti" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-14 -mx-6 overflow-x-auto px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", children: /* @__PURE__ */ jsx("div", { className: "flex w-max snap-x snap-mandatory gap-5", children: reviews.map((review) => /* @__PURE__ */ jsxs("article", { className: "group flex min-h-80 w-[82vw] max-w-sm snap-start flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-warm sm:w-96", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-5", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-display text-2xl font-medium text-foreground", children: review.name }),
              /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground", children: review.stay })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-primary", children: review.rating })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 flex text-accent", children: Array.from({
            length: 5
          }).map((_, index) => /* @__PURE__ */ jsx(Star, { className: "size-4 fill-current", strokeWidth: 1.5 }, index)) }),
          /* @__PURE__ */ jsxs("blockquote", { className: "mt-5 flex-1 text-base leading-relaxed text-muted-foreground", children: [
            '"',
            review.text,
            '"'
          ] }),
          /* @__PURE__ */ jsx(Quote, { className: "mt-8 size-8 text-accent/35 transition group-hover:text-accent/60", strokeWidth: 1.5 })
        ] }, review.name)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "contatti", className: "relative overflow-hidden py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs font-medium uppercase tracking-widest text-accent", children: "La tua fuga in Valle d'Aosta" }),
      /* @__PURE__ */ jsx("h2", { className: "mx-auto mt-4 max-w-3xl font-display text-5xl font-medium leading-[1.05] text-balance md:text-7xl", children: "La montagna ti aspetta. La mansarda è pronta." }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-xl text-lg text-muted-foreground", children: "Prenota direttamente su Booking con cancellazione flessibile e recensioni verificate dagli ospiti." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 flex justify-center", children: /* @__PURE__ */ jsx(BookButton, { className: "px-10 py-5 text-lg" }) }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-20 max-w-md rounded-3xl border border-border bg-card p-8 text-left shadow-soft", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "flex size-14 items-center justify-center rounded-full bg-primary font-display text-2xl font-semibold text-primary-foreground", children: "E" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Il tuo host" }),
            /* @__PURE__ */ jsx("div", { className: "font-display text-2xl font-medium", children: "Erika" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: `"Vivo a Cheverel da 24 anni. Amo la natura e il silenzio: spero che la mansarda vi faccia sentire un po' come a casa."` }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center gap-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsx(Globe, { className: "size-4" }),
          /* @__PURE__ */ jsx("span", { children: "Parla italiano e francese" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "border-t border-border bg-background py-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row md:items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-base font-semibold text-foreground", children: "Casa per vacanze degli gnomi" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "size-3.5" }),
          "Frazione Cheverel, 11015 Challancin · Italia"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " · Tutti i diritti riservati"
      ] })
    ] }) })
  ] });
}
export {
  Index as component
};
