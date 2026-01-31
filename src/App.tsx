import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Instagram,
  Mail,
  Phone,
  Sparkles,
  Film,
  Wand2,
  Globe,
  Search,
  Megaphone,
  Camera,
  LineChart,
  ChevronUp,
  Facebook,
  Send,
  MessagesSquare,
} from 'lucide-react'
import Container from './components/Container'
import Reveal from './components/Reveal'
import Loader from './components/Loader'
import LinkButton from './components/LinkButton'
import ThemeToggle from './components/ThemeToggle'
import ScrollProgress from './components/ScrollProgress'
import BackgroundParticles from './components/BackgroundParticles'

const CONTACT = {
  phoneDisplay: '+381 6X XXX XXXX',
  phoneHref: 'tel:+3816XXXXXXXX',
  email: 'hello@idemodalje.rs',

  instagramHref: 'https://instagram.com/idemodalje.rs',
  tiktokHref: 'https://www.tiktok.com/@idemodalje.rs',
  facebookHref: 'https://www.facebook.com/idemodalje.rs',
}

const SERVICE_CARDS = [
  { icon: Sparkles, title: 'AI', bullets: ['AI video/UGC koncepti', 'Skripte + hookovi + CTA', 'Brzi prototipi sadržaja'] },
  { icon: Film, title: 'Kratke reklame', bullets: ['Reels/TikTok/Shorts montaža', 'Tempo, ritam, titlovi', 'Varijante (A/B)'] },
  { icon: Wand2, title: 'Brend', bullets: ['Rebranding / refresh', 'Logo sistem + smernice', 'Vizuelni templates'] },
  { icon: Globe, title: 'Web', bullets: ['Landing / prezentacioni sajt', 'Mobilna optimizacija', 'Deploy + domen setup'] },
  { icon: Search, title: 'SEO', bullets: ['On-page osnove', 'Tehnički SEO (brzina)', 'Indexing + struktura'] },
  { icon: Megaphone, title: 'Rast', bullets: ['Kreativa za kampanje', 'Content plan (organski)', 'Optimizacija profila'] },
  { icon: Camera, title: 'Produkcija', bullets: ['Snimanje / foto (po dogovoru)', 'Retuš + grading', 'Formatiranje za mreže'] },
  { icon: LineChart, title: 'Sistem', bullets: ['Workflow i standardi', 'Organizacija materijala', 'Brži output bez haosa'] },
  { icon: MessagesSquare, title: 'Konsultacije', bullets: ['Audit profila i sadržaja', 'Strategija i prioriteti', 'Smernice za 30 dana'] },
]

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <div className="text-xs tracking-[0.35em] opacity-55">{kicker}</div>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
    </div>
  )
}

function QuoteMinimal({ reduce }: { reduce: boolean }) {
  return (
    <div className="text-right">
      <motion.p
        className="text-base leading-relaxed opacity-80 sm:text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        “Život je kao vožnja bicikla. Da bi održao ravnotežu, moraš da se krećeš.”
      </motion.p>

      <motion.div
        className="ml-auto mt-5 h-px w-28"
        style={{ background: 'var(--accent)', opacity: 0.35 }}
        animate={reduce ? undefined : { opacity: [0.22, 0.45, 0.22] }}
        transition={reduce ? undefined : { duration: 3.0, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="mt-4 text-xs tracking-[0.25em] opacity-55"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.06 }}
      >
        ALBERT EINSTEIN
      </motion.div>
    </div>
  )
}

function HeroLogoCapsule({ reduce }: { reduce: boolean }) {
  return (
    <motion.div
      className="hero-logo-wrap"
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
      aria-hidden="true"
    >
      <div className="hero-logo-inner">
        <img src="/logo_light.png" alt="" className="h-10 w-auto dark:hidden" />
        <img src="/logo_dark.png" alt="" className="hidden h-10 w-auto dark:block" />
      </div>

      <motion.div
        className="hero-logo-ring"
        animate={reduce ? undefined : { opacity: [0.32, 0.62, 0.32] }}
        transition={reduce ? undefined : { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}

export default function App() {
  const reduce = useReducedMotion()

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function scrollToServices() {
    const el = document.getElementById('services')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen">
      <Loader />
      <ScrollProgress />

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-fog dark:bg-ink" />
        <div className="absolute inset-0 gridfade" />
        <div className="absolute inset-0 noise" />
        <div className="absolute inset-0 ambient-shift" />
        <BackgroundParticles />
        <div className="absolute inset-0 light-vignette" />
        <div className="absolute inset-0 dark-vignette" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-black/10 bg-fog/75 backdrop-blur dark:border-white/8 dark:bg-ink/55">
        <Container className="h-16">
          {/* Mobile: centered logo + theme toggle right */}
          <div className="grid h-16 grid-cols-3 items-center sm:hidden">
            <div />
            <a href="#top" className="flex items-center justify-center">
              <img src="/logo_light.png" alt="Idemo Dalje" className="h-8 w-auto dark:hidden" />
              <img src="/logo_dark.png" alt="Idemo Dalje" className="hidden h-8 w-auto dark:block" />
            </a>
            <div className="flex justify-end">
              <ThemeToggle />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden h-16 items-center justify-between sm:flex">
            <a href="#top" className="flex items-center gap-3">
              <img src="/logo_light.png" alt="Idemo Dalje" className="h-8 w-auto dark:hidden" />
              <img src="/logo_dark.png" alt="Idemo Dalje" className="hidden h-8 w-auto dark:block" />
              <div className="hidden sm:block">
                <div className="text-xs tracking-[0.35em] opacity-75">IDEMO DALJE</div>
              </div>
            </a>

            <nav className="flex items-center gap-2">
              <ThemeToggle />
              <a className="rounded-xl px-3 py-2 text-sm opacity-70 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5" href="#services">
                Usluge
              </a>
              <a className="rounded-xl px-3 py-2 text-sm opacity-70 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5" href="#contact">
                Kontakt
              </a>

              <LinkButton variant="ghost" href={CONTACT.instagramHref} target="_blank" rel="noreferrer" className="hidden sm:inline-flex">
                <Instagram className="h-4 w-4" />
                Instagram
                <ArrowUpRight className="h-4 w-4 opacity-70" />
              </LinkButton>
            </nav>
          </div>
        </Container>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative">
          <Container className="relative">
            <div
              className="
                relative
                pt-16 pb-14
                sm:pt-20 sm:pb-16
                lg:min-h-[calc(100vh-4rem)] lg:pt-28 lg:pb-20
              "
            >
              <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                {/* LEFT */}
                <div className="lg:col-span-7">
                  <Reveal>
                    <div className="text-xs tracking-[0.35em] opacity-55">BUDUĆNOST JE PRED TOBOM.</div>
                  </Reveal>

                  <Reveal delay={0.06}>
                    <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                      Idemo dalje.
                    </h1>
                  </Reveal>

                  <Reveal delay={0.12}>
                    <p className="mt-5 max-w-xl text-base leading-relaxed opacity-70 sm:text-lg lg:text-xl">
                      Premium digitalne i marketing usluge.
                    </p>
                  </Reveal>

                  <Reveal delay={0.18}>
                    <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 justify-center sm:justify-start">
                      <LinkButton variant="primary" href="#contact" className="shine">
                        Kontakt
                        <ArrowUpRight className="h-4 w-4" />
                      </LinkButton>
                      <LinkButton variant="ghost" href="#services">
                        Usluge
                      </LinkButton>
                      <LinkButton variant="ghost" href={CONTACT.phoneHref}>
                        <Phone className="h-4 w-4" />
                        Pozovi
                      </LinkButton>
                    </div>
                  </Reveal>
                </div>

                {/* RIGHT: on non-wide screens show quote here; on very wide (xl+) show logo capsule */}
                <div className="lg:col-span-5 lg:flex lg:justify-end">
                  <Reveal delay={0.08} className="w-full lg:w-auto xl:hidden">
                    <div className="w-full lg:w-[420px]">
                      <QuoteMinimal reduce={reduce} />
                    </div>
                  </Reveal>

                  <Reveal delay={0.08} className="hidden xl:block">
                    <HeroLogoCapsule reduce={reduce} />
                  </Reveal>
                </div>
              </div>

              {/* Quote pushed to bottom-right ONLY when logo exists (xl+) */}
              <div className="mt-10 lg:mt-14 hidden xl:block">
                <div className="grid lg:grid-cols-12">
                  <div className="lg:col-span-7" />
                  <div className="lg:col-span-5 lg:flex lg:justify-end">
                    <Reveal delay={0.12} className="w-[420px]">
                      <QuoteMinimal reduce={reduce} />
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
          </Container>

          {/* Scroll hint (desktop only) */}
          <div className="absolute bottom-6 left-0 right-0 hidden lg:block">
            <div className="flex justify-center">
              <button
                type="button"
                onClick={scrollToServices}
                className="
                  group inline-flex items-center gap-2
                  rounded-full border border-black/10 bg-white/70 px-4 py-2
                  text-xs tracking-[0.25em] opacity-75 shadow-soft transition
                  hover:opacity-100 hover:bg-black/5 active:scale-[0.98]
                  dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/7
                "
                aria-label="Više"
              >
                <span>VIŠE</span>
                <motion.span
                  className="inline-flex items-center justify-center"
                  animate={reduce ? undefined : { y: [0, 6, 0] }}
                  transition={reduce ? undefined : { duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowDown className="h-4 w-4" />
                </motion.span>
              </button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t border-black/10 py-16 sm:py-20 dark:border-white/8">
          <Container>
            <Reveal>
              <SectionTitle kicker="USLUGE" title="Sve na jednom mestu." />
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICE_CARDS.map((s, idx) => {
                const Icon = s.icon
                return (
                  <Reveal key={s.title} delay={0.03 * idx}>
                    <div className="service-card relative rounded-3xl border border-black/10 bg-white/70 p-6 shadow-soft dark:border-white/10 dark:bg-white/5 dark:shadow-glow">
                      <div className="flex items-start gap-4">
                        <div className="rounded-2xl border border-black/10 bg-black/5 p-3 dark:border-white/10 dark:bg-ink/35">
                          <Icon className="h-5 w-5 opacity-80" />
                        </div>
                        <div>
                          <div className="text-base font-medium">{s.title}</div>
                          <div className="mt-3 space-y-2">
                            {s.bullets.map((b) => (
                              <div key={b} className="text-sm opacity-70">
                                • {b}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </Container>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-black/10 py-16 sm:py-20 dark:border-white/8">
          <Container>
            <Reveal>
              <SectionTitle kicker="KONTAKT" title="Put od hiljadu milja počinje prvim korakom." />
            </Reveal>

            <div className="mt-10 grid gap-6 lg:grid-cols-12 items-start">
              <Reveal className="lg:col-span-7">
                <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-soft dark:border-white/10 dark:bg-white/5 dark:shadow-glow sm:p-8">
                  <div className="text-sm opacity-70">Telefon, email ili DM. WhatsApp/Viber: preko broja.</div>

                  <div className="mt-6 space-y-3">
                    <a
                      className="contact-row flex items-center justify-between gap-3 rounded-2xl border border-black/10 bg-black/5 px-4 py-3 transition dark:border-white/10 dark:bg-ink/35"
                      href={CONTACT.phoneHref}
                    >
                      <span className="inline-flex items-center gap-2 text-sm opacity-85">
                        <Phone className="h-4 w-4" />
                        Pozovi
                      </span>
                      <span className="text-sm font-semibold tracking-tight">{CONTACT.phoneDisplay}</span>
                    </a>

                    <a
                      className="contact-row flex items-center justify-between gap-3 rounded-2xl border border-black/10 bg-black/5 px-4 py-3 transition dark:border-white/10 dark:bg-ink/35"
                      href={`mailto:${CONTACT.email}`}
                    >
                      <span className="inline-flex items-center gap-2 text-sm opacity-85">
                        <Mail className="h-4 w-4" />
                        Email
                      </span>
                      <span className="text-sm font-semibold tracking-tight">{CONTACT.email}</span>
                    </a>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <a className="social-chip" href={CONTACT.instagramHref} target="_blank" rel="noreferrer">
                      <span className="inline-flex items-center gap-2">
                        <Instagram className="h-4 w-4" /> Instagram
                      </span>
                      <ArrowUpRight className="h-4 w-4 opacity-60" />
                    </a>

                    <a className="social-chip" href={CONTACT.tiktokHref} target="_blank" rel="noreferrer">
                      <span className="inline-flex items-center gap-2">
                        <Send className="h-4 w-4" /> TikTok
                      </span>
                      <ArrowUpRight className="h-4 w-4 opacity-60" />
                    </a>

                    <a className="social-chip" href={CONTACT.facebookHref} target="_blank" rel="noreferrer">
                      <span className="inline-flex items-center gap-2">
                        <Facebook className="h-4 w-4" /> Facebook
                      </span>
                      <ArrowUpRight className="h-4 w-4 opacity-60" />
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal className="lg:col-span-5">
                <div className="rounded-3xl border border-black/10 bg-white/50 p-6 shadow-soft dark:border-white/10 dark:bg-white/5 dark:shadow-glow sm:p-8">
                  <div className="text-xs tracking-[0.35em] opacity-60">BRZI START</div>
                  <div className="mt-3 text-sm leading-relaxed opacity-75">
                    Pošalji 2–3 rečenice: šta prodaješ, kome i koji ti je cilj. Mi vraćamo predlog u sledećem koraku.
                  </div>

                  <div className="mt-6">
                    <LinkButton variant="primary" href={CONTACT.instagramHref} target="_blank" rel="noreferrer" className="shine w-full justify-center">
                      Pošalji DM
                      <ArrowUpRight className="h-4 w-4" />
                    </LinkButton>
                  </div>
                </div>
              </Reveal>
            </div>

            <footer className="mt-14 border-t border-black/10 pt-8 dark:border-white/8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <img src="/logo_light.png" alt="Idemo Dalje" className="h-6 w-auto dark:hidden" />
                  <img src="/logo_dark.png" alt="Idemo Dalje" className="hidden h-6 w-auto dark:block" />
                  <div className="text-xs opacity-55">© {new Date().getFullYear()} Idemo Dalje</div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <a
                    className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-black/5 px-4 py-2.5 text-sm font-medium transition hover:bg-black/7 active:scale-[0.98]
                               dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/7"
                    href={CONTACT.phoneHref}
                  >
                    <Phone className="h-4 w-4" />
                    Pozovi
                  </a>

                  <a
                    className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-black/5 px-4 py-2.5 text-sm font-medium transition hover:bg-black/7 active:scale-[0.98]
                               dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/7"
                    href={`mailto:${CONTACT.email}`}
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </a>

                  <button
                    type="button"
                    onClick={scrollTop}
                    className="inline-flex items-center gap-2 rounded-2xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-[var(--accent-ink)] shadow-soft transition hover:-translate-y-[1px] active:scale-[0.98]"
                  >
                    <ChevronUp className="h-4 w-4" />
                    Nazad na vrh
                  </button>
                </div>
              </div>
            </footer>
          </Container>
        </section>
      </main>
    </div>
  )
}
