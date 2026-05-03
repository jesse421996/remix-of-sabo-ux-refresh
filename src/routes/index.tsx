import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Zap, Palette, Code2, Bot, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/sabo/01-hero-noir-gold.jpg";
import svcBuild from "@/assets/sabo/02-service-build.jpg";
import svcAuto from "@/assets/sabo/03-service-automate.jpg";
import svcCreate from "@/assets/sabo/04-service-create.jpg";
import caseArena from "@/assets/sabo/05-case-arena.jpg";
import caseHub from "@/assets/sabo/06-case-sabohub.jpg";
import caseAI from "@/assets/sabo/07-case-ainewbie.jpg";
import caseRE from "@/assets/sabo/08-case-realestate.jpg";
import team from "@/assets/sabo/11-team-portrait.jpg";
import city from "@/assets/sabo/12-hcmc-night.jpg";
import {
  AuroraBg, StardustBg, SilkBg, MarbleBg, DecoBg, MetalBg,
  GrainOverlay, Spotlight, OrbitRings, MarqueeStrip, TiltCard,
  SectionLabel, GoldDivider, GoldText, VelvetCard, LUX_BG_GALLERY,
} from "@/components/lux";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sabo Studio — Build · Automate · Create" },
      { name: "description", content: "Premium digital studio crafting noir-gold experiences, AI automations and bespoke web platforms." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-widest text-sm">
            <span className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            SABO<span className="text-primary">.</span>STUDIO
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground transition">Services</a></li>
            <li><a href="#work" className="hover:text-foreground transition">Work</a></li>
            <li><a href="#about" className="hover:text-foreground transition">About</a></li>
            <li><a href="#contact" className="hover:text-foreground transition">Contact</a></li>
          </ul>
          <Button size="sm" className="rounded-full">Start a project <ArrowRight className="h-4 w-4" /></Button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={hero} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <AuroraBg className="absolute inset-0 -z-10 opacity-70" />
        <Spotlight />
        <OrbitRings className="opacity-30" />
        <GrainOverlay opacity={0.06} />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7 animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Noir × Gold · Est. 2024
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight">
              Crafted digital
              <GoldText className="block">experiences.</GoldText>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              We build, automate and create category-defining products for ambitious brands —
              fusing cinematic design with AI-native engineering.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full shadow-[var(--shadow-gold)] h-12 px-7">
                Begin your project <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-12 px-7 border-border">
                View showreel
              </Button>
            </div>
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {[["120+","Projects"],["48","Clients"],["6","Awards"]].map(([n,l])=>(
                <div key={l}>
                  <div className="text-3xl font-semibold text-primary">{n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 hidden lg:block">
            <TiltCard className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-primary/20 shadow-[var(--shadow-elegant)] lux-border-gradient">
              <img src={city} alt="HCMC night" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Featured</div>
                <div className="text-2xl font-semibold">Saigon, after dark.</div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <MarqueeStrip items={["Arena Esports","SaboHub","AI Newbie","RealEstate.vn","Lumen","Noir Co.","Maison Or","Atelier 88"]} />

      {/* SERVICES */}
      <section id="services" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <span className="text-primary text-xs uppercase tracking-[0.3em]">01 — Services</span>
              <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight max-w-2xl">
                Three disciplines, one obsession.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              From zero-to-launch builds to long-term automation partnerships, we move fast and
              keep the craft uncompromising.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: svcBuild, icon: Code2, n:"01", t:"Build", d:"Full-stack platforms, web apps and storefronts engineered for scale and speed." },
              { img: svcAuto, icon: Bot, n:"02", t:"Automate", d:"AI agents and workflow automations that compound time back into your team." },
              { img: svcCreate, icon: Palette, n:"03", t:"Create", d:"Brand systems, motion and creative direction with cinematic intent." },
            ].map(s=>(
              <article key={s.t} className="group relative overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/50 hover:-translate-y-1 duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.t} className="h-full w-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between text-xs text-muted-foreground uppercase tracking-widest">
                    <span>{s.n}</span>
                    <s.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold">{s.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <DecoBg className="py-32 relative" >
        <section id="work">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <SectionLabel index="02">Selected work</SectionLabel>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">Recent obsessions.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { img: caseArena, t:"Arena Esports", c:"Platform · 2025", a:"md:col-span-2 aspect-[21/9]" },
              { img: caseHub, t:"SaboHub", c:"SaaS · 2024", a:"aspect-[4/3]" },
              { img: caseAI, t:"AI Newbie", c:"Education · 2025", a:"aspect-[4/3]" },
              { img: caseRE, t:"RealEstate.vn", c:"Marketplace · 2025", a:"md:col-span-2 aspect-[21/9]" },
            ].map(p=>(
              <a href="#" key={p.t} className={`group relative overflow-hidden rounded-2xl border border-border ${p.a}`}>
                <img src={p.img} alt={p.t} className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="text-xs uppercase tracking-[0.3em] text-primary">{p.c}</div>
                  <div className="mt-2 text-3xl font-semibold">{p.t}</div>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition">
                    View case study <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        </section>
      </DecoBg>

      {/* LUXURY LIBRARY SHOWCASE */}
      <SilkBg className="py-32 relative">
        <GrainOverlay opacity={0.05} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <SectionLabel index="04">Luxury library</SectionLabel>
          <div className="mt-4 flex items-end justify-between flex-wrap gap-6">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
              Ten <GoldText>backgrounds</GoldText>, infinite atmospheres.
            </h2>
            <p className="text-muted-foreground max-w-sm">
              A curated set of cinematic textures, gradients and animated overlays — drop them
              into any section to instantly elevate the feel.
            </p>
          </div>
          <GoldDivider />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {LUX_BG_GALLERY.map((b, i) => (
              <TiltCard key={b.name} className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-border lux-border-gradient">
                <img src={b.src} alt={b.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-primary">{String(i+1).padStart(2,"0")}</div>
                  <div className="text-sm font-semibold mt-1">{b.name}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{b.hint}</div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Live component demo strip */}
          <div className="mt-20 grid md:grid-cols-3 gap-6">
            <MarbleBg className="aspect-square rounded-2xl border border-border flex items-end p-6">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-primary">Component</div>
                <div className="text-xl font-semibold mt-1">&lt;MarbleBg /&gt;</div>
              </div>
            </MarbleBg>
            <StardustBg className="aspect-square rounded-2xl border border-border flex items-end p-6">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-primary">Component</div>
                <div className="text-xl font-semibold mt-1">&lt;StardustBg /&gt;</div>
              </div>
            </StardustBg>
            <MetalBg className="aspect-square rounded-2xl border border-border flex items-end p-6">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-primary">Component</div>
                <div className="text-xl font-semibold mt-1">&lt;MetalBg /&gt;</div>
              </div>
            </MetalBg>
          </div>

          <VelvetCard className="mt-6">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">Component</div>
            <div className="text-2xl font-semibold mt-1">&lt;VelvetCard /&gt; · luxury surface for testimonials, pricing, quotes</div>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              All 10+ components live in <code className="text-primary">src/components/lux</code>.
              Compose any background with overlays like <code className="text-primary">&lt;Spotlight /&gt;</code>,
              <code className="text-primary"> &lt;OrbitRings /&gt;</code> and <code className="text-primary">&lt;GrainOverlay /&gt;</code>.
            </p>
          </VelvetCard>
        </div>
      </SilkBg>

      {/* ABOUT */}
      <section id="about" className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border">
            <img src={team} alt="Sabo team" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
          </div>
          <div>
            <span className="text-primary text-xs uppercase tracking-[0.3em]">03 — Studio</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              A small studio with an
              <span className="text-primary"> outsized appetite</span> for craft.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We're a tight collective of designers, engineers and AI builders based in Saigon —
              partnering with founders and operators around the world to ship work that feels
              inevitable.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {[
                {icon:Zap,t:"Velocity",d:"Two-week sprints, real artifacts every week."},
                {icon:Star,t:"Craft-first",d:"Pixel-precise, motion-considered, system-driven."},
                {icon:Bot,t:"AI-native",d:"Automation woven through every workflow."},
                {icon:Sparkles,t:"Partnership",d:"We embed deeply, not transactionally."},
              ].map(i=>(
                <div key={i.t} className="flex gap-4">
                  <i.icon className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <div className="font-medium">{i.t}</div>
                    <div className="text-sm text-muted-foreground mt-1">{i.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <StardustBg className="relative overflow-hidden rounded-3xl border border-primary/30 p-12 md:p-20 text-center">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-lux-pulse-glow" />
            <span className="relative text-primary text-xs uppercase tracking-[0.3em]">Let's build</span>
            <h2 className="relative mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
              Have something <GoldText className="italic">remarkable</GoldText> in mind?
            </h2>
            <p className="relative mt-6 text-muted-foreground max-w-xl mx-auto">
              Tell us about your ambition. We reply within one business day with a clear plan.
            </p>
            <div className="relative mt-10 flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="rounded-full h-12 px-8 shadow-[var(--shadow-gold)]">
                <span>hello@sabo.studio</span><ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-border">
                Book a call
              </Button>
            </div>
          </StardustBg>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-6 text-sm text-muted-foreground">
          <div>© 2026 Sabo Studio. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition">Instagram</a>
            <a href="#" className="hover:text-primary transition">Behance</a>
            <a href="#" className="hover:text-primary transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
