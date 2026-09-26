import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MapPin,
  ShieldCheck,
  Home,
  Droplets,
  Leaf,
  Wrench,
  Hammer,
  Layers,
  Star,
  ArrowRight,
  Check,
} from "lucide-react";

import heroHome from "@/assets/hero-home.jpg";
import gutterInstall from "@/assets/gutter-install.jpg";
import leafGuard from "@/assets/leaf-guard.jpg";
import siding from "@/assets/siding.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Patterson Guttering & Trim Co. | Roofing & Gutters in Waverly, TN",
      },
      {
        name: "description",
        content:
          "Family-owned roofing, gutter installation, cleaning, repair, leaf guards and siding serving Waverly, Tennessee. Call (931) 296-4680 for a free estimate.",
      },
      {
        property: "og:title",
        content: "Patterson Guttering & Trim Co. | Roofing & Gutters in Waverly, TN",
      },
      {
        property: "og:description",
        content:
          "Protect your home from the top down. Quality roofing, gutters, and exterior work you can count on.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const PHONE = "(931) 296-4680";
const TEL = "tel:+19312964680";

const reasons = [
  {
    icon: Home,
    title: "Local and Family Owned",
    body: "We are proud to serve homeowners in Waverly and the surrounding area with dependable exterior services.",
  },
  {
    icon: ShieldCheck,
    title: "Roofing Expertise",
    body: "From roofing work and repairs to complete exterior projects, we have experience working with a variety of roofing needs.",
  },
  {
    icon: Droplets,
    title: "Quality Gutter Systems",
    body: "We install, clean, repair, and improve gutter systems to help direct water away from your home.",
  },
  {
    icon: Leaf,
    title: "Leaf Guard Options",
    body: "Protect your gutters from leaves and debris with professionally installed leaf guard solutions.",
  },
];

const services = [
  {
    icon: Home,
    title: "Roofing",
    body: "Reliable roofing services for residential and commercial properties, including repairs and exterior improvements.",
  },
  {
    icon: Droplets,
    title: "Gutter Installation",
    body: "Professional 5-inch and 6-inch gutter installation designed to help protect your home from water damage.",
  },
  {
    icon: Wrench,
    title: "Gutter Cleaning",
    body: "Keep your gutters flowing properly with professional cleaning services.",
  },
  {
    icon: Hammer,
    title: "Gutter Repair",
    body: "Repair damaged or aging gutter systems and restore proper water drainage.",
  },
  {
    icon: Leaf,
    title: "Leaf Guards",
    body: "Add leaf protection to new or existing gutters and reduce the need for frequent cleaning.",
  },
  {
    icon: Layers,
    title: "Siding",
    body: "Exterior siding services that improve your home's appearance while providing an additional layer of protection.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="surface-ink sticky top-0 z-50 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="surface-brand flex size-10 items-center justify-center rounded-sm">
              <Home className="size-5" />
            </span>
            <span className="font-display leading-tight">
              <span className="block text-base font-700 tracking-wide uppercase">
                Patterson
              </span>
              <span className="text-ink-muted block text-[0.62rem] tracking-[0.25em] uppercase">
                Guttering &amp; Trim Co.
              </span>
            </span>
          </a>
          <nav className="font-display hidden items-center gap-7 text-xs tracking-[0.18em] uppercase lg:flex">
            {["Services", "Why Us", "Reviews", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-brand transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href={TEL}
            className="surface-brand font-display inline-flex items-center gap-2 rounded-sm px-4 py-2.5 text-sm tracking-wide transition-transform hover:scale-[1.03]"
          >
            <Phone className="size-4" />
            <span className="hidden sm:inline">{PHONE}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="surface-ink relative overflow-hidden">
        <img
          src={heroHome}
          alt="Home at dusk with a dark metal roof and clean white gutters"
          width={1600}
          height={1104}
          className="absolute inset-0 size-full object-cover opacity-55"
        />
        <div className="from-ink via-ink/85 absolute inset-0 bg-gradient-to-r to-transparent" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 md:py-36">
          <p className="eyebrow">
            <span className="bg-brand inline-block h-px w-8" />
            Waverly, Tennessee
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[0.95] font-bold uppercase md:text-7xl">
            Protect your home
            <span className="text-brand block">from the top down</span>
          </h1>
          <p className="text-ink-muted mt-6 max-w-xl text-lg">
            Quality roofing, gutters, and exterior work you can count on. Patterson
            Guttering &amp; Trim Co. is a family-owned local company serving Waverly and
            surrounding communities.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="surface-brand font-display inline-flex items-center gap-2 rounded-sm px-7 py-4 text-sm tracking-[0.12em] uppercase transition-transform hover:scale-[1.03]"
            >
              Get a free estimate <ArrowRight className="size-4" />
            </a>
            <a
              href={TEL}
              className="font-display text-ink-foreground inline-flex items-center gap-2 rounded-sm border border-white/30 px-7 py-4 text-sm tracking-[0.12em] uppercase transition-colors hover:bg-white/10"
            >
              <Phone className="size-4" /> Call {PHONE}
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <div className="text-brand flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <span className="text-ink-muted text-sm">
              5.0 Google rating &middot; Family owned, locally trusted
            </span>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section id="why-us" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <p className="eyebrow">
          <span className="bg-brand inline-block h-px w-8" />
          Why choose Patterson?
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl font-bold uppercase md:text-5xl">
          Dependable exterior work, close to home
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-background p-7">
              <span className="text-brand border-brand/30 flex size-11 items-center justify-center rounded-sm border">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold uppercase">{title}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="surface-ink py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">
                <span className="bg-brand inline-block h-px w-8" />
                Our services
              </p>
              <h2 className="mt-4 text-4xl font-bold uppercase md:text-5xl">
                Everything outside your walls
              </h2>
            </div>
            <a
              href="#contact"
              className="font-display text-brand inline-flex items-center gap-2 text-sm tracking-[0.12em] uppercase"
            >
              Request an estimate <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="hover:border-brand/60 group rounded-sm border border-white/10 bg-white/[0.04] p-7 transition-colors"
              >
                <span className="text-brand flex size-11 items-center justify-center rounded-sm bg-white/5">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold uppercase">{title}</h3>
                <p className="text-ink-muted mt-3 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split feature */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={gutterInstall}
              alt="Installer fastening a seamless gutter to a roof edge"
              loading="lazy"
              width={1200}
              height={1408}
              className="col-span-2 h-80 w-full rounded-sm object-cover md:h-[26rem]"
            />
            <img
              src={leafGuard}
              alt="Leaf guard mesh keeping leaves out of a gutter"
              loading="lazy"
              width={1200}
              height={912}
              className="h-40 w-full rounded-sm object-cover md:h-52"
            />
            <img
              src={siding}
              alt="Home with new siding and dark trim"
              loading="lazy"
              width={1200}
              height={912}
              className="h-40 w-full rounded-sm object-cover md:h-52"
            />
          </div>
          <div>
            <p className="eyebrow">
              <span className="bg-brand inline-block h-px w-8" />
              Built to protect your home
            </p>
            <h2 className="mt-4 text-4xl font-bold uppercase md:text-5xl">
              Protect your home with quality work
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              Your roof and gutter system play an important role in protecting your home.
              Patterson Guttering &amp; Trim Co. brings local experience and practical
              solutions to every project.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Whether you need new gutters, a repair, leaf guards, roofing work, or
              exterior improvements, we're ready to help.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "5-inch and 6-inch seamless gutter installation",
                "Gutter cleaning, repair and drainage fixes",
                "Leaf guards for new or existing gutters",
                "Roofing and siding for homes and businesses",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="text-brand mt-0.5 size-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="surface-brand font-display mt-9 inline-flex items-center gap-2 rounded-sm px-7 py-4 text-sm tracking-[0.12em] uppercase transition-transform hover:scale-[1.03]"
            >
              Request your free estimate <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Review */}
      <section id="reviews" className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="eyebrow justify-center">What our customers say</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="text-brand flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
            </div>
            <span className="font-display text-lg">5.0 Google rating</span>
            <span className="text-muted-foreground text-sm">2 Google reviews</span>
          </div>
          <blockquote className="font-display mt-8 text-2xl leading-snug md:text-3xl">
            "Thank you for recommending this company to us. They were recommended to me
            and we're so relieved we listened and hired them. I believe they'll do an
            excellent job for you, too."
          </blockquote>
          <p className="text-muted-foreground mt-6 text-xs tracking-[0.2em] uppercase">
            — Google Customer Review
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="surface-brand py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-display text-sm tracking-[0.22em] uppercase opacity-80">
              Serving Waverly and surrounding areas
            </p>
            <h2 className="mt-4 text-4xl font-bold uppercase md:text-5xl">
              Call today for a free estimate
            </h2>
            <p className="mt-4 max-w-md opacity-90">
              Family owned. Locally trusted. Built to protect your home.
            </p>
          </div>
          <div className="space-y-4 md:justify-self-end">
            <a
              href={TEL}
              className="font-display text-ink flex items-center gap-3 rounded-sm bg-white px-7 py-5 text-2xl tracking-wide"
            >
              <Phone className="size-6" /> {PHONE}
            </a>
            <p className="flex items-start gap-3 text-sm opacity-90">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              716 Pumpkin Creek Rd
              <br />
              Waverly, TN 37185
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="surface-ink border-t border-white/10">
        <div className="text-ink-muted mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-xs">
          <span className="font-display tracking-[0.18em] uppercase">
            Patterson Guttering &amp; Trim Co.
          </span>
          <span>Roofing • Gutters • Siding • Exterior Services</span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
